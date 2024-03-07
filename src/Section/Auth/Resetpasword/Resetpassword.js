import React from 'react'
import { Box, Button, Typography,FormControl, OutlinedInput} from '@mui/material';
import { Link } from 'react-router-dom';

function Resetpasswordform(){
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center' , backgroundColor: '#ABCDCD',gap:8,marginLeft:15}}>
    <Box
      component="img"
      sx={{ width: '20%',objectFit:'contain' }}
      src="/Assets/emailverify.jpg"
      alt="Live from space album cover"
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom: 2,marginTop: 4, fontWeight: 'bold',fontSize: 24 ,marginLeft:5}}>
        RESET PASSWORD
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 5 , width: 300}}>
          <OutlinedInput placeholder="Enter new password" sx={{fontSize:14, textAlign:'center'}} />
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 5 , width: 300}}>
          <OutlinedInput placeholder="Confirm the password" sx={{fontSize:14, textAlign:'center'}} />
      </FormControl>
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black', width: 200,borderRadius: 20, height: 40, marginBottom: 2, marginLeft: 7, fontSize: 14 ,backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit'}}>
      Confirm
      </Link>
      </Button>
    </Box>
  </Box>
// </Box>
  )
}

export default Resetpasswordform