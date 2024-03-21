import React from 'react'
import { Box, Stack } from '@mui/material';
import BlockedUsersForm from '../../Section/Adminhome/BlockedUsersForm'
function BlockedUsers() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < BlockedUsersForm/>
    </Stack>
  )
}

export default BlockedUsers
