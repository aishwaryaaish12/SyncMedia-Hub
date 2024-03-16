import React from 'react'
import { Box, Stack } from '@mui/material';
import Whatsappcampaignpage from '../../Section/Whatsappcampaign/Whatsappcampaignpage';

function Whatsappcampaign  () {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4', overflow:'hidden'}}
>
    <Whatsappcampaignpage/>
    </Stack>
  )
}

export default Whatsappcampaign
