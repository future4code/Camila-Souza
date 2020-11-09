import axios from "axios";
import {BASE_URL} from "../constants/urls";
import { goToPostsFeed } from "../routes/Coordinator";

export const createPost = (body, history) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response)=>{
        alert("Post adicionado com sucesso")
        goToPostsFeed(history)
    })
    .catch((error)=>{
        console.log(error)
        alert("Falha na postagem, tente novamente")
    })
}