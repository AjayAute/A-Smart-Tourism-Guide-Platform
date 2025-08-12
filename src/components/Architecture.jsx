import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import ReactPlayer from 'react-player';

const Architecture = () => {
  const architecturalSites = [
    {
      name: 'Nagpur Central Museum',
      description: 'A magnificent colonial-era building showcasing Indo-British architecture, housing historical artifacts and exhibitions.',
      features: ['Colonial Architecture', 'Heritage Building', 'Museum Collections'],
      yearBuilt: '1863',
      image: 'https://source.unsplash.com/800x600/?museum,architecture',
      video: 'https://www.youtube.com/watch?v=example1',
      view360: 'https://360view.example.com/central-museum'
    },
    {
      name: 'Dragon Palace Temple',
      description: 'A stunning Buddhist temple complex featuring unique architectural elements blending Indian and Japanese styles.',
      features: ['Buddhist Architecture', 'Japanese Design', 'Meditation Halls'],
      yearBuilt: '1999',
      image: 'https://source.unsplash.com/800x600/?temple,buddhist',
      video: 'https://www.youtube.com/watch?v=example2',
      view360: 'https://360view.example.com/dragon-palace'
    },
    {
      name: 'Morris College',
      description: 'A historic educational institution with beautiful Victorian architecture and sprawling campus design.',
      features: ['Victorian Style', 'Educational Heritage', 'Gothic Elements'],
      yearBuilt: '1885',
      image: 'https://source.unsplash.com/800x600/?college,victorian',
      video: 'https://www.youtube.com/watch?v=example3',
      view360: 'https://360view.example.com/morris-college'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.dark',
          color: 'white',
          py: 8,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Architectural Heritage
          </Typography>
          <Typography variant="h5">
            Discover Nagpur's magnificent architectural marvels
          </Typography>
        </Container>
      </Box>

      {/* Architectural Sites List */}
      <Container>
        {architecturalSites.map((site, index) => (
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
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Built in: {site.yearBuilt}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {site.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {site.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          color="primary"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
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
                  Architectural Details
                </Typography>
                <Typography variant="body2">
                  Explore the architectural details and historical significance of {site.name} through this virtual tour.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Architecture Information */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Architectural Guide
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Heritage Walks
                  </Typography>
                  <Typography>
                    Join guided heritage walks to learn about the architectural history and stories behind these magnificent structures.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Photography Tips
                  </Typography>
                  <Typography>
                    Best times for architectural photography are during early morning or late afternoon for optimal lighting conditions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Conservation Efforts
                  </Typography>
                  <Typography>
                    Learn about ongoing conservation efforts to preserve Nagpur's architectural heritage for future generations.
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

export default Architecture;