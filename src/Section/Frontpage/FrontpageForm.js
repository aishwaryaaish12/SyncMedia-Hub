import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function FrontpageForm() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (

    <Box sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#eed9c4' }}>
      <Box sx={{ width: '500%', maxWidth: 500, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1" sx={{ pl: { xs: '1px', lg:'1px'}, mt: {xs:'1rem',md:'45px', lg:'5rem'}, fontSize:{xs:'55px',lg:'82px'}}}>
          Dive into a world of influence-
        </Typography>
        <Typography variant='h4' sx={{ pl: { xs: '1px',lg: '1px'}, marginTop: 3 }}>
          our social media mastery ensures your brand not only stands out but stays ahead
        </Typography>
        <Button variant="contained" sx={{ fontSize: 24, backgroundColor: 'white', color: 'black', marginTop: 4, width: 240, borderRadius: 3, height: 65, textAlign: 'center', ml:{ md:'5rem'},mr:{xs:'2rem'}, '&:hover': { backgroundColor: 'white', }, }}>
          <Link to="/Subscription" style={{ textDecoration: 'none', color: 'inherit' }}>
            GET STARTED
          </Link>
        </Button>
      </Box>

      {matches&&<Box component="img" sx={{ width: '50%', objectFit: 'contain', marginTop: 20 }}
        src="/Assets/peoplesocial.png" alt="Live from space album cove">
      </Box>}

    </Box>


  )

}

export default FrontpageForm
