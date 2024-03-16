import { Box, Typography, Button } from '@mui/material'
import React,{useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

function Socialmediapage() {
  const [facebookStoryChecked, setFacebookStoryChecked] = useState(false);
  const [facebookPostChecked, setFacebookPostChecked] = useState(false);

  const [instagramReelsChecked, setInstagramReelsChecked] = useState(false);
  const [instagramStoryChecked, setInstagramStoryChecked] = useState(false);
  const [instagramPostChecked, setInstagramPostChecked] = useState(false);

  const [linkedinPostChecked, setLinkedInPostChecked] = useState(false);

  const [twitterTextChecked, setTwitterTextChecked] = useState(false);
  const [twitterImageChecked, setTwitterImageChecked] = useState(false);
  const [twitterVideoChecked, setTwitterVideoChecked] = useState(false);

  const [youtubeVideoChecked, setYoutubeVideoChecked] = useState(false);
  const [youtubeShortsChecked, setYoutubeShortsChecked] = useState(false);


  const handleFacebookStoryChange = (event) => {
    setFacebookStoryChecked(event.target.checked);
  };

  const handleFacebookPostChange = (event) => {
    setFacebookPostChecked(event.target.checked);
  };

  const handleInstagramReelsChange = (event) => {
    setInstagramReelsChecked(event.target.checked);
  };
  
  const handleInstagramStoryChange = (event) => {
    setInstagramStoryChecked(event.target.checked);
  };
  
  const handleInstagramPostChange = (event) => {
    setInstagramPostChecked(event.target.checked);
  };
  
  const handleLinkedInPostChange = (event) => {
    setLinkedInPostChecked(event.target.checked);
  };
   
  const handleTwitterTextChange = (event) => {
    setTwitterTextChecked(event.target.checked);
  };

  const handleTwitterImageChange = (event) => {
    setTwitterImageChecked(event.target.checked);
  };

  const handleTwitterVideoChange = (event) => {
    setTwitterVideoChecked(event.target.checked);
  };

  
  const handleYoutubeVideoChange = (event) => {
    setYoutubeVideoChecked(event.target.checked);
  };
  const handleYoutubeShortsChange = (event) => {
    setYoutubeShortsChecked(event.target.checked);
  };


  return (
    <Box>
    <Box sx={{display:'flex', justifyContent:'center', marginTop:0}}>
      <Typography variant='h3'>SOCIAL MEDIA CHANNELS</Typography>
    </Box>

    <Box sx={{display:'flex', flexDirection:'row', gap:2, marginTop:8}}>


      <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:2,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        <Box sx={{display:'flex', flexDirection:'row', marginLeft:8, marginTop:2, width:190}}>
        <FacebookIcon />
        <Typography sx={{fontSize:18, marginLeft:1}}> Facebook</Typography>
        </Box>

        <Box sx={{display:'flex', flexDirection:'row', marginLeft:5}}>
      <FormControlLabel
        control={
          <Checkbox
            checked={facebookStoryChecked}
            onChange={handleFacebookStoryChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Story"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={facebookPostChecked}
            onChange={handleFacebookPostChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Post"
      /> 
      </Box> 
      <Box sx={{ height:200}}></Box>
      </Box>
      

      <Box sx={{display:'flex', flexDirection:'row', gap:2}}>


 <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:2,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
  <Box sx={{display:'flex', flexDirection:'row', marginLeft:9, marginTop:2, width:190}}>
  <InstagramIcon />
  <Typography sx={{fontSize:18, marginLeft:1}}> Instagram</Typography>
  </Box>

  <Box sx={{display:'flex', flexDirection:'row', marginLeft:2}}>
  <FormControlLabel
  control={
    <Checkbox
      checked={instagramReelsChecked}
      onChange={handleInstagramReelsChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Reels"
/>
  <FormControlLabel
  control={
    <Checkbox
      checked={instagramStoryChecked}
      onChange={handleInstagramStoryChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Story"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={instagramPostChecked}
      onChange={handleInstagramPostChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Post"
/> 
</Box> 
<Box sx={{height:200}}></Box>
</Box>
</Box>

      <Box sx={{display:'flex', flexDirection:'row', gap:2}}>


<Box sx={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:2,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
  <Box sx={{display:'flex', flexDirection:'row', marginLeft:10, marginTop:2, width:190}}>
  <LinkedInIcon />
  <Typography sx={{fontSize:18, marginLeft:1}}> LinkedIn</Typography>
  </Box>

  <Box sx={{display:'flex', flexDirection:'row', marginLeft:12}}>
<FormControlLabel
  control={
    <Checkbox
      checked={linkedinPostChecked}
      onChange={handleLinkedInPostChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Post"
/> 
</Box> 

<Box sx={{height:200}}></Box>
</Box>
      </Box>

      <Box sx={{display:'flex', flexDirection:'row', gap:2}}>


<Box sx={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
  <Box sx={{display:'flex', flexDirection:'row', marginLeft:10,marginTop:2, width:190}}>
  <TwitterIcon />
  <Typography sx={{fontSize:18, marginLeft:1}}> Twitter</Typography>
  </Box>

  <Box sx={{display:'flex', flexDirection:'row', marginLeft:2}}>
  <FormControlLabel
  control={
    <Checkbox
      checked={twitterTextChecked}
      onChange={handleTwitterTextChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Text"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={twitterImageChecked}
      onChange={handleTwitterImageChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Image"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={twitterVideoChecked}
      onChange={handleTwitterVideoChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Video"
/> 
</Box> 
<Box sx={{height:200}}></Box>
</Box>
      </Box>

      <Box sx={{display:'flex', flexDirection:'row', gap:2}}>


<Box sx={{display:'flex', flexDirection:'column', backgroundColor:'white', borderRadius:2,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
  <Box sx={{display:'flex', flexDirection:'row', marginLeft:10, marginTop:2, width:190}}>
  <YouTubeIcon />
  <Typography sx={{fontSize:18, marginLeft:1}}> YouTube</Typography>
  </Box>

  <Box sx={{display:'flex', flexDirection:'row', marginLeft:6}}>
<FormControlLabel
  control={
    <Checkbox
      checked={youtubeVideoChecked}
      onChange={handleYoutubeVideoChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Video"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={youtubeShortsChecked}
      onChange={handleYoutubeShortsChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  }
  label="Shorts"
/> 
</Box> 

<Box sx={{height:200}}></Box>
</Box>
      </Box>
    </Box>
  <Box sx={{display:'flex', justifyContent:'center', marginTop:10}}>
   <Button variant="contained" sx={{color:'black',fontSize:20, width:100, border:'solid', backgroundColor:'#eed9c4',borderRadius:5,transition:'none','&:hover':{backgroundColor:'white'}}}>
    <Link to="/Postpopup" style={{ textDecoration: 'none', color: 'inherit'}}>Post</Link>
    </Button>
    </Box>  
    </Box>

  )
}

export default Socialmediapage

