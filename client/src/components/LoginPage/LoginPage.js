import React from 'react';
import { Grid } from '@material-ui/core';
import LoginForm from '../loginform/loginForm';
import UploadForm from '../UploadForm/UploadForm';

function LoginPage() {
  return (
    <>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <UploadForm></UploadForm>
          {/* <Projects cards={cards}></Projects> */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <LoginForm></LoginForm>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
