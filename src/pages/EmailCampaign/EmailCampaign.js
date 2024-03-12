import React from 'react'
import { Box, Stack } from '@mui/material';
import EmailCampainForm from '../../Section/EmailCampaign/EmailCampaignForm'

function EmailCampaign() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <EmailCampainForm/>
    </Stack>
  )
}

export default EmailCampaign
