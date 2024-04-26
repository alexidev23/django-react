import axios from 'axios'

const taskApi = axios.create({
  // baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
  baseURL: 'https://django-react-app.onrender.com/tareas/api/v1/tareas/'
})

// GET ALL TASK
// Sintaxis 1
export const getAllTask = () => {
  // return axios.get('http://localhost:8000/tareas/api/v1/tareas/')
  return taskApi.get('/')
}

// POST
// Sintaxis 2
export const createTask = (task) => taskApi.post('/', task)

// PUT TASK
export const getTask = (id) => taskApi.get(`/${id}/`)

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task)

// DELETE
export const deleteTask = (id) => taskApi.delete(`/${id}`)
