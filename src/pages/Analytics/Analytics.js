import { Box, Stack } from '@mui/material';
import React from 'react';
import AnalyticsForm from '../../Section/Analytics/AnalyticsForm';

function Analytics() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <AnalyticsForm />
    </Stack>
  )
}

export default Analytics