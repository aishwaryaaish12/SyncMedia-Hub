import React from 'react'
import { Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function FrontPageForm() {
  
  return (

   <Box sx={{ display: 'flex',justifyContent:{xs:'center', md:'space-around'},gap: '3', backgroundColor: '#eed9c4'}}>
   <Box sx={{ width: '500%', maxWidth: 500,display:'flex',flexDirection:'column',marginLeft:-10 }}>
    <Typography variant="h1" sx={{marginLeft:7,marginTop:5}}>
      Dive into a world of influence-
    </Typography>
    <Typography variant='h4' sx={{marginLeft:7,marginTop:3}}>
      our social media mastery ensures your brand not only stands out but stays ahead
    </Typography>
    <Button variant="contained" sx={{fontSize:24,backgroundColor:'white',color:'black',marginTop:4,width:250,borderRadius:3,height:75,textAlign:'center',marginLeft:20,'&:hover': { backgroundColor: 'white',},}}>
      <Link to="/Login"style={{ textDecoration: 'none', color: 'inherit' }}>
      GET STARTED
      </Link> 
    </Button>
    </Box>
        <Box component="img"sx={{ width: '30%',objectFit:'contain',marginTop:30 }}
        src="/Assets/peoplesocial.png"alt="Live from space album cove">
        </Box>

    </Box>
   

  )

}

export default FrontPageForm
