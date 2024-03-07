import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ContactUsForm() {
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center',gap: '1', backgroundColor: '#eed9c4'}}>
    <Box
      component="img"
      sx={{ width: '40%',objectFit:'contain' }}
      src="/Assets/contactusnew.png"
      alt=""
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom: 4,fontWeight: 'bold',fontSize: 20, marginTop:8, marginLeft:13 }}>
        CONTACT US
      </Typography>
      <TextField label="Name" fullWidth variant="outlined" sx={{ marginBottom: 3, width: 350}} />
      <TextField label="Email ID"  fullWidth variant="outlined" sx={{ marginBottom: 3, width: 350}}  />
      <TextField label="Phone Number"  fullWidth multline rows={4} variant="outlined" sx={{ marginBottom: 3, width: 350}}  />
      <TextField label="Message" id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 350}} />
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, marginLeft: 10, fontSize: 20 ,backgroundColor:'#eed9c4', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}> 
        Submit
      </Link>
      </Button>
    </Box>
  </Box>
// </Box>
  )
}

export default ContactUsForm
