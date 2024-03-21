import React from 'react'
import { Box, Stack } from '@mui/material';
import SubscribedUsersForm from '../../Section/Adminhome/SubscribedUsersForm'
function SubscribedUsers() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < SubscribedUsersForm/>
    </Stack>
  )
}

export default SubscribedUsers
