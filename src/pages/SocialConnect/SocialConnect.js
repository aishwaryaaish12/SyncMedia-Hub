import { Box, Stack } from '@mui/material';
import React from 'react';
import SocialConnectForm from '../../Section/SocialConnect/SocialConnectForm';

function SocialConnect() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <SocialConnectForm />
    </Stack>
  )
}

export default SocialConnect