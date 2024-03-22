import React from 'react'
import {Box, Button,Typography} from '@mui/material'
import {Link} from "react-router-dom"


function Formcompletepage(){
  return (
    <Box sx={{backgroundColor: 'white', height: 200, display: 'flex', flexDirection: 'row',  alignItems: 'center', width: 600,borderRadius:3}}>
      <Box component="img"sx={{ width: '30%',objectFit:'contain' }}src="/Assets/emailverification.png" alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      <Typography variant="h6" sx={{ marginTop: 2, fontSize: 18 , marginLeft:10,color:'black'}}>
        Profile created successfully!
      </Typography>
      <Button variant="text" sx={{color:'black', marginTop:5, width:200, marginLeft:25}}>
      <Link to="/SocialConnect" style={{ textDecoration: 'none', color: 'inherit'}}>OK</Link>

      </Button>
    </Box>
    
    </Box>
  )
}

export default Formcompletepage
