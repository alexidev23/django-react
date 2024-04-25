import { Link } from 'react-router-dom'
import { TaskList } from '../components/TaskList'

export function TaskPage () {
  return (
    <div className='h-[80vh] flex flex-col items-center pb-4'>
      <div className='flex w-full justify-around items-center py-4'>
        <h2 className='text-2xl font-semibold text-white'>Todo</h2>
        <Link to='/taskForm' className='bg-lime-300 h-8 w-20 flex justify-center items-center rounded-full text-gray-950 font-semibold'>+ Add</Link>
      </div>
      <TaskList />
    </div>
  )
}
