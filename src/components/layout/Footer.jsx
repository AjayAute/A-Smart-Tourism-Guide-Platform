import { Box, Container, Grid, Typography, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        py: { xs: 5, md: 7 },
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ffd700 0%, #ffa000 100%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ffd700' }}>
              About Nagpur Tourism
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
              Discover the heart of India through Nagpur's rich heritage, vibrant culture, and modern attractions. From historic temples to lush gardens, experience the best of Orange City.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', minWidth: 'auto', p: 0 }}>
                <Box component="img" src="/img/social/facebook.svg" alt="Facebook" sx={{ width: 24, height: 24 }} />
              </Button>
              <Button component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', minWidth: 'auto', p: 0 }}>
                <Box component="img" src="/img/social/twitter.svg" alt="Twitter" sx={{ width: 24, height: 24 }} />
              </Button>
              <Button component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', minWidth: 'auto', p: 0 }}>
                <Box component="img" src="/img/social/instagram.svg" alt="Instagram" sx={{ width: 24, height: 24 }} />
              </Button>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ffd700' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { title: 'Home', path: '/' },
                { title: 'Attractions', path: '/attractions' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    display: 'block',
                    mb: 0.5,
                    textDecoration: 'none',
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#ffd700',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ffd700' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ color: '#ffd700', mr: 1 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                Tourism Office, Civil Lines, Nagpur, Maharashtra, India
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box component="img" src="/img/icons/phone.svg" alt="Phone" sx={{ width: 20, height: 20, mr: 1 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                +91 712 XXXXXXXX
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src="/img/icons/email.svg" alt="Email" sx={{ width: 20, height: 20, mr: 1 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                info@nagpurtourism.com
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ffd700' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.85)' }}>
              Subscribe to our newsletter for updates and exclusive offers.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  width: '100%',
                  marginBottom: '8px',
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#ffd700',
                  color: '#1a237e',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#ffc000',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} Nagpur Tourism. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 