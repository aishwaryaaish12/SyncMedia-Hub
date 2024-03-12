import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function CreateEmailCampaignForm(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setOpenDialog(true);

  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  
  return (
    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <Box component='img'
    src='/Assets/Campaign.png'
    sx={{ width: 1800, height: 750,position:'fixed',marginTop:-48,marginLeft:-105,backgroundColor: 'rgba(0, 0, 0, 0.5)',opacity:0.5
  }}/>
        <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white', // Set your box background color
          width: 1000, // Set your desired width
          height: 690, // Set your desired height
        }}

      >
        <Box><Typography variant='h4'sx={{textAlign:'center',marginTop:3}}>Create Your Campaign Here</Typography></Box>
        <Box>
          <Box>
            <Typography sx={{fontSize:20,marginTop:8,marginLeft:3}}>Campaign Name</Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:27,marginTop:-6,backgroundColor:'#eed9c4',width:300}} />

          </Box>
          <Box>
          <Typography sx={{fontSize:20,marginLeft:3,marginTop:4}}>Subject</Typography>
             <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,marginTop:-4}} /> 
           </Box>
           <Box>
            <Typography sx={{fontSize:20,marginLeft:3,marginTop:6}}>Description</Typography>
             <TextField id="outlined-basic"  variant="outlined"  multiline rows={5.1}
 sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,height:150,marginTop:-4}} />  

           </Box>
            <Box>
              <Typography sx={{fontSize:20,marginLeft:3,marginTop:7}}>Link</Typography>
              <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,marginTop:-4}} />  
</Box>
</Box>
<Box>
<Box>
            <Typography sx={{fontSize:20,marginLeft:73,marginTop:-56}}>Image</Typography>
            <TextField id="outlined-basic"  variant="outlined" multiline rows={4.9} label={
              <Typography sx={{marginTop:6,marginLeft:7}}>Upload Image</Typography>
            }
 sx={{backgroundColor:'#eed9c4',marginLeft:85,width:300,height:145,marginTop:-6}}
 InputProps={{
  endAdornment: (
    <InputAdornment position="end">
                          <label htmlFor="image-upload">

      <FileUploadOutlinedIcon fontSize="small" sx={{cursor:'pointer'}}
       />
       </label>
       <input
                      type="file"
                      id="image-upload"
                      style={{ display: 'none' }}
                      onChange={handleImageUpload}
                    />

    </InputAdornment>
  ),
}}

/>  
{selectedImage && (

              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}

</Box>
<Box>
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:6}}>To</Typography>
   <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:85,width:300,marginTop:-3}} />  

</Box>
<Box>
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:5}}>From</Typography>
  <TextField id="outlined-basic"  variant="outlined" multiline rows={5.9} label={
      <Typography sx={{marginLeft:9,marginTop:7}}>Upload File</Typography>}

   sx={{backgroundColor:'#eed9c4',marginLeft:85,width:300,height:170,marginTop:-3}} 
   InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <FileUploadOutlinedIcon fontSize="small" sx={{cursor:'pointer'}}
         />
      </InputAdornment>
    ),
  }}
  />

</Box>
</Box>
<Box>
<Button variant="contained" sx={{marginLeft:65,marginTop:5,width:150,height:50,backgroundColor:'#eed9c4',color:'black','&:hover': {backgroundColor: 'White'},fontSize:23}}>
          Create</Button>

</Box>

        </Box>
        </Box>
  )
}

export default CreateEmailCampaignForm
