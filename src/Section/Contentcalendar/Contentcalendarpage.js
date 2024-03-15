import { Box, Typography } from '@mui/material';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

function Contentcalendarpage() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const tileClassName = ({ date, view }) => {
    // Customize the class based on the date or view
    return 'custom-calendar-tile'; // You can adjust this class name as needed
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant='h2'>Content Calendar</Typography>
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={tileClassName}
      />
    </Box>
  );
}

export default Contentcalendarpage;
