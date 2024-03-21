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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const drawerWidth = '40%';
const navItems = ['HOME', 'BUSINESS', 'SOCIAL CONNECT', 'CONTENT LIBRARY', 'CAMPAIGN'];

function LogNavbar(props) {
  const { window } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [campaignAnchor, setCampaignAnchor] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCampaignMenuOpen = (event) => {
    setCampaignAnchor(event.currentTarget);
  };

  const handleCampaignMenuClose = () => {
    setCampaignAnchor(null);
  };
 
  
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
                sx={{ color: 'black', flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'cursive' }}
              >
                SyncMedia Hub
              </Typography>
            </Box>
           {matches&& <Box sx={{ display: 'flex', gap: 7, paddingRight: 5 }}>
              {navItems.map((item) => (
                <React.Fragment key={item}>
                  {item === 'CAMPAIGN' ? (
                    <>
                      <Button sx={{ color: 'black' }} onClick={handleCampaignMenuOpen}>
                        <Typography sx={{ fontWeight: 'medium' }}>{item}</Typography>
                      </Button>
                      <Menu
                        id="campaign-menu"
                        anchorEl={campaignAnchor}
                        open={Boolean(campaignAnchor)}
                        onClose={handleCampaignMenuClose}
                      >
                        <MenuItem
                          component={Link}
                          to="/EmailCampaign"
                          onClick={handleCampaignMenuClose}>
                          Email
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/Whatsappcampaign"
                          onClick={handleCampaignMenuClose}
                        >
                          Whatsapp
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <Button key={item} sx={{ color: 'black' }}>
                      {item === 'HOME' ? (
                        <Link to='/Loghome' style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography sx={{ fontWeight: 'medium' }}>{item}</Typography>
                        </Link>
                      ) : (
                        <Link to={`/${item.toLowerCase().replace(/\s/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography sx={{ fontWeight: 'medium' }}>{item}</Typography>
                        </Link>
                      )}
                    </Button>
                  )}
                </React.Fragment>
              ))}
              <IconButton color="inherit" component={Link} to="/EditProfile" style={{ textDecoration: 'none', color: 'black' }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>}
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
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2,color: 'black',fontFamily: 'cursive' }}>
              SyncMedia Hub
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'left',paddingTop:0.5,paddingLeft:3 }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
}

LogNavbar.propTypes = {
  window: PropTypes.func,
};

export default LogNavbar;
