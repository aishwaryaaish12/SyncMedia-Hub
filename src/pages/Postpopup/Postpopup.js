import React from 'react'
import { Box, Stack } from '@mui/material';
import Postpopupmsg from '../../Section/Postpopup/Postpopupmsg';

function Postpopup () {
  return (
      <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  >
  
        <Postpopupmsg />
      </Stack>
  )
}

export default Postpopup
