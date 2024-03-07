import React from 'react'
import { Box, Stack } from '@mui/material';
import Loghomepage from '../../Section/Loghome/Loghomepage'
import LogNavbar from '../../Component/LogNavbar/LogNavbar'

function Loghome(){
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>
      <LogNavbar/>
      <Loghomepage />
    </Stack>
  )
}

export default Loghome
