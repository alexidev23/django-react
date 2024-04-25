import { Link } from 'react-router-dom'
import { TaskList } from '../components/TaskList'

export function TaskPage () {
  return (
    <div className='h-[80vh] flex flex-col items-center pb-4'>
      <div className='flex w-full justify-around sm:justify-between items-center pt-10 pb-6 sm:w-[600px]'>
        <h2 className='text-2xl font-semibold text-white sm:ml-10'>Todo</h2>
        <Link to='/taskForm' className='bg-lime-300 h-8 w-20 flex justify-center items-center rounded-full text-gray-950 font-semibold sm:mr-10'>+ Add</Link>
      </div>
      <TaskList />
    </div>
  )
}
