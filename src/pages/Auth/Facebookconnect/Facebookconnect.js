import React from 'react'
import { Box, Stack } from '@mui/material';
import FacebookconnectForm from '../../../Section/Auth/Facebookconnect/FacebookconnectForm';

function Facebookconnect(){
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <FacebookconnectForm />
    </Stack>
  )
}

export default Facebookconnect
