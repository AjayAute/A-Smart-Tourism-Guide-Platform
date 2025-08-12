import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '15px',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
    '& .MuiButton-root': {
      backgroundColor: theme.palette.primary.dark,
    }
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
  transition: 'transform 0.5s ease-in-out',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '10px 25px',
  borderRadius: '25px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

const Home = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Function to handle video loading completion
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    // Add a small delay before showing the video to ensure smooth transition
    setTimeout(() => {
      setIsVideoReady(true);
    }, 100);
  };

  const attractions = [
    {
      title: 'Heritage Sites',
      image: '/images/heritage.jpg',
      path: '/heritage',
      description: 'Explore the rich heritage of Nagpur',
      icon: '🏛️'
    },
    {
      title: 'Adventure Sites',
      image: '/images/adventure.jpg',
      path: '/adventure',
      description: 'Discover thrilling adventures',
      icon: '🏃'
    },
    {
      title: 'Nature & Wildlife',
      image: '/images/nature.jpg',
      path: '/nature',
      description: 'Experience the natural beauty',
      icon: '🌿'
    },
    {
      title: 'Local Cuisine',
      image: '/images/food.jpg',
      path: '/food',
      description: 'Taste the authentic flavors',
      icon: '🍽️'
    },
    {
      title: 'Shopping',
      image: '/images/shopping.jpg',
      path: '/shopping',
      description: 'Shop local crafts and souvenirs',
      icon: '🛍️'
    },
    {
      title: 'Events',
      image: '/images/events.jpg',
      path: '/events',
      description: 'Discover local festivals and events',
      icon: '🎉'
    }
  ];

  return (
    <Box>
      <Box sx={{ 
        position: 'relative',
        height: '80vh',
        overflow: 'hidden',
        marginBottom: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
          zIndex: 1,
        },
      }}>
        {/* Loading Spinner */}
        {isVideoLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 2,
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        )}

        {/* Background Video */}
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: isVideoReady ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            willChange: 'opacity',
            transform: 'translateZ(0)', // Hardware acceleration
            zIndex: 0,
          }}
        >
          <source src="/img/hero/Background 3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            padding: 2,
            zIndex: 2,
            opacity: isVideoReady ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            willChange: 'opacity',
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
            }}
          >
            Welcome to Nagpur
          </Typography>
          <Typography 
            variant="h5"
            sx={{
              maxWidth: '800px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            Discover the heart of India with its rich heritage, vibrant culture, and natural wonders
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 'bold',
            color: 'primary.main'
          }}
        >
          Quick Links
        </Typography>
        
        <Grid container spacing={4}>
          {attractions.map((attraction) => (
            <Grid item xs={12} sm={6} md={4} key={attraction.title}>
              <StyledCard>
                <Box sx={{ position: 'relative' }}>
                  <StyledCardMedia
                    component="img"
                    image={attraction.image}
                    alt={attraction.title}
                  />
                  <Typography
                    variant="h1"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '3rem',
                      opacity: 0.8
                    }}
                  >
                    {attraction.icon}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    {attraction.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {attraction.description}
                  </Typography>
                  <StyledButton 
                    component={Link} 
                    to={attraction.path}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Explore More
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;