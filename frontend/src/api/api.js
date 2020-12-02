import axios from 'axios'

const api = axios.create({
    baseURL: "https://tame-wasp-21.loca.lt/api"//'https://localhost:3030/api',
})

export const insertMonster = payload => api.post('/monster', payload)
export const getAllMonsters = () => api.get('/monsters')
export const updateMonsterById = (id, payload) => api.put(`/monster/${id}`, payload)
export const deleteMonsterById = id => api.delete(`/monster/${id}`)
export const getMonsterById = id => api.get(`/monster/${id}`)

export const insertEncounter = payload => api.post('/encounter', payload)
export const getAllEncounters = () => api.get('/encounters')
export const updateEncounterById = (id, payload) => api.put(`/encounter/${id}`, payload)
export const deleteEncounterById = id => api.delete(`/encounter/${id}`)
export const getEncounterById = id => api.get(`/encounter/${id}`)

const apis = {
    insertMonster,
    getAllMonsters,
    updateMonsterById,
    deleteMonsterById,
    getMonsterById,
    
    insertEncounter,
    getAllEncounters,
    updateEncounterById,
    deleteEncounterById,
    getEncounterById
}

export default apis