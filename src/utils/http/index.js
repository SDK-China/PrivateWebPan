import axios from 'axios'
const baseURL = "http://localhost:8080/api-dev/v1"

const request = axios.create({
    baseURL
})

export default request