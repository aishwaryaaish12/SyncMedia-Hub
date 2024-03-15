import React from 'react'
import { Box, Stack } from '@mui/material';
import Createwhatsappcampaignform from '../../Section/Createwhatsappcampaign/Createwhatsappcampaignform';

function Createwhatsappcampaign() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>
    <Createwhatsappcampaignform/>
    </Stack>
  )
}

export default Createwhatsappcampaign
