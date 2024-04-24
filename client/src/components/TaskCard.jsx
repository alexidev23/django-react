import { useNavigate } from 'react-router-dom'

export function TaskCard ({ id, title, description, finished }) {
  const navigate = useNavigate()

  return (
    <div
      className={`border border-gray-500 py-2 px-4 rounded-lg ${finished ? 'text-red-500' : 'text-green-600'}`}
      onClick={() => {
        navigate(`/task/${id}`)
      }}
    >
      <p className='font-semibold text-xl'>{title}</p>
      <p className='text-sm text-black'>{description}</p>
    </div>
  )
}
