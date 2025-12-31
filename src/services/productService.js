import api from './api'

const PRODUCTS_URL = '/products'

export const getProducts = () => api.get(PRODUCTS_URL)
export const getProduct = (id) => api.get(`${PRODUCTS_URL}/${id}`)
export const createProduct = (data) => api.post(PRODUCTS_URL, data)
export const updateProduct = (id, data) => api.put(`${PRODUCTS_URL}/${id}`, data)
