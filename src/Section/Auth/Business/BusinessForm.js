import React,{useState} from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography,IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function BusinessForm() {
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileUpload = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    setSelectedFile(file);

    // You can perform additional actions with the selected file if needed
    console.log('Selected file:', file);
  };


  // Reference for the hidden file input
  const fileInputRef = React.createRef();


  return (

      <Box 
  sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#eed9c4',color:'000'}}>
<Box component="img"
src="/Assets/business.png"
sx={{width:685,height:600,marginLeft:-110,position:'fixed',marginBottom:25}}
/>
        <Box         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

        <Typography variant='h3'sx={{marginTop:-4,marginLeft:100,marginBottom:5,whiteSpace: 'nowrap'}}>COMPANY/PRODUCT PROFILE</Typography>
        </Box>
      <Box sx={{marginLeft:25}}>
          <Box>
            <Typography  sx={{marginLeft:-130,marginTop:10,fontSize:20}}>Company Name  </Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-5,width:300}} />
            </Box>
          <Box>
            <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Product Name </Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-4,width:300}} />
            </Box>
          <Box>
          <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Email ID </Typography>
          <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-108,marginTop:-3,width:300}} />

 
          </Box>
        
</Box>
<Box>
  <Box>
<Typography sx={{fontSize:20,marginLeft:-65,marginTop:10}}>Address</Typography>
<TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-51,marginTop:-5,width:300}} />


  </Box>
  <Box>
  <Typography sx={{fontSize:20,marginLeft:-65,marginTop:4}}>Logo</Typography>
<TextField id="outlined-basic"  variant="outlined" label={
  <Typography sx={{color:'black'}}>
Upload Image</Typography>
}
 InputLabelProps={{ shrink: false }} 
InputProps={{
  endAdornment: (
    <FileUploadOutlinedIcon
      sx={{ cursor: 'pointer', color: 'black', marginLeft: -5 }}
      onClick={handleFileUpload}
      />
    ),
  }}
sx={{marginLeft:-51,marginTop:-5,width:300}} />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

  </Box>

  <Box>
  <Typography sx={{fontSize:20,marginLeft:-65,marginTop:4}}>Phone No</Typography>
<TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:-51,marginTop:-5,width:300}} />

  </Box>
  </Box>

<Box>
  <Typography variant='h5' sx={{marginTop:40,marginLeft:-83,fontWeight:'500',marginBottom:7}}>SOCIAL MEDIA CHANNELS</Typography> 
 </Box> 
  <Box> 
  <Checkbox {...label}
   sx={{marginTop:46,marginLeft:-80, }} />
 </Box>

  <Box>
    <Typography sx={{marginTop:47,marginLeft:-75,fontSize:20}}>Facebook</Typography>
  </Box>
  

<Box>
    <Checkbox {...label} sx={{marginTop:51,marginLeft:-80}} />  
 </Box>

  <Box>
    <Typography sx={{marginTop:52,marginLeft:-75,fontSize:20}}>Instagram</Typography>
  </Box>
  <Box>
     <Checkbox {...label} sx={{marginTop:56,marginLeft:-80}} />   
 </Box>
          <Box>
    <Typography sx={{marginTop:57,marginLeft:-75,fontSize:20}}>LinkedIn</Typography>
  </Box>
  <Box>
  <Checkbox {...label} sx={{marginTop:46,marginLeft:-60}} />   
 </Box>
          <Box>
    <Typography sx={{marginTop:47,marginLeft:-55,fontSize:20}}>Twitter</Typography>
  </Box>
  <Box>
   <Checkbox {...label} sx={{marginTop:51,marginLeft:-60}} />  
 </Box>
          <Box>
    <Typography sx={{marginTop:52,marginLeft:-55,fontSize:20}}>YouTube</Typography>
  </Box>
<Box>
  <Button variant="contained" sx={{width:150,height:55,marginTop:64,marginLeft:-70,
color:'black',fontSize:25,backgroundColor:'#eed9c4',borderRadius:25,transition:'none','&:hover':{backgroundColor:'white'}}}>
  <Link to="/Formcomplete" style={{ textDecoration: 'none', color: 'inherit'}}>SUBMIT</Link>

  </Button>
  </Box>

  </Box>
  );
}

export default BusinessForm