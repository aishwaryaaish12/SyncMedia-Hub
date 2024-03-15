import React from 'react'
import { Box, Stack } from '@mui/material';
import Updateform from '../../Section/Update/Updateform';

function Update (){
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  >
  
        < Updateform/>
      </Stack>
  )
}

export default Update
