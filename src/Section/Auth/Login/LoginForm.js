import React from 'react'
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    // <Box >

      <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#eed9c4'}}>
        <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/securelogin.png"
          alt=" "
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          <Typography variant="h6" sx={{ marginBottom: 4,marginLeft: 18, fontWeight: 'bold',fontSize: 20,color:'black' }}>
            Login
          </Typography>
          <TextField label="Email ID" fullWidth variant="outlined" sx={{ marginBottom: 6 , width: 350, '& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}} 
           InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }} InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }} />
          <TextField label="Password"  type={showPassword ? 'text' : 'password'} fullWidth variant="outlined" sx={{ marginBottom: 3, width: 350,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}} InputProps={{ startAdornment: (<InputAdornment position='start'><LockIcon color='action' /> </InputAdornment>), endAdornment: (<InputAdornment position='end'> <IconButton onClick={togglePasswordVisibility} edge='end'> {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}</IconButton></InputAdornment>),}} InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }}/>
          <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 13, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}>
            <Link to="/ForgotPassword" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>
            Forgot password?
            </Link>
          </Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ color: 'black',borderColor:'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, marginLeft: 10, fontSize: 20 ,backgroundColor:'#eed9c4', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
          <Link to="/Loghome" style={{ textDecoration: 'none', color: 'inherit',color:'black' }}>
           Login
          </Link>    
          </Button>
          <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 7, fontSize: 16, fontWeight: 'bold', cursor: 'pointer',color:'black'  }}>
           <Link to="/SignUp" style={{ textDecoration: 'none', color: 'inherit' }}> 
            Don't have an account? Sign Up
            </Link> 
          </Typography>
        </Box>
      </Box>
    // </Box>


  )
}

export default LoginForm