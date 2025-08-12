import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Attractions', path: '/attractions',
    subpages: [
      { title: 'Nature', path: '/nature' },
      { title: 'Heritage', path: '/heritage' },
      { title: 'Adventure', path: '/adventure' },
      { title: 'Shopping', path: '/shopping' },
      { title: 'Nightlife', path: '/nightlife' },
      { title: 'Architecture', path: '/architecture' },
    ]
  },
  { title: 'Events', path: '/events' },
  { title: 'Travel Planning', path: '/travel-planning' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAttractionsOpen, setMobileAttractionsOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        background: 'linear-gradient(90deg, #1a237e 0%, #00796b 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <Toolbar sx={{ minHeight: 70, px: { xs: 2, sm: 4 } }}>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <TravelExploreIcon sx={{ fontSize: 36, color: '#ffd700', mr: 1 }} />
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 700,
              letterSpacing: 1,
              transition: 'color 0.2s',
              '&:hover': { color: '#ffd700' },
            }}
          >
            NAGPUR TOURISM
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link, idx) =>
            link.title === 'Attractions' ? (
              <Box key={link.title} sx={{ position: 'relative' }}>
                <Button
                  onClick={handleMenuOpen}
                  endIcon={<ExpandMoreIcon />}
                  variant={idx === 0 ? 'contained' : 'text'}
                  sx={{
                    bgcolor: idx === 0 ? '#ffd700' : 'transparent',
                    color: idx === 0 ? '#1a237e' : 'white',
                    fontWeight: 600,
                    borderRadius: 3,
                    px: 3,
                    py: 1,
                    boxShadow: idx === 0 ? '0 2px 8px rgba(255,215,0,0.15)' : 'none',
                    mx: 0.5,
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: idx === 0 ? '#ffc000' : 'rgba(255,255,255,0.08)',
                      color: idx === 0 ? '#1a237e' : '#ffd700',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {link.title}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  sx={{ mt: 1 }}
                >
                  {link.subpages.map((sublink) => (
                    <MenuItem
                      key={sublink.title}
                      component={RouterLink}
                      to={sublink.path}
                      onClick={handleMenuClose}
                      sx={{
                        fontWeight: 500,
                        color: '#1a237e',
                        '&:hover': { bgcolor: '#ffd700', color: '#1a237e' },
                      }}
                    >
                      {sublink.title}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button
                key={link.title}
                component={RouterLink}
                to={link.path}
                variant={idx === 0 ? 'contained' : 'text'}
                sx={{
                  bgcolor: idx === 0 ? '#ffd700' : 'transparent',
                  color: idx === 0 ? '#1a237e' : 'white',
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  boxShadow: idx === 0 ? '0 2px 8px rgba(255,215,0,0.15)' : 'none',
                  mx: 0.5,
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: idx === 0 ? '#ffc000' : 'rgba(255,255,255,0.08)',
                    color: idx === 0 ? '#1a237e' : '#ffd700',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {link.title}
              </Button>
            )
          )}
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { bgcolor: '#1a237e', color: 'white', width: 240 } }}
        >
          <Box sx={{ mt: 2, mb: 2, px: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TravelExploreIcon sx={{ fontSize: 28, color: '#ffd700', mr: 1 }} />
              <Typography variant="h6" fontWeight={700} letterSpacing={1}>
                NAGPUR TOURISM
              </Typography>
            </Box>
            <List>
              {navLinks.map((link, idx) =>
                link.title === 'Attractions' ? (
                  <React.Fragment key={link.title}>
                    <ListItem
                      button
                      onClick={() => setMobileAttractionsOpen((open) => !open)}
                      sx={{
                        borderRadius: 2,
                        mb: 1,
                        bgcolor: 'transparent',
                        color: 'white',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.08)',
                          color: '#ffd700',
                        },
                      }}
                    >
                      <ListItemText primary={link.title} />
                      {mobileAttractionsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={mobileAttractionsOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {link.subpages.map((sublink) => (
                          <ListItem
                            button
                            key={sublink.title}
                            component={RouterLink}
                            to={sublink.path}
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                              pl: 4,
                              borderRadius: 2,
                              mb: 1,
                              bgcolor: 'transparent',
                              color: 'white',
                              fontWeight: 500,
                              '&:hover': {
                                bgcolor: '#ffd700',
                                color: '#1a237e',
                              },
                            }}
                          >
                            <ListItemText primary={sublink.title} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <ListItem
                    button
                    key={link.title}
                    component={RouterLink}
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: idx === 0 ? '#ffd700' : 'transparent',
                      color: idx === 0 ? '#1a237e' : 'white',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: idx === 0 ? '#ffc000' : 'rgba(255,255,255,0.08)',
                        color: idx === 0 ? '#1a237e' : '#ffd700',
                      },
                    }}
                  >
                    <ListItemText primary={link.title} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 