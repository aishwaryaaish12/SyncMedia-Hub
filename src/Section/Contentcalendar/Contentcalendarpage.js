import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const localizer = momentLocalizer(moment);

function ContentCalendarPage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component='img'
        src='/Assets/calendar.png'
        sx={{
          position: 'fixed',
          width: 1800,
          height: 750,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: 0.5,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white', // Set your box background color
          width: 1000, // Set your desired width
          height: 650, // Set your desired height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px', // Add padding for better spacing
        }}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', marginTop: 5 ,marginBottom:5}}>
          Content Calendar
        </Typography>
        <Box sx={{ margin: '0 auto', width: '100%', height: '90%' }}>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            marginBottom='1rem'
          >
            {/* <Button onClick={prevMonth}>&lt;</Button>
             <Typography variant='h6'>
              {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
            </Typography>  */}
            {/* <Button onClick={nextMonth}>&gt;</Button> */}
          </Box>

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ContentCalendarPage;
