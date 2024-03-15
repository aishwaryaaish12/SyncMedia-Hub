import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';

function EmailcampaignTemplateForm(){
  return (
    <Box>
          <Box component='img'
    src='/Assets/Campaign.png'
    sx={{ width: 1800, height: 750,position:'fixed',marginTop:-48,marginLeft:-105,backgroundColor: 'rgba(0, 0, 0, 0.5)',opacity:0.5
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
        <Box sx={{ display: 'grid', gridTemplateRows: '1.5fr 1fr 2fr 1fr', gap: '0px', height: 450, marginLeft: 25,width:600,marginTop:4 }}>
          {/* First Row */}
          <Box sx={{  textAlign: 'center',backgroundColor:'#f2ebe4' }}>
            <Typography sx={{marginTop:5,fontSize:25}}>Image</Typography>
          </Box>
          {/* Second Row */}
          <Box sx={{  textAlign: 'center',backgroundColor:'#ebded1' }}>
          <Typography sx={{marginTop:3,fontSize:25}}>Subject</Typography>
          </Box>
          {/* Third Row */}
          <Box sx={{  textAlign: 'center',backgroundColor:'#e8ccb0' }}>
          <Typography sx={{marginTop:7,fontSize:25}}>Description</Typography>
          </Box>
          {/* Fourth Row */}
          <Box sx={{ textAlign: 'center',backgroundColor:'#e8c199' }}>
          <Typography sx={{marginTop:3,fontSize:25}}>Link</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{fontSize:25,marginTop:4,marginLeft:55,width:150,'&:hover': {backgroundColor: 'White'},backgroundColor:'#eed9c4',color:'black'}}>
          <Link to='/EmailcampaignPopup'style={{ textDecoration: 'none', color: 'inherit'}}>Send</Link></Button>

      </Box>
    </Box>
  )
}

export default EmailcampaignTemplateForm;
