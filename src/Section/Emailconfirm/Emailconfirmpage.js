import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Emailconfirmpage(){
  return (
    <Box sx={{backgroundColor: 'white', height: 200, display: 'flex', flexDirection: 'row',  alignItems: 'center', flexDirection: 'row', width: 650}}>
      <Box component="img"sx={{ width: '30%',objectFit:'contain' }}src="/Assets/emailverification.png" alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      <Typography variant="h6" sx={{ marginTop: 4, fontSize: 18 , color:'#0B6869'}}>
        Your Email ID has been successfully verified!
      </Typography>
      <Button variant="text" sx={{color:'black', marginTop:5, width:200, marginLeft:25, color:'#0B6869'}}>
        <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit'}}>Back to Login</Link>
      </Button>
    </Box>
    kkkk
    </Box>
  )
}

export default Emailconfirmpage
