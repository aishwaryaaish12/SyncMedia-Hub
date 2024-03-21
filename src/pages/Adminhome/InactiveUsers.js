import React from 'react'
import { Box, Stack } from '@mui/material';
import InactiveUsersForm from '../../Section/Adminhome/InactiveUsersForm'
function InactiveUsers() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < InactiveUsersForm/>
    </Stack>
  )
}

export default InactiveUsers
