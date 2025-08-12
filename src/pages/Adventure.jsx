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
  Stack
} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsIcon from '@mui/icons-material/Directions';
import StarIcon from '@mui/icons-material/Star';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ShareIcon from '@mui/icons-material/Share';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PetsIcon from '@mui/icons-material/Pets';
import PoolIcon from '@mui/icons-material/Pool';
import HikingIcon from '@mui/icons-material/Hiking';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

// Add categories for filtering with icons
const categories = [
  { 
    label: 'All', 
    value: 'all',
    icon: <AllInclusiveIcon />,
    gradient: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
  { 
    label: 'Wildlife Safari', 
    value: 'wildlife',
    icon: <PetsIcon />,
    gradient: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)'
  },
  { 
    label: 'Water Sports', 
    value: 'water',
    icon: <PoolIcon />,
    gradient: 'linear-gradient(45deg, #00BCD4 30%, #4DD0E1 90%)'
  },
  { 
    label: 'Trekking', 
    value: 'trekking',
    icon: <HikingIcon />,
    gradient: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)'
  },
  { 
    label: 'Camping', 
    value: 'camping',
    icon: <NightShelterIcon />,
    gradient: 'linear-gradient(45deg, #795548 30%, #A1887F 90%)'
  },
  { 
    label: 'Adventure Sports', 
    value: 'sports',
    icon: <SportsHandballIcon />,
    gradient: 'linear-gradient(45deg, #E91E63 30%, #F48FB1 90%)'
  }
];

const adventureAttractions = [
  {
    title: 'Pench Tiger Reserve',
    image: '/img/attractions/adventure/pench.jpg',
    category: 'wildlife',
    gallery: [
      '/img/attractions/adventure/pench.jpg',
      '/img/attractions/adventure/pench-2.jpg',
      '/img/attractions/adventure/pench-3.jpg',
    ],
    description: 'Experience thrilling wildlife safaris in this famous tiger reserve, home to diverse wildlife including tigers, leopards, and various bird species.',
    bestTime: 'October to June',
    highlight: 'Morning and evening safaris for the best wildlife sightings.',
    map: 'https://goo.gl/maps/pench123',
    view360: '/img/attractions/adventure 360/pench.jpg',
    openingHours: '6:00 AM - 10:00 AM, 3:00 PM - 6:00 PM',
    entryFee: '₹1500 (Safari), ₹200 (Entry)',
    facilities: ['Safari Vehicles', 'Forest Rest House', 'Guide Services', 'Restrooms'],
    contact: '+91 712 234 5678',
    howToReach: '90 km from Nagpur. Private vehicles or tour packages available.',
    tips: [
      'Book safaris in advance.',
      'Carry binoculars and camera.',
      'Wear earth-toned clothes.',
      'Maintain silence during safari.'
    ],
    nearby: [
      { title: 'Totladoh Dam', path: '/adventure' },
      { title: 'Khindsi Lake', path: '/adventure' },
    ],
    reviews: [
      { user: 'Rahul', rating: 5, comment: 'Amazing tiger sighting!' },
      { user: 'Priya', rating: 4, comment: 'Great wildlife experience.' }
    ],
    events: ['Wildlife Photography Workshop (Monthly)', 'Bird Watching Tour (Weekly)'],
    weather: '32°C, Sunny',
    pdfGuide: '/guides/pench-guide.pdf',
  },
  {
    title: 'Adventure Sports Complex',
    image: '/img/attractions/adventure/sports-complex.jpg',
    category: 'sports',
    gallery: [
      '/img/attractions/adventure/sports-complex.jpg',
      '/img/attractions/adventure/sports-complex-2.jpg',
      '/img/attractions/adventure/sports-complex-3.jpg',
    ],
    description: 'A state-of-the-art facility offering various adventure sports including rock climbing, rappelling, zip-lining, and obstacle courses.',
    bestTime: 'October to March',
    highlight: 'Experience multiple adventure activities in one place.',
    map: 'https://goo.gl/maps/sports123',
    view360: '/img/attractions/adventure 360/sport-complex.jpg',
    openingHours: '9:00 AM - 6:00 PM',
    entryFee: '₹500 (Day Pass), ₹2000 (Activity Package)',
    facilities: ['Rock Climbing Wall', 'Zip Line', 'Obstacle Course', 'Training Area'],
    contact: '+91 712 245 6789',
    howToReach: '8 km from city center. City buses and autos available.',
    tips: [
      'Book activities in advance.',
      'Wear comfortable sports clothes.',
      'Follow safety instructions carefully.',
      'Minimum age requirement: 12 years.'
    ],
    nearby: [
      { title: 'Seminary Hills', path: '/adventure' },
      { title: 'Khindsi Lake', path: '/adventure' },
    ],
    reviews: [
      { user: 'Amit', rating: 5, comment: 'Thrilling activities!' },
      { user: 'Sneha', rating: 4, comment: 'Great for adventure lovers.' }
    ],
    events: ['Adventure Sports Festival (December)', 'Rock Climbing Championship (January)'],
    weather: '30°C, Clear',
    pdfGuide: '/guides/sports-complex-guide.pdf',
  },
  {
    title: 'Khindsi Lake',
    image: '/img/attractions/adventure/khindsi.jpg',
    category: 'water',
    gallery: [
      '/img/attractions/adventure/khindsi.jpg',
      '/img/attractions/adventure/khindsi-2.jpg',
      '/img/attractions/adventure/khindsi-3.jpg',
    ],
    description: 'A picturesque lake offering various water sports, boating, and adventure activities in a serene natural setting.',
    bestTime: 'October to March',
    highlight: 'Experience thrilling water sports and scenic boat rides.',
    map: 'https://goo.gl/maps/khindsi789',
    view360: '/img/attractions/adventure 360/khindsi.jpg',
    openingHours: '9:00 AM - 5:00 PM',
    entryFee: '₹50 (Entry), ₹200-500 (Activities)',
    facilities: ['Water Sports', 'Boat Rides', 'Restaurants', 'Parking'],
    contact: '+91 712 256 7890',
    howToReach: '60 km from Nagpur. Private vehicles or tour packages available.',
    tips: [
      'Book water sports in advance.',
      'Carry swimwear and extra clothes.',
      'Visit during weekdays for fewer crowds.'
    ],
    nearby: [
      { title: 'Totladoh Dam', path: '/adventure' },
      { title: 'Pench Tiger Reserve', path: '/adventure' },
    ],
    reviews: [
      { user: 'Vikram', rating: 5, comment: 'Amazing water sports!' },
      { user: 'Neha', rating: 4, comment: 'Perfect for family adventure.' }
    ],
    events: ['Water Sports Championship (February)', 'Boating Festival (November)'],
    weather: '31°C, Partly Cloudy',
    pdfGuide: '/guides/khindsi-guide.pdf',
  },
  {
    title: 'Seminary Hills Adventure Zone',
    image: '/img/attractions/adventure/seminary-hills.jpg',
    category: 'trekking',
    gallery: [
      '/img/attractions/adventure/seminary-hills.jpg',
      '/img/attractions/adventure/seminary-hills-2.jpg',
      '/img/attractions/adventure/seminary-hills-3.jpg',
    ],
    description: 'A popular trekking and hiking destination with scenic trails, viewpoints, and rock climbing opportunities.',
    bestTime: 'October to March',
    highlight: 'Enjoy trekking and rock climbing with city views.',
    map: 'https://goo.gl/maps/seminary012',
    view360: '/img/attractions/adventure 360/seminary-hills-360.jpg',
    openingHours: '6:00 AM - 6:00 PM',
    entryFee: 'Free',
    facilities: ['Trekking Trails', 'Viewpoints', 'Parking', 'Restrooms'],
    contact: '+91 712 267 8901',
    howToReach: '5 km from city center. City buses and autos available.',
    tips: [
      'Start early morning for best experience.',
      'Carry water and snacks.',
      'Wear proper trekking shoes.',
      'Follow marked trails only.'
    ],
    nearby: [
      { title: 'Adventure Sports Complex', path: '/adventure' },
      { title: 'Khindsi Lake', path: '/adventure' },
    ],
    reviews: [
      { user: 'Rajesh', rating: 5, comment: 'Great trekking experience!' },
      { user: 'Anita', rating: 4, comment: 'Beautiful city views from top.' }
    ],
    events: ['Trekking Competition (Monthly)', 'Rock Climbing Workshop (Weekly)'],
    weather: '29°C, Clear',
    pdfGuide: '/guides/seminary-hills-guide.pdf',
  },
  {
    title: 'Totladoh Dam',
    image: '/img/attractions/adventure/totladoh.jpg',
    category: 'water',
    gallery: [
      '/img/attractions/adventure/totladoh.jpg',
      '/img/attractions/adventure/totladoh-2.jpg',
      '/img/attractions/adventure/totladoh-3.jpg',
    ],
    description: 'A massive dam on the Pench River offering water sports, boating, and stunning views of the surrounding landscape.',
    bestTime: 'October to March',
    highlight: 'Enjoy water sports and scenic boat rides.',
    map: 'https://goo.gl/maps/totladoh456',
    view360: '/img/attractions/adventure/totladoh.jpg',
    openingHours: '8:00 AM - 6:00 PM',
    entryFee: '₹100 (Entry), ₹300 (Boat Ride)',
    facilities: ['Boat Rides', 'Water Sports', 'Viewing Deck', 'Restrooms'],
    contact: '+91 712 245 6789',
    howToReach: '85 km from Nagpur. Private vehicles or tour buses available.',
    tips: [
      'Best visited in morning or evening.',
      'Carry extra clothes for water activities.',
      'Book boat rides in advance during peak season.'
    ],
    nearby: [
      { title: 'Pench Tiger Reserve', path: '/adventure' },
      { title: 'Khindsi Lake', path: '/adventure' },
    ],
    reviews: [
      { user: 'Amit', rating: 4, comment: 'Beautiful views and fun activities.' },
      { user: 'Sneha', rating: 5, comment: 'Great water sports facilities.' }
    ],
    events: ['Water Sports Festival (December)', 'Boating Competition (January)'],
    weather: '30°C, Clear',
    pdfGuide: '/guides/totladoh-guide.pdf',
  },
  {
    title: 'Gorewada Adventure Park',
    image: '/img/attractions/adventure/gorewada.jpg',
    category: 'wildlife',
    gallery: [
      '/img/attractions/adventure/gorewada.jpg',
      '/img/attractions/adventure/gorewada-2.jpg',
      '/img/attractions/adventure/gorewada-3.jpg',
    ],
    description: 'A unique combination of wildlife safari, adventure activities, and nature trails in a forest setting.',
    bestTime: 'October to March',
    highlight: 'Experience wildlife safari and adventure activities.',
    map: 'https://goo.gl/maps/gorewada678',
    view360: '/img/attractions/adventure 360/gorewada-360.jpg',
    openingHours: '9:00 AM - 5:30 PM',
    entryFee: '₹100 (Entry), ₹300 (Safari)',
    facilities: ['Wildlife Safari', 'Adventure Park', 'Restaurants', 'Parking'],
    contact: '+91 712 289 0123',
    howToReach: '10 km from city center. Private vehicles or tour buses available.',
    tips: [
      'Book safari in advance.',
      'Visit early morning for best wildlife sightings.',
      'Carry water and snacks.',
      'Follow safety guidelines for adventure activities.'
    ],
    nearby: [
      { title: 'Adventure Sports Complex', path: '/adventure' },
      { title: 'Seminary Hills', path: '/adventure' },
    ],
    reviews: [
      { user: 'Kiran', rating: 5, comment: 'Amazing safari experience!' },
      { user: 'Ramesh', rating: 4, comment: 'Great adventure activities.' }
    ],
    events: ['Wildlife Safari (Daily)', 'Adventure Sports Day (Weekly)'],
    weather: '28°C, Partly Cloudy',
    pdfGuide: '/guides/gorewada-guide.pdf',
  },
  {
    title: 'Camping Grounds',
    image: '/img/attractions/adventure/camping.jpg',
    category: 'camping',
    gallery: [
      '/img/attractions/adventure/camping.jpg',
      '/img/attractions/adventure/camping-2.jpg',
      '/img/attractions/adventure/camping-3.jpg',
    ],
    description: 'Experience overnight camping under the stars with modern amenities and adventure activities.',
    bestTime: 'October to March',
    highlight: 'Overnight camping with adventure activities.',
    map: 'https://goo.gl/maps/camping123',
    view360: '/img/attractions/adventure 360/camping-360.jpg',
    openingHours: '24/7 (Prior booking required)',
    entryFee: '₹2000 (Per night, includes activities)',
    facilities: ['Camping Tents', 'Bonfire Area', 'Adventure Activities', 'Restrooms'],
    contact: '+91 712 290 1234',
    howToReach: '15 km from city center. Private vehicles or tour packages available.',
    tips: [
      'Book in advance.',
      'Carry warm clothes for night.',
      'Follow camping guidelines.',
      'Minimum age requirement: 8 years.'
    ],
    nearby: [
      { title: 'Seminary Hills', path: '/adventure' },
      { title: 'Gorewada Adventure Park', path: '/adventure' },
    ],
    reviews: [
      { user: 'Ravi', rating: 5, comment: 'Amazing camping experience!' },
      { user: 'Pooja', rating: 4, comment: 'Great for family camping.' }
    ],
    events: ['Night Camping (Weekly)', 'Adventure Camp (Monthly)'],
    weather: '25°C, Clear',
    pdfGuide: '/guides/camping-guide.pdf',
  }
];

function Adventure() {
  const [open360, setOpen360] = useState({ open: false, image: '', title: '' });
  const [reviewInput, setReviewInput] = useState({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState(adventureAttractions[0].reviews || []);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter attractions based on selected category
  const filteredAttractions = selectedCategory === 'all' 
    ? adventureAttractions 
    : adventureAttractions.filter(place => place.category === selectedCategory);

  const handleImageError = (e) => {
    e.target.src = '/img/placeholder.jpg';
  };

  useEffect(() => {
    if (open360.open && open360.image && window.pannellum) {
      window.pannellum.viewer('pannellum360', {
        type: 'equirectangular',
        panorama: open360.image,
        autoLoad: true,
        showControls: true,
        autoRotate: -2,
      });
    }
  }, [open360]);

  // Add review
  const handleAddReview = () => {
    if (reviewInput.name && reviewInput.rating && reviewInput.comment) {
      setReviews([...reviews, reviewInput]);
      setReviewInput({ name: '', rating: 0, comment: '' });
    }
  };

  // When a new place is selected, reset gallery and reviews
  useEffect(() => {
    if (selectedPlace) {
      setGalleryIndex(0);
      setReviews(selectedPlace.reviews || []);
    }
  }, [selectedPlace]);

  return (
    <Box sx={{ bgcolor: '#f8f6f2', minHeight: '100vh', py: 6 }}>
      <Container>
        <Typography variant="h3" fontWeight={700} mb={2} color="primary.main">
          Adventure Activities in Nagpur
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Experience thrilling adventures in and around Nagpur. From wildlife safaris to water sports, discover exciting activities for all adventure enthusiasts.
        </Typography>

        {/* Enhanced Filter Buttons */}
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

        {/* Grid View */}
        {!selectedPlace && (
          <Grid container spacing={4}>
            {filteredAttractions.map((item, idx) => (
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
                      <TravelExploreIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'middle' }} />
                      {item.highlight}
                    </Typography>
                    <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                      {item.view360 && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => setOpen360({ open: true, image: item.view360, title: item.title })}
                          startIcon={<TravelExploreIcon />}
                          sx={{ borderRadius: 2 }}
                        >
                          360° View
                        </Button>
                      )}
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
                        View More Details
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
                    sx={{ objectFit: 'cover', borderRadius: 2 }}
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
                  {selectedPlace.view360 && (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<TravelExploreIcon />}
                      onClick={() => setOpen360({ open: true, image: selectedPlace.view360, title: selectedPlace.title })}
                    >
                      360° View
                    </Button>
                  )}
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
                  {selectedPlace.contact && <ListItem><ListItemIcon><MapIcon color="primary" /></ListItemIcon><ListItemText primary={`Contact: ${selectedPlace.contact}`} /></ListItem>}
                  {selectedPlace.facilities && <ListItem><ListItemIcon><TravelExploreIcon color="primary" /></ListItemIcon><ListItemText primary={`Facilities: ${selectedPlace.facilities.join(', ')}`} /></ListItem>}
                </List>
                {/* Tips */}
                {selectedPlace.tips && (
                  <>
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Tips for Visitors</Typography>
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
                    <Typography variant="subtitle1" fontWeight={600} mt={2}>Nearby Attractions</Typography>
                    <List dense>
                      {selectedPlace.nearby.map((place, idx) => (
                        <ListItem key={idx} component="a" href={place.path} sx={{ cursor: 'pointer' }}><ListItemText primary={place.title} /></ListItem>
                      ))}
                    </List>
                  </>
                )}
                {/* Reviews */}
                <Typography variant="subtitle1" fontWeight={600} mt={2}>User Reviews</Typography>
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
        {/* 360 Modal */}
        {open360.open && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setOpen360({ open: false, image: '', title: '' })}
          >
            <div
              style={{ width: '80vw', height: '60vh', background: '#111', position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                style={{
                  position: 'absolute', top: 10, right: 10, zIndex: 10,
                  background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 18
                }}
                onClick={() => setOpen360({ open: false, image: '', title: '' })}
                aria-label="Close"
              >✕</button>
              <Typography variant="h6" color="#fff" sx={{ p: 2 }}>{open360.title} - 360° View</Typography>
              <div id="pannellum360" style={{ width: '100%', height: '90%' }} />
            </div>
          </div>
        )}
      </Container>
    </Box>
  );
}

export default Adventure; 