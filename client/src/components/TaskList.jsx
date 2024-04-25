import { useEffect, useState } from 'react'
import { deleteTask, getAllTask } from '../api/task.api'
import { TaskCard } from './TaskCard'
// import { useNavigate } from 'react-router-dom'

export function TaskList () {
  const [task, setTask] = useState([])
  // const navigate = useNavigate()

  useEffect(() => {
    async function loadTask () {
      const res = await getAllTask()
      setTask(res.data)
    }

    loadTask()
  }, [])

  const handleDeleteTask = async (taskId) => {
    const accepted = window.confirm('¿Estás seguro?')
    if (accepted) {
      await deleteTask(taskId)
      setTask(prevTasks => prevTasks.filter(task => task.id !== taskId))
    }
  }

  return (
    <>
      <div className='py-2 flex flex-col gap-2 w-full px-4 sm:w-[600px]'>
        {task.map(task => (
          <div key={task.id} className='flex items-center justify-between border-b w-full'>
            <TaskCard
              id={task.id}
              title={task.title}
              finished={task.finish}
            />
            <button
              className='pr-2'
              onClick={() => handleDeleteTask(task.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
