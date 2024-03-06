import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

function Loghomepage(){
  return (
    <Box sx={{ display: 'flex',width:'100%',justifyContent:'space-around', backgroundColor: '#ABCDCD'}}>
     <Box sx={{ width: '500%', maxWidth: 500,display:'flex',flexDirection:'column',marginLeft:-10 }}>
    <Typography variant="h3" sx={{marginLeft:20,marginTop:20, width:450}}>
      Let's Level Up 
    </Typography>
    <Typography variant="h3" sx={{marginLeft:20, width:500}}>
      Your Business with Us
    </Typography>
    <Typography variant='h5' sx={{marginLeft:15,marginTop:3, width:700}}>
      Our complete automated social media management platform puts the full potential of social media in your hands to trandform your marketing strategy and also all areas of your organization 
    </Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', marginLeft:25, gap:5, marginTop:8}}>
      <Box sx={{backgroundColor:'#0B6869', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width: '100',marginLeft:1, marginRight:1, marginTop:2}}
        src="/Assets/Calender 1.png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:6, paddingRight:1, marginBottom:3}}>Calender</Typography>
      </Box>
      <Box sx={{backgroundColor:'#0B6869', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width: '110', marginTop:3, marginLeft:1, paddingRight:1}}
        src="/Assets/Acc.png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:5, marginTop:2}}>Accounts</Typography>
      </Box>
      <Box sx={{backgroundColor:'#0B6869', width:330, borderRadius:2}}>
        <Box component="img"sx={{ width: '100', marginTop:2}}
        src="/Assets/publish 1.png"alt="">
        </Box>
        <Typography sx={{color:'white', marginLeft:5, paddingRight:2, marginTop:1}}>Publishing</Typography>
      </Box>
    </Box>
    
    </Box>
        <Box component="img"sx={{ width: '40%',objectFit:'contain',marginTop:15, marginLeft:25 }}
        src="/Assets/Loghomepic.png"alt="">
        </Box>
    </Box>
  )
}

export default Loghomepage
