import React from 'react';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SignUpForm';
import { SignUpContainer } from './styled';

const SignUpPage = (props)=> {
  useUnprotectedPage()
  
  return (
    <SignUpContainer>
      <SignUpForm setButtonName={props.setButtonName} />
    </SignUpContainer>
  );
}

export default SignUpPage;
