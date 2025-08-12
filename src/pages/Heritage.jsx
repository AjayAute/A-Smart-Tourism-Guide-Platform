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
  IconButton
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

const heritageAttractions = [
  {
    title: 'Deekshabhoomi',
    image: '/img/attractions/heritage/deekshabhoomi.jpg',
    gallery: [
      '/img/attractions/heritage/deekshabhoomi.jpg',
      '/img/attractions/heritage/deekshabhoomi-2.jpg',
      '/img/attractions/heritage/deekshabhoomi-3.jpg',
    ],
    description: 'A sacred monument and the largest hollow stupa in the world, Deekshabhoomi is a major Buddhist pilgrimage site and a symbol of social justice.',
    bestTime: 'October to March',
    highlight: 'Visit during Dhamma Chakra Pravartan Din for a vibrant experience.',
    map: 'https://goo.gl/maps/abc123',
    view360: '/img/attractions/heritage 360/deekshabhoomi-360.jpg',
    openingHours: '6:00 AM - 8:00 PM',
    entryFee: 'Free',
    facilities: ['Parking', 'Restrooms', 'Guided Tours'],
    contact: '+91 12345 67890',
    howToReach: '3 km from Nagpur Railway Station. City buses and autos available.',
    tips: [
      'Remove shoes before entering the stupa.',
      'Photography is allowed outside only.',
      'Visit in the morning for peace and quiet.'
    ],
    nearby: [
      { title: 'Zero Mile Stone', path: '/heritage' },
      { title: 'Sitabuldi Fort', path: '/heritage' },
    ],
    reviews: [
      { user: 'Rahul', rating: 5, comment: 'Very peaceful and spiritual.' },
      { user: 'Sunita', rating: 4, comment: 'Impressive architecture.' }
    ],
    events: ['Dhamma Chakra Pravartan Din (October)', 'Buddha Jayanti (May)'],
    weather: '28°C, Clear',
    pdfGuide: '/guides/deekshabhoomi-guide.pdf',
  },
  {
    title: 'Sitabuldi Fort',
    image: '/img/attractions/heritage/sitaburdi-fort.jpg',
    gallery: [
      '/img/attractions/heritage/sitabuldi-fort.jpg',
      '/img/attractions/heritage/sitabuldi-fort-2.jpg',
      '/img/attractions/heritage/sitabuldi-fort-3.jpg',
    ],
    description: 'A historic fort that played a significant role in the Anglo-Maratha War, now a major tourist attraction with beautiful gardens and city views.',
    bestTime: 'November to February',
    highlight: "Don't miss the city view from the top ramparts.",
    map: 'https://goo.gl/maps/def456',
    view360: '/img/attractions/heritage 360/sitabuldi-fort-360.jpg',
    openingHours: '10:00 AM - 5:00 PM',
    entryFee: '₹20',
    facilities: ['Guided Tours', 'Gardens', 'Parking'],
    contact: '+91 98765 43210',
    howToReach: '2 km from Nagpur Railway Station. Walk or take an auto.',
    tips: [
      'Wear comfortable shoes for walking.',
      'Carry water, especially in summer.',
      'Check for guided tour timings.'
    ],
    nearby: [
      { title: 'Zero Mile Stone', path: '/heritage' },
      { title: 'Deekshabhoomi', path: '/heritage' },
    ],
    reviews: [
      { user: 'Asha', rating: 5, comment: 'Loved the history and views.' },
      { user: 'Manoj', rating: 4, comment: 'Great place for history buffs.' }
    ],
    events: ['Fort Heritage Walk (Monthly)', 'Independence Day Parade (August)'],
    weather: '27°C, Sunny',
    pdfGuide: '/guides/sitabuldi-fort-guide.pdf',
  },
  {
    title: 'Zero Mile Stone',
    image: '/img/attractions/heritage/zero-mile.jpg',
    gallery: [
      '/img/attractions/heritage/zero-mile.jpg',
      '/img/attractions/heritage/zero-mile-2.jpg',
      '/img/attractions/heritage/zero-mile-3.jpg',
    ],
    description: 'A monument built by the British to mark the geographical center of colonial India, featuring a sandstone pillar and four horses.',
    bestTime: 'October to March',
    highlight: 'A must-visit for history and geography lovers.',
    map: 'https://goo.gl/maps/ghi789',
    view360: '/img/attractions/heritage 360/zero-mile-360.jpg',
    openingHours: 'Open 24 hours',
    entryFee: 'Free',
    facilities: ['Open Area', 'Photo Spots'],
    contact: '+91 91234 56789',
    howToReach: '1 km from Nagpur Railway Station. Walk or take an auto.',
    tips: [
      'Best visited in the evening.',
      'Read the plaques for historical info.',
      'Great spot for photos.'
    ],
    nearby: [
      { title: 'Sitabuldi Fort', path: '/heritage' },
      { title: 'Deekshabhoomi', path: '/heritage' },
    ],
    reviews: [
      { user: 'Kiran', rating: 4, comment: 'Unique monument, very central.' },
      { user: 'Ramesh', rating: 5, comment: 'Interesting history.' }
    ],
    events: ['Heritage Walk (Sundays)'],
    weather: '29°C, Clear',
    pdfGuide: '/guides/zero-mile-guide.pdf',
  },
  {
    title: 'Raman Science Centre',
    image: '/img/attractions/heritage/raman-science.jpg',
    gallery: [
      '/img/attractions/heritage/raman-science.jpg',
      '/img/attractions/heritage/raman-science-2.jpg',
      '/img/attractions/heritage/raman-science-3.jpg',
    ],
    description: 'A modern science museum dedicated to Nobel laureate Sir C.V. Raman, featuring interactive exhibits, planetarium shows, and scientific demonstrations.',
    bestTime: 'October to March',
    highlight: 'Experience the fascinating world of science through interactive exhibits.',
    map: 'https://goo.gl/maps/jkl012',
    view360: '/img/attractions/heritage 360/raman-science-360.jpg',
    openingHours: '10:00 AM - 5:30 PM (Closed on Mondays)',
    entryFee: '₹50 (Adults), ₹20 (Children)',
    facilities: ['Planetarium', 'Science Park', 'Library', 'Cafeteria'],
    contact: '+91 712 252 1234',
    howToReach: '4 km from Nagpur Railway Station. City buses and autos available.',
    tips: [
      'Book planetarium shows in advance.',
      'Visit during weekdays for fewer crowds.',
      'Great for educational trips.'
    ],
    nearby: [
      { title: 'Dragon Palace Temple', path: '/heritage' },
      { title: 'Telankhedi Garden', path: '/nature' },
    ],
    reviews: [
      { user: 'Priya', rating: 5, comment: 'Excellent for kids and science enthusiasts.' },
      { user: 'Amit', rating: 4, comment: 'Interactive and educational.' }
    ],
    events: ['Science Fair (January)', 'Astronomy Night (Monthly)'],
    weather: '28°C, Partly Cloudy',
    pdfGuide: '/guides/raman-science-guide.pdf',
  },
  {
    title: 'Dragon Palace Temple',
    image: '/img/attractions/heritage/dragon-palace.jpg',
    gallery: [
      '/img/attractions/heritage/dragon-palace.jpg',
      '/img/attractions/heritage/dragon-palace-2.jpg',
      '/img/attractions/heritage/dragon-palace-3.jpg',
    ],
    description: 'A magnificent Buddhist temple built in Japanese architectural style, featuring a 200-foot tall pagoda and beautiful gardens.',
    bestTime: 'October to March',
    highlight: 'Witness the stunning architecture and peaceful surroundings.',
    map: 'https://goo.gl/maps/mno345',
    view360: '/img/attractions/heritage 360/dragon-palace-360.jpg',
    openingHours: '6:00 AM - 8:00 PM',
    entryFee: 'Free',
    facilities: ['Meditation Hall', 'Garden', 'Parking', 'Restrooms'],
    contact: '+91 712 234 5678',
    howToReach: '8 km from city center. Buses and autos available.',
    tips: [
      'Maintain silence inside the temple.',
      'Best visited during morning hours.',
      'Photography allowed in designated areas only.'
    ],
    nearby: [
      { title: 'Raman Science Centre', path: '/heritage' },
      { title: 'Telankhedi Garden', path: '/nature' },
    ],
    reviews: [
      { user: 'Suresh', rating: 5, comment: 'Serene and beautiful architecture.' },
      { user: 'Meena', rating: 5, comment: 'Peaceful atmosphere, great for meditation.' }
    ],
    events: ['Buddha Purnima (May)', 'Meditation Retreats (Monthly)'],
    weather: '27°C, Clear',
    pdfGuide: '/guides/dragon-palace-guide.pdf',
  },
  {
    title: 'Maharajbagh Zoo',
    image: '/img/attractions/heritage/maharajbagh.jpg',
    gallery: [
      '/img/attractions/heritage/maharajbagh.jpg',
      '/img/attractions/heritage/maharajbagh-2.jpg',
      '/img/attractions/heritage/maharajbagh-3.jpg',
    ],
    description: 'A historic zoo and botanical garden established in 1862, featuring rare plants, animals, and a beautiful landscape.',
    bestTime: 'October to March',
    highlight: 'Explore the historic botanical garden and wildlife.',
    map: 'https://goo.gl/maps/pqr678',
    view360: '/img/attractions/heritage 360/maharajbagh-360.jpg',
    openingHours: '9:00 AM - 5:30 PM',
    entryFee: '₹20 (Adults), ₹10 (Children)',
    facilities: ['Botanical Garden', 'Zoo', 'Children\'s Park', 'Cafeteria'],
    contact: '+91 712 245 6789',
    howToReach: '3 km from Nagpur Railway Station. City buses and autos available.',
    tips: [
      'Visit early morning for best animal sightings.',
      'Carry water and snacks.',
      'Wear comfortable walking shoes.'
    ],
    nearby: [
      { title: 'Raman Science Centre', path: '/heritage' },
      { title: 'Dragon Palace Temple', path: '/heritage' },
    ],
    reviews: [
      { user: 'Rajesh', rating: 4, comment: 'Well-maintained historic garden.' },
      { user: 'Anita', rating: 4, comment: 'Great place for family outing.' }
    ],
    events: ['Flower Show (February)', 'Wildlife Week (October)'],
    weather: '26°C, Sunny',
    pdfGuide: '/guides/maharajbagh-guide.pdf',
  },
  {
    title: 'Kasturchand Park',
    image: '/img/attractions/heritage/kasturchand-park.jpg',
    gallery: [
      '/img/attractions/heritage/kasturchand-park.jpg',
      '/img/attractions/heritage/kasturchand-park-2.jpg',
      '/img/attractions/heritage/kasturchand-park-3.jpg',
    ],
    description: 'A historic public park and sports complex established in 1902, featuring colonial architecture and various sports facilities.',
    bestTime: 'October to March',
    highlight: 'Experience the blend of history and modern sports facilities.',
    map: 'https://goo.gl/maps/stu901',
    view360: '/img/attractions/heritage 360/kasturchand-park-360.jpg',
    openingHours: '6:00 AM - 9:00 PM',
    entryFee: 'Free',
    facilities: ['Sports Complex', 'Swimming Pool', 'Gymnasium', 'Parking'],
    contact: '+91 712 256 7890',
    howToReach: '2 km from Nagpur Railway Station. City buses and autos available.',
    tips: [
      'Visit during morning or evening for sports activities.',
      'Check sports facility timings in advance.',
      'Great place for jogging and exercise.'
    ],
    nearby: [
      { title: 'Zero Mile Stone', path: '/heritage' },
      { title: 'Sitabuldi Fort', path: '/heritage' },
    ],
    reviews: [
      { user: 'Vikram', rating: 4, comment: 'Historic sports complex with modern facilities.' },
      { user: 'Neha', rating: 5, comment: 'Perfect for morning walks and sports.' }
    ],
    events: ['Sports Tournaments (Year-round)', 'Fitness Camps (Monthly)'],
    weather: '28°C, Clear',
    pdfGuide: '/guides/kasturchand-park-guide.pdf',
  }
];

function Heritage() {
  const [open360, setOpen360] = useState({ open: false, image: '', title: '' });
  const [reviewInput, setReviewInput] = useState({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState(heritageAttractions[0].reviews || []);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);

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
          Heritage Sites of Nagpur
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Step into Nagpur's rich history and culture. Explore ancient forts, sacred temples, and iconic monuments that tell the story of the city.
        </Typography>
        {/* Grid View */}
        {!selectedPlace && (
          <Grid container spacing={4}>
            {heritageAttractions.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card sx={{ boxShadow: 3, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.03)', boxShadow: 6 } }}>
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
                    <Typography variant="h6" fontWeight={600} mb={1}>{item.title}</Typography>
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

export default Heritage; 