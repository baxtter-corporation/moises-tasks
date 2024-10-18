import axios from "axios";
import { useState } from "react";
import { telephoneType } from "../type/type";
import { url } from "../utils/endpoint";

export function useDeleteTelephoneData(id: any) {
    const [data, setData] = useState<telephoneType>({phone: '',name: '', nickname: '', company: '', email: '', birthday: '', adress: '', city: '', note: '', })

    const handleDelete = () => {
        try {
            async function fetcher() {
                await axios.delete(`${url}telephone/${id}`)
                return setData(data)
            }
            fetcher()
        } catch (err) {
            console.log(err)
        }
    }

    return {handleDelete}
}