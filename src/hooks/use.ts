import axios from 'axios'
import { url } from '../utils/endpoint'
import { telephoneType } from '../type/type'

export const useTelephoneData = (endpoint: string, data: telephoneType) => {
    try{
        async function Fetcher() {
            await axios.post(`${url}${endpoint}`, data)
        }
        Fetcher()
    } catch(err) {
        console.log(err)
    }
    console.log(data)
}

export const useUpdateTelephoneData = (endpoint: string, data: telephoneType) => {
    try{
        async function Fetcher() {
            await axios.patch(`${url}${endpoint}`, data)
        }
        Fetcher()
    } catch(err) {
        console.log(err)
    }
    console.log(data)
}