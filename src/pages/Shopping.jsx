import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  TextField,
  IconButton,
  Stack,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsIcon from '@mui/icons-material/Directions';
import StarIcon from '@mui/icons-material/Star';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ShareIcon from '@mui/icons-material/Share';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DiamondIcon from '@mui/icons-material/Diamond';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import MapIcon from '@mui/icons-material/Map';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '15px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  }
}));

// Shopping categories with icons and gradients
const categories = [
  { 
    label: 'All', 
    value: 'all',
    icon: <AllInclusiveIcon />,
    gradient: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
  { 
    label: 'Malls', 
    value: 'malls',
    icon: <StorefrontIcon />,
    gradient: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)'
  },
  { 
    label: 'Markets', 
    value: 'markets',
    icon: <LocalMallIcon />,
    gradient: 'linear-gradient(45deg, #00BCD4 30%, #4DD0E1 90%)'
  },
  { 
    label: 'Handicrafts', 
    value: 'handicrafts',
    icon: <ShoppingBagIcon />,
    gradient: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)'
  },
  { 
    label: 'Jewelry', 
    value: 'jewelry',
    icon: <DiamondIcon />,
    gradient: 'linear-gradient(45deg, #E91E63 30%, #F48FB1 90%)'
  },
  { 
    label: 'Food & Spices', 
    value: 'food',
    icon: <RestaurantIcon />,
    gradient: 'linear-gradient(45deg, #795548 30%, #A1887F 90%)'
  },
  { 
    label: 'Wellness', 
    value: 'wellness',
    icon: <SpaIcon />,
    gradient: 'linear-gradient(45deg, #9C27B0 30%, #CE93D8 90%)'
  }
];

const shoppingPlaces = [
  {
    title: 'Empress Mall',
    image: '/img/attractions/shopping/empress-mall.jpg',
    category: 'malls',
    categories: ['Mall', 'Brands', 'Food Court'],
    highlights: ['International Brands', 'Entertainment', 'Food Court'],
    description: 'One of Nagpur\'s largest shopping malls featuring international and national brands, entertainment zones, and food courts.',
    bestTime: '10:00 AM - 9:00 PM',
    highlight: 'Premium shopping experience with international brands.',
    map: 'https://www.google.com/maps/place/Empress+Mall/@21.1533,79.0922,17z',
    location: 'North Ambazari Road, Nagpur',
    timing: '10:00 AM - 9:00 PM',
    phone: '+91 712 234 5678',
    rating: 4.5
  },
  {
    title: 'Zudio',
    image: '/img/attractions/shopping/zudio.jpg',
    category: 'brands',
    categories: ['Fashion', 'Retail', 'Brand'],
    highlights: ['Affordable Fashion', 'Multiple Locations', 'Latest Trends'],
    description: 'Popular fashion retail brand offering trendy and affordable clothing for all ages.',
    bestTime: '10:00 AM - 9:00 PM',
    highlight: 'Multiple locations across Nagpur',
    locations: [
      {
        name: 'Empress Mall Branch',
        address: 'Empress Mall, North Ambazari Road',
        map: 'https://www.google.com/maps/place/Zudio+Empress+Mall/@21.1533,79.0922,17z'
      },
      {
        name: 'VR Mall Branch',
        address: 'VR Mall, Wardha Road',
        map: 'https://www.google.com/maps/place/Zudio+VR+Mall/@21.1497,79.0884,16z'
      },
      {
        name: 'West High Court Branch',
        address: 'West High Court Mall, West High Court Road',
        map: 'https://www.google.com/maps/place/Zudio+West+High+Court/@21.1533,79.0922,16z'
      }
    ],
    rating: 4.3
  },
  {
    title: 'Malal',
    image: '/img/attractions/shopping/malal.jpg',
    category: 'brands',
    categories: ['Fashion', 'Retail', 'Brand'],
    highlights: ['Traditional Wear', 'Multiple Locations', 'Local Brand'],
    description: 'Popular local fashion brand known for traditional and modern Indian wear.',
    bestTime: '10:00 AM - 8:00 PM',
    highlight: 'Multiple locations across Nagpur',
    locations: [
      {
        name: 'Dharampeth Branch',
        address: 'Dharampeth Main Road',
        map: 'https://www.google.com/maps/place/Malal+Dharampeth/@21.1497,79.0884,16z'
      },
      {
        name: 'Sitabuldi Branch',
        address: 'Sitabuldi Main Road',
        map: 'https://www.google.com/maps/place/Malal+Sitabuldi/@21.1533,79.0922,16z'
      },
      {
        name: 'Sadar Branch',
        address: 'Sadar Bazaar Road',
        map: 'https://www.google.com/maps/place/Malal+Sadar/@21.1497,79.0884,16z'
      }
    ],
    rating: 4.4
  },
  {
    title: 'Sitabuldi Market',
    image: '/img/attractions/shopping/sitabuldi.jpg',
    category: 'markets',
    categories: ['Local Market', 'Handicrafts', 'Street Food'],
    highlights: ['Local Crafts', 'Traditional Items', 'Street Food'],
    description: 'A vibrant traditional market known for clothing, accessories, and street food.',
    bestTime: '9:00 AM - 8:00 PM',
    highlight: 'Traditional shopping experience with local flavors.',
    map: 'https://www.google.com/maps/place/Sitabuldi,+Nagpur,+Maharashtra/@21.1497,79.0884,16z',
    location: 'Sitabuldi, Nagpur',
    timing: '9:00 AM - 8:00 PM',
    phone: '+91 712 245 6789',
    rating: 4.2
  },
  {
    title: 'Handicraft Emporium',
    image: '/img/attractions/shopping/handicraft.jpg',
    category: 'handicrafts',
    categories: ['Handicrafts', 'Artifacts', 'Souvenirs'],
    highlights: ['Traditional Crafts', 'Artifacts', 'Local Art'],
    description: 'Showcasing traditional handicrafts, artifacts, and handloom products from across Maharashtra.',
    bestTime: '10:00 AM - 7:00 PM',
    highlight: 'Authentic handicrafts and traditional artifacts.',
    map: 'https://www.google.com/maps/place/Civil+Lines,+Nagpur,+Maharashtra/@21.1533,79.0922,16z',
    location: 'Civil Lines, Nagpur',
    timing: '10:00 AM - 7:00 PM',
    phone: '+91 712 256 7890',
    rating: 4.3
  },
  {
    title: 'Jewelry Market',
    image: '/img/attractions/shopping/jewelry.jpg',
    category: 'jewelry',
    categories: ['Jewelry', 'Traditional', 'Modern'],
    highlights: ['Traditional Designs', 'Modern Jewelry', 'Custom Pieces'],
    description: 'Famous for traditional and modern jewelry designs, especially known for orange city\'s special designs.',
    bestTime: '10:00 AM - 8:00 PM',
    highlight: 'Traditional and modern jewelry designs.',
    map: 'https://www.google.com/maps/place/Dharampeth,+Nagpur,+Maharashtra/@21.1497,79.0884,16z',
    location: 'Dharampeth, Nagpur',
    timing: '10:00 AM - 8:00 PM',
    phone: '+91 712 267 8901',
    rating: 4.4
  },
  {
    title: 'Spice Market',
    image: '/img/attractions/shopping/spice.jpg',
    category: 'food',
    categories: ['Spices', 'Food Items', 'Traditional'],
    highlights: ['Authentic Spices', 'Dry Fruits', 'Local Food'],
    description: 'Famous for authentic spices, dry fruits, and traditional food items from Nagpur and surrounding regions.',
    bestTime: '9:00 AM - 7:00 PM',
    highlight: 'Authentic spices and traditional food items.',
    map: 'https://www.google.com/maps/place/Mahal,+Nagpur,+Maharashtra/@21.1533,79.0922,16z',
    location: 'Mahal, Nagpur',
    timing: '9:00 AM - 7:00 PM',
    phone: '+91 712 278 9012',
    rating: 4.1
  }
];

function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewInput, setReviewInput] = useState({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState(shoppingPlaces[0].reviews || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [mapPlaces, setMapPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Filter places based on selected category, search query, and facilities
  const filteredPlaces = shoppingPlaces.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFacilities = selectedFacilities.length === 0 || 
                              selectedFacilities.every(facility => place.facilities.includes(facility));
    return matchesCategory && matchesSearch && matchesFacilities;
  });

  // Featured places (top 3)
  const featuredPlaces = shoppingPlaces.slice(0, 3);

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = '/img/placeholder.jpg';
  };

  // Add review
  const handleAddReview = () => {
    if (reviewInput.name && reviewInput.rating && reviewInput.comment) {
      setReviews([...reviews, reviewInput]);
      setReviewInput({ name: '', rating: 0, comment: '' });
    }
  };

  // Open gallery modal
  const handleOpenGallery = (image) => {
    setCurrentGalleryImage(image);
    setGalleryOpen(true);
  };

  // Close gallery modal
  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  // Navigate gallery
  const handleNextImage = () => {
    const currentIndex = selectedPlace.gallery.indexOf(currentGalleryImage);
    const nextIndex = (currentIndex + 1) % selectedPlace.gallery.length;
    setCurrentGalleryImage(selectedPlace.gallery[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = selectedPlace.gallery.indexOf(currentGalleryImage);
    const prevIndex = (currentIndex - 1 + selectedPlace.gallery.length) % selectedPlace.gallery.length;
    setCurrentGalleryImage(selectedPlace.gallery[prevIndex]);
  };

  // Toggle map view
  const toggleMapView = () => {
    setShowMap(!showMap);
    if (!showMap) {
      setMapPlaces(filteredPlaces);
    }
  };

  // Simulate loading for map
  useEffect(() => {
    if (showMap) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [showMap]);

  const handleOpenDetails = (place) => {
    setSelectedPlace(place);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedPlace(null);
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            color: 'primary.main'
          }}
        >
          Shopping in Nagpur
        </Typography>
        
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: 6,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Discover the best shopping destinations in Nagpur, from modern malls to traditional markets
        </Typography>

        <Grid container spacing={4}>
          {shoppingPlaces.map((place) => (
            <Grid item xs={12} md={6} key={place.title}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="250"
                  image={place.image}
                  alt={place.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                      {place.title}
                    </Typography>
                    <Rating value={place.rating} precision={0.5} readOnly />
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {place.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {place.categories.map((category) => (
                      <Chip 
                        key={category} 
                        label={category} 
                        size="small"
                        sx={{ 
                          backgroundColor: 'primary.light',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                          }
                        }}
                      />
                    ))}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon color="primary" />
                      <Typography variant="body2">{place.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeIcon color="primary" />
                      <Typography variant="body2">{place.timing}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon color="primary" />
                      <Typography variant="body2">{place.phone}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                      Highlights:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {place.highlights.map((highlight) => (
                        <Chip 
                          key={highlight} 
                          label={highlight} 
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth 
                    sx={{ 
                      mt: 2,
                      borderRadius: '25px',
                      textTransform: 'none',
                      py: 1
                    }}
                    onClick={() => handleOpenDetails(place)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Details Dialog */}
        <Dialog
          open={detailsOpen}
          onClose={handleCloseDetails}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '15px',
              overflow: 'hidden'
            }
          }}
        >
          {selectedPlace && (
            <>
              <DialogTitle sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                pb: 1
              }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {selectedPlace.title}
                </Typography>
                <IconButton onClick={handleCloseDetails} size="small">
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={selectedPlace.image}
                      alt={selectedPlace.title}
                      sx={{ borderRadius: '10px' }}
                    />
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {selectedPlace.categories.map((category) => (
                        <Chip 
                          key={category} 
                          label={category} 
                          color="primary"
                          sx={{ 
                            backgroundColor: 'primary.light',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      About
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {selectedPlace.description}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    {selectedPlace.locations ? (
                      <>
                        <Typography variant="h6" gutterBottom>
                          All Locations
                        </Typography>
                        <List>
                          {selectedPlace.locations.map((location, index) => (
                            <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {location.name}
                              </Typography>
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <LocationOnIcon color="primary" />
                                  <Typography variant="body2">{location.address}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <AccessTimeIcon color="primary" />
                                  <Typography variant="body2">{location.timing}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <PhoneIcon color="primary" />
                                  <Typography variant="body2">{location.phone}</Typography>
                                </Box>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  startIcon={<MapIcon />}
                                  href={location.map}
                                  target="_blank"
                                  sx={{ alignSelf: 'flex-start', mt: 1 }}
                                >
                                  Get Directions
                                </Button>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </>
                    ) : (
                      <>
                        <Typography variant="h6" gutterBottom>
                          Information
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <LocationOnIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Location" 
                              secondary={selectedPlace.location}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <AccessTimeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Opening Hours" 
                              secondary={selectedPlace.timing}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <PhoneIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Contact" 
                              secondary={selectedPlace.phone}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <StarIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Rating" 
                              secondary={
                                <Rating value={selectedPlace.rating} precision={0.5} readOnly size="small" />
                              }
                            />
                          </ListItem>
                        </List>
                      </>
                    )}

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6" gutterBottom>
                      Highlights
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedPlace.highlights.map((highlight) => (
                        <Chip 
                          key={highlight} 
                          label={highlight} 
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>

                    <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                      {!selectedPlace.locations && (
                        <Button
                          variant="contained"
                          startIcon={<MapIcon />}
                          href={selectedPlace.map}
                          target="_blank"
                          sx={{ borderRadius: '25px' }}
                        >
                          Get Directions
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: selectedPlace.title,
                              text: selectedPlace.description,
                              url: window.location.href
                            });
                          }
                        }}
                        sx={{ borderRadius: '25px' }}
                      >
                        Share
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

export default Shopping; 