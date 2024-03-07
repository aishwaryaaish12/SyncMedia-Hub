import React from 'react'
import { Box, Button, TextField, Typography,FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import { Link } from 'react-router-dom';

const Emailverificationform = () => {
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center' , backgroundColor: '#ABCDCD',gap:10,marginLeft:15}}>
    <Box
      component="img"
      sx={{ width: '20%',objectFit:'contain' }}
      src="/Assets/emailverify.jpg"
      alt="Live from space album cover"
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom: 5,marginTop: 4, fontWeight: 'bold',fontSize: 18, marginLeft:4, color:'#0B6869' }}>
        EMAIL VERIFICATION
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 5 , width: 250}}>
          <OutlinedInput placeholder="Enter your OTP" sx={{fontSize:14}} />
      </FormControl>
      <Button variant="contained" color="primary" fullWidth sx={{ color: '#0B6869',  borderRadius: 20, width: 100, height: 40, marginBottom: 4, marginLeft: 10, fontSize: 14 ,backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/Emailconfirm" style={{ textDecoration: 'none', color: 'inherit'}}>
        Verify
      </Link>  
      </Button>
      <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 7, fontSize: 12, color:'#0B6869' }}> 
       00.29 Resend Confirm code
      </Typography>
    </Box>
  </Box>
// </Box>
  );
};

 

export default Emailverificationform
