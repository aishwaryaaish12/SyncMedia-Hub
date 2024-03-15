import React from 'react'
import { Box, Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

function Draftpage () {
  const [selectedOption, setSelectedOption] = useState("All Draft");
  const [draft, setDraft] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box>

    <Box sx={{display:'flex',flexDirection:'column',gap:1}}>

        <Box>
          <Typography variant='h3' sx={{marginLeft:70}}>DRAFT</Typography>
        </Box>

        <Box sx={{display:'flex', flexDirection:'row', backgroundColor:'white',width:1250, height:650,}}>

          <Box sx={{backgroundColor:'#eed9c4', marginLeft:5, marginTop:5, marginBottom:5, width:250, borderStyle:'dotted'}}>
          
            <FormControl sx={{marginTop:5, marginLeft:4}}>
            <Typography variant='h6' sx={{fontWeight:'bold', marginLeft:5}}>DRAFT</Typography>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedOption}
            onChange={handleOptionChange}
            name="radio-buttons-group">
            <FormControlLabel value="All Draft" control={<Radio />} label="All Draft" />
            <FormControlLabel value="Scheduled Draft" control={<Radio />} label="Scheduled Draft" />
            <FormControlLabel value="Unscheduled Draft" control={<Radio />} label="Unscheduled Draft" />
            </RadioGroup>
            </FormControl>
          
          </Box>  
          <Box sx={{backgroundColor:'#eed9c4', marginLeft:1, marginTop:5, marginBottom:5, width:900, borderStyle:'dotted'}}>
          {draft ? (
              // Show the draft content
              <Typography variant="body1">{draft}</Typography>
            ) : (
              // Show the image if draft is empty
              <img src="/Assets/Add files-amico.png" alt="Uploaded Image" style={{ width: '100%', height: '100%', }} />
            )}
          </Box>

        </Box>

    </Box>

    </Box>
  )
}

export default Draftpage
