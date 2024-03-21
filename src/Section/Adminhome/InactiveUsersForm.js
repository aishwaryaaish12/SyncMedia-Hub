import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function InactiveUsersForm(){
  return (
    <Box>
      <Box>
        <Typography variant='h4' sx={{marginTop:-40,textAlign:'center'}}>Inactive Users</Typography>
      </Box>
      <Button component={Link} to='/Loghome'>
        <ArrowBackIcon sx={{ position: 'fixed', bottom: 25, left: '50%', marginLeft:90,color:'black' }}
/>
      </Button>
    </Box>
  )
}
  


export default InactiveUsersForm;
