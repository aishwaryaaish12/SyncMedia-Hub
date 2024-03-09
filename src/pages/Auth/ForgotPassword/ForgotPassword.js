import React from 'react'
import { Box, Stack } from '@mui/material';
import Forgotpasswordform from '../../../Section/Auth/Forgotpassword/Forgotpasswordform';

const ForgotPassword = () => {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
  >
  
        <Forgotpasswordform />
      </Stack>
  )
}

export default ForgotPassword
