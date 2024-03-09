import React from 'react'
import {Box,  Typography} from '@mui/material'
import {Link} from 'react-router-dom'

function Loghomepage(){
  return (
    <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around', backgroundColor: '#eed9c4'}}>
     <Box sx={{ width: '500%', maxWidth: 500,display:'flex',flexDirection:'column',marginLeft:-10 }}>
    <Typography variant="h3" sx={{marginLeft:15,marginTop:4, width:450,color:'black' }}>
      Let's Level Up 
    </Typography>
    <Typography variant="h3" sx={{marginLeft:15, width:500,color:'black',marginTop:2 }}>
      Your Business with Us
    </Typography>
    <Typography variant='h5' sx={{marginLeft:15,marginTop:3, width:600,color:'black' }}>
      Our complete automated social media management 
    </Typography>
    <Typography variant='h5' sx={{marginLeft:15,marginTop:1, width:700,color:'#black' }}>
    platform  puts the full potential of social media in your hands 
    </Typography>
    <Typography variant='h5' sx={{marginLeft:15,marginTop:1, width:600,color:'#black' }}>
      to trandform your marketing strategy and also all areas  
    </Typography>
    <Typography variant='h5' sx={{marginLeft:15,marginTop:1, width:600,color:'#black' }}>
     of your organization 
    </Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', marginLeft:25, gap:5, marginTop:8}}>
      <Box sx={{backgroundColor:'#2E1114', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width: 150, height:150,marginLeft:1, marginRight:1, marginTop:2}}
        src="/Assets/undraw_Events_re_98ue.png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:6, paddingRight:1, marginBottom:3}}>Calender</Typography>
      </Box>
      <Box sx={{backgroundColor:'#2E1114', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width: 150, height:140, marginTop:2,  paddingRight:1}}
        src="/Assets/undraw_Account_re_o7id (1).png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:5, marginTop:1}}>Accounts</Typography>
      </Box>
      <Box sx={{backgroundColor:'#2E1114', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width:150, height:140, marginTop:2}}
        src="/Assets/undraw_Publish_post_re_wmql.png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:5, paddingRight:2, marginTop:1}}>Publishing</Typography>
      </Box>
    </Box>
    
    </Box>
        <Box component="img"sx={{ width: '30%',objectFit:'contain',marginTop:15, marginLeft:25 }}
        src="/Assets/Loghomepic.png"alt="">
        </Box>
    </Box>
  )
}

export default Loghomepage
