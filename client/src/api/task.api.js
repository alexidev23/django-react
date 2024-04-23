import axios from 'axios'

export const getAllTask = () => {
  return axios.get('http://localhost:8000/tareas/api/v1/tareas/')
}
