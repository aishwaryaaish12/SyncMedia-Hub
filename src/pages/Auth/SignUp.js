import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import SignUpForm from '../../Section/Auth/SignUp/SignUpForm';

function SignUp() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>
<Navbar/>

      <SignUpForm />
    </Stack>
  )
}

export default SignUp