import React from 'react'
import { Box, Stack } from '@mui/material';
import Resetpasswordform from '../../../Section/Auth/Resetpasword/Resetpassword';

function ResetPassword() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>

      <Resetpasswordform />
    </Stack>
    
  )
}

export default ResetPassword
