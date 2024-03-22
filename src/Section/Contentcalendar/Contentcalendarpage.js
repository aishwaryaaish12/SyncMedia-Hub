import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function Contentcalendarpage() {
  // JavaScript calendar logic
  function createCalendar(month, year) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const daysInMonth = endDate.getDate();
    const startDay = startDate.getDay();

    // let html = '<h3>' + monthNames[month] + ' ' + year + '</h3>';
    let html = '<table>';
    html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let day = 1;

    for (let i = 0; i < 6; i++) {
      html += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          html += '<td></td>';
        } else if (day > daysInMonth) {
          break;
        } else {
          let classToday = '';
          const today = new Date();
          if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            classToday = ' class="today"';
          }
          html += '<td' + classToday + '>' + day + '</td>';
          day++;
        }
      }
      html += '</tr>';
      if (day > daysInMonth) {
        break;
      }
    }

    html += '</table>';

    return html;
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarHeight, setCalendarHeight] = useState(0);

  useEffect(() => {
    // Update calendar height after component mounts or when currentDate changes
    updateCalendarHeight();
  }, [currentDate]);
  const updateCalendarHeight = () => {
    // Calculate and set the height of the calendar container
    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
      setCalendarHeight(calendarContainer.scrollHeight);
    }
  };


  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <Box position="fixed" top={0} left={0} width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#eed9c4" zIndex={1}>
      <Box position="fixed" top={25} left={650}>
      <Typography variant="h4" align="center" mb={0}>
        Content Calendar
      </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <IconButton onClick={handlePrevMonth} sx={{ marginRight: '8px' }}><ChevronLeft /></IconButton>
        <Typography variant="h5">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Typography>
        <IconButton onClick={handleNextMonth} sx={{ marginLeft: '8px' }}><ChevronRight /></IconButton>
      </Box>
      <Box
              id="calendar-container"
              position="relative"
              height={calendarHeight + 'px'}
              display="flex"
      
              
  sx={{
    '& table': { // Target the table element inside the Box
      fontSize: '15px', // Increase font size
      width: '70%', // Make table width 100%
      tableLayout: 'fixed',
      marginLeft:35, // Fix table layout to prevent cell size from shrinking
    },
    '& td': { // Target table cells
      width: '70px', // Set cell width
      height: '70px', // Set cell height
      textAlign: 'center', // Center text horizontally
      verticalAlign: 'middle', // Center text vertically
      border: '1px solid black', // Add border for clarity
    },
    '& th': { // Target table headers
      width: '100px', // Set header width
      height: '40px', // Set header height
      textAlign: 'center', // Center text horizontally
      verticalAlign: 'middle', // Center text vertically
      backgroundColor: '#f0f0f0', // Set background color for headers
      border: '1px solid black', // Add border for clarity
    },
    '.today': { // Target the cells with class 'today'
      backgroundColor: '#d5d7db', // Set background color for the current date
    },
  }}
>

      <Box dangerouslySetInnerHTML={{ __html: createCalendar(currentDate.getMonth(), currentDate.getFullYear()) }}         sx={{ '.today': { backgroundColor: '#d5d7db' } }} // Highlight current date with CSS
/>
    </Box>
    </Box>
  );
}

export default Contentcalendarpage;
