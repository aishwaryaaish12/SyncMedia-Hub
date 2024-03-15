import { Box, Stack } from '@mui/material';
import React from 'react';
import AllCampaignsForm from '../../Section/AllCampaigns/AllCampaignsForm'

function AllCampaigns() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <AllCampaignsForm />
    </Stack>
  )
}

export default AllCampaigns