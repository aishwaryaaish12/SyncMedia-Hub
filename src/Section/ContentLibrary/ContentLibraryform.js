import React ,{useState}from 'react'
import {Box, Typography, TextField, Button, IconButton} from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom"

function ContentLibraryform(){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleUploadAnotherImage = () => {
    setSelectedFile(null);
  };
  return (
    <Box>
      <Box sx={{display:'flex', flexDirection:'row', gap:3,justifyContent:'center'}}>
      
      <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/undraw_Photograph_re_up3b.png"
          alt=" "
        />
<Box>
    <Box >
      <Typography variant='h4' sx={{marginLeft:17, color:'black'}}>CONTANT LIBRARY</Typography>
    </Box>  
    <Box sx={{display:'flex', flexDirection:'column',backgroundColor:'white', borderRadius:2, gap:3, marginTop:5}}>
      <Box>
      {!selectedFile &&(
    <label htmlFor="fileInput" style={{  marginTop: 10, color:'gray' }}>
        <FileUploadOutlinedIcon fontSize="small" sx={{marginLeft:35, marginTop:13, color:'gray',cursor: 'pointer'}}/>
        <Typography variant="body1" sx={{ marginLeft:28, color:'gray'}}>
          Choose an image...
        </Typography>
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
      </label>
      )}
      {selectedFile && (
        <Box sx={{ width: 200, height: 200, overflow: 'hidden', marginTop: 2, position: 'relative', marginLeft:24}}>
        <img
          src={URL.createObjectURL(selectedFile)}
          alt=" "
          style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom:2 }}
        />
      </Box>
      )}  
      </Box>
      <Box>
      <IconButton
                variant="outlined"
                onClick={handleUploadAnotherImage}
                sx={{
                  marginLeft: 36,
                  width: 5,
                  height: 30,
                  borderColor: 'gray',
                  '&:hover': { borderColor: 'inherit' },
                  marginBottom: 2,
                }}
              >
                <EditIcon fontSize="small" sx={{ color: 'gray' }} />
              </IconButton>
      </Box>
    </Box> 


    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:5}}>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black', fontWeight:'bold'}}>
     <Link to="/ContentLibrary" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>image</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black'}}>
       <Link to="/ContentLibrary1" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>Video</Link>
    </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black'}}>Blog</Button>
     </Box>
    </Box>

    <Box sx={{marginTop:3}}>
    <TextField label="Enter the description here" id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 600, backgroundColor:'white', borderRadius:1}} />
    </Box>

    <Box sx={{display:'flex', flexDirection:'row', gap:3, marginLeft:25}}>
    <Button variant="contained" sx={{color:'white', backgroundColor:'#2E1114','&:hover': {backgroundColor: '#2E1114',}}}>Draft</Button>
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
