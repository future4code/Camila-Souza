import React/*, { useState }*/ from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer } from './styled';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from './LoginForm';
import { goToSignUp } from '../../routes/Coordinator';

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  return (
    <LoginContainer>
      <LoginForm setButtonName={props.setButtonName} />
      <button onClick={()=>goToSignUp(history)} type={"submit"} variant={"text"}>Não tem cadastro?! Cliquei aqui!</button>
    </LoginContainer>
  )
  }
export default LoginPage;
