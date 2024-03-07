import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const drawerWidth = '100%';
const navItems = ['HOME', 'SERVICES', 'ABOUT US', 'CONTACT US'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex', backgroundColor: '#eed9c4', overflow: 'hidden' }}>
        <CssBaseline />
        <AppBar component="nav" elevation={0} sx={{ backgroundColor: '#eed9c4' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: 'black', flexGrow: 1, display: { xs: 'none', sm: 'block' },fontFamily:'cursive' }}
              >
                SyncMedia Hub
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 8, paddingRight: 10 }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#000' }}>
                  {item === 'HOME' ? (
                  <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ fontWeight: 'medium' }}>
                  {item}
                  </Typography>
                  </Link>) : (<Link to={`/${item.toLowerCase().replace(/\s/g, '')}`} style={{ textDecoration: 'none',color:'inherit' }}>
                      <Typography sx={{ fontWeight: 'medium' }}>{item}</Typography>
                    </Link>)} 
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;