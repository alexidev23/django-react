import { TaskList } from '../components/TaskList'

export function TaskPage () {
  return (
    <div className='h-[80vh] flex flex-col items-center py-4'>
      <h2 className='py-4 text-2xl font-semibold'>Todo</h2>
      <TaskList />
    </div>
  )
}
