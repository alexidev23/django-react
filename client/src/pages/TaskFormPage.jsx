import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function TaskFormPage () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const handleTaskSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data)
    } else {
      await createTask(data)
    }

    navigate('/')
  })

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const {
          data: {
            title,
            descripcion,
            finish
          }
        } = await getTask(params.id)
        setValue('title', title)
        setValue('descripcion', descripcion)
        setValue('finish', finish)
      }
    }

    loadTask()
  }, [])

  return (
    <div className='h-[80vh] py-4 flex flex-col items-center'>
      <h2 className='text-4xl font-semibold'>Crear una tarea</h2>
      <form
        onSubmit={handleTaskSubmit}
        className='w-[600px] border border-black py-4 flex flex-col gap-4 rounded-xl mt-4'
      >
        <input
          type='text'
          placeholder='title'
          className='border border-green-900 h-10 w-[400px] px-4 rounded-full outline-none m-auto'
          {...register('title', { required: true })}
        />
        {errors.title && <span className='m-auto'>Completar title</span>}
        <textarea
          className='w-[400px] h-[120px] border border-green-950 rounded-xl resize-none px-4 py-2 m-auto' placeholder='Descripcion'
          {...register('descripcion', { required: true })}
        />
        {errors.description && <span className='m-auto'>El campo debe ser rellenado</span>}
        <label className='mx-24'>
          Finish?
          <input
            type='checkbox'
            className='mx-2'
            {...register('finish', { required: false })}
          />
        </label>

        <button className='border border-blue-400 w-[300px] m-auto py-2 rounded-full bg-teal-500 text-white font-semibold text-xl hover:bg-teal-200 hover:text-gray-500 transition-all'>Guardar</button>
      </form>

      {params.id &&
        <button
          className='border bg-red-600 text-white px-4 py-2 mt-4 rounded-full w-28 hover:bg-red-400 transition-all'
          onClick={async () => {
            const accepted = window.confirm('Estas seguro?')
            if (accepted) {
              await deleteTask(params.id)
              navigate('/')
            }
          }}
        >
          Delete
        </button>}
    </div>
  )
}
