import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/task' />} />
        <Route path='/task' element={<TaskPage />} />
        <Route path='/taskForm' element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
