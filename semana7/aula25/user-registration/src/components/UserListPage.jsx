import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosAuthorization } from '../constants/axiosCostant';

const Delete = styled.span`
    padding-left: 3px;
`

class UserListPage extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(baseUrl, axiosAuthorization)
        .then(response => {
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    deleteUser = (userId) => {
        axios.delete(`${baseUrl}/${userId}`, axiosAuthorization)
        .then (response => {
            this.getUsers()
        })
        .catch (error => {
            console.log(error.message)
        })
    }

    render () {
        return (
            <div>
            {this.state.users.map(user => {
                return (
                    <p key={user.id}>
                        {user.name}
                        <Delete onClick={() => this.deleteUser(user.id)}>⛔</Delete>
                    </p>
                )
            })}
            </div>
        );
    }
}

export default UserListPage;
