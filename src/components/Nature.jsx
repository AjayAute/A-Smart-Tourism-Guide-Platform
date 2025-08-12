import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import ReactPlayer from 'react-player';

const Nature = () => {
  const natureSites = [
    {
      name: 'Pench National Park',
      description: 'One of India\'s premier tiger reserves, offering diverse wildlife experiences and safari adventures.',
      highlights: ['Tiger Safari', 'Bird Watching', 'Nature Trails'],
      bestTime: 'October to June',
      image: 'https://source.unsplash.com/800x600/?tiger,wildlife',
      video: 'https://www.youtube.com/watch?v=example1',
      view360: 'https://360view.example.com/pench'
    },
    {
      name: 'Navegaon National Park',
      description: 'A beautiful national park known for its rich biodiversity, migratory birds, and scenic landscapes.',
      highlights: ['Bird Sanctuary', 'Boating', 'Wildlife Photography'],
      bestTime: 'November to February',
      image: 'https://source.unsplash.com/800x600/?birds,sanctuary',
      video: 'https://www.youtube.com/watch?v=example2',
      view360: 'https://360view.example.com/navegaon'
    },
    {
      name: 'Gorewada Zoo',
      description: 'A modern zoological park featuring various wildlife species and educational programs about conservation.',
      highlights: ['Zoo Safari', 'Wildlife Museum', 'Nature Education'],
      bestTime: 'All year round',
      image: 'https://source.unsplash.com/800x600/?zoo,animals',
      video: 'https://www.youtube.com/watch?v=example3',
      view360: 'https://360view.example.com/gorewada-zoo'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'success.main',
          color: 'white',
          py: 8,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Nature & Wildlife
          </Typography>
          <Typography variant="h5">
            Discover the natural wonders and wildlife of Nagpur region
          </Typography>
        </Container>
      </Box>

      {/* Nature Sites List */}
      <Container>
        {natureSites.map((site, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={site.image}
                    alt={site.name}
                  />
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {site.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {site.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {site.highlights.map((highlight, idx) => (
                        <Chip
                          key={idx}
                          label={highlight}
                          color="success"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      Best Time to Visit: {site.bestTime}
                    </Typography>
                    <Button
                      variant="contained"
                      color="success"
                      href={site.view360}
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
                    url={site.video}
                    width="100%"
                    height="100%"
                    controls
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Virtual Safari Experience
                </Typography>
                <Typography variant="body2">
                  Take a virtual tour of {site.name} and experience the beauty of nature and wildlife in their natural habitat.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Visitor Information */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Visitor Information
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Safari Bookings
                  </Typography>
                  <Typography>
                    Book your wildlife safari in advance to ensure availability. Morning and evening slots available.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Photography Guidelines
                  </Typography>
                  <Typography>
                    Photography is allowed in designated areas. Special permits required for professional photography.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Conservation Tips
                  </Typography>
                  <Typography>
                    Help preserve these natural habitats by following conservation guidelines and responsible tourism practices.
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

export default Nature;