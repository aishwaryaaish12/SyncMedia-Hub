import React from 'react'
import { Box, Stack } from '@mui/material';
import Navbar from '../../Component/Navbar/Navbar';
import Contactpage from '../../Section/Contact/Contactpage';

function Contact(){
  return (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
      >
          <Navbar/>
          <Contactpage />
          </Stack>
  )
}

export default Contact
