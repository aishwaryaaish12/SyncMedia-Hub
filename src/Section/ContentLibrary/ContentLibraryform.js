import React ,{useState}from 'react'
import {Box, Typography, TextField, Button,InputAdornment, IconButton} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function ContentLibraryform(){
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadAnotherImage = () => {
    setSelectedImage(null);
  };
  
  return (
    <Box>
      <Box sx={{display:'flex', flexDirection:'row', gap:3,justifyContent:'center'}}>
      
      <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/undraw_Photograph_re_up3b.png"
          alt=" "/>
      <Box>
      <Box >
      <Typography variant='h4' sx={{marginLeft:17, color:'black'}}>CONTANT LIBRARY</Typography>
      </Box>

      <Box sx={{width:600, height:300,backgroundColor:'white', marginTop:5, borderRadius:5, position:'relative', display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Box>
      <Box sx={{ width: 250, height: 200, borderStyle: 'dashed', borderColor: 'gray', position: 'relative', marginBottom: 2 }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="image-upload"
        type="file"
        onChange={handleImageChange}
      />
      {!selectedImage && (
        <>
          <FileUploadOutlinedIcon
            sx={{ marginTop: 9, marginLeft: 14, cursor: 'pointer', position: 'absolute' }}
            onClick={() => document.getElementById('image-upload').click()}
          />
          <Typography sx={{ marginTop: 13, marginLeft: 9 }}>Upload Image</Typography>
        </>
      )}
      {selectedImage && (
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={selectedImage} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit:'cover' }} />
        </Box>
      )}
      <Box>
      <Button
            variant="outlined"
            onClick={handleUploadAnotherImage}
            sx={{color: 'gray',marginTop:27, marginLeft:12, borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', },}}>
            <EditIcon fontSize='small' />
          </Button>
      </Box>
      </Box>
      </Box>
      </Box>

    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:5}}>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined"  sx={{color:'black', borderColor:'gray', color:'black', fontWeight:'bold',borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>image</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black',borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
       <Link to="/ContentLibrary1" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>Video</Link>
    </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black',borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary2" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>Blog</Link>
     </Button>
     </Box>
    </Box>

    <Box sx={{marginTop:3}}>
    <TextField placeholder='Enter the description' id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 600, backgroundColor:'white', borderRadius:1,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }},}} />
    </Box>

    <Box sx={{display:'flex', flexDirection:'row', gap:3, marginLeft:25}}>
    <Button variant="contained" sx={{color:'white', backgroundColor:'#2E1114','&:hover': {backgroundColor: '#2E1114',}}}>
      <Link to= "/Draft" style={{ textDecoration: 'none', color: 'inherit'}}>
      Draft
      </Link>
      </Button>
    <Button variant="contained" sx={{color:'white', backgroundColor:'#2E1114','&:hover': {backgroundColor: '#2E1114',}}}>
      <Link to= "/Socialmedia" style={{ textDecoration: 'none', color: 'inherit'}}>
      Upload
      </Link>
      </Button>
    </Box>

    </Box>
      </Box>
    </Box>
  )
}

export default ContentLibraryform
