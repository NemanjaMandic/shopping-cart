import Network from "./network";

const BASE_URL = `http://localhost:3001`;

export const getProductsAPI = () => Network.get(`${BASE_URL}/products`);

export const selectBookAPI = id => Network.get(`${BASE_URL}/books/${id}`);

export const submitBookAPI = data => Network.post(`${BASE_URL}/books`, data);

export const updateBookAPI = data => Network.put(`${BASE_URL}/books`, data);
