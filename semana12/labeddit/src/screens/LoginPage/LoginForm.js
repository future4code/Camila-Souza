import React /*, { useState }*/ from "react";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";
import { LoginButton, LoginFormContainer } from "./styled";
import useForm from "../../hooks/useForm.js";

const LoginForm = (props)=>{
    const [form, handleInputChange] = useForm({ email:"", password:""})
    const history = useHistory()
    
    const onClickLogin = (event)=>{
        event.preventDefault()
        // const element = document.getElementById("login_form")
        // const isValid = element.checkValidity()
        // element.preventDefault()
        // if (isValid){
            login(form, history, props.setButtonName)
        // }
    }

    return(
        <LoginFormContainer onSubmit={onClickLogin}>
            <input value={form.email} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} type={"email"} required autoFocus />
            <input value={form.password} name={"password"} onChange = {handleInputChange} placeholder={"Senha"} type={"password"} required />
            <LoginButton>Fazer Login</LoginButton>
        </LoginFormContainer>
    )
}

export default LoginForm;