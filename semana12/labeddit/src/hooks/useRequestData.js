import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/urls";

const useRequestData = (initialData, endpoint) => {
    const [data, setData] = useState(initialData)

    useEffect(()=>{
        
        axios.get(`${BASE_URL}${endpoint}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        )
        .then((response)=>{
            setData(response.data.posts)
        })
        .catch((error)=>{
            console.log(error)
            alert("Opa! Ocorreu um erro! Por favor, tente novamente")
        })
    }, [endpoint])
    return (data)
}
export default useRequestData;