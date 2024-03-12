import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function FacebookconnectForm() {
  return (
    <Box>
      <Box>
        <Typography variant='h3'sx={{marginTop:0,textAlign:'center'}}>Let's Connect</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',width:1000,height:450,marginTop:3,backgroundColor:'white'}}>
      <Box component="img"sx={{ width: '70%',height:'100%',objectFit:'contain',marginTop:0,marginLeft:-8 }}
        src="/Assets/Socialconnection.png"alt="Live from space album cove">
        </Box>
        <Box>
          <Typography  sx={{color:'black',fontSize:20,marginTop:5,marginLeft:-3,fontWeight:700}}>Connect with your Facebook Account</Typography>
          <Typography sx={{marginTop:10,marginLeft:-3}}>Username</Typography>
          <TextField id="outlined-basic"  variant="outlined" sx={{marginTop:-5,marginLeft:13}} />
          <Typography sx={{marginTop:5,marginLeft:-3}}>Password</Typography>
          <TextField id="outlined-basic"  variant="outlined" sx={{marginTop:-5,marginLeft:13}} />
          <Button variant="contained" sx={{marginLeft:20,width:150,height:50,marginTop:5,backgroundColor:'#eed9c4',color:'black',fontWeight:700}}>Connect</Button>

        </Box>
      </Box>
    </Box>
  )
}

export default FacebookconnectForm
