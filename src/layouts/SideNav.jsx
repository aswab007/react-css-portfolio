import React, { useState } from 'react'; 
import './SideNav.css';  // Import the CSS file

import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Box, 
  Typography, 
  Divider, 
} from '@mui/material'; 
import { useMediaQuery } from '@mui/material'; 
import { Link } from 'react-router-dom'; 
import profilePic from './profilepic2.jpg';  // Updated path 
import './SideNav.css';  // Import the CSS file for styling

export default function SideNav() { 
  const isMobile = useMediaQuery('(max-width:600px)'); 
  const [open, setOpen] = useState(false); 
 
  const toggleDrawer = () => { 
    setOpen(!open); 
  }; 
 
  const drawerContent = ( 
    <Box sx={{ width: 240, textAlign: 'center', bgcolor: '#111', color: 'white', height: '100%' }}> 
      <Box sx={{ padding: '20px 0' }}> 
        <img 
          src={profilePic} 
          alt="Profile" 
          className="profile-img" // Apply CSS class for animation
        /> 
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}> 
          Muhammad Aswab Khalil 
        </Typography> 
        <Typography variant="body2" sx={{ color: '#aaa' }}> 
          Amateur Web Developer | Designer 
        </Typography> 
      </Box> 
      <Divider sx={{ bgcolor: '#444' }} /> 
      <List> 
        <ListItem button component={Link} to="/"> 
          <ListItemText primary="Home" sx={{ color: 'white', pl: 2 }} /> 
        </ListItem> 
        <ListItem button component={Link} to="/education"> 
          <ListItemText primary="Education" sx={{ color: 'white', pl: 2 }} /> 
        </ListItem> 
        <ListItem button component={Link} to="/projects"> 
          <ListItemText primary="Projects" sx={{ color: 'white', pl: 2 }} /> 
        </ListItem> 
        <ListItem button component={Link} to="/contact"> 
          <ListItemText primary="Contact" sx={{ color: 'white', pl: 2 }} /> 
        </ListItem> 
      </List> 
    </Box> 
  ); 
 
  return ( 
    <> 
      {isMobile && ( 
        <Button onClick={toggleDrawer} sx={{ m: 1 }}> 
          Toggle Menu 
        </Button> 
      )} 
      <Drawer 
        variant={isMobile ? 'temporary' : 'permanent'} 
        anchor="left" 
        open={!isMobile || open} 
        onClose={toggleDrawer} 
        sx={{ zIndex: 1200 }} 
      > 
        {drawerContent} 
      </Drawer> 
    </> 
  ); 
} 
