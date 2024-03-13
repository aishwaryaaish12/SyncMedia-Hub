import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function EmailCampaignForm() {
  return (
    <Box>
      <Box>
        <Typography variant='h3'sx={{marginTop:-2,textAlign:'center'}}>EMAIL CAMPAIGN</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',width:1000,height:450,marginTop:3,backgroundColor:'white'}}>
      <Box component="img"sx={{ width: '70%',height:'100%',objectFit:'contain',marginTop:0,marginLeft:-8 }}
        src="/Assets/EmailCampaigns.png"alt="Live from space album cove">
        </Box>
        <Box sx={{border:'solid 2px #575757',width:380,height:207,marginTop:23,marginLeft:-10,borderRadius:3,display:'flex',flexDirection:'column'}}>
        <Button variant="contained" sx={{backgroundColor:'#eed9c4',color:'black',width:200,height:50,marginLeft:12,marginTop:5,'&:hover': {backgroundColor: 'White'},}}>
        <Link to="/CreateEmailCampaign"style={{ textDecoration: 'none', color: 'inherit' }}>
Create Campaign
</Link>
</Button>
        <Button variant="contained" sx={{backgroundColor:'#eed9c4',color:'black',width:200,height:50,marginLeft:12,marginTop:3,'&:hover': {backgroundColor: 'White'},}}>All Campaign</Button>

        </Box>
      </Box>
    </Box>
  )
}

export default EmailCampaignForm
