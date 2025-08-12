import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import ReactPlayer from 'react-player';

const Shopping = () => {
  const shoppingDestinations = [
    {
      name: 'Sitabuldi Market',
      description: 'The heart of Nagpur\'s shopping district, featuring a mix of traditional and modern retail stores.',
      specialties: ['Traditional Wear', 'Electronics', 'Street Shopping'],
      timing: '10:00 AM - 9:00 PM',
      image: 'https://source.unsplash.com/800x600/?market,shopping',
      video: 'https://www.youtube.com/watch?v=example1',
      view360: 'https://360view.example.com/sitabuldi-market'
    },
    {
      name: 'Empress Mall',
      description: 'A modern shopping destination with international brands, entertainment, and dining options.',
      specialties: ['Fashion Brands', 'Food Court', 'Multiplex'],
      timing: '11:00 AM - 10:00 PM',
      image: 'https://source.unsplash.com/800x600/?mall,shopping',
      video: 'https://www.youtube.com/watch?v=example2',
      view360: 'https://360view.example.com/empress-mall'
    },
    {
      name: 'Cotton Market',
      description: 'Historic market known for textiles, traditional clothing, and local handicrafts.',
      specialties: ['Textiles', 'Handicrafts', 'Traditional Items'],
      timing: '9:00 AM - 8:00 PM',
      image: 'https://source.unsplash.com/800x600/?textile,market',
      video: 'https://www.youtube.com/watch?v=example3',
      view360: 'https://360view.example.com/cotton-market'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'info.main',
          color: 'white',
          py: 8,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Shopping Destinations
          </Typography>
          <Typography variant="h5">
            Explore the best shopping experiences in Nagpur
          </Typography>
        </Container>
      </Box>

      {/* Shopping Destinations List */}
      <Container>
        {shoppingDestinations.map((destination, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={destination.image}
                    alt={destination.name}
                  />
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {destination.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Timing: {destination.timing}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {destination.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {destination.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          color="info"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="info"
                      href={destination.view360}
                      target="_blank"
                      sx={{ mr: 2 }}
                    >
                      View 360°
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ height: '400px', mb: 2 }}>
                  <ReactPlayer
                    url={destination.video}
                    width="100%"
                    height="100%"
                    controls
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Shopping Experience
                </Typography>
                <Typography variant="body2">
                  Take a virtual tour of {destination.name} and explore the shopping experience before your visit.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Shopping Tips */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Shopping Guide
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Best Time to Shop
                  </Typography>
                  <Typography>
                    Visit during morning hours for traditional markets and evenings for malls and modern shopping centers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Local Specialties
                  </Typography>
                  <Typography>
                    Don't miss out on Nagpur's famous orange products, traditional handicrafts, and cotton textiles.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Shopping Tips
                  </Typography>
                  <Typography>
                    Bargaining is common in traditional markets. Carry cash for street shopping and cards for malls.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Shopping;