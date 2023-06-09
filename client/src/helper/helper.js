import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8090'

export async function registerUser(values){
    try {
        const {data: {message}, status} = await axios.post('/api/register',values)
        console.log(message)        
        return Promise.resolve(message)
    } catch (error) {
        return Promise.reject(error.response.data.message)
    }
}

export async function loginUser(values){
    try {
        const {data} = await axios.post('/api/login',values)
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

