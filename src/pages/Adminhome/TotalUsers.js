import React from 'react'
import { Box, Stack } from '@mui/material';
import TotalUsersForm from '../../Section/Adminhome/TotalUsersForm'
function TotalUsers() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < TotalUsersForm/>
    </Stack>
  )
}

export default TotalUsers
