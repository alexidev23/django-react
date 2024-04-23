import { Link } from 'react-router-dom'

export function Navbar () {
  return (
    <div className='w-full h-14 bg-lime-300 flex justify-between items-center'>
      <Link to='/'>
        <h1 className='ml-6 font-semibold text-xl'>Todo App</h1>
      </Link>
      <nav>
        <Link to='/taskForm' className='border py-1 px-2 flex items-center justify-center bg-gray-400 mr-6'>Create Task</Link>
      </nav>
    </div>
  )
}
