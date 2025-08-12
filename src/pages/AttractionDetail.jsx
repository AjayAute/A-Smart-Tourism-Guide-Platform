import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { attractions } from '../data/attractions';

function AttractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [show360View, setShow360View] = useState(false);

  const attraction = attractions.find((a) => a.id === parseInt(id));

  if (!attraction) {
    return (
      <Container>
        <Typography variant="h4">Attraction not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          width: '100%',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${attraction.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
            <IconButton
              onClick={() => navigate(-1)}
              sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.3)', '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' } }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {attraction.title}
            </Typography>
            <Chip label={attraction.category} color="primary" sx={{ fontSize: '1.1rem', py: 1, px: 2 }} />
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 6 }}>
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                About {attraction.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {attraction.fullDescription}
              </Typography>
            </Paper>

            {/* 360 View Section */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ViewInArIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h5">360° Virtual Tour</Typography>
              </Box>
              {show360View ? (
                <Box sx={{ width: '100%', height: '400px' }}>
                  <iframe
                    title="360 View"
                    src={attraction.virtualTour}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    background: `url(${attraction.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => setShow360View(true)}
                >
                  <Button variant="contained" size="large" startIcon={<ViewInArIcon />}>
                    Start 360° Tour
                  </Button>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Visitor Information
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Timings
                  </Typography>
                  <Typography variant="body1">{attraction.timings}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarTodayIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Best Time to Visit
                  </Typography>
                  <Typography variant="body1">{attraction.bestTimeToVisit}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AttachMoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Entry Fee
                  </Typography>
                  <Typography variant="body1">{attraction.entryFee}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body1">{attraction.location}</Typography>
                </Box>
              </Box>
            </Paper>

            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Nearby Attractions
              </Typography>
              {attraction.nearbyAttractions.map((place, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PlaceIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">{place}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AttractionDetail;
