import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function AnalyticsForm() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Box>
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', marginTop: -10 }}>ANALYTICS</Typography>
      </Box>
      <Box>
        <Typography variant='h5' sx={{ textAlign: 'center', marginTop: 9,color:'#555' }}>Connect with your social media account</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px' }}>

        {[1, 2, 3, 4, 5].map((index) => (
          <Card
            key={index}
            sx={{
              width: 200,
              marginTop: 5,
              transition: 'transform 0.3s ease-in-out',
              transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {index === 1 && <FacebookIcon sx={{ fontSize: 70, color: '#1877f2', textAlign: 'center', marginTop: 2, marginLeft: 8 }} />}
            {index === 2 && <CardMedia sx={{ height: 75, width: 67, marginLeft: 8, marginTop: 2 }} image="/Assets/Instagramicon (1).png" />}
            {index === 3 && <CardMedia sx={{ height: 75, width: 67, marginLeft: 8, marginTop: 2 }} image="/Assets/LinkedInicon (1).png" />}
            {index === 4 && <CardMedia sx={{ height: 75, width: 67, marginLeft: 8, marginTop: 2 }} image="/Assets/Twittericon (1).png" />}
            {index === 5 && <CardMedia sx={{ height: 75, width: 67, marginLeft: 8, marginTop: 2 }} image="/Assets/Youtubeicon (1).png" />}

            {/* Add similar conditions for other social media icons */}

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', marginTop: -1 }}>
                {index === 1 && 'Facebook'}
                {index === 2 && 'Instagram'}
                {index === 3 && 'LinkedIn'}
                {index === 4 && 'Twitter'}
                {index === 5 && 'YouTube'}

                {/* Add similar conditions for other social media names */}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', cursor: 'pointer' }}>
                Connect
              </Typography>
            </CardContent>
          </Card>
        ))}

      </Box>
    </Box>
  );
}

export default AnalyticsForm;
