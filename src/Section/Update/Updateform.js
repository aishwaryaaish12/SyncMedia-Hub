import React,{useState} from 'react'
import { Box, Button, TextField, Typography,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


function Updateform () {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompanyNameEditing, setIsCompanyNameEditing] = useState(false);
  const [companyName, setCompanyName] = useState();

  const [isProductNameEditing, setIsProductNameEditing] = useState(false);
  const [productName, setProductName] = useState();

  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [email, setEmail] = useState();

  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [address, setAddress] = useState();

  const [isPhoneNoEditing, setIsPhoneNoEditing] = useState(false);
  const [phoneNo, setPhoneNo] = useState();

  const [selectedFile, setSelectedFile] = useState(null);
  const [label, setLabel] = useState(false);

  const handleEditClick = (field) => {
    switch (field) {
      case 'companyName':
        setIsCompanyNameEditing(!isCompanyNameEditing);
        break;
      case 'productName':
        setIsProductNameEditing(!isProductNameEditing);
        break;
      case 'email':
        setIsEmailEditing(!isEmailEditing);
        break;
      case 'address':
        setIsAddressEditing(!isAddressEditing);
        break;
      case 'phoneNo':
        setIsPhoneNoEditing(!isPhoneNoEditing);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = (field) => {
    switch (field) {
      case 'companyName':
        setIsCompanyNameEditing(false);
        // Save logic for Company Name
        break;
      case 'productName':
        setIsProductNameEditing(false);
        // Save logic for Product Name
        break;
      case 'email':
        setIsEmailEditing(false);
        // Save logic for Email
        break;
      case 'address':
        setIsAddressEditing(false);
        // Save logic for Address
        break;
      case 'phoneNo':
        setIsPhoneNoEditing(false);
        // Save logic for Phone No
        break;
      default:
        break;
    }
  };


  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  const fileInputRef = React.createRef();

  return (
  <Box 
  sx={{ display: 'flex',width:'100%',justifyContent:'space-around',gap: '3', backgroundColor: '#eed9c4',color:'000',position:'fixed'}}>
<Box component="img"
src="/Assets/business.png"
sx={{width:685,height:600,marginLeft:-115,position:'fixed',marginBottom:25}}
/>
        <Box         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

        <Typography variant='h3'sx={{marginTop:-4,marginLeft:90,marginBottom:5,whiteSpace: 'nowrap'}}>UPDATE PROFILE</Typography>
        </Box>
      <Box sx={{marginLeft:60}}>
          <Box>
            <Typography  sx={{marginLeft:-130,marginTop:10,fontSize:20}}>Company Name  </Typography>
            <TextField id="outlined-basic"  variant="outlined" value={companyName}
        onChange={(e) => setCompanyName(e.target.value)} sx={{marginLeft:-108,marginTop:-5,width:300}}   InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleEditClick('companyName')}>
                {isCompanyNameEditing ? <SaveIcon /> : <EditIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }} disabled={!isCompanyNameEditing}
        />
          
            </Box>
          <Box>
            <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Product Name </Typography>
            <TextField id="outlined-basic"  variant="outlined" onChange={(e) => setProductName(e.target.value)}  sx={{marginLeft:-108,marginTop:-4,width:300}}  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleEditClick('productName')}>
                    {isProductNameEditing ? <SaveIcon /> : <EditIcon />}
                  </IconButton>
            </InputAdornment>
          ),
        }} disabled={!isProductNameEditing}/>
            </Box>
          <Box>
          <Typography sx={{marginLeft:-130,fontSize:20,marginTop:3}}>Email ID </Typography>
          <TextField id="outlined-basic"  variant="outlined"onChange={(e) => setEmail(e.target.value)} sx={{marginLeft:-108,marginTop:-3,width:300}}InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => handleEditClick('email')}>
                    {isEmailEditing ? <SaveIcon /> : <EditIcon />}
                  </IconButton>
            </InputAdornment>
          ),
        }} disabled={!isEditing} />

 
          </Box>
        
</Box>
<Box>
  <Box>
<Typography sx={{fontSize:20,marginLeft:-65,marginTop:10}}>Address</Typography>
<TextField id="outlined-basic"  variant="outlined"onChange={(e) => setAddress(e.target.value)}  sx={{marginLeft:-51,marginTop:-5,width:300}} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
             <IconButton onClick={() => handleEditClick('address')}>
                    {isAddressEditing ? <SaveIcon /> : <EditIcon />}
                  </IconButton>
            </InputAdornment>
          ),
        }} disabled={!isEditing}/>


  </Box>
  <Box>
  <Typography sx={{fontSize:20,marginLeft:-65,marginTop:4}}>Logo</Typography>
<TextField id="outlined-basic"  variant="outlined" label={
    selectedFile
    ? ''  
    : (
        <Typography sx={{ color: '#b3acab' }}>
          Upload Image
        </Typography>
      )
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
sx={{marginLeft:-51,marginTop:-5,width:300}} 
value={selectedFile ? selectedFile.name : ''} />
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
<TextField id="outlined-basic"  variant="outlined" onChange={(e) => setPhoneNo(e.target.value)} sx={{marginLeft:-51,marginTop:-5,width:300}} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
             <IconButton onClick={() => handleEditClick('phoneNo')}>
                    {isPhoneNoEditing ? <SaveIcon /> : <EditIcon />}
                  </IconButton>
            </InputAdornment>
          ),
        }} disabled={!isEditing} />

  </Box>
  </Box>

<Box>
  <Typography variant='h5' sx={{marginTop:40,marginLeft:-75,fontWeight:'500',marginBottom:7}}>SOCIAL MEDIA CHANNELS</Typography> 
 </Box> 
  <Box> 
  <Checkbox {...label}
   sx={{marginTop:46,marginLeft:-75, }} />
 </Box>


  <Box>

  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 47, marginLeft: -70 }}>
    <FacebookIcon />
    <Typography sx={{ fontSize: 20, marginLeft: 0 }}>Facebook</Typography>
  </Box>
  </Box>
  

<Box>
    <Checkbox {...label} sx={{marginTop:51,marginLeft:-75}} />  
 </Box>

  <Box>
  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 52, marginLeft: -70 }}>
    <InstagramIcon />
    <Typography sx={{ fontSize: 20, marginLeft: 0 }}>Instagram</Typography>
  </Box>
  </Box>
  <Box>
     <Checkbox {...label} sx={{marginTop:56,marginLeft:-75}} />   
 </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 57, marginLeft: -70 }}>
    <LinkedInIcon />
    <Typography sx={{ fontSize: 20, marginLeft: 0 }}>LinkedIn</Typography>
  </Box>
  </Box>
  <Box>
  <Checkbox {...label} sx={{marginTop:46,marginLeft:-53}} />   
 </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 47, marginLeft: -48 }}>
    <TwitterIcon />
    <Typography sx={{ fontSize: 20, marginLeft: 0 }}>Twitter</Typography>
  </Box>
  </Box>
  <Box>
   <Checkbox {...label} sx={{marginTop:51,marginLeft:-53}} />  
 </Box>
          <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 52, marginLeft: -48 }}>
    <YouTubeIcon />
    <Typography sx={{ fontSize: 20, marginLeft: 0 }}>YouTube</Typography>
  </Box>
  </Box>
<Box>
  <Button variant="contained" sx={{width:150,height:55,marginTop:66,marginLeft:-65,
 color:'black',fontSize:25,backgroundColor:'#eed9c4',borderRadius:25,transition:'none','&:hover':{backgroundColor:'white'}}}>
  <Link to="/Loghome" style={{ textDecoration: 'none', color: 'inherit'}}>save</Link>

  </Button>
  </Box>

  </Box>
  )
}

export default Updateform
