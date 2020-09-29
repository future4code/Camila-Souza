import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToPostsFeed } from "../routes/Coordinator";

export const login = (body, history, setButtonName) => {
    axios.post(`${BASE_URL}/login`, body)
        .then ((response) => {
            localStorage.setItem("token", response.data.token)
            goToPostsFeed(history)
            setButtonName("Logout")
        })
        .catch ((error)=>{
            alert("Falha no Login, tente novamente")
        })
}

export const signUp = (body, history, setButtonName) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToPostsFeed(history)
        setButtonName("Logout")
    })
    .catch((error)=>{
        alert("Falha no cadastro, tente novamente")
    })
}