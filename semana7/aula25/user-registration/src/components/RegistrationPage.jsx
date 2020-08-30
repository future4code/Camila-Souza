import React from 'react';
import axios from "axios";
import { baseUrl, axiosAuthorization } from '../constants/axiosCostant';

class RegistrationPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: "",
    };

    onChangeName = (e) => {
        this.setState({nameValue: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({emailValue: e.target.value})
    }

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue,
        }
        axios.post(baseUrl, body, axiosAuthorization) 
        .then (response => {
            this.setState({nameValue: "", emailValue: ""})
        })
        .catch (error => {
            console.log(error.message)
        })
    }

    render () {
        return (
            <div>
            <input value={this.state.nameValue} onChange={this.onChangeName} placeholder="nome"></input>
            <input value={this.state.emailValue} onChange={this.onChangeEmail} placeholder="email"></input>
            <button onClick={this.createUser}>Criar Usuário</button>
            </div>
        );
    }
}

export default RegistrationPage;
