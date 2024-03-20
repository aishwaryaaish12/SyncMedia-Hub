import React from 'react'
import Subscriptionpage from '../../Section/Subscription/Subscriptionpage'
import { Stack } from '@mui/material'

function Subscription(){
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  >
        <Subscriptionpage />
      </Stack>
  )
}

export default Subscription
