import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nagpur Tourism
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/heritage">Heritage</Button>
          <Button color="inherit" component={Link} to="/adventure">Adventure</Button>
          <Button color="inherit" component={Link} to="/nature">Nature</Button>
          <Button color="inherit" component={Link} to="/festivals">Festivals</Button>
          <Button color="inherit" component={Link} to="/shopping">Shopping</Button>
          <Button color="inherit" component={Link} to="/architecture">Architecture</Button>
          <Button color="inherit" component={Link} to="/nightlife">Nightlife</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;