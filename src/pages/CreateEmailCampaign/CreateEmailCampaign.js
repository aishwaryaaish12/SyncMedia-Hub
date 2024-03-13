import React from 'react'
import { Box, Stack } from '@mui/material';
import CreateEmailCampainForm from '../../Section/CreateEmailCampaign/CreateEmailCampaignForm'

function CreateEmailCampaign() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <CreateEmailCampainForm/>
    </Stack>
  )
}

export default CreateEmailCampaign
