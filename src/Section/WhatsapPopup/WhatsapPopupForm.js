import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';

function EmailcampaignPopupForm(){
  return (
    <Box sx={{backgroundColor: 'white', height: 250, display: 'flex', flexDirection: 'row',  alignItems: 'center', flexDirection: 'row', width: 700}}>
      <Box component="img"sx={{ width: '30%',objectFit:'contain' }}src="/Assets/WhatsappMarketing.png" 
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      
      <Typography variant="h6" sx={{ marginTop: 4, fontSize: 18 , color:'black',marginLeft:5}}>
         Whatsapp Campaign Successfully Executed !!!
      </Typography>
      <Button variant="Contained" sx={{color:'black', marginTop:5, width:65, marginLeft:27, color:'black',backgroundColor:'#eed9c4'}}>
        <Link to="/Whatsappcampaign" style={{ textDecoration: 'none', color: 'inherit',fontSize:20}}>OK</Link>
      </Button>
    </Box>

    

    </Box>
  )
}
  


export default EmailcampaignPopupForm;
