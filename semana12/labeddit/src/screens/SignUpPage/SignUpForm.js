import React from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";
import { SignUpFormContainer } from "./styled";

const SignUpForm = (props)=>{
    const history = useHistory()
    const [form, handleInputChange] = useForm({username:"", email:"", password:""})

    const onClickSignUp = (event)=>{
        event.preventDefault()
        // const element = document.getElementById("signup_form")
        // const isValid = element.checkValidity()
        // element.reportValidity()
        // if (isValid) {
            signUp(form, history, props.setButtonName)
        // }
    }

    return (
            <SignUpFormContainer onSubmit={onClickSignUp}>
                <input value={form.username} name={"username"} onChange={handleInputChange} placeholder={"Nome"} required autoFocus/>
                <input value={form.email} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} type={"email"} required />
                <input value={form.password} name={"password"} onChange = {handleInputChange} placeholder={"Senha"} type={"password"} required />
                <button>Login</button>
            </SignUpFormContainer>
    )
}

export default SignUpForm;