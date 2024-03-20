import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';

function WhatsappCampaignTemplateForm(){
  return (
    <Box>
          <Box component='img'
    src='/Assets/Campaign.png'
    sx={{ width: 1000, height: 750,position:'fixed',marginTop:-48,marginLeft:-105,backgroundColor: 'rgba(0, 0, 0, 0.5)',opacity:0.5
  }}/>
          <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white', // Set your box background color
          width: 1000, // Set your desired width
          height: 690, // Set your desired height
        }}

      >
        <Box>
          <Typography variant='h4' sx={{textAlign:'center',marginTop:5}}>TEMPLATE</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',width:400,height:450,marginLeft:35,marginTop:5,backgroundColor:'#4f2c09',borderRadius:2}}>
          <Box>
            <Typography sx={{color:'white',fontSize:25,marginTop:2,textAlign:'center'}}>Subject</Typography>
          </Box>
          <Box component='img'
          src='/Assets/securelogin.png' sx={{width:400,height:200}}/>
          <Box>
            <Typography sx={{color:'white',textAlign:'center',marginTop:3}}> Description</Typography>
          </Box>
          <Button variant="contained" sx={{backgroundColor:'white',color:'#4f2c09',width:150,height:50,marginTop:5,marginLeft:17,'&:hover': {backgroundColor: 'White'}}}>Link</Button>

        </Box>
        <Button variant="contained" sx={{fontSize:25,marginTop:4,marginLeft:55,width:150,'&:hover': {backgroundColor: 'White'},backgroundColor:'#eed9c4',color:'black'}}>
          <Link to='/EmailcampaignPopup'style={{ textDecoration: 'none', color: 'inherit'}}>Send</Link></Button>

      </Box>
    </Box>
  )
}

export default WhatsappCampaignTemplateForm;
