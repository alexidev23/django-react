import axios from 'axios'

const taskApi = axios.create({
  baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
})

// Sintaxis 1
export const getAllTask = () => {
  // return axios.get('http://localhost:8000/tareas/api/v1/tareas/')
  return taskApi.get('/')
}

// Sintaxis 2
export const createTask = (task) => taskApi.post('/', task)

export const deleteTask = (id) => taskApi.delete(`/${id}`)
