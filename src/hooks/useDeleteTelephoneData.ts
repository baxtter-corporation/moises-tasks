import axios from "axios";
import { url } from "../utils/endpoint";

export function useDeleteTelephoneData() {
    
    const handleDelete = (id: string) => {
        try {
            async function fetcher() {
                await axios.delete(`${url}telephone/${id}`)
            }
            fetcher()
        } catch (err) {
            console.log(err)
        }
    }

    return {handleDelete}
}