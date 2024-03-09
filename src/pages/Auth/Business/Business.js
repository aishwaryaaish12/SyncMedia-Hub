import { Box, Stack } from '@mui/material';
import React from 'react';
import BusinessForm from '../../../Section/Auth/Business/BusinessForm';


function Business() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < BusinessForm/>
    </Stack>
  )
}

export default Business