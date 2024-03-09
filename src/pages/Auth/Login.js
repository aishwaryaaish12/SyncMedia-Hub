import { Box, Stack } from '@mui/material';
import React from 'react';
import LoginForm from '../../Section/Auth/Login/LoginForm';

function Login() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>

      <LoginForm />
    </Stack>
  )
}

export default Login
