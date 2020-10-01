import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, LogoLogin, SignUpButton } from './styled';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import LoginForm from './LoginForm';
import { goToSignUp } from '../../routes/Coordinator';
import logoLabEddit from "../../assets/Images/logoLabEddit.png";

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  return (
    <LoginContainer>
      <LogoLogin src={logoLabEddit} />
      <LoginForm setButtonName={props.setButtonName} />
      <SignUpButton onClick={()=>goToSignUp(history)} type={"submit"} variant={"text"}>Não tem cadastro?! Clique aqui!</SignUpButton>
    </LoginContainer>
  )
  }
export default LoginPage;
