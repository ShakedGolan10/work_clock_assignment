'use client'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Axios from 'axios'

const BASE_URL = '/api/'

let axios = Axios.create({
    withCredentials: false
})



export const axiosService = {
    GET<T>(endpoint: string): Promise<T> {
        return api(endpoint, 'GET')
    },
    POST<T>(endpoint: string, data: string | object): Promise<T> {
        return api(endpoint, 'POST', data)
    },
    PUT<T>(endpoint: string, data: string | object): Promise<T> {
        return api(endpoint, 'PUT', data)
    },
    DELETE<T>(endpoint: string, data: string | object): Promise<T> {
        return api(endpoint, 'DELETE', data)
    }
}
const api = async (endpoint: string, method: string = 'GET', data: any = null) => {
    const url = `${BASE_URL}${endpoint}`
    try {
        const res = await axios({
            url,
            method,
            data: (method === 'GET') ? '' : data,
        })
        return await res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        throw err
    }
}

