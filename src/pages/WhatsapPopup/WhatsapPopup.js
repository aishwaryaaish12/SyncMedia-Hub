import React from 'react'
import { Box, Stack } from '@mui/material';
import WhatsapPopupForm from '../../Section/WhatsapPopup/WhatsapPopupForm'

function WhatsapPopup() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <WhatsapPopupForm/>
    </Stack>
  )
}

export default WhatsapPopup
