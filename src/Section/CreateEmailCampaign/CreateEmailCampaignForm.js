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
            <Typography sx={{fontSize:20,marginTop:8,marginLeft:3,}}>Campaign Name</Typography>
            <TextField id="outlined-basic"  variant="outlined" sx={{marginLeft:27,marginTop:-6,backgroundColor:'#eed9c4',width:300,borderRadius:1,        '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent', // Remove the border color
      },
      '&:hover fieldset': {
        borderColor: 'transparent', // Remove the border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent', // Remove the border color on focus
      },
    },
  }}
 />

          </Box>
          <Box>
          <Typography sx={{fontSize:20,marginLeft:3,marginTop:4}}>Subject</Typography>
             <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,marginTop:-4,borderRadius:1,    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent', // Remove the border color
      },
      '&:hover fieldset': {
        borderColor: 'transparent', // Remove the border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent', // Remove the border color on focus
      },
    },
}}
            /> 
           </Box>
           <Box>
            <Typography sx={{fontSize:20,marginLeft:3,marginTop:6}}>Description</Typography>
             <TextField id="outlined-basic"  variant="outlined"  multiline rows={5.1}
 sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,height:150,marginTop:-4,borderRadius:1,
 '& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderColor: 'transparent', // Remove the border color
  },
  '&:hover fieldset': {
    borderColor: 'transparent', // Remove the border color on hover
  },
  '&.Mui-focused fieldset': {
    borderColor: 'transparent', // Remove the border color on focus
  },
},
}} />  

           </Box>
            <Box>
              <Typography sx={{fontSize:20,marginLeft:3,marginTop:7}}>Link</Typography>
              <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:27,width:300,marginTop:-4,borderRadius:2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent', // Remove the border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent', // Remove the border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', // Remove the border color on focus
                  },
                },
            }} />  
</Box>
</Box>
<Box>
<Box>
  <Typography sx={{ fontSize: 20, marginLeft: 73, marginTop: -56 }}>Image</Typography>
  <Box
    sx={{
      backgroundColor: '#eed9c4',
      marginLeft: 85,
      width: 300,
      height: 145,
      marginTop: -6,
      position: 'relative',
      borderRadius: '4px',
    }}
  >
    {selectedImage ? (
      <img
        src={URL.createObjectURL(selectedImage)}
        alt="Uploaded Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '4px',
        }}
      />
    ) : (
      <>
        <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
          <FileUploadOutlinedIcon fontSize="small" sx={{ cursor: 'pointer', color: '#888', margin: '20px',marginLeft:16,marginTop:5 }} />
        </label>
        <input
          type="file"
          id="image-upload"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
                <Typography variant="body1" sx={{ position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)', color: '#888' }}>Upload Image</Typography>

      </>
    )}
    {selectedImage && (
      <EditIcon
        fontSize="small"
        sx={{ cursor: 'pointer', color: '#888', position: 'absolute', bottom: 8, right: 8 }}
        onClick={handleImageEdit}
      />
    )}
  </Box>
</Box>
<Box>
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:6}}>From</Typography>
   <TextField id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#eed9c4',marginLeft:85,width:300,marginTop:-3,borderRadius:1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove the border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Remove the border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Remove the border color on focus
                    },
                  },
  }} />  

</Box>
<Box >
  <Typography sx={{fontSize:20,marginLeft:73,marginTop:5}}>To</Typography>
  <Box
    sx={{
      backgroundColor: '#eed9c4',
      marginLeft: 85,
      width: 270,
      height: 170,
      marginTop: -3,
      position: 'relative',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 2,
      paddingRight: 2,
    }}
  >
    <Typography
      sx={{
        color: selectedFileTo ? 'black' : '#888',
        fontSize: '16px',
        paddingTop: 0,
        paddingLeft: 11,
        width: '90%', // Adjust width as needed
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {selectedFileTo ? selectedFileTo.name : 'Upload File'}
    </Typography>
    {selectedFileTo && (
      <EditIcon
        fontSize="small"
        sx={{ cursor: 'pointer', color: '#888' }}
        onClick={handleFileToEdit}
      />
    )}
    {!selectedFileTo && (
      <>
        <label htmlFor="file-to-upload" style={{ cursor: 'pointer',marginTop:-49 }}>
          <FileUploadOutlinedIcon
            fontSize="small"
            sx={{ cursor: 'pointer', color: '#888',marginLeft:-19 }}
          />
        </label>
        <input
          type="file"
          id="file-to-upload"
          style={{ display: 'none'}}
          onChange={handleFileToUpload}
        />

      </>
    )}
  </Box>
</Box>
</Box>
<Box>
<Button variant="contained" sx={{marginLeft:65,marginTop:5,width:150,height:50,backgroundColor:'#eed9c4',color:'black','&:hover': {backgroundColor: 'White'},fontSize:23,borderRadius:2}}>
        <Link to='/EmailcampaignTemplate' style={{ textDecoration: 'none', color: 'inherit'}}>Create</Link> </Button>

</Box>

        </Box>
        </Box>
  )
}

export default CreateEmailCampaignForm
