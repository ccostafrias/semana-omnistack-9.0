import axios from 'axios'

// Verificar se o IP da máquina mudou
const api = axios.create({
    baseURL: 'http://192.168.0.10:3333'
})

export default api