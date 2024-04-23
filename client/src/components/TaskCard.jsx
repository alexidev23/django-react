export function TaskCard ({ title, description, finished }) {
  return (
    <div className={`border border-gray-500 py-2 px-4 ${finished ? 'text-red-500' : 'text-green-600'}`}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
