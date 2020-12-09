import axios from 'axios';

const api = axios.create({
    baseURL: 'http://157.230.9.48:3333'
})

export default api;