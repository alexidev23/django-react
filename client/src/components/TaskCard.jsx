import { useNavigate } from 'react-router-dom'
import '../index.css'

export function TaskCard ({ id, title, finished }) {
  const navigate = useNavigate()

  return (
    <div
      className='py-2 pl-2 pr-3 flex items-center justify-center'
      onClick={() => {
        navigate(`/task/${id}`)
      }}
    >
      <p className={`font-semibold text-xl text-balance sm:text-xl ${finished ? 'tachado' : 'text-white'}`}>{title}</p>
    </div>
  )
}
