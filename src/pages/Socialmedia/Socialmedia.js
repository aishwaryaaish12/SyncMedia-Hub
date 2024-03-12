import React from 'react'
import { Box, Stack } from '@mui/material';
import Socialmediapage from '../../Section/Socialmedia/Socialmediapage';

function Socialmedia() {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{height:"100vh",
    backgroundColor: '#eed9c4'}}
  >
      <Socialmediapage />
      </Stack>
  )
}

export default Socialmedia
