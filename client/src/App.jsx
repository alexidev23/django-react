import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Toaster } from 'react-hot-toast'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/taskForm' element={<TaskFormPage />} />
        <Route path='/task/:id' element={<TaskFormPage />} />
      </Routes>
      <Toaster
        position='bottom-right'
      />
    </BrowserRouter>
  )
}

export default App
