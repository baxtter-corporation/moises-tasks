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

        const handleDelete = async (id: string) => {
            try {
                await axios.delete(`${url}telephone/${id}`);
                setDataList((prevlist: any) => dataList?.filter((item: any) => item.id !== id))
            } catch (err) {
                console.log(err)
            }
        }
        
        return {dataList, handleDelete}
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