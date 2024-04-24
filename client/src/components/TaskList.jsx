import { useEffect, useState } from 'react'
import { getAllTask } from '../api/task.api'
import { TaskCard } from './TaskCard'

export function TaskList () {
  const [task, setTask] = useState([])

  useEffect(() => {
    async function loadTask () {
      const res = await getAllTask()
      setTask(res.data)
    }

    loadTask()
  }, [])

  return (
    <>
      <div className='border border-black py-2 px-4 flex flex-col gap-2 w-[600px] rounded-xl'>
        {task.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.descripcion}
            finished={task.finish}
          />
        ))}
      </div>
    </>
  )
}
