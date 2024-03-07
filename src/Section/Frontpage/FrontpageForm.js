import React from 'react'
import { Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function FrontPageForm() {
  return (
    <Box sx={{ display: 'flex',justifyContent:'center',gap: '5', backgroundColor: '#eed9c4'}}>
    <Box sx={{Width: 500,display:'flex',flexDirection:'column',marginLeft:-10}}>
    <Typography variant="h1" sx={{marginLeft:5,marginTop:5, color:'black'}}>
      Dive into 
    </Typography>
    <Typography variant="h1" sx={{marginLeft:5,marginTop:2, color:'black'}}>
      a world of influence-</Typography>
    <Typography variant='h3' sx={{marginLeft:5,marginTop:3,color:'black'}}>
      our social media mastery ensures 
    </Typography>
    <Typography variant='h3' sx={{marginLeft:5,marginTop:2,color:'black'}}>
    your brand not only stands out 
    </Typography>
    <Typography variant='h3' sx={{marginLeft:5,marginTop:2,color:'black'}}>
    but stays ahead
    </Typography>
    <Button variant="contained" sx={{fontSize:24,backgroundColor:'white',color:'black',marginTop:4,width:250,borderRadius:3,height:75,textAlign:'center',marginLeft:25,'&:hover': { backgroundColor: 'white',},}}>
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

export default FrontPageForm