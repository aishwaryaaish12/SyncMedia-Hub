import React from 'react'
import { Box, Stack } from '@mui/material';
import AdminhomeForm from '../../Section/Adminhome/AdminhomeForm'

function Adminhome() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < AdminhomeForm/>
    </Stack>
  )
}

export default Adminhome
