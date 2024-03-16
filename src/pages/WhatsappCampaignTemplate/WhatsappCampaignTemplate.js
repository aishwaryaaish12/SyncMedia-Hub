import React from 'react'
import { Box, Stack } from '@mui/material';
import WhatsappCampaignTemplateForm from '../../Section/WhatsappCampainTemplate/WhatsappCampaignTemplateForm'

function WhatsappCampainTemplate() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <WhatsappCampaignTemplateForm/>
    </Stack>
  )
}

export default WhatsappCampainTemplate
