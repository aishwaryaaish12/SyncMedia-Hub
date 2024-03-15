import React from 'react'
import { Box, Stack } from '@mui/material';
import EmailcampaignPopupForm from '../../Section/EmailcampaignPopup/EmailcampaignPopupForm'

function EmailcampaignPopup() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <EmailcampaignPopupForm/>
    </Stack>
  )
}

export default EmailcampaignPopup
