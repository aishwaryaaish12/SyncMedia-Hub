import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function AboutUsForm (){
  return(
    <Box sx={{ display: 'flex',justifyContent:'space-around',gap: '3', backgroundColor: '#eed9c4',flexDirection:'column'}}>
          <Box sx={{ display: 'flex',justifyContent:'space-around',gap: '3', backgroundColor: '#eed9c4',flexDirection:'column'}}>

<Typography variant='h4' sx={{textAlign:'center',marginTop:5}}>About Us</Typography>
<Typography sx={{fontSize:18,marginTop:1,textAlign:'center'}}>Empowering brands to connect with a global audience
and extend their influence across diverse markets.</Typography>
<Box
        component="img"
        sx={{ width: '30%',objectFit:'contain',marginTop:8,marginLeft:123 }}
        src="/Assets/Aboutnew.png"
        alt="">
          </Box>
          <Typography variant='h4' sx={{textAlign:'center',marginTop:-35}}>How it Works ?</Typography>
          <Typography sx={{fontSize:18,marginLeft:40,marginTop:1}}>Our user-friendly platform simplifies social media management.
Sign up,<br></br> effortlessly create and edit profiles, connect social
channels and gain insights <br></br>for strategic planning. Streamline content,
tailor posting methods, and execute<br></br> campaigns seamlessly from a centralized hub. 
Elevate your outreach with<br></br> integrated email and Whats App campaigns.
Experience efficient and unified<br></br> social media management by signing up
today.</Typography>

      </Box>
</Box>
      
  );
}

  export default AboutUsForm