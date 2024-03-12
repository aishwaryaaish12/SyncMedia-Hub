import React from 'react'
import { Box, Button, Typography,FormControl, OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom';

const Emailverificationform = () => {
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center' , backgroundColor: '#eed9c4',gap:10,marginLeft:15}}>
    <Box
      component="img"
      sx={{ width: '20%',objectFit:'contain' }}
      src="/Assets/emailverify.jpg"
      alt="Live from space album cover"
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom: 5,marginTop: 4, fontWeight: 'bold',fontSize: 18, marginLeft:4, color:'black' }}>
        EMAIL VERIFICATION
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 5 , width: 250}}>
          <OutlinedInput placeholder="Enter your OTP" sx={{fontSize:14}} />
      </FormControl>
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black',  borderRadius: 20, width: 100, height: 40, marginBottom: 4, marginLeft: 10, fontSize: 14 ,backgroundColor:'#eed9c4', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/Emailconfirm" style={{ textDecoration: 'none', color: 'inherit'}}>
        Verify
      </Link>  
      </Button>
      <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 7, fontSize: 12, color:'black' }}> 
       00.29 Resend Confirm code
      </Typography>
    </Box>
  </Box>
// </Box>
  );
};

 

export default Emailverificationform