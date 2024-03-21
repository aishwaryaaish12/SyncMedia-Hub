import React from 'react'
import { Box, Stack } from '@mui/material';
import EditProfileForm from '../../Section/EditProfile/EditProfileForm'

function EditProfile() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#eed9c4'}}
>

      < EditProfileForm/>
    </Stack>
  )
}

export default EditProfile;
