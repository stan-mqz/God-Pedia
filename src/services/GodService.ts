import axios from "axios"

export const getAllGods = async () => {
   
    try {
        const URL = import.meta.env.VITE_URL
        const {data} = await axios(URL)
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}   