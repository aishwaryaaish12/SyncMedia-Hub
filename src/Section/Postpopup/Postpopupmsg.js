import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Postpopupmsg () {
  return (
    <Box sx={{backgroundColor: 'white', height: 200, display: 'flex', flexDirection: 'row',  alignItems: 'center', flexDirection: 'row', width: 650}}>
      <Box component="img"sx={{ width: '40%',objectFit:'contain' }}src="/Assets/undraw_Content_creator_re_pt5b.png" alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      
      <Typography variant="h6" sx={{ marginTop: 4, fontSize: 18 , color:'black'}}>
        Your Content has been published successfully
      </Typography>
      <Button variant="text" sx={{color:'black', marginTop:5, width:90, marginLeft:25, color:'black'}}>
        <Link to="/Loghome" style={{ textDecoration: 'none', color: 'inherit'}}>ok</Link>
      </Button>
    </Box>
    </Box>
  )
}

export default Postpopupmsg
