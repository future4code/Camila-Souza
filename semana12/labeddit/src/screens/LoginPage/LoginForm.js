import React /*, { useState }*/ from "react";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";
import { LoginFormContainer } from "./styled";
import useForm from "../../hooks/useForm.js";

const LoginForm = (props)=>{
    const [form, handleInputChange] = useForm({ email:"", password:""})
    const history = useHistory()
    
    const onClickLogin = (event)=>{
        event.preventDefault()
        const element = document.getElementById("login_form")
        const isValid = element.checkValidity()
        element.preventDefault()
        if (isValid){
            login(form, history, props.setButtonName)
        }
    }

    return(
        <form>
            <LoginFormContainer>
                <input value={form.email} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} type={"email"} required autoFocus />
                <input value={form.password} name={"password"} onChange = {handleInputChange} placeholder={"Senha"} type={"password"} required />
                <button onClick={onClickLogin} type={"submit"}>Login</button>
            </LoginFormContainer>
        </form>
    )
}

export default LoginForm;