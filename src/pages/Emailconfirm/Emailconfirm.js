import React from 'react'
import { Box, Stack } from '@mui/material';
import Emailconfirmpage from '../../Section/Emailconfirm/Emailconfirmpage'

const Emailconfirm = () => {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      <Emailconfirmpage />
    </Stack>
  )
}

export default Emailconfirm
