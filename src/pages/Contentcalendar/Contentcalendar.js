import React from 'react'
import { Stack } from '@mui/material';
import Contentcalendarpage from '../../Section/Contentcalendar/Contentcalendarpage';

function Contentcalendar()  {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  > 
        <Contentcalendarpage/>
      </Stack>
  )
}

export default Contentcalendar

