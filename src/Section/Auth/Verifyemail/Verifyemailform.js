import React from 'react'
import { Box, Button, Typography,FormControl, OutlinedInput} from '@mui/material';
import { Link } from 'react-router-dom';

function Verifyemailform() {
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
      <Typography variant="h6" sx={{ marginBottom: 2,marginTop: 4, fontWeight: 'bold',fontSize: 24 }}>
        Verify your Email Address
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 5, fontSize: 18, marginLeft:6 }}>
        Enter the verification code
      </Typography>
      <Box sx={{display:'flex', flexDirection:'row',gap:3, marginLeft:1, marginBottom:3}}>
      <FormControl fullWidth variant="outlined" sx={{width: 55}}>
          <OutlinedInput  sx={{fontSize:14, textAlign:'center', padding:1}} inputProps={{ maxLength: 1 }}/>
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{width: 55}}>
          <OutlinedInput  sx={{fontSize:14, textAlign:'center', padding:1}} inputProps={{ maxLength: 1 }} />
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{width: 55}}>
          <OutlinedInput  sx={{fontSize:14, textAlign:'center', padding:1}} inputProps={{ maxLength: 1 }}/>
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{width: 55}}>
          <OutlinedInput  sx={{fontSize:14, textAlign:'center', padding:1}} inputProps={{ maxLength: 1 }}/>
      </FormControl>
      </Box>
      <Typography variant="h6" sx={{ marginBottom: 3, marginLeft: 10, fontSize: 12 }}> 
       00.29 Resend Confirm code
      </Typography>
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black', width: 300, height: 40, marginBottom: 4, marginLeft: 1, fontSize: 14 ,backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/ResetPassword" style={{ textDecoration: 'none', color: 'inherit'}}>
        Confirm the code
      </Link>  
      </Button>
      
    </Box>
  </Box>
// </Box>
  );
}

export default Verifyemailform
