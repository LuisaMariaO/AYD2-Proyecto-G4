import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:9000',
        timeout: 200000,
        headers:{
            'Content-Type':'application/json'
        },
        maxContentLength: 2000000,
    }
)

export const login = async(user, password) =>{
    const { data } = await instance.post("/admin/login", { usuario: user, password: password})
    return data
}

export const auth = async(id, auth) =>{
    const { data } = await instance.post("/admin/auth", {id: id, auth: auth})
    return data
}

export const obtenerInformacionAdmin = async(userId) =>{
    const { data } = await instance.get("/admin/obtenerDatos", {id: userId})
    return data
}