import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import ReactPlayer from 'react-player';

const Adventure = () => {
  const adventureSites = [
    {
      name: 'Ambazari Lake',
      description: 'A popular destination for water sports and boating activities, offering a perfect weekend getaway for adventure enthusiasts.',
      activities: ['Boating', 'Jet Skiing', 'Kayaking'],
      image: 'https://source.unsplash.com/800x600/?lake,watersports',
      video: 'https://www.youtube.com/watch?v=example1',
      view360: 'https://360view.example.com/ambazari-lake'
    },
    {
      name: 'Gorewada Adventure Park',
      description: 'An exciting adventure park featuring various activities and challenges for all age groups.',
      activities: ['Zip Line', 'Rock Climbing', 'Rope Course'],
      image: 'https://source.unsplash.com/800x600/?adventure,park',
      video: 'https://www.youtube.com/watch?v=example2',
      view360: 'https://360view.example.com/gorewada'
    },
    {
      name: 'Seminary Hills',
      description: 'A scenic location offering various adventure activities and nature trails perfect for hiking and outdoor activities.',
      activities: ['Hiking', 'Mountain Biking', 'Nature Trails'],
      image: 'https://source.unsplash.com/800x600/?hills,hiking',
      video: 'https://www.youtube.com/watch?v=example3',
      view360: 'https://360view.example.com/seminary-hills'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          py: 8,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Adventure Sites in Nagpur
          </Typography>
          <Typography variant="h5">
            Experience thrilling activities and outdoor adventures
          </Typography>
        </Container>
      </Box>

      {/* Adventure Sites List */}
      <Container>
        {adventureSites.map((site, index) => (
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
                      {site.activities.map((activity, idx) => (
                        <Chip
                          key={idx}
                          label={activity}
                          color="primary"
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
                  Activity Overview
                </Typography>
                <Typography variant="body2">
                  Get a preview of the exciting adventures waiting for you at {site.name}. Watch the video to see the activities in action.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Safety and Booking Information */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Adventure Information
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Safety Guidelines
                  </Typography>
                  <Typography>
                    All adventure activities are conducted under strict safety protocols with trained professionals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Booking Information
                  </Typography>
                  <Typography>
                    Book your adventure activities in advance to ensure availability and the best experience.
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

export default Adventure;