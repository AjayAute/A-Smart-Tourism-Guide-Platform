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

const natureAttractions = [
  {
    title: 'Futala Lake',
    image: '/img/attractions/nature/futala-lake.jpg',
    gallery: [
      '/img/attractions/nature/futala-lake.jpg',
      '/img/nature/futala-lake-2.jpg',
      '/img/nature/futala-lake-3.jpg',
    ],
    description: 'A scenic lake surrounded by lush greenery, popular for evening strolls, local street food, and beautiful sunset views.',
    bestTime: 'October to March',
    highlight: "Don't miss the illuminated fountains at night!",
    map: 'https://goo.gl/maps/6Qw2v8Qw2v82',
    view360: '/img/attractions/nature 360/futala-lake.jpg',
    openingHours: '6:00 AM - 10:00 PM',
    entryFee: 'Free',
    facilities: ['Parking', 'Street Food', 'Restrooms', 'Boating'],
    contact: '+91 12345 67890',
    howToReach: '5 km from Nagpur Railway Station. Auto-rickshaws and city buses available.',
    tips: [
      'Visit at sunset for the best views.',
      'Try the local street food stalls.',
      'Carry a camera for great photos.',
      'Boating is available in the evening.'
    ],
    nearby: [
      { title: 'Ambazari Lake', path: '/nature' },
      { title: 'Maharajbagh Zoo', path: '/nature' },
    ],
    reviews: [
      { user: 'Amit', rating: 5, comment: 'Beautiful place for an evening walk!' },
      { user: 'Priya', rating: 4, comment: 'Loved the fountains and food stalls.' }
    ],
    events: ['Evening Musical Fountain Show (Weekends)', 'Boating Festival (December)'],
    weather: '28°C, Clear',
    pdfGuide: '/guides/futala-lake-guide.pdf',
  },
  {
    title: 'Ambazari Lake & Garden',
    image: '/img/attractions/nature/ambazari-lake.jpg',
    description: "A tranquil spot for boating and picnics, with a beautiful garden, children's play area, and a walking track.",
    bestTime: 'November to February',
    highlight: 'Great for family picnics and bird watching.',
    map: 'https://goo.gl/maps/2v8Qw2v8Qw22',
    view360: '/img/attractions/nature 360/ambazari-lake.jpg',
  },
  {
    title: 'Seminary Hills',
    image: '/img/attractions/nature/seminary-hills.jpg',
    description: 'A green hillock offering panoramic views of Nagpur, ideal for nature walks, jogging, and bird watching.',
    bestTime: 'Year-round',
    highlight: 'Best sunrise view in Nagpur!',
    map: 'https://goo.gl/maps/3Qw2v8Qw2v83',
    view360: '/img/attractions/nature 360/seminary-hill.jpg',
  },
  {
    title: 'Gorewada Lake & Zoo',
    image: '/img/attractions/nature/gorewada-lake.jpg',
    description: 'A large lake and the Gorewada Zoo, home to a variety of wildlife and a safari experience close to the city.',
    bestTime: 'October to June',
    highlight: 'Try the jungle safari for a real adventure.',
    map: 'https://goo.gl/maps/4Qw2v8Qw2v84',
    view360: '/img/attractions/nature 360/gorewada-lake.jpg',
  },
  {
    title: 'Maharajbagh Zoo',
    image: '/img/attractions/nature/maharajbagh-zoo.jpg',
    description: 'A centrally located zoo and botanical garden, perfect for families and children to explore flora and fauna.',
    bestTime: 'October to March',
    highlight: 'See rare animals and relax in the garden.',
    map: 'https://goo.gl/maps/5Qw2v8Qw2v85',
    view360: '/img/attractions/nature 360/maharajbagh-zoo.jpg',
  },
  {
    title: 'Pench Tiger Reserve',
    image: '/img/attractions/nature/pench-tiger-reserve.jpg',
    description: 'A renowned tiger reserve near Nagpur, famous for its rich wildlife, jungle safaris, and lush forest landscapes.',
    bestTime: 'November to June',
    highlight: 'Spot tigers and enjoy a real jungle experience!',
    map: 'https://goo.gl/maps/6Qw2v8Qw2v86',
    view360: '/img/attractions/nature 360/pench-tiger-reserve-360.jpg',
  },
  {
    title: 'Telankhedi Garden & Lake',
    image: '/img/attractions/nature/telankhedi-garden.jpg',
    description: 'A peaceful garden by the lake, featuring colorful flowers, boating, and a serene environment for relaxation.',
    bestTime: 'October to March',
    highlight: 'Perfect for a quiet evening by the water.',
    map: 'https://goo.gl/maps/7Qw2v8Qw2v87',
    view360: '',
  },
];

function Nature() {
  const [open360, setOpen360] = useState({ open: false, image: '', title: '' });
  const [reviewInput, setReviewInput] = useState({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState(natureAttractions[0].reviews || []);
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
    <Box sx={{ bgcolor: '#f5faff', minHeight: '100vh', py: 6 }}>
      <Container>
        <Typography variant="h3" fontWeight={700} mb={2} color="primary.main">
          Nature & Wildlife in Nagpur
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Discover Nagpur's natural beauty: from tranquil lakes and lush gardens to vibrant wildlife sanctuaries and scenic hills. Perfect for nature lovers, families, and adventure seekers!
        </Typography>
        {/* Grid View */}
        {!selectedPlace && (
          <Grid container spacing={4}>
            {natureAttractions.map((item, idx) => (
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

export default Nature;
