import React from 'react'
import { Box, Stack } from '@mui/material';
import Accountpage from '../../Section/Account/Accountpage'

function Account() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < Accountpage/>
    </Stack>
  )
}

export default Account
