import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

function Subscriptionpage() {
  return (
    <Box>
      <Typography variant='h3' sx={{ marginLeft: 14 }}>Pick your Plan</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: 450,
          height: 400,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: 4,
          margin: '20px auto',
          gap:2
        }}
      >
        <Typography variant='h5'>SyncMedia Hub Pro</Typography>
        <Typography variant='subtitle1'>For Perfect users</Typography>
        <Typography variant='h4'>$100</Typography>
        <Typography variant='body1'>/Year</Typography>
        <Typography variant='body2' color='text.secondary'>14-day free trial included!</Typography>
        <Button variant='contained' color='primary'sx={{fontSize:20,backgroundColor:'#eed9c4',color:'black',marginTop:4,width:250,borderRadius:3,height:70,textAlign:'center','&:hover': { backgroundColor: 'white',},}}>
        <Link to="/Signup"style={{ textDecoration: 'none', color: 'inherit' }}>start free trial</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Subscriptionpage;
