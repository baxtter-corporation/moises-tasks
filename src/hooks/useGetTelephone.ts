import axios from 'axios'
import { url } from '../utils/endpoint'
import { useEffect, useState } from 'react'

export function useGetTelephone(endpoint: string) {
        const [dataList, setDataList] = useState<any[]>([]);
        
        useEffect(() => {
            
            try{
                async function fetcher() {
                    const {data} = await axios.get(`${url}${endpoint}`)

                    setDataList(data)

                }

                fetcher()
            } catch(err) {
                console.log(err)
            }
        }, [])
        
        return {dataList}
}

export function useGetTelephoneTodEdit(endpoint: string) {
    const [dataList, setDataList] = useState<any>({});
    
    useEffect(() => {
        
        try{
            async function fetcher() {
                const {data} = await axios.patch(`${url}${endpoint}`)

                setDataList(data)

            }

            fetcher()
        } catch(err) {
            console.log(err)
        }
    }, [])
    
    return {dataList}
}