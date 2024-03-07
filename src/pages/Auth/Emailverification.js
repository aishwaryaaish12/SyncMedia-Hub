import React from 'react'
import { Box, Stack } from '@mui/material';
import Emailverificationform from '../../Section/Auth/Emailverification/Emailverificationform';

function Emailverification(){
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <Emailverificationform />
    </Stack>
  )
}

export default Emailverification
