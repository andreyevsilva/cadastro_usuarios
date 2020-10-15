import axios from 'axios'

const baseURL = 'http://localhost:3001'

const http = axios.create({baseURL}) //url da API

export default http