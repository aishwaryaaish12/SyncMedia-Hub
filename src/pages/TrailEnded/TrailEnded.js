import React from 'react'
import TrialEndedPage from '../../Section/TrailEnded/TrailEndedPage'
import { Stack } from '@mui/material'

function TrailEnded  ()  {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{height:"100vh", backgroundColor: '#eed9c4'}}
  >
        <TrialEndedPage />
      </Stack>
  )
}

export default TrailEnded
