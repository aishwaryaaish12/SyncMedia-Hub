import React from 'react'
import { Box, Stack } from '@mui/material';
import Formcompletepage from '../../Section/Formcomplete/Formcompletepage';

function Formcomplete() {
  return (
    
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
      >
          <Formcompletepage />
          </Stack>
  )
}

export default Formcomplete
