import React from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";
import { SignUpFormContainer } from "./styled";

const SignUpForm = (props)=>{
    const history = useHistory()
    const [form, handleInputChange] = useForm({name:"", email:"", password:""})

    const onClickSignUp = (event)=>{
        event.preventDefault()
        const element = document.getElementById("signup_form")
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
            signUp(form, history, props.setButtonName)
        }}

    return (
        <form>
            <SignUpFormContainer>
                <input value={form.name} name={"name"} onChange={handleInputChange} placeholder={"Nome"} required autoFocus/>
                <input value={form.email} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} type={"email"} required />
                <input value={form.password} name={"password"} onChange = {handleInputChange} placeholder={"Senha"} type={"password"} required />
                <button onClick={onClickSignUp} type={"submit"}>Login</button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm;