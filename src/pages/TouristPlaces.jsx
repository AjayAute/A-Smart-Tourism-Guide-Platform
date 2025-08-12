import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Alert,
  Snackbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import DirectionsIcon from '@mui/icons-material/Directions';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import ChurchIcon from '@mui/icons-material/Church';
import { Link as RouterLink } from 'react-router-dom';

// Mock data for tourist places
const touristPlaces = [
  {
    id: 1,
    name: 'Deekshabhoomi',
    description: 'A sacred monument of Buddhism and a major tourist attraction in Nagpur. It is the largest hollow stupa in the world.',
    image: '/img/places/deekshabhoomi.jpg',
    category: 'Religious',
    rating: 4.8,
    timing: '6:00 AM - 8:00 PM',
    entryFee: 'Free',
    location: 'North Nagpur',
    coordinates: { lat: 21.1458, lng: 79.0882 },
    highlights: [
      'World\'s largest hollow stupa',
      'Buddhist architecture',
      'Peaceful atmosphere',
      'Historical significance'
    ],
    nearbyPlaces: [
      'Nagpur Railway Station (2 km)',
      'Sitabuldi Fort (3 km)',
      'Zero Mile (3.5 km)'
    ],
    bestTimeToVisit: 'October to March',
    facilities: [
      'Parking available',
      'Guides available',
      'Restrooms',
      'Food stalls'
    ],
    tips: [
      'Visit during early morning or evening for better experience',
      'Wear comfortable shoes',
      'Carry water and snacks',
      'Respect the religious significance of the place'
    ]
  },
  {
    id: 2,
    name: 'Sitabuldi Fort',
    description: 'A historic fort that played a significant role in the Anglo-Maratha War. Now a major tourist attraction with beautiful gardens.',
    image: '/img/places/sitabuldi-fort.jpg',
    category: 'Historical',
    rating: 4.5,
    timing: '9:00 AM - 5:00 PM',
    entryFee: '₹20',
    location: 'Central Nagpur',
    coordinates: { lat: 21.1539, lng: 79.0822 },
    highlights: [
      'Historic architecture',
      'Beautiful gardens',
      'City viewpoint',
      'War memorial'
    ],
    nearbyPlaces: [
      'Zero Mile (1 km)',
      'Deekshabhoomi (3 km)',
      'Nagpur Railway Station (2 km)'
    ],
    bestTimeToVisit: 'October to March',
    facilities: [
      'Parking available',
      'Guides available',
      'Restrooms',
      'Food court'
    ],
    tips: [
      'Visit during weekdays to avoid crowds',
      'Carry camera for photography',
      'Wear comfortable walking shoes',
      'Visit the war memorial inside the fort'
    ]
  },
  {
    id: 3,
    name: 'Ambazari Lake',
    description: 'A beautiful lake surrounded by gardens and walking tracks. Perfect for morning walks and evening relaxation.',
    image: '/img/places/ambazari-lake.jpg',
    category: 'Nature',
    rating: 4.6,
    timing: '5:00 AM - 9:00 PM',
    entryFee: 'Free',
    location: 'South Nagpur',
    coordinates: { lat: 21.1234, lng: 79.0567 },
    highlights: [
      'Scenic beauty',
      'Walking tracks',
      'Boating facilities',
      'Garden area'
    ],
    nearbyPlaces: [
      'Nagpur Airport (5 km)',
      'Maharajbagh (3 km)',
      'Raman Science Centre (4 km)'
    ],
    bestTimeToVisit: 'Year-round',
    facilities: [
      'Parking available',
      'Boating facilities',
      'Food stalls',
      'Children\'s play area'
    ],
    tips: [
      'Visit during sunrise or sunset',
      'Carry water and snacks',
      'Wear comfortable shoes for walking',
      'Try boating in the lake'
    ]
  },
  {
    id: 4,
    name: 'Maharajbagh',
    description: 'A historic garden with rare plant species, a zoo, and beautiful walking paths. Perfect for nature lovers.',
    image: '/img/places/maharajbagh.jpg',
    category: 'Nature',
    rating: 4.4,
    timing: '6:00 AM - 6:00 PM',
    entryFee: '₹20',
    location: 'Central Nagpur',
    coordinates: { lat: 21.1345, lng: 79.0789 },
    highlights: [
      'Rare plant species',
      'Mini zoo',
      'Walking paths',
      'Historic significance'
    ],
    nearbyPlaces: [
      'Sitabuldi Fort (2 km)',
      'Zero Mile (1.5 km)',
      'Deekshabhoomi (4 km)'
    ],
    bestTimeToVisit: 'October to March',
    facilities: [
      'Parking available',
      'Restrooms',
      'Food stalls',
      'Children\'s play area'
    ],
    tips: [
      'Visit during early morning',
      'Carry water and snacks',
      'Don\'t miss the mini zoo',
      'Photography is allowed'
    ]
  },
  {
    id: 5,
    name: 'Raman Science Centre',
    description: 'An interactive science museum with various exhibits and activities for all age groups.',
    image: '/img/places/raman-science.jpg',
    category: 'Educational',
    rating: 4.7,
    timing: '10:00 AM - 5:00 PM',
    entryFee: '₹50',
    location: 'South Nagpur',
    coordinates: { lat: 21.1123, lng: 79.0456 },
    highlights: [
      'Interactive exhibits',
      'Science shows',
      '3D theater',
      'Planetarium'
    ],
    nearbyPlaces: [
      'Ambazari Lake (4 km)',
      'Nagpur Airport (6 km)',
      'Maharajbagh (3 km)'
    ],
    bestTimeToVisit: 'Year-round',
    facilities: [
      'Parking available',
      'Cafeteria',
      'Restrooms',
      'Gift shop'
    ],
    tips: [
      'Book planetarium shows in advance',
      'Allow 2-3 hours for visit',
      'Great for children',
      'Photography allowed in some areas'
    ]
  }
];

function TouristPlaces() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [likedPlaces, setLikedPlaces] = useState(() => {
    const saved = localStorage.getItem('likedPlaces');
    return saved ? JSON.parse(saved) : {};
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const categories = ['all', 'Religious', 'Historical', 'Nature', 'Educational'];

  // Filter places based on search and category
  const filteredPlaces = touristPlaces.filter((place) => {
    const matchesSearch = searchQuery === '' || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || 
      place.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Handle like/unlike
  const handleLikeClick = (placeId) => {
    setLikedPlaces(prev => {
      const newLiked = { ...prev, [placeId]: !prev[placeId] };
      localStorage.setItem('likedPlaces', JSON.stringify(newLiked));
      setSnackbar({
        open: true,
        message: newLiked[placeId] ? "Added to favorites" : "Removed from favorites",
        severity: "success"
      });
      return newLiked;
    });
  };

  // Handle share
  const handleShare = async (place) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: place.name,
          text: place.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          `${place.name}\n${place.description}\n${window.location.href}`
        );
        setSnackbar({
          open: true,
          message: "Link copied to clipboard!",
          severity: "success"
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      setSnackbar({
        open: true,
        message: "Error sharing place",
        severity: "error"
      });
    }
  };

  // Place Card Component
  const PlaceCard = ({ place }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: isLaptop ? 'row' : 'column',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
            '& .MuiCardMedia-root': {
              transform: 'scale(1.05)',
            },
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ 
          position: 'relative', 
          overflow: 'hidden', 
          height: isLaptop ? '100%' : 200,
          width: isLaptop ? '40%' : '100%'
        }}>
          <CardMedia
            component="img"
            image={place.image}
            alt={place.name}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              display: 'flex',
              gap: 1,
              opacity: isHovered ? 1 : 0.7,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            <Tooltip title={likedPlaces[place.id] ? "Remove from favorites" : "Add to favorites"}>
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  handleLikeClick(place.id);
                }}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                }}
              >
                {likedPlaces[place.id] ? (
                  <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  handleShare(place);
                }}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                }}
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Chip
            label={place.category}
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
            }}
          />
        </Box>
        <CardContent sx={{ 
          flexGrow: 1, 
          p: 3,
          width: isLaptop ? '60%' : '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {place.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary" sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {place.location}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                height: isLaptop ? '4.5em' : '6em',
              }}
            >
              {place.description}
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip
                size="small"
                icon={<AccessTimeIcon />}
                label={place.timing}
                color="info"
                variant="outlined"
              />
              <Chip
                size="small"
                icon={<LocalOfferIcon />}
                label={place.entryFee}
                color="success"
                variant="outlined"
              />
              <Chip
                size="small"
                icon={<Rating value={place.rating} readOnly size="small" />}
                label={`${place.rating}/5`}
                color="warning"
                variant="outlined"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<InfoIcon />}
              onClick={() => {
                setSelectedPlace(place);
                setIsDetailsDialogOpen(true);
              }}
              sx={{
                '&:hover': {
                  transform: 'translateX(4px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };

  // Place Details Dialog
  const PlaceDetailsDialog = () => (
    <Dialog
      open={isDetailsDialogOpen}
      onClose={() => setIsDetailsDialogOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden',
        }
      }}
    >
      {selectedPlace && (
        <>
          <DialogTitle sx={{ 
            p: { xs: 1, sm: 2 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography variant="h5">{selectedPlace.name}</Typography>
            <IconButton onClick={() => setIsDetailsDialogOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ mb: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedPlace.image}
                alt={selectedPlace.name}
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedPlace.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Highlights
                </Typography>
                <Grid container spacing={2}>
                  {selectedPlace.highlights.map((highlight, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocalOfferIcon color="primary" />
                        <Typography>{highlight}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Visit Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <AccessTimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Timing"
                        secondary={selectedPlace.timing}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocalOfferIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Entry Fee"
                        secondary={selectedPlace.entryFee}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationOnIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Location"
                        secondary={selectedPlace.location}
                      />
                    </ListItem>
                  </List>
                </Paper>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Tips for Visitors
                  </Typography>
                  <List>
                    {selectedPlace.tips.map((tip, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <InfoIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={tip} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setIsDetailsDialogOpen(false)}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DirectionsIcon />}
              onClick={() => {
                // Open Google Maps with directions
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.coordinates.lat},${selectedPlace.coordinates.lng}`,
                  '_blank'
                );
              }}
            >
              Get Directions
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '40vh', md: '60vh' },
          width: '100%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="/img/hero/tourist-places.jpg"
          alt="Nagpur Tourist Places"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #fff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tourist Places in Nagpur
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Discover the rich heritage and beautiful attractions of Nagpur
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Search and Filter Section */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="Category"
                  sx={{ borderRadius: 2 }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Places Grid */}
        {filteredPlaces.length > 0 ? (
          <Grid container spacing={3}>
            {filteredPlaces.map((place) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={place.id}>
                <PlaceCard place={place} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" gutterBottom>
              No places found matching your criteria
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Try adjusting your filters or search terms
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              sx={{ borderRadius: 2 }}
            >
              Clear All Filters
            </Button>
          </Box>
        )}
      </Container>

      {/* Place Details Dialog */}
      <PlaceDetailsDialog />

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

export default TouristPlaces; 