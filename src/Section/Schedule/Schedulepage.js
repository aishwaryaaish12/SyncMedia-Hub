import { Box, Typography,TextField,Button } from '@mui/material';
import React,{useState} from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Link} from 'react-router-dom'


function Schedulepage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', position: 'relative' }}>
      <Box
        component='img'
        src='/Assets/bigstock-Calendar-With-Schedule-Plans-p-254459887-1.jpg'
        sx={{ width: 1800, height: 750, position: 'fixed', marginTop: -48, marginLeft: -105, backgroundColor: 'rgba(0, 0, 0, 0.1)', opacity: 0.2 }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#eed9c4', // Set your box background color
          width: 500, // Set your desired width
          height: 500, // Set your desired height
          borderRadius:2,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
        }}
      >
        <Box sx={{display:'flex', flexDirection:'column', gap:5, marginLeft:5, marginTop:2}}>

<Box>
  <Typography variant='h4' sx={{marginLeft:15}}>SCHEDULE</Typography>
</Box>

<Box sx={{display:'flex', flexDirection:'column', gap:3}} >

<Box sx={{display:'flex', flexDirection:'row',gap:3}}>
  <Typography>Start Date :</Typography>  
  <TextField
    type="date"
    variant="outlined"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)} sx={{width:300,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
  />
  </Box>

  <Box sx={{display:'flex', flexDirection:'row',gap:4}}>
  <Typography>End Date :</Typography> 
  <TextField
    type="date"
    variant="outlined"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)} sx={{width:300,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
  />
  </Box>

  <Box sx={{display:'flex', flexDirection:'row',gap:3}}>
  <Typography>Start Time :</Typography>
  <TextField
    type="time"
    variant="outlined"
    value={startTime}
    onChange={(e) => setStartTime(e.target.value)} sx={{width:300,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
  />
  </Box>

  <Box sx={{display:'flex', flexDirection:'row',gap:4}}>
    <Typography>End Time :</Typography>
  <TextField
    type="time"
    variant="outlined"
    value={endTime}
    onChange={(e) => setEndTime(e.target.value)} sx={{width:300,'& .MuiOutlinedInput-root': { '& fieldset': {  borderColor: 'black',}, '&:hover fieldset': {borderColor: 'black', },'&.Mui-focused fieldset': {borderColor: 'black', }}}}
  />
  </Box>

</Box>
 <Box>
  <Box sx={{display:'flex', flexDirection:'row', gap:4, marginLeft:7}}>
  <Button variant="contained" sx={{color:'black', backgroundColor:'#eed9c4',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',transition:'none','&:hover':{backgroundColor:'white'}}}>
  <DraftsIcon />
    <Link to= "/Draft" style={{ textDecoration: 'none', color: 'inherit'}}>
    Add to Draft
    </Link>
  </Button>
  <Button variant="contained" sx={{color:'black', backgroundColor:'#eed9c4',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',transition:'none','&:hover':{backgroundColor:'white'}}}>
    <UploadFileIcon/>
    <Link to= "/Socialmedia" style={{ textDecoration: 'none', color: 'inherit'}}>
    Upload
    </Link>
  </Button>
</Box>
</Box>
</Box>

      </Box>
    </Box>
  );
}

export default Schedulepage;
