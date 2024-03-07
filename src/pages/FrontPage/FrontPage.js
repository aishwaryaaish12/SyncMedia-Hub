import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import FrontPageForm from "../../Section/Frontpage/FrontpageForm"

function FrontPage() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>
<Navbar/>

      <FrontPageForm />
    </Stack>
  )
}

export default FrontPage