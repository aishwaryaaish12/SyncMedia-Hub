import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Avatar, Typography, Box, IconButton, Dialog, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';


function AdminhomeForm() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleLogout = () => {
    // Clear authentication tokens or user session data
    localStorage.removeItem('accessToken'); // Example: removing access token from localStorage
  
    // Redirect the user to the login page
    window.location.href = '/Login'; // Example: redirecting to the login page
  };

  return (
    <Box>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} style={{ position: 'absolute', top: 15, left: 35 }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <Box display="flex" alignItems="center" p={2}>
            <Avatar sx={{ width: 50, height: 50,cursor:'pointer' }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h6" ml={2} sx={{cursor:'pointer'}}>Admin</Typography>
          </Box>
          <List>
            <ListItem sx={{cursor:'pointer'}} button component={Link} to="/adminhome" onClick={handleDrawerClose}>

          <DashboardIcon sx={{color:'gray'}}>
                <HomeIcon />
              </DashboardIcon>
              <ListItemText primary="Dashboard" sx={{marginLeft:3.8}}/>
            </ListItem>
            <ListItem sx={{cursor:'pointer'}} button component={Link} to="/adminhome" onClick={handleDrawerClose}>

          <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box p={2} sx={{cursor:'pointer'}}>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box bgcolor="primary.main" color="white" p={2} m={1} width='300px' height='150px' marginTop='50px' marginLeft='100px' textAlign='center' gap='15px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/TotalUsers" style={{ textDecoration: 'none', color: 'inherit'}}>Total Users</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        <Box bgcolor="secondary.main" color="white" p={2} m={1} width='300px' height='150px' textAlign='center'marginLeft='100px' marginTop='50px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/ActiveUsers" style={{ textDecoration: 'none', color: 'inherit'}}>Active Users</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box bgcolor="error.main" color="white" p={2} m={1} width='300px' height='150px' textAlign='center' marginTop='20px' marginLeft='100px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/InactiveUsers" style={{ textDecoration: 'none', color: 'inherit'}}>Inactive Users</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        <Box bgcolor="warning.main" color="white" p={2} m={1} width='300px' height='150px' textAlign='center' marginTop='20px' marginLeft='100px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/BlockedUsers" style={{ textDecoration: 'none', color: 'inherit'}}>Blocked Users</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row'}}>

        <Box bgcolor="info.main" color="white" p={2} m={1} width='300px' height='150px' textAlign='center' marginTop='20px' marginLeft='100px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/SubscribedUsers" style={{ textDecoration: 'none', color: 'inherit'}}>Subscribed Users</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        <Box bgcolor="success.main" color="white" p={2} m={1} width='300px' height='150px' textAlign='center' marginTop='20px' marginLeft='100px' borderRadius='5px' boxShadow={3}>
          <Typography variant="h6" sx={{marginTop:5}}><Link to="/Feedback" style={{ textDecoration: 'none', color: 'inherit'}}>Feedback</Link></Typography>
          <Typography variant="subtitle1">0</Typography>
        </Box>
        </Box>
      </Box>
      <Button onClick={handleDialogOpen}></Button>
      <Dialog open={openDialog} onClose={handleDialogClose}>
      </Dialog>
    </Box>
  );
}

export default AdminhomeForm;
