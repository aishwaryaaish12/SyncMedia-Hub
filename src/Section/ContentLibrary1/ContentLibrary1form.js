import React, {useState} from 'react'
import {Box, Typography, TextField, Button} from '@mui/material'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {Link} from "react-router-dom"

function ContentLibrary1form({onVideoSelect}){
  const [selectedVideo, setSelectedFile] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleUploadAnotherVideo = () => {
    setSelectedFile(null);
  };
  return (
    <Box>
      <Box sx={{display:'flex', flexDirection:'row', gap:3,justifyContent:'center'}}>
      
      <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/undraw_Video_streaming_re_v3qg.png"
          alt=" "
        />
<Box>
    <Box >
      <Typography variant='h4' sx={{marginLeft:17, color:'black'}}>CONTANT LIBRARY</Typography>
    </Box> 

    <Box sx={{width:600, height:300,backgroundColor:'white', marginTop:5, borderRadius:5, position:'relative', display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Box>
    <Box sx={{ width: 250, height: 200, borderStyle: 'dashed', borderColor: 'gray', position: 'relative', marginBottom: 2 }}>
      <input
        accept="video/*"  // Accept video files
        style={{ display: 'none' }}
        id="video-upload"
        type="file"
        onChange={handleVideoChange}  // Change the event handler to handle video upload
      />
      {!selectedVideo && (
        <>
          <CloudUploadOutlinedIcon
            sx={{ marginTop: 9, marginLeft: 14, cursor: 'pointer', position: 'absolute' }}
            onClick={() => document.getElementById('video-upload').click()}
          />
          <Typography sx={{ marginTop: 13, marginLeft: 9 }}>Upload Video</Typography>
        </>
      )}
      {selectedVideo && (
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video controls style={{ width: '100%', height: '100%', objectFit:'cover' }} src={URL.createObjectURL(selectedVideo)} />
        </Box>
      )}
      <Box>
        <Button
          variant="outlined"
          onClick={handleUploadAnotherVideo}
          sx={{
            color: 'gray',
            marginTop: 27,
            marginLeft: 12,
            borderColor: 'black',
            '&:hover': { borderColor: 'black' },
            '&:active': { borderColor: 'black' },
          }}
        >
          <EditIcon fontSize='small' />
        </Button>
      </Box>
    </Box>

    </Box>
    </Box>

    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:5}}>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black', borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
      <Link to="/ContentLibrary" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>image</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black', fontWeight:'bold', borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary1" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>video</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black', borderColor:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary2" style={{ textDecoration: 'none', color: 'inherit',color:'black'}}>blog</Link>
     </Button>
     </Box>
    </Box>

    <Box sx={{marginTop:3}}>
    <TextField placeholder='Enter the description here' id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 600, backgroundColor:'white', borderRadius:1,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}} />
    </Box>
     
     <Box>
    <Button variant="contained" sx={{color:'black',marginLeft:31, backgroundColor:'#eed9c4',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',transition:'none','&:hover':{backgroundColor:'white'}}}>
      <Link to= "/Schedule" style={{ textDecoration: 'none', color: 'inherit'}}>
       Schedule
      </Link>
      </Button>
    </Box>

    </Box>
      </Box>
    </Box>
  )
}

export default ContentLibrary1form
