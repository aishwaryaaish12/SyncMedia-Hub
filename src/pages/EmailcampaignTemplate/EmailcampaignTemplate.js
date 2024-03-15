import React from 'react'
import { Box, Stack } from '@mui/material';
import EmailcampaignTemplateForm from '../../Section/EmailcampaignTemplate/EmailcampaignTemplateForm'

function EmailcampaignTemplate() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <EmailcampaignTemplateForm/>
    </Stack>
  )
}

export default EmailcampaignTemplate
