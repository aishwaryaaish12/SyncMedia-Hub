import React,{useState} from 'react'
import { Box, Button,  TextField, Typography,IconButton, Grid, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';


function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (passwordType) => {
    if (passwordType === 'password') {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (passwordType === 'confirmPassword') {
      setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    // <Box >
<Grid container spacing={2}>
  <Grid item xs={8} md={6}>
      {/* <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around', backgroundColor: '#eed9c4'}}> */}
        {matches&&<Box
          component="img"
          sx={{ width: '90%',objectFit:'contain' }}
          src="/Assets/Signupnew.png"
          alt="Live from space album cover"
        />}
    </Grid>
  <Grid item xs={12} md={6}>

        {/* <Box sx={{ display: 'flex', flexDirection: 'column',textAlign:'center',mt:{xs:10,sm:1,md:10},}}> */}
        
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>

          <Typography variant="h6" sx={{ marginBottom: 5, fontWeight: 'bold',fontSize:{xs:18} ,  color:'black'}}>
            Sign Up
          </Typography>
          </Stack>
          <Container maxWidth="sm">

          <TextField label="Name" fullWidth variant="outlined" sx={{ marginBottom: 6 , '& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}, }} InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }} InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }}  />

          <TextField label="Email ID" fullWidth variant="outlined" sx={{ marginBottom: 6, '& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}} InputProps={{ startAdornment: (<InputAdornment position='start'><EmailIcon color='action' /> </InputAdornment>) }}InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }}  />
          <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 6,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockIcon color='action' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => togglePasswordVisibility('password')} edge='end'>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }} 
        />
        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 3,  '& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockIcon color='action' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => togglePasswordVisibility('confirmPassword')} edge='end'>
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}InputLabelProps={{ 
            sx: { color: 'black','&.Mui-focused':{color:'black'} } }} 
        />
          <Button variant="contained" color="primary" fullWidth sx={{ color: 'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, fontSize: 20 ,backgroundColor:'#eed9c4', transition: 'none', '&:hover': {backgroundColor:'White'},ml:{xs:'6rem'}}}>
          <Link to="/Emailverification" style={{ textDecoration: 'none', color: 'inherit'}}>
          Sign Up
          </Link> 
          </Button>
          <Typography variant="h6" sx={{ marginBottom: 2, fontSize: 16, fontWeight: 'bold', cursor: 'pointer', ml:{xs:'4rem'}, color:'black' }}>
          <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Already have an account? Login
          </Link>  
          </Typography>
          </Container>

        </Grid>
      {/* </Box> */}
   </Grid>


  );
}

export default SignUpForm