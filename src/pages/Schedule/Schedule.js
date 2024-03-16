import React from 'react'
import { Box, Stack } from '@mui/material';
import Schedulepage from '../../Section/Schedule/Schedulepage';

function Schedule  () {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  >
  
        <Schedulepage />
      </Stack>
  )
}

export default Schedule
