import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import ReactPlayer from 'react-player';

const Heritage = () => {
  const heritageSites = [
    {
      name: 'Deekshabhoomi',
      description: 'The largest stupa in Asia and a sacred monument of Buddhism where Dr. B.R. Ambedkar converted to Buddhism along with his followers.',
      image: 'https://source.unsplash.com/800x600/?buddhist,temple',
      video: 'https://www.youtube.com/watch?v=example1',
      view360: 'https://360view.example.com/deekshabhoomi'
    },
    {
      name: 'Zero Mile Marker',
      description: 'Historical monument marking the geographical center of colonial India, featuring beautiful architecture and historical significance.',
      image: 'https://source.unsplash.com/800x600/?monument,landmark',
      video: 'https://www.youtube.com/watch?v=example2',
      view360: 'https://360view.example.com/zero-mile'
    },
    {
      name: 'Sitabuldi Fort',
      description: 'Historic fort built in 1857, offering panoramic views of the city and insights into the region\'s military history.',
      image: 'https://source.unsplash.com/800x600/?fort,historical',
      video: 'https://www.youtube.com/watch?v=example3',
      view360: 'https://360view.example.com/sitabuldi-fort'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Heritage Sites of Nagpur
          </Typography>
          <Typography variant="h5">
            Explore the rich cultural heritage and historical landmarks
          </Typography>
        </Container>
      </Box>

      {/* Heritage Sites List */}
      <Container>
        {heritageSites.map((site, index) => (
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
                  Virtual Tour
                </Typography>
                <Typography variant="body2">
                  Experience an immersive virtual tour of {site.name}. Use the 360° view to explore every corner of this historic site.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Additional Information */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Plan Your Visit
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Best Time to Visit
                  </Typography>
                  <Typography>
                    October to March is the ideal time to explore Nagpur's heritage sites, with pleasant weather conditions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Guided Tours
                  </Typography>
                  <Typography>
                    Book a guided tour to learn about the rich history and cultural significance of these heritage sites.
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

export default Heritage;