import { ChangeEvent, FormEvent, useState } from "react";
import { useTelephoneData } from "./use";
import { telephoneType } from "../type/type";
import { useGetTelephone } from "./useGetTelephone";
import axios from "axios";
import { url } from "../utils/endpoint";


export function useCreateTelephone() {
    const [data, setData] = useState<telephoneType>({phone: '',name: '', nickname: '', company: '', email: '', birthday: '', adress: '', city: '', note: '', })

    useGetTelephone('telephone')

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

       setData((prevData)=> ({
        ...prevData, [name]:value 
       }))
        
        console.log(data)
    }

    const  handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        
        useTelephoneData('telephone', data)
    }

    

    return{
        handleChange,
        handleSubmit, 
        data
    }
}