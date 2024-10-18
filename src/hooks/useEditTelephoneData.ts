import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'
import { telephoneType } from "../type/type";
import { url } from "../utils/endpoint";

export function useUpdateTelephone(id: string | undefined) {
    const [data, setData] = useState<telephoneType>({phone: '',name: '', nickname: '', company: '', email: '', birthday: '', adress: '', city: '', note: '', })

    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

       setData((prevData)=> ({
        ...prevData, [name]:value 
       }))
        
    }

    const  handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        try {
            async function fetcher() {
                await axios.patch(`${url}telephone/${id}`, data)
                setData(data)
            }
            fetcher()
        } catch(err) {
            console.log(err)
        }
    }

    return{
        handleChange,
        handleSubmit, 
        data
    }
}