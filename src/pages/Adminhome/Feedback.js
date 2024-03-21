import React from 'react'
import { Box, Stack } from '@mui/material';
import FeedbackForm from '../../Section/Adminhome/FeedbackForm'
function Feedback() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < FeedbackForm/>
    </Stack>
  )
}

export default Feedback
