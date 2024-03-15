import React from 'react'
import { Box, Stack } from '@mui/material';
import Draftpage from '../../Section/Draft/Draftpage'

function Draft ()  {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>
    <Draftpage/>
    </Stack>
  )
}

export default Draft
