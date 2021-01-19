import React from 'react';
import { Container } from '@material-ui/core';
import LoginForm from '../loginform/loginForm';

function LoginPage({ setLogIn }) {
  return (
    <>
      <Container maxWidth="xl">
        <LoginForm setLogIn={setLogIn}></LoginForm>
      </Container>
    </>
  );
}

export default LoginPage;
