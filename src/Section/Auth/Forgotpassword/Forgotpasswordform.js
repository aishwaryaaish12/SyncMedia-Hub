import React from 'react'
import { Box, Button, TextField, Typography,FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import { Link } from 'react-router-dom';


const Forgotpasswordform = () => {
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center' , backgroundColor: '#ABCDCD'}}>
    <Box
      component="img"
      sx={{ width: '20%',objectFit:'contain' }}
      src="/Assets/forgotpassword.png"
      alt="Live from space album cover"
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom:3, fontWeight: 'bold',fontSize: 18, marginLeft:20 }}>
        ForgotPassword ?
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold',fontSize: 18, marginLeft:4}}>
        Please provide your Email address to receive a confirmation code for setting a new password.
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 5 , width: 400, marginLeft:5}}>
          <OutlinedInput placeholder="Enter your Email ID" sx={{fontSize:14}} />
      </FormControl>
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black',  borderRadius: 20, width: 200, height: 40, marginBottom: 4, marginLeft: 18, fontSize: 14 ,backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/Verifyemail" style={{ textDecoration: 'none', color: 'inherit'}}>
        Confirm mail
      </Link>  
      </Button>
    </Box>
  </Box>
// </Box>
  )
}

export default Forgotpasswordform