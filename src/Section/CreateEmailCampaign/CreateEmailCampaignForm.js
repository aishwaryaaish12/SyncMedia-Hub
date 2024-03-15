import React,{useState} from 'react'
import { Box, Button, TextField, Typography,InputAdornment,Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import EditIcon from '@mui/icons-material/Edit';

function CreateEmailCampaignForm(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileTo, setSelectedFileTo] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

  };
  const handleImageEdit = () => {
    // Reset the selectedImage state to null
    setSelectedImage(null);
  };

  const handleFileToUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFileTo(file);
  };

  const handleFileToEdit = () => {
    // Reset the selectedFileTo state to null
    setSelectedFileTo(null);
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
<Typography
                sx={{ fontSize: 20, marginLeft: 73, marginTop: -56 }}
              >
                Image
              </Typography>
              <TextField
  id="outlined-basic"
                variant="outlined"
                multiline
                rows={4.9}
                label={selectedImage ? null : 'Upload Image'}
                sx={{
                  backgroundColor: '#eed9c4',
                  marginLeft: 85,
                  width: 300,
                  height: 145,
                  marginTop: -6,
                  position: 'relative',
                  borderRadius: '4px',
                  backgroundSize: '50% auto',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: selectedImage
                    ? `url(${URL.createObjectURL(selectedImage)})`
                    : 'none',
                    }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                                        {selectedImage ? (
                      <EditIcon
                      fontSize='small'
                      sx={{ cursor: 'pointer', color: '#888',position:'absolute',bottom:8,right:8 }}
                      onClick={handleImageEdit} // Call handleImageEdit on EditIcon click
                    />
                  ) : (

                      <label htmlFor="image-upload">
                        <FileUploadOutlinedIcon
                          fontSize="small"
                          sx={{ cursor: 'pointer',color:'#888' }}
                        />
                      </label>
                  )}
                      <input
                        type="file"
                        id="image-upload"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  sx: {
                    color: '#888',
                    fontSize: '16px',
                    paddingTop:6,
                    paddingLeft:7 
                  },
    
                }}
              />
            </Box>
<Box>
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:6}}>From</Typography>
   <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:85,width:300,marginTop:-3}} />  

</Box>
<Box>
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:5}}>To</Typography>
  <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={5.9}
            label={
              selectedFileTo ? (
                <Typography
                  sx={{
                    color: 'black',
                    overflow: 'hidden',
                    whiteSpace: 'pre-wrap',
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',                  }}
                >
                  {selectedFileTo.name}
                </Typography>
              ) : (
                'Upload File'
              )
            }
            sx={{
              backgroundColor: '#eed9c4',
              marginLeft: 85,
              width: 300,
              height: 170,
              marginTop: -3,
              position: 'relative',
              borderRadius: '4px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                {selectedFileTo ? (
                  <EditIcon
                    fontSize='small'
                    sx={{ cursor: 'pointer', color: '#888',position:'absolute',bottom:8,right:8 }}
                    onClick={handleFileToEdit} // Call handleFileToEdit on EditIcon click
                  />
                ) : (
              <label htmlFor="file-to-upload">
                    <FileUploadOutlinedIcon
                      fontSize="small"
                      sx={{ cursor: 'pointer',color:'#888' }}
                    />
                  </label>
                )}
                  <input
                    type="file"
                    id="file-to-upload"
                    style={{ display: 'none' }}
                    onChange={handleFileToUpload}
                  />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: {
                color: selectedFileTo ? 'black' : '#888',
                fontSize: '16px',
                paddingTop: 6,
                paddingLeft: 1
              },
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