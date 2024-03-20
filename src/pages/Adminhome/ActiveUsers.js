import React from 'react'
import { Box, Stack } from '@mui/material';
import ActiveUsersForm from '../../Section/Adminhome/ActiveUsersForm'
function ActiveUsers() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < ActiveUsersForm/>
    </Stack>
  )
}

export default ActiveUsers
