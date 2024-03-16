import React,{useState} from 'react'
import {Box, Typography, TextField, Button} from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom"

function ContentLibrary2form () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const [descriptionContent, setDescriptionContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleUploadAnotherImage = () => {
    setSelectedFile(null);
  };
  const handleBlogContentChange = (event) => {
    setBlogContent(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescriptionContent(event.target.value);
  };
  return (
    <Box>
      <Box sx={{display:'flex', flexDirection:'row', gap:3,justifyContent:'center'}}>
      
      <Box
          component="img"
          sx={{ width: '40%',objectFit:'contain' }}
          src="/Assets/undraw_Blogging_re_kl0d.png"
          alt=" "
        />
<Box>
    <Box >
      <Typography variant='h4' sx={{marginLeft:17, color:'black'}}>CONTANT LIBRARY</Typography>
    </Box>  
    <Box sx={{display:'flex', flexDirection:'column', borderRadius:2, gap:3, marginTop:5, alignItems:'center'}}>
    <TextField
          placeholder="Create your blog here"
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={blogContent}
          onChange={handleBlogContentChange}
          sx={{ marginBottom: 3, width: 600, backgroundColor: 'white', borderRadius: 1 , textAlign:'center','& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
        />
    </Box> 


    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:5}}>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
      <Link to="/ContentLibrary" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>image</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary1" style={{ textDecoration: 'none', color: 'inherit',color:'black'  }}>video</Link>
     </Button>
     </Box>
     <Box sx={{marginTop: 3}}>
     <Button variant="outlined" sx={{color:'black', borderColor:'gray', color:'black', fontWeight:'bold','&:hover': {borderColor: 'black',  },'&:active': {borderColor: 'black', }}}>
     <Link to="/ContentLibrary2" style={{ textDecoration: 'none', color: 'inherit',color:'black', fontWeight:'bold'}}>blog</Link>
     </Button>
     </Box>
    </Box>

    <Box sx={{marginTop:3}}>
    <TextField
    placeholder="Enter the description here"
    id="outlined-multiline-static"
    multiline
    rows={4}
    value={descriptionContent}
    onChange={handleDescriptionChange}
    sx={{ marginBottom: 3, width: 600, backgroundColor: 'white', borderRadius: 1, textAlign: 'center' ,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
  />
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

export default ContentLibrary2form
