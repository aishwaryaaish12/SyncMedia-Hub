import React from 'react'
import { Box, Stack } from '@mui/material';
import ContentLibrary2form from '../../Section/ContentLibrary2/ContentLibrary2form';

function ContentLibrary2()  {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{height:"100vh", backgroundColor: '#eed9c4'}}
      >
          <ContentLibrary2form />
          </Stack>
  )
}

export default ContentLibrary2
