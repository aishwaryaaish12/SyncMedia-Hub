import React from 'react'
import Contentcalendarpage from '../../Section/Contentcalendar/Contentcalendarpage'
import { Box, Stack } from '@mui/material';

function Contentcalendar() {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
      >
          <Contentcalendarpage />
          </Stack>
  )
}

export default Contentcalendar
