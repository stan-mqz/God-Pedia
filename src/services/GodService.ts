import axios from "axios"
import { godsSchema } from "../types/types"

export const getAllGods = async () => {
   
    try {
        const URL = import.meta.env.VITE_URL
        const {data} = await axios(URL)
        const result = godsSchema.safeParse(data)

        if (result.success) {
            return result.data
        }

        


    } catch (error) {
        console.log(error)
    }
}   