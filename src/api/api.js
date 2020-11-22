import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:3030/api',
})

export const insertMonster = payload => api.post('/monster', payload)
export const getAllMonsters = () => api.get('/monsters')
export const updateMonsterById = (id, payload) => api.put(`/monster/${id}`, payload)
export const deleteMonsterById = id => api.delete(`/movie/${id}`)
export const getMonsterById = id => api.get(`/monster/${id}`)

const apis = {
    insertMonster,
    getAllMonsters,
    updateMonsterById,
    deleteMonsterById,
    getMonsterById
}

export default apis