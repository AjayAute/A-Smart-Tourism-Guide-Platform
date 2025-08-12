import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Chip,
  Rating,
  Divider,
  Fade,
  Zoom,
  Grow,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  Search,
  LocationOn,
  AccessTime,
  CalendarToday,
  People,
  BookOnline,
  Close,
  Event,
  AttachMoney,
  Star,
  StarBorder,
  StarHalf,
  EmojiEvents,
  LocalOffer,
  TrendingUp,
  Whatshot,
  DirectionsCar,
  Hotel,
  Restaurant,
  ShoppingBag,
  Nightlife,
  Nature,
  Architecture,
  Festival,
  AccountBalance,
} from '@mui/icons-material';

// Featured attractions data
const featuredAttractions = [
  {
    id: 1,
    title: "Deekshabhoomi",
    description: "A sacred monument of Buddhism, where Dr. B.R. Ambedkar converted to Buddhism.",
    image: "/img/attractions/deekshabhoomi.jpg",
    rating: 4.8,
    reviews: 245,
    category: "Heritage",
  },
  {
    id: 2,
    title: "Ambazari Lake",
    description: "A beautiful lake surrounded by gardens and walking tracks.",
    image: "/img/attractions/ambazari-lake.jpg",
    rating: 4.6,
    reviews: 180,
    category: "Nature",
  },
  {
    id: 3,
    title: "Sitabuldi Fort",
    description: "Historic fort with panoramic views of the city.",
    image: "/img/attractions/sitabuldi-fort.jpg",
    rating: 4.7,
    reviews: 150,
    category: "Heritage",
  },
];

// Upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Nagpur Orange Festival",
    date: "2024-12-15",
    location: "Sitabuldi Fort Ground",
    image: "/img/attractions/orange-festival.jpg",
  },
  {
    id: 2,
    title: "Kalidas Festival",
    date: "2024-11-15",
    location: "Vasantrao Deshpande Hall",
    image: "/img/events/kalidas-festival.jpg",
  },
  {
    id: 3,
    title: "Nagpur Food Festival",
    date: "2024-10-20",
    location: "Dharampeth Ground",
    image: "/img/events/food-festival.jpg",
  },
];

// Quick links data
const quickLinks = [
  { title: "Attractions", icon: <Architecture />, path: "/attractions" },
  { title: "Events", icon: <Event />, path: "/events" },
  { title: "Food", icon: <Restaurant />, path: "/food" },
  { title: "Shopping", icon: <ShoppingBag />, path: "/shopping" },
  { title: "Nightlife", icon: <Nightlife />, path: "/nightlife" },
  { title: "Nature", icon: <Nature />, path: "/nature" },
  { title: "Heritage", icon: <AccountBalance />, path: "/heritage" },
  { title: "Festivals", icon: <Festival />, path: "/festivals" },
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
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

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '80vh' },
          width: '100%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            zIndex: 1,
          },
        }}
      >
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

        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            opacity: isVideoReady ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            willChange: 'opacity',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Welcome to Nagpur
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Discover the Orange City's Rich Heritage and Culture
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              maxWidth: 600,
              mx: 'auto',
              bgcolor: 'rgba(255,255,255,0.9)',
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search attractions, events, or places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  variant="contained"
                  component={RouterLink}
                  to="/attractions"
                >
                  Explore Now
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Quick Links */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 6,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Quick Links
          </Typography>
          <Grid container spacing={2}>
            {quickLinks.map((link) => (
              <Grid item xs={6} sm={4} md={3} key={link.title}>
                <Button
                  component={RouterLink}
                  to={link.path}
                  fullWidth
                  variant="outlined"
                  startIcon={link.icon}
                  sx={{
                    height: '100%',
                    py: 2,
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                  }}
                >
                  {link.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Featured Attractions */}
        <Typography variant="h4" gutterBottom>
          Featured Attractions
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {featuredAttractions.map((attraction) => (
            <Grid item xs={12} md={4} key={attraction.id}>
              <Fade in={true} timeout={500}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={attraction.image}
                    alt={attraction.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {attraction.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {attraction.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating
                        value={attraction.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        ({attraction.reviews} reviews)
                      </Typography>
                    </Box>
                    <Chip
                      label={attraction.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Upcoming Events */}
        <Typography variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {upcomingEvents.map((event) => (
            <Grid item xs={12} md={4} key={event.id}>
              <Grow in={true} timeout={500}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {event.title}
                    </Typography>
                    <Stack spacing={1}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarToday sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">
                          {new Date(event.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">{event.location}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Why Visit Nagpur */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Why Visit Nagpur?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <AccountBalance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Rich Heritage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore ancient monuments, forts, and temples that tell the story of Nagpur's glorious past.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Nature sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Natural Beauty
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover serene lakes, gardens, and wildlife sanctuaries in and around the city.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Restaurant sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Culinary Delights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Savor the famous Saoji cuisine and other local delicacies that make Nagpur a food lover's paradise.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to Explore Nagpur?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Start planning your perfect trip to the Orange City today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/attractions"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Start Planning
          </Button>
        </Paper>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home; 