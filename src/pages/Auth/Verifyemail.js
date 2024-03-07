import React from 'react'
import { Box, Stack } from '@mui/material';
import Verifyemailform from '../../Section/Auth/Verifyemail/Verifyemailform';

const Verifyemail = () => {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>

      <Verifyemailform />
    </Stack>
    
      
  )
}

export default Verifyemail
