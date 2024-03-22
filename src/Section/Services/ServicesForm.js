import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ServicesForm() {
  return (
    <Box>
    <Box>
    <Typography sx={{fontSize:50,textAlign:'center',marginBottom:5}}>Our Services</Typography>
    </Box>
    
    <Box sx={{ display: 'flex', gap: '28px' }}>

      <Card sx={{ maxWidth: 305 }}>
        <CardMedia
          sx={{ height: 190 }}
          image="/Assets/Crossplatformposting.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
            Cross-Platform Posting
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
          Support posting on multiple social media platforms
          simultaneously, saving time for users managing 
          accounts on various channels.</Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 305 }}>
        <CardMedia
          sx={{ height: 190 }}
          image="/Assets/contentcalendernew.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
            Content Calender
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
          Content calendar that provides a visual overview 
          of scheduled posts, making it easier to plan and 
          organize content across different platforms.          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 305 }}>
        <CardMedia
          sx={{ height: 190 }}
          image="/Assets/Campaign.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
             Campaign
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
          Support users in executing comprehensive outreach plans by incorporating features for both email and WhatsApp campaigns on the platform. 
          </Typography>
        </CardContent>
      </Card>

    </Box>
    </Box>
  );
}

export default ServicesForm;
