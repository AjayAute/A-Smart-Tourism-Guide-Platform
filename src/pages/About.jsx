import { Box, Container, Typography, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About Nagpur
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          The Orange City of India
        </Typography>

        {/* Main Content */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* History Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
              <Typography paragraph>
                Nagpur was founded by the Gond King Bakht Buland Shah in the 18th century. 
                The city derives its name from the river Nag, which flows through it. It served 
                as the capital of the Bhonsle kings and later became a major center during the 
                British colonial period.
              </Typography>
              <Typography paragraph>
                Today, Nagpur is Maharashtra's third-largest city and winter capital. Known 
                for its oranges, it has earned the nickname "Orange City". The city is also 
                recognized as the geographical center of India, marked by the Zero Mile Marker.
              </Typography>
            </Paper>
          </Grid>

          {/* Culture Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Culture
              </Typography>
              <Typography paragraph>
                Nagpur's culture is a beautiful blend of traditions and modernity. The city 
                is known for its rich heritage, festivals, and diverse cuisine. The famous 
                Nagpur oranges and traditional Maharashtrian food are integral parts of its 
                cultural identity.
              </Typography>
              <Typography paragraph>
                The city hosts various cultural events throughout the year, celebrating art, 
                music, and literature. Its strategic location has made it a melting pot of 
                different cultures, reflected in its architecture, food, and festivals.
              </Typography>
            </Paper>
          </Grid>

          {/* Why Visit Section */}
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Why Visit Nagpur?
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Rich Heritage
                  </Typography>
                  <Typography>
                    Explore historical monuments, temples, and museums that showcase the 
                    city's rich cultural heritage and architectural beauty.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Natural Beauty
                  </Typography>
                  <Typography>
                    Enjoy the city's lakes, gardens, and nearby wildlife sanctuaries. 
                    Experience the perfect blend of urban life and natural landscapes.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Modern Amenities
                  </Typography>
                  <Typography>
                    Experience modern shopping malls, entertainment centers, and 
                    excellent connectivity while enjoying traditional charm.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Quick Facts */}
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Quick Facts
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="primary" gutterBottom>
                      1702
                    </Typography>
                    <Typography variant="body1">
                      Year Founded
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="primary" gutterBottom>
                      2.4M
                    </Typography>
                    <Typography variant="body1">
                      Population
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="primary" gutterBottom>
                      25°C
                    </Typography>
                    <Typography variant="body1">
                      Average Temperature
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box textAlign="center">
                    <Typography variant="h3" color="primary" gutterBottom>
                      100+
                    </Typography>
                    <Typography variant="body1">
                      Tourist Attractions
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 