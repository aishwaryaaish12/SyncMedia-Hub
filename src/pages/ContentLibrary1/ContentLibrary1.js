import React from 'react'
import { Box, Stack } from '@mui/material';
import ContentLibrary1form from '../../Section/ContentLibrary1/ContentLibrary1form';

function ContentLibrary1() {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#eed9c4'}}
      >
          <ContentLibrary1form />
          </Stack>
  )
}

export default ContentLibrary1
