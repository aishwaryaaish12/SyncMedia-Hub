import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';

function EmailcampaignPopupForm(){
  return (
    <Box sx={{backgroundColor: 'white', height: 200, display: 'flex', flexDirection: 'row',  alignItems: 'center', flexDirection: 'row', width: 650}}>
      <Box component="img"sx={{ width: '40%',objectFit:'contain' }}src="/Assets/Email-Campaigns-.png" 
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      
      <Typography variant="h6" sx={{ marginTop: 4, fontSize: 18 , color:'black'}}>
         Email Campaign Successfully Executed !!!
      </Typography>
      <Button variant="text" sx={{color:'black', marginTop:5, width:70, marginLeft:25, color:'black',backgroundColor:'#eed9c4'}}>
        <Link to="/EmailCampaign" style={{ textDecoration: 'none', color: 'inherit',fontSize:20}}>OK</Link>
      </Button>
    </Box>

    

    </Box>
  )
}
  


export default EmailcampaignPopupForm;
