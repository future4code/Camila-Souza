import axios from "axios";
import { BASE_URL } from "../Constants/URLs";

export const DeleteTask = (event)=>{
    axios.delete(`${BASE_URL}/taskid`).then((response)=>{
        console.log(response.data)
})}