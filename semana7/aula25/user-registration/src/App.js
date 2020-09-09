import React from 'react';
import styled from "styled-components";
import axios from "axios";
import UserListPage from './components/UserListPage';
import RegistrationPage from './components/RegistrationPage';
import logo from "./logo.svg";
// import { ReactComponent } from '*.svg';

const AppContainer = styled.section`
  text-align: center;
`

class App extends React.Component {
  state = {
    currentPage: true
  }
  changePage = () => {
    this.state.currentPage === true ? 
    (this.setState ({currentPage: false})) :
    (this.setState ({currentPage: true}))
    // if (this.state.currentPage === true) {
    //   this.setState ({currentPage: false})
    // } else if (this.state.currentPage === false) {
    //   this.setState ({currentPage: true})
    // }
  };

  render (){
    const currentPage = () => {
      if (this.state.currentPage === true) {
        return <RegistrationPage />
      } else if (this.state.currentPage === false) {
        return <UserListPage />
      }
    }
    return (
      <AppContainer>
        {currentPage()}
        <button onClick= {this.changePage}>Trocar de página</button>
      </AppContainer>
    );
  }
}

export default App;
