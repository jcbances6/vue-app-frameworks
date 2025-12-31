import api from './api'

const CATEGORIES_URL = '/categories'

export const getCategories = () => api.get(CATEGORIES_URL)
export const getCategory = (id) => api.get(`${CATEGORIES_URL}/${id}`)
export const createCategory = (data) => api.post(CATEGORIES_URL, data)
export const updateCategory = (id, data) => api.put(`${CATEGORIES_URL}/${id}`, data)
