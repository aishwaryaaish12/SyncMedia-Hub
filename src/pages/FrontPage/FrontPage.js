import { Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import FrontpageForm from '../../Section/FrontPage/FrontpageForm';

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
      <FrontpageForm />
    </Stack>
  )
}

export default FrontPage