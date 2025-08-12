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
import NightlifeIcon from '@mui/icons-material/Nightlife';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import MapIcon from '@mui/icons-material/Map';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';

// Nightlife categories with icons and gradients
const categories = [
  { 
    label: 'All', 
    value: 'all',
    icon: <AllInclusiveIcon />,
    gradient: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
  { 
    label: 'Bars', 
    value: 'bars',
    icon: <LocalBarIcon />,
    gradient: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)'
  },
  { 
    label: 'Clubs', 
    value: 'clubs',
    icon: <NightlifeIcon />,
    gradient: 'linear-gradient(45deg, #00BCD4 30%, #4DD0E1 90%)'
  },
  { 
    label: 'Live Music', 
    value: 'liveMusic',
    icon: <MusicNoteIcon />,
    gradient: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)'
  },
  { 
    label: 'Restaurants', 
    value: 'restaurants',
    icon: <RestaurantIcon />,
    gradient: 'linear-gradient(45deg, #E91E63 30%, #F48FB1 90%)'
  }
];

const nightlifePlaces = [
  {
    title: 'The Blue Bar',
    image: '/img/attractions/nightlife/blue-bar.jpg',
    category: 'bars',
    gallery: [
      '/img/nightlife/blue-bar.jpg',
      '/img/nightlife/blue-bar-2.jpg',
      '/img/nightlife/blue-bar-3.jpg',
    ],
    description: 'A trendy bar with a wide selection of cocktails and live music.',
    bestTime: '6:00 PM - 12:00 AM',
    highlight: 'Signature cocktails and live music.',
    map: 'https://goo.gl/maps/bluebar123',
    openingHours: '6:00 PM - 12:00 AM',
    entryFee: 'Free',
    facilities: ['Live Music', 'Cocktails', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5678',
    howToReach: 'Located in Sadar, easily accessible by city buses and autos.',
    tips: [
      'Visit during happy hour for discounts.',
      'Reservations recommended on weekends.',
      'Try the signature cocktail.',
      'Best time to visit: 8 PM - 10 PM'
    ],
    nearby: [
      { title: 'The Club', path: '/nightlife' },
      { title: 'Live Music Cafe', path: '/nightlife' },
    ],
    reviews: [
      { user: 'Rahul', rating: 5, comment: 'Great atmosphere!' },
      { user: 'Priya', rating: 4, comment: 'Good music and drinks.' }
    ],
    events: ['Live Band (Weekly)', 'Cocktail Making Workshop (Monthly)'],
    weather: '28°C, Clear',
    pdfGuide: '/guides/blue-bar-guide.pdf',
    whatToDo: ['Enjoy Cocktails', 'Listen to Live Music', 'Socialize', 'Dance'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'Is there a dress code?', answer: 'Smart casual dress code is recommended.' },
      { question: 'Are there food options?', answer: 'Yes, light snacks are available.' }
    ]
  },
  {
    title: 'TDS - The Downtown Social',
    image: '/img/attractions/nightlife/tds.jpg',
    category: 'clubs',
    gallery: [
      '/img/nightlife/tds.jpg',
      '/img/nightlife/tds-2.jpg',
      '/img/nightlife/tds-3.jpg',
    ],
    description: 'One of Nagpur\'s most popular nightclubs with a vibrant atmosphere, great music, and themed nights.',
    bestTime: '9:00 PM - 2:00 AM',
    highlight: 'International DJs and themed party nights.',
    map: 'https://goo.gl/maps/tds123',
    openingHours: '9:00 PM - 2:00 AM',
    entryFee: '₹1000',
    facilities: ['Dance Floor', 'VIP Section', 'Live DJ', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5679',
    howToReach: 'Located in Civil Lines, near Zero Mile.',
    tips: [
      'Book tables in advance for weekends.',
      'Dress code strictly enforced.',
      'Best time to visit: 10 PM onwards.',
      'Check their social media for themed nights.'
    ],
    nearby: [
      { title: 'Haldiram\'s', path: '/food' },
      { title: 'Zero Mile', path: '/attractions' },
    ],
    reviews: [
      { user: 'Amit', rating: 5, comment: 'Best club in Nagpur!' },
      { user: 'Sneha', rating: 4, comment: 'Great music and crowd.' }
    ],
    events: ['International DJ Nights', 'Bollywood Nights', 'College Specials'],
    weather: '26°C, Clear',
    pdfGuide: '/guides/tds-guide.pdf',
    whatToDo: ['Dance', 'Party', 'Socialize', 'Enjoy Music'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'Is there a cover charge?', answer: 'Yes, varies by event and day.' },
      { question: 'What\'s the dress code?', answer: 'Smart casual to formal, no sportswear.' }
    ]
  },
  {
    title: 'Haldiram\'s Restaurant',
    image: '/img/attractions/nightlife/haldirams.jpg',
    category: 'restaurants',
    gallery: [
      '/img/nightlife/haldirams.jpg',
      '/img/nightlife/haldirams-2.jpg',
      '/img/nightlife/haldirams-3.jpg',
    ],
    description: 'Famous for its authentic Indian cuisine and sweets, with a modern dining experience.',
    bestTime: '7:00 PM - 11:00 PM',
    highlight: 'Traditional Indian cuisine and famous sweets.',
    map: 'https://goo.gl/maps/haldirams123',
    openingHours: '11:00 AM - 11:00 PM',
    entryFee: 'Free',
    facilities: ['Fine Dining', 'Takeaway', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5680',
    howToReach: 'Located in Civil Lines, near Zero Mile.',
    tips: [
      'Try their famous sweets.',
      'Weekend evenings are busy.',
      'Reservations recommended for dinner.',
      'Best time to visit: 7 PM - 9 PM'
    ],
    nearby: [
      { title: 'TDS', path: '/nightlife' },
      { title: 'Zero Mile', path: '/attractions' },
    ],
    reviews: [
      { user: 'Rajesh', rating: 5, comment: 'Best Indian food in Nagpur!' },
      { user: 'Anita', rating: 5, comment: 'Must try their sweets!' }
    ],
    events: ['Festival Special Menus', 'Sweet Making Workshops'],
    weather: '29°C, Clear',
    pdfGuide: '/guides/haldirams-guide.pdf',
    whatToDo: ['Fine Dining', 'Try Sweets', 'Family Time', 'Relax'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'Is it vegetarian?', answer: 'Yes, pure vegetarian restaurant.' },
      { question: 'Do they deliver?', answer: 'Yes, through various food delivery apps.' }
    ]
  },
  {
    title: 'The Urban Cafe',
    image: '/img/nightlife/urban-cafe.jpg',
    category: 'liveMusic',
    gallery: [
      '/img/nightlife/urban-cafe.jpg',
      '/img/nightlife/urban-cafe-2.jpg',
      '/img/nightlife/urban-cafe-3.jpg',
    ],
    description: 'A modern cafe with live music, great coffee, and fusion food.',
    bestTime: '6:00 PM - 11:00 PM',
    highlight: 'Live music and fusion cuisine.',
    map: 'https://goo.gl/maps/urbancafe123',
    openingHours: '11:00 AM - 11:00 PM',
    entryFee: 'Free',
    facilities: ['Live Music', 'Cafe', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5681',
    howToReach: 'Located in Dharampeth, near LAD College.',
    tips: [
      'Check their social media for live music schedule.',
      'Try their fusion dishes.',
      'Weekend evenings are best for music.',
      'Best time to visit: 7 PM - 9 PM'
    ],
    nearby: [
      { title: 'LAD College', path: '/attractions' },
      { title: 'Dharampeth', path: '/shopping' },
    ],
    reviews: [
      { user: 'Vikram', rating: 4, comment: 'Great ambiance and music!' },
      { user: 'Neha', rating: 5, comment: 'Best cafe for live music in Nagpur.' }
    ],
    events: ['Live Band Nights', 'Open Mic', 'Poetry Sessions'],
    weather: '27°C, Partly Cloudy',
    pdfGuide: '/guides/urban-cafe-guide.pdf',
    whatToDo: ['Listen to Music', 'Enjoy Coffee', 'Socialize', 'Relax'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'Is there a cover charge?', answer: 'No, but some special events may have entry fees.' },
      { question: 'Do they serve alcohol?', answer: 'No, it\'s a cafe with non-alcoholic beverages.' }
    ]
  },
  {
    title: 'The Club House',
    image: '/img/nightlife/club-house.jpg',
    category: 'clubs',
    gallery: [
      '/img/nightlife/club-house.jpg',
      '/img/nightlife/club-house-2.jpg',
      '/img/nightlife/club-house-3.jpg',
    ],
    description: 'An exclusive club with premium facilities, fine dining, and entertainment.',
    bestTime: '8:00 PM - 1:00 AM',
    highlight: 'Premium experience and exclusive membership.',
    map: 'https://goo.gl/maps/clubhouse123',
    openingHours: '8:00 PM - 1:00 AM',
    entryFee: 'Members Only',
    facilities: ['Fine Dining', 'Bar', 'Dance Floor', 'VIP Section', 'Parking'],
    contact: '+91 712 234 5682',
    howToReach: 'Located in Civil Lines, near RBI Square.',
    tips: [
      'Membership required.',
      'Dress code strictly enforced.',
      'Reservations mandatory.',
      'Best time to visit: 9 PM onwards'
    ],
    nearby: [
      { title: 'RBI Square', path: '/attractions' },
      { title: 'Civil Lines', path: '/shopping' },
    ],
    reviews: [
      { user: 'Rahul', rating: 5, comment: 'Premium experience!' },
      { user: 'Priya', rating: 5, comment: 'Best club for exclusive parties.' }
    ],
    events: ['Members Only Parties', 'Corporate Events', 'Theme Nights'],
    weather: '28°C, Clear',
    pdfGuide: '/guides/club-house-guide.pdf',
    whatToDo: ['Fine Dining', 'Party', 'Network', 'Socialize'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'How to become a member?', answer: 'Contact the club for membership details.' },
      { question: 'Is there a dress code?', answer: 'Yes, formal attire required.' }
    ]
  },
  {
    title: 'The Brew House',
    image: '/img/nightlife/brew-house.jpg',
    category: 'bars',
    gallery: [
      '/img/nightlife/brew-house.jpg',
      '/img/nightlife/brew-house-2.jpg',
      '/img/nightlife/brew-house-3.jpg',
    ],
    description: 'A microbrewery with craft beers and delicious food.',
    bestTime: '6:00 PM - 11:00 PM',
    highlight: 'Craft beers and brewery tour.',
    map: 'https://goo.gl/maps/brewhouse123',
    openingHours: '12:00 PM - 11:00 PM',
    entryFee: 'Free',
    facilities: ['Microbrewery', 'Restaurant', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5683',
    howToReach: 'Located in Khamla, near Airport Road.',
    tips: [
      'Try their craft beers.',
      'Weekend evenings are busy.',
      'Reservations recommended.',
      'Best time to visit: 7 PM - 9 PM'
    ],
    nearby: [
      { title: 'Airport Road', path: '/attractions' },
      { title: 'Khamla', path: '/shopping' },
    ],
    reviews: [
      { user: 'Amit', rating: 4, comment: 'Great craft beers!' },
      { user: 'Sneha', rating: 5, comment: 'Best brewery in Nagpur.' }
    ],
    events: ['Beer Tasting', 'Brewery Tours', 'Food Festivals'],
    weather: '27°C, Clear',
    pdfGuide: '/guides/brew-house-guide.pdf',
    whatToDo: ['Try Craft Beers', 'Enjoy Food', 'Take Brewery Tour', 'Socialize'],
    isOpen: true,
    isPopular: true,
    faq: [
      { question: 'Do they serve food?', answer: 'Yes, full restaurant menu available.' },
      { question: 'Is there a brewery tour?', answer: 'Yes, available on weekends.' }
    ]
  }
];

function Nightlife() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewInput, setReviewInput] = useState({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState(nightlifePlaces[0].reviews || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [mapPlaces, setMapPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filter places based on selected category, search query, and facilities
  const filteredPlaces = nightlifePlaces.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFacilities = selectedFacilities.length === 0 || 
                              selectedFacilities.every(facility => place.facilities.includes(facility));
    return matchesCategory && matchesSearch && matchesFacilities;
  });

  // Featured places (top 3)
  const featuredPlaces = nightlifePlaces.slice(0, 3);

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

  return (
    <Box sx={{ bgcolor: '#f8f6f2', minHeight: '100vh', py: 6 }}>
      <Container>
        <Typography variant="h3" fontWeight={700} mb={2} color="primary.main">
          Nightlife in Nagpur
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Discover the best nightlife experiences in Nagpur, from trendy bars to vibrant clubs. Enjoy live music, fine dining, and more.
        </Typography>

        {/* Tourist Tips Banner */}
        <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Top Tips for Nightlife in Nagpur:
          </Typography>
          <Typography variant="body2">
            • Book reservations in advance • Dress to impress • Check for themed nights • Arrive early to avoid queues
          </Typography>
        </Alert>

        {/* Category Filter Buttons */}
        <Box 
          sx={{ 
            mb: 6,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "contained" : "outlined"}
              onClick={() => setSelectedCategory(category.value)}
              startIcon={category.icon}
              sx={{
                borderRadius: '25px',
                px: 3,
                py: 1.5,
                minWidth: '180px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                background: selectedCategory === category.value ? category.gradient : 'transparent',
                color: selectedCategory === category.value ? 'white' : 'text.primary',
                border: selectedCategory === category.value ? 'none' : '2px solid',
                borderColor: category.gradient.split(' ')[1],
                boxShadow: selectedCategory === category.value ? '0 4px 8px rgba(0,0,0,0.2)' : 'none',
                '&:hover': {
                  background: selectedCategory === category.value ? category.gradient : 'rgba(0,0,0,0.04)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
                transition: 'all 0.3s ease',
                '& .MuiButton-startIcon': {
                  color: selectedCategory === category.value ? 'white' : category.gradient.split(' ')[1],
                }
              }}
            >
              {category.label}
            </Button>
          ))}
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name or activity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
          <Button variant="contained" color="primary" onClick={toggleMapView}>
            {showMap ? 'List View' : 'Map View'}
          </Button>
        </Box>

        {/* Filter by Facilities */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Filter by Facilities:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {['Live Music', 'Cocktails', 'Dance Floor', 'Parking', 'Restrooms', 'VIP Section'].map((facility) => (
              <FormControlLabel
                key={facility}
                control={
                  <Checkbox
                    checked={selectedFacilities.includes(facility)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFacilities([...selectedFacilities, facility]);
                      } else {
                        setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
                      }
                    }}
                  />
                }
                label={facility}
              />
            ))}
          </Box>
        </Box>

        {/* Featured Places Carousel */}
        {!showMap && !selectedPlace && selectedCategory === 'all' && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight={700} mb={2}>
              Featured Nightlife Places
            </Typography>
            <Grid container spacing={3}>
              {featuredPlaces.map((place) => (
                <Grid item xs={12} md={4} key={place.title}>
                  <Card sx={{ 
                    boxShadow: 3, 
                    borderRadius: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    transition: 'transform 0.3s ease', 
                    '&:hover': { 
                      transform: 'scale(1.03)', 
                      boxShadow: 6 
                    } 
                  }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={place.image}
                      alt={place.title}
                      loading="lazy"
                      onError={handleImageError}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight={600}>{place.title}</Typography>
                        <Chip 
                          label={categories.find(c => c.value === place.category)?.label} 
                          size="small" 
                          color="primary" 
                          sx={{ 
                            borderRadius: '12px',
                            background: categories.find(c => c.value === place.category)?.gradient,
                            color: 'white'
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" mb={1}>{place.description}</Typography>
                      <Chip label={`Best time: ${place.bestTime}`} color="success" size="small" sx={{ mb: 1, alignSelf: 'flex-start' }} />
                      <Typography variant="body2" color="primary" fontWeight={500} mb={2}>
                        <NightlifeIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'middle' }} />
                        {place.highlight}
                      </Typography>
                      <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          href={place.map}
                          target="_blank"
                          startIcon={<MapIcon />}
                          sx={{ borderRadius: 2 }}
                        >
                          Google Maps
                        </Button>
                        <Button
                          variant="outlined"
                          color="info"
                          size="small"
                          onClick={() => setSelectedPlace(place)}
                          sx={{ borderRadius: 2 }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Map View */}
        {showMap && (
          <Box sx={{ mb: 6, height: '500px', position: 'relative' }}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <CircularProgress />
              </Box>
            ) : (
              <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  Map View (Google Maps Integration)
                </Typography>
                {/* Google Maps component would go here */}
              </Paper>
            )}
          </Box>
        )}

        {/* Grid View */}
        {!selectedPlace && !showMap && selectedCategory !== 'all' && (
          <Grid container spacing={4}>
            {filteredPlaces.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card sx={{ 
                  boxShadow: 3, 
                  borderRadius: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'transform 0.3s ease', 
                  '&:hover': { 
                    transform: 'scale(1.03)', 
                    boxShadow: 6 
                  } 
                }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={handleImageError}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" fontWeight={600}>{item.title}</Typography>
                      <Chip 
                        label={categories.find(c => c.value === item.category)?.label} 
                        size="small" 
                        color="primary" 
                        sx={{ 
                          borderRadius: '12px',
                          background: categories.find(c => c.value === item.category)?.gradient,
                          color: 'white'
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={1}>{item.description}</Typography>
                    <Chip label={`Best time: ${item.bestTime}`} color="success" size="small" sx={{ mb: 1, alignSelf: 'flex-start' }} />
                    <Typography variant="body2" color="primary" fontWeight={500} mb={2}>
                      <NightlifeIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'middle' }} />
                      {item.highlight}
                    </Typography>
                    <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        href={item.map}
                        target="_blank"
                        startIcon={<MapIcon />}
                        sx={{ borderRadius: 2 }}
                      >
                        Google Maps
                      </Button>
                      <Button
                        variant="outlined"
                        color="info"
                        size="small"
                        onClick={() => setSelectedPlace(item)}
                        sx={{ borderRadius: 2 }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Details View */}
        {selectedPlace && (
          <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 3 }}>
            <Button variant="outlined" color="primary" sx={{ mb: 2 }} onClick={() => setSelectedPlace(null)}>
              ← Back to List
            </Button>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {/* Gallery */}
                <Box sx={{ position: 'relative', mb: 2 }}>
                  <CardMedia
                    component="img"
                    height="280"
                    image={selectedPlace.gallery ? selectedPlace.gallery[galleryIndex] : selectedPlace.image}
                    alt={selectedPlace.title}
                    onError={handleImageError}
                    sx={{ objectFit: 'cover', borderRadius: 2, cursor: 'pointer' }}
                    onClick={() => handleOpenGallery(selectedPlace.gallery[galleryIndex])}
                  />
                  {selectedPlace.gallery && (
                    <Box sx={{ display: 'flex', gap: 1, mt: 1, justifyContent: 'center' }}>
                      {selectedPlace.gallery.map((img, idx) => (
                        <IconButton key={img} size="small" onClick={() => setGalleryIndex(idx)}>
                          <PhotoCameraIcon color={galleryIndex === idx ? 'primary' : 'disabled'} />
                        </IconButton>
                      ))}
                    </Box>
                  )}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<MapIcon />}
                    href={selectedPlace.map}
                    target="_blank"
                  >
                    Google Maps
                  </Button>
                  {selectedPlace.pdfGuide && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<CloudDownloadIcon />}
                      href={selectedPlace.pdfGuide}
                      target="_blank"
                    >
                      Download Guide
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    color="success"
                    startIcon={<ShareIcon />}
                    onClick={() => navigator.share && navigator.share({ title: selectedPlace.title, url: window.location.href })}
                  >
                    Share
                  </Button>
                </Box>
                {selectedPlace.weather && <Chip label={`Weather: ${selectedPlace.weather}`} color="info" sx={{ mb: 1 }} />}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight={700} mb={1}>{selectedPlace.title}</Typography>
                <Typography variant="body1" mb={2}>{selectedPlace.description}</Typography>
                <Divider sx={{ mb: 2 }} />
                {/* Plan Your Visit */}
                <Typography variant="subtitle1" fontWeight={600} mb={1}>Plan Your Visit</Typography>
                <List dense>
                  {selectedPlace.openingHours && <ListItem><ListItemIcon><AccessTimeIcon color="primary" /></ListItemIcon><ListItemText primary={`Opening Hours: ${selectedPlace.openingHours}`} /></ListItem>}
                  {selectedPlace.entryFee && <ListItem><ListItemIcon><LocalOfferIcon color="primary" /></ListItemIcon><ListItemText primary={`Entry Fee: ${selectedPlace.entryFee}`} /></ListItem>}
                  {selectedPlace.howToReach && <ListItem><ListItemIcon><DirectionsIcon color="primary" /></ListItemIcon><ListItemText primary={`How to Reach: ${selectedPlace.howToReach}`} /></ListItem>}
                  {selectedPlace.bestTime && <ListItem><ListItemIcon><StarIcon color="primary" /></ListItemIcon><ListItemText primary={`Best Time: ${selectedPlace.bestTime}`} /></ListItem>}
                  {selectedPlace.contact && <ListItem><ListItemIcon><LocationOnIcon color="primary" /></ListItemIcon><ListItemText primary={`Contact: ${selectedPlace.contact}`} /></ListItem>}
                  {selectedPlace.facilities && <ListItem><ListItemIcon><NightlifeIcon color="primary" /></ListItemIcon><ListItemText primary={`Facilities: ${selectedPlace.facilities.join(', ')}`} /></ListItem>}
                </List>
                {/* What to Do */}
                {selectedPlace.whatToDo && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>What to Do</Typography>
                    <List dense>
                      {selectedPlace.whatToDo.map((item, idx) => (
                        <ListItem key={idx}><ListItemText primary={item} /></ListItem>
                      ))}
                    </List>
                  </>
                )}
                {/* Tips */}
                {selectedPlace.tips && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Nightlife Tips</Typography>
                    <List dense>
                      {selectedPlace.tips.map((tip, idx) => (
                        <ListItem key={idx}><ListItemText primary={tip} /></ListItem>
                      ))}
                    </List>
                  </>
                )}
                {/* Events */}
                {selectedPlace.events && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Events & Activities</Typography>
                    <List dense>
                      {selectedPlace.events.map((event, idx) => (
                        <ListItem key={idx}><ListItemText primary={event} /></ListItem>
                      ))}
                    </List>
                  </>
                )}
                {/* Nearby Attractions */}
                {selectedPlace.nearby && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Nearby Nightlife Places</Typography>
                    <List dense>
                      {selectedPlace.nearby.map((place, idx) => (
                        <ListItem key={idx} component="a" href={place.path} sx={{ cursor: 'pointer' }}><ListItemText primary={place.title} /></ListItem>
                      ))}
                    </List>
                  </>
                )}
                {/* FAQ */}
                {selectedPlace.faq && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Frequently Asked Questions</Typography>
                    {selectedPlace.faq.map((faq, idx) => (
                      <Accordion key={idx}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="subtitle2">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2">{faq.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </>
                )}
                {/* Reviews */}
                <Typography variant="subtitle1" fontWeight={600} mt={2}>Customer Reviews</Typography>
                <List dense>
                  {reviews.map((rev, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon><Rating value={rev.rating} readOnly size="small" /></ListItemIcon>
                      <ListItemText primary={rev.user} secondary={rev.comment} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <TextField
                    label="Name"
                    size="small"
                    value={reviewInput.name}
                    onChange={e => setReviewInput({ ...reviewInput, name: e.target.value })}
                  />
                  <Rating
                    value={reviewInput.rating}
                    onChange={(_, val) => setReviewInput({ ...reviewInput, rating: val })}
                    size="small"
                  />
                  <TextField
                    label="Comment"
                    size="small"
                    value={reviewInput.comment}
                    onChange={e => setReviewInput({ ...reviewInput, comment: e.target.value })}
                  />
                  <Button variant="contained" size="small" onClick={handleAddReview}>Add</Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Gallery Modal */}
        <Dialog
          open={galleryOpen}
          onClose={handleCloseGallery}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">{selectedPlace?.title}</Typography>
              <IconButton onClick={handleCloseGallery}><CloseIcon /></IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={currentGalleryImage}
                alt="Gallery"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
              <IconButton
                sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
                onClick={handlePrevImage}
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                onClick={handleNextImage}
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Nightlife; 