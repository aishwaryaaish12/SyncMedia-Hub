import React from 'react'
import { Box, Stack } from '@mui/material';
import WhatsappallcampaignForm from '../../Section/Whatsappallcampaign/WhatsappallcampaignForm'

function Whatsappallcampaign() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <WhatsappallcampaignForm/>
    </Stack>
  )
}

export default Whatsappallcampaign
