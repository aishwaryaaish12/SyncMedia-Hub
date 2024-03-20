import React from 'react'
import { Box, Stack } from '@mui/material';
import DashboardForm from '../../Section/Adminhome/DashboardForm'
function Dashboard() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < DashboardForm/>
    </Stack>
  )
}

export default Dashboard
