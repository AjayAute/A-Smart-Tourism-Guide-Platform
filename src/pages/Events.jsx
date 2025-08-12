import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Tabs,
  Tab,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Badge,
  Switch,
  FormControlLabel,
  Fade,
  Zoom,
  Grow,
  CardActionArea,
  Avatar,
  LinearProgress,
  CircularProgress,
  Alert,
  Snackbar,
  Stack,
  CardHeader,
  CardActions,
  useScrollTrigger,
  Slide,
  Fab,
  RadioGroup,
  Radio,
  Checkbox,
} from '@mui/material';
import {
  Search,
  FilterList,
  Favorite,
  FavoriteBorder,
  Share,
  LocationOn,
  AccessTime,
  CalendarToday,
  People,
  BookOnline,
  Close,
  GridView,
  ViewList,
  KeyboardArrowUp,
  Event,
  AttachMoney,
  Star,
  StarBorder,
  StarHalf,
  EmojiEvents,
  LocalOffer,
  TrendingUp,
  Whatshot,
  ArrowForward,
  Payment,
} from '@mui/icons-material';
import { format } from 'date-fns';

// Categories with icons
const categories = [
  { name: 'all', icon: <Event /> },
  { name: 'Traditional Festivals', icon: <LocalOffer /> },
  { name: 'Cultural Events', icon: <Whatshot /> },
  { name: 'Sports & Recreation', icon: <EmojiEvents /> },
  { name: 'Food & Cuisine', icon: <Star /> },
  { name: 'Arts & Literature', icon: <TrendingUp /> },
  { name: 'Music & Entertainment', icon: <StarHalf /> },
  { name: 'Religious Celebrations', icon: <People /> }
];

// Mock data for events
const mockEvents = [
  // Traditional Festivals Category
  {
    id: 1,
    title: "Nagpur Orange Festival",
    description: "Celebrate Nagpur's famous orange heritage with cultural performances, food stalls, and activities. Experience orange picking, cultural shows, and local delicacies.",
    date: "2024-12-15",
    time: "10:00 AM - 10:00 PM",
    location: "Sitabuldi Fort Ground",
    category: "Traditional Festivals",
    price: "₹200",
    capacity: 5000,
    registered: 3500,
    rating: 4.8,
    reviews: 245,
    image: "/img/events/orange event.png",
    highlights: [
      "Orange picking experience",
      "Cultural performances",
      "Food stalls",
      "Art exhibitions",
      "Live music"
    ],
    organizer: {
      name: "Nagpur Municipal Corporation",
      avatar: "/img/organizers/nmc.jpg"
    },
    tags: ["Traditional", "Culture", "Family", "Entertainment"]
  },

  // Cultural Events Category
  {
    id: 2,
    title: "Kalidas Festival",
    description: "A grand celebration of classical arts featuring renowned artists from across India. Experience classical music, dance, and theatrical performances.",
    date: "2024-11-15",
    time: "6:00 PM - 10:00 PM",
    location: "Vasantrao Deshpande Hall",
    category: "Cultural Events",
    price: "₹500",
    capacity: 1000,
    registered: 750,
    rating: 4.9,
    reviews: 180,
    image: "/img/events/kalidas-festival.jpg",
    highlights: [
      "Classical music concerts",
      "Dance performances",
      "Theater shows",
      "Artist workshops",
      "Cultural exhibitions"
    ],
    organizer: {
      name: "Nagpur Cultural Society",
      avatar: "/img/organizers/cultural-society.jpg"
    },
    tags: ["Culture", "Music", "Dance", "Theater"]
  },

  // Food & Cuisine Category
  {
    id: 3,
    title: "Nagpur Food Festival",
    description: "Experience the diverse culinary heritage of Nagpur with over 50 food stalls. From street food to fine dining, discover the best of local and international cuisines.",
    date: "2024-10-20",
    time: "11:00 AM - 11:00 PM",
    location: "Dharampeth Ground",
    category: "Food & Cuisine",
    price: "₹150",
    capacity: 3000,
    registered: 2000,
    rating: 4.7,
    reviews: 320,
    image: "/img/events/food-festival.jpg",
    highlights: [
      "Local cuisine stalls",
      "International food",
      "Cooking demonstrations",
      "Food competitions",
      "Live entertainment"
    ],
    organizer: {
      name: "Nagpur Food Association",
      avatar: "/img/organizers/food-association.jpg"
    },
    tags: ["Food", "Culture", "Entertainment", "Family"]
  },

  // Arts & Literature Category
  {
    id: 4,
    title: "Nagpur Literature Festival",
    description: "A celebration of literature, poetry, and storytelling with renowned authors and poets. Engage in book discussions, poetry readings, and writing workshops.",
    date: "2024-07-20",
    time: "10:00 AM - 8:00 PM",
    location: "Chitnavis Centre",
    category: "Arts & Literature",
    price: "₹300",
    capacity: 800,
    registered: 600,
    rating: 4.7,
    reviews: 150,
    image: "/img/events/literature-festival.jpg",
    highlights: [
      "Author readings",
      "Panel discussions",
      "Book launches",
      "Poetry sessions",
      "Writing workshops"
    ],
    organizer: {
      name: "Nagpur Literary Society",
      avatar: "/img/organizers/literary-society.jpg"
    },
    tags: ["Literature", "Culture", "Education", "Arts"]
  },

  // Sports & Recreation Category
  {
    id: 5,
    title: "Nagpur Marathon",
    description: "Join thousands of runners in this annual marathon event. Choose from full marathon, half marathon, or 5K run categories.",
    date: "2024-08-15",
    time: "5:00 AM - 11:00 AM",
    location: "Zero Mile",
    category: "Sports & Recreation",
    price: "₹500",
    capacity: 10000,
    registered: 8000,
    rating: 4.8,
    reviews: 450,
    image: "/img/events/marathon.jpg",
    highlights: [
      "Multiple race categories",
      "Professional timing",
      "Medals and certificates",
      "Refreshment stations",
      "Medical support"
    ],
    organizer: {
      name: "Nagpur Runners Club",
      avatar: "/img/organizers/runners-club.jpg"
    },
    tags: ["Sports", "Fitness", "Health", "Community"]
  },

  // Religious Celebrations Category
  {
    id: 6,
    title: "Nagpur Ganesh Festival",
    description: "Celebrate the grand Ganesh festival with cultural performances, processions, and community celebrations across the city.",
    date: "2024-09-15",
    time: "6:00 AM - 10:00 PM",
    location: "Various Locations",
    category: "Religious Celebrations",
    price: "Free",
    capacity: 50000,
    registered: 0,
    rating: 4.9,
    reviews: 500,
    image: "/img/events/ganesh-festival.jpg",
    highlights: [
      "Cultural performances",
      "Processions",
      "Food stalls",
      "Community celebrations",
      "Religious ceremonies"
    ],
    organizer: {
      name: "Nagpur Municipal Corporation",
      avatar: "/img/organizers/nmc.jpg"
    },
    tags: ["Festival", "Culture", "Religion", "Community"]
  },

  // Music & Entertainment Category
  {
    id: 7,
    title: "Nagpur Music Festival",
    description: "A three-day music extravaganza featuring local and national artists across various genres. Enjoy live performances, workshops, and camping.",
    date: "2024-05-10",
    time: "4:00 PM - 11:00 PM",
    location: "MIG Club Ground",
    category: "Music & Entertainment",
    price: "₹1500",
    capacity: 2000,
    registered: 1800,
    rating: 4.9,
    reviews: 280,
    image: "/img/events/music-festival.jpg",
    highlights: [
      "Live performances",
      "Workshop sessions",
      "Artist meet & greet",
      "Food & beverage stalls",
      "Camping area"
    ],
    organizer: {
      name: "Nagpur Music Society",
      avatar: "/img/organizers/music-society.jpg"
    },
    tags: ["Music", "Entertainment", "Arts", "Festival"]
  },

  // Traditional Festivals Category
  {
    id: 8,
    title: "Nagpur Diwali Festival",
    description: "Experience the grand celebration of Diwali with traditional decorations, cultural performances, and community events across the city.",
    date: "2024-11-12",
    time: "6:00 PM - 10:00 PM",
    location: "Various Locations",
    category: "Traditional Festivals",
    price: "Free",
    capacity: 10000,
    registered: 0,
    rating: 4.8,
    reviews: 350,
    image: "/img/events/diwali-festival.jpg",
    highlights: [
      "Traditional decorations",
      "Cultural performances",
      "Food stalls",
      "Fireworks display",
      "Community celebrations"
    ],
    organizer: {
      name: "Nagpur Municipal Corporation",
      avatar: "/img/organizers/nmc.jpg"
    },
    tags: ["Traditional", "Festival", "Culture", "Community"]
  }
];

// Scroll to top component
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function Events() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [likedEvents, setLikedEvents] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('upcoming');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    tickets: 1,
    name: '',
    email: '',
    phone: '',
    paymentMethod: '',
    termsAccepted: false
  });
  const [bookingStep, setBookingStep] = useState(1);

  // Video path
  const backgroundVideo = "/img/events/events-bg.mp4";

  // Function to handle video loading completion
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    // Add a small delay before showing the video to ensure smooth transition
    setTimeout(() => {
      setIsVideoReady(true);
    }, 100);
  };

  // Filter events
  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || 
      event.category === selectedCategory;

    const price = parseInt(event.price.replace(/[^0-9]/g, ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    const matchesDate = !selectedDate || event.date === selectedDate;

    return matchesSearch && matchesCategory && matchesPrice && matchesDate;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'upcoming':
        return new Date(a.date) - new Date(b.date);
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'popular':
        return b.registered - a.registered;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  // Handle like/unlike
  const handleLikeClick = (eventId) => {
    setLikedEvents(prev => {
      const newLiked = { ...prev, [eventId]: !prev[eventId] };
      setSnackbar({
        open: true,
        message: newLiked[eventId] ? "Added to favorites" : "Removed from favorites",
        severity: "success"
      });
      return newLiked;
    });
  };

  // Handle booking
  const handleBooking = (event) => {
    setSelectedEvent(event);
    setIsBookingDialogOpen(true);
  };

  // Handle share
  const handleShare = async (event) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          `${event.title}\n${event.description}\n${window.location.href}`
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
        message: "Error sharing event",
        severity: "error"
      });
    }
  };

  // Handle Learn More click
  const handleLearnMore = (event) => {
    setSelectedEventDetails(event);
    setIsEventDetailsOpen(true);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!selectedEvent) return 0;
    const price = parseInt(selectedEvent.price.replace(/[^0-9]/g, ''));
    return price * bookingForm.tickets;
  };

  // Handle booking form changes
  const handleBookingFormChange = (field) => (event) => {
    setBookingForm({
      ...bookingForm,
      [field]: event.target.value
    });
  };

  // Handle booking submission
  const handleBookingSubmit = () => {
    if (bookingStep === 1) {
      // Validate first step
      if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
        setSnackbar({
          open: true,
          message: "Please fill in all required fields",
          severity: "error"
        });
        return;
      }
      setBookingStep(2);
    } else {
      // Validate second step
      if (!bookingForm.paymentMethod || !bookingForm.termsAccepted) {
        setSnackbar({
          open: true,
          message: "Please select payment method and accept terms",
          severity: "error"
        });
        return;
      }
      // Process payment and complete booking
      handlePayment();
    }
  };

  // Handle payment
  const handlePayment = () => {
    // Here you would typically integrate with a payment gateway
    // For now, we'll simulate a successful payment
    setSnackbar({
      open: true,
      message: "Booking confirmed! A confirmation email has been sent to your email address.",
      severity: "success"
    });
    setIsBookingDialogOpen(false);
    setBookingStep(1);
    setBookingForm({
      tickets: 1,
      name: '',
      email: '',
      phone: '',
      paymentMethod: '',
      termsAccepted: false
    });
  };

  // Event Details Dialog
  const EventDetailsDialog = () => (
    <Dialog
      open={isEventDetailsOpen}
      onClose={() => setIsEventDetailsOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      {selectedEventDetails && (
        <>
          <DialogTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={selectedEventDetails.organizer?.avatar}
                alt={selectedEventDetails.organizer?.name}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="h6">{selectedEventDetails.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Organized by {selectedEventDetails.organizer?.name}
                </Typography>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 2 }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedEventDetails.image}
                alt={selectedEventDetails.title}
                sx={{ borderRadius: 2, mb: 3 }}
              />
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom>About the Event</Typography>
                  <Typography variant="body1" paragraph>
                    {selectedEventDetails.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Highlights</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedEventDetails.highlights.map((highlight, index) => (
                      <Chip
                        key={index}
                        label={highlight}
                        color="primary"
                        variant="outlined"
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom>Event Details</Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarToday color="primary" />
                        <Box>
                          <Typography variant="subtitle2">Date</Typography>
                          <Typography variant="body2">
                            {format(new Date(selectedEventDetails.date), 'MMMM dd, yyyy')}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTime color="primary" />
                        <Box>
                          <Typography variant="subtitle2">Time</Typography>
                          <Typography variant="body2">{selectedEventDetails.time}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn color="primary" />
                        <Box>
                          <Typography variant="subtitle2">Location</Typography>
                          <Typography variant="body2">{selectedEventDetails.location}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AttachMoney color="primary" />
                        <Box>
                          <Typography variant="subtitle2">Price</Typography>
                          <Typography variant="body2">{selectedEventDetails.price}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <People color="primary" />
                        <Box>
                          <Typography variant="subtitle2">Capacity</Typography>
                          <Typography variant="body2">
                            {selectedEventDetails.registered}/{selectedEventDetails.capacity} registered
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                    
                    <Box sx={{ mt: 3 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(selectedEventDetails.registered / selectedEventDetails.capacity) * 100}
                        sx={{ 
                          height: 8,
                          borderRadius: 4,
                          mb: 1,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" align="center">
                        {selectedEventDetails.capacity - selectedEventDetails.registered} spots remaining
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button onClick={() => setIsEventDetailsOpen(false)}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setIsEventDetailsOpen(false);
                handleBooking(selectedEventDetails);
              }}
              startIcon={<BookOnline />}
              disabled={selectedEventDetails.registered >= selectedEventDetails.capacity}
            >
              Book Now
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  // Event Card Component
  const EventCard = ({ event }) => {
    const progress = (event.registered / event.capacity) * 100;
    
    // Check if event requires booking
    const requiresBooking = event.price !== "Free" && event.capacity > 0;
    
    return (
      <Fade in={true} timeout={500}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
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
          onMouseEnter={() => setHoveredCard(event.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="200"
              image={event.image}
              alt={event.title}
              sx={{
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
                opacity: hoveredCard === event.id ? 1 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              <Tooltip title={likedEvents[event.id] ? "Remove from favorites" : "Add to favorites"}>
                <IconButton
                  onClick={() => handleLikeClick(event.id)}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  {likedEvents[event.id] ? (
                    <Favorite sx={{ color: theme.palette.error.main }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton
                  onClick={() => handleShare(event)}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  <Share />
                </IconButton>
              </Tooltip>
            </Box>
            <Chip
              label={event.category}
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
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                p: 2,
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {event.title}
              </Typography>
            </Box>
          </Box>
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {event.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AccessTime sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {event.time}
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
              }}
            >
              {event.description}
            </Typography>
            <Box sx={{ mt: 'auto' }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  size="small"
                  icon={<CalendarToday />}
                  label={format(new Date(event.date), 'MMM dd, yyyy')}
                  color="info"
                  variant="outlined"
                />
                <Chip
                  size="small"
                  icon={<AttachMoney />}
                  label={event.price}
                  color="success"
                  variant="outlined"
                />
                {requiresBooking && (
                  <Chip
                    size="small"
                    icon={<People />}
                    label={`${event.registered}/${event.capacity}`}
                    color="warning"
                    variant="outlined"
                  />
                )}
              </Stack>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating
                  value={event.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  ({event.reviews} reviews)
                </Typography>
              </Box>
              {requiresBooking && (
                <LinearProgress 
                  variant="determinate" 
                  value={progress} 
                  sx={{ 
                    mb: 1,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: theme.palette.grey[200],
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                    },
                  }}
                />
              )}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleLearnMore(event)}
                  sx={{
                    '&:hover': {
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
                {requiresBooking && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleBooking(event)}
                    startIcon={<BookOnline />}
                    disabled={event.registered >= event.capacity}
                  >
                    Book
                  </Button>
                )}
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ p: 2, pt: 0 }}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {event.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Box>
          </CardActions>
        </Card>
      </Fade>
    );
  };

  // Booking Dialog
  const BookingDialog = () => (
    <Dialog
      open={isBookingDialogOpen}
      onClose={() => {
        setIsBookingDialogOpen(false);
        setBookingStep(1);
        setBookingForm({
          tickets: 1,
          name: '',
          email: '',
          phone: '',
          paymentMethod: '',
          termsAccepted: false
        });
      }}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={selectedEvent?.organizer?.avatar}
            alt={selectedEvent?.organizer?.name}
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="h6">Book {selectedEvent?.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Organized by {selectedEvent?.organizer?.name}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        {selectedEvent && (
          <Box sx={{ mt: 2 }}>
            {/* Step Indicator */}
            <Box sx={{ mb: 3 }}>
              <LinearProgress 
                variant="determinate" 
                value={bookingStep === 1 ? 50 : 100}
                sx={{ height: 4, borderRadius: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2" color={bookingStep === 1 ? 'primary' : 'text.secondary'}>
                  Step 1: Details
                </Typography>
                <Typography variant="body2" color={bookingStep === 2 ? 'primary' : 'text.secondary'}>
                  Step 2: Payment
                </Typography>
              </Box>
            </Box>

            {bookingStep === 1 ? (
              // Step 1: Booking Details
              <>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 3,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Event Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">
                          {format(new Date(selectedEvent.date), 'MMMM dd, yyyy')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">{selectedEvent.time}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">{selectedEvent.location}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AttachMoney sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body2">{selectedEvent.price}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 3,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Booking Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={bookingForm.name}
                        onChange={handleBookingFormChange('name')}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={bookingForm.email}
                        onChange={handleBookingFormChange('email')}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={bookingForm.phone}
                        onChange={handleBookingFormChange('phone')}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Number of Tickets"
                        type="number"
                        value={bookingForm.tickets}
                        onChange={handleBookingFormChange('tickets')}
                        InputProps={{
                          inputProps: { min: 1, max: selectedEvent.capacity - selectedEvent.registered },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </>
            ) : (
              // Step 2: Payment
              <>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 3,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Payment Method
                  </Typography>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <RadioGroup
                      value={bookingForm.paymentMethod}
                      onChange={handleBookingFormChange('paymentMethod')}
                    >
                      <FormControlLabel
                        value="credit"
                        control={<Radio />}
                        label="Credit Card"
                      />
                      <FormControlLabel
                        value="debit"
                        control={<Radio />}
                        label="Debit Card"
                      />
                      <FormControlLabel
                        value="upi"
                        control={<Radio />}
                        label="UPI"
                      />
                      <FormControlLabel
                        value="netbanking"
                        control={<Radio />}
                        label="Net Banking"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bookingForm.termsAccepted}
                        onChange={(e) => setBookingForm({
                          ...bookingForm,
                          termsAccepted: e.target.checked
                        })}
                      />
                    }
                    label="I accept the terms and conditions"
                  />
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Order Summary
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">
                      Tickets ({bookingForm.tickets} × {selectedEvent.price})
                    </Typography>
                    <Typography variant="body2">
                      ₹{calculateTotalPrice()}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle2">Total Amount</Typography>
                    <Typography variant="subtitle2" color="primary">
                      ₹{calculateTotalPrice()}
                    </Typography>
                  </Box>
                </Paper>
              </>
            )}
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ p: 3, pt: 0 }}>
        {bookingStep === 2 && (
          <Button onClick={() => setBookingStep(1)}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleBookingSubmit}
          startIcon={bookingStep === 1 ? <ArrowForward /> : <Payment />}
        >
          {bookingStep === 1 ? 'Proceed to Payment' : 'Complete Payment'}
        </Button>
      </DialogActions>
    </Dialog>
  );

  // Filter Drawer
  const FilterDrawer = () => (
    <Drawer
      anchor="right"
      open={isFilterDrawerOpen}
      onClose={() => setIsFilterDrawerOpen(false)}
      PaperProps={{
        sx: {
          borderRadius: '16px 0 0 16px',
        },
      }}
    >
      <Box sx={{ width: 300, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={() => setIsFilterDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Category
          </Typography>
          <Grid container spacing={1}>
            {categories.map((category) => (
              <Grid item xs={6} key={category.name}>
                <Button
                  fullWidth
                  variant={selectedCategory === category.name ? 'contained' : 'outlined'}
                  startIcon={category.icon}
                  onClick={() => setSelectedCategory(category.name)}
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                  }}
                >
                  {category.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Date
          </Typography>
          <TextField
            type="date"
            fullWidth
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={2000}
            step={100}
            sx={{
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="body2">₹{priceRange[0]}</Typography>
            <Typography variant="body2">₹{priceRange[1]}</Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            setSelectedDate('');
            setPriceRange([0, 2000]);
            setSelectedCategory('all');
            setIsFilterDrawerOpen(false);
          }}
        >
          Clear All Filters
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section with Background Video */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', sm: '60vh', md: '70vh' },
          width: '100%',
          overflow: 'hidden',
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
        
        {/* Background Video Element */}
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
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
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
            width: '100%',
            px: { xs: 2, sm: 3, md: 4 },
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
            Events in Nagpur
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Discover exciting events happening in the city
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
                  placeholder="Search events..."
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
                  startIcon={<FilterList />}
                  onClick={() => setIsFilterDrawerOpen(true)}
                >
                  Filter
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* View Mode Toggle */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 2, 
            mb: 3, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Grid View">
              <IconButton
                onClick={() => setViewMode('grid')}
                color={viewMode === 'grid' ? 'primary' : 'default'}
              >
                <GridView />
              </IconButton>
            </Tooltip>
            <Tooltip title="List View">
              <IconButton
                onClick={() => setViewMode('list')}
                color={viewMode === 'list' ? 'primary' : 'default'}
              >
                <ViewList />
              </IconButton>
            </Tooltip>
          </Box>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="upcoming">Upcoming</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
              <MenuItem value="popular">Most Popular</MenuItem>
              <MenuItem value="rating">Highest Rated</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Active Filters */}
        {(selectedCategory !== 'all' || selectedDate || priceRange[0] !== 0 || priceRange[1] !== 2000) && (
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 3,
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {selectedCategory !== 'all' && (
                <Chip
                  label={`Category: ${selectedCategory}`}
                  onDelete={() => setSelectedCategory('all')}
                  color="primary"
                  variant="outlined"
                />
              )}
              {selectedDate && (
                <Chip
                  label={`Date: ${format(new Date(selectedDate), 'MMM dd, yyyy')}`}
                  onDelete={() => setSelectedDate('')}
                  color="primary"
                  variant="outlined"
                />
              )}
              {(priceRange[0] !== 0 || priceRange[1] !== 2000) && (
                <Chip
                  label={`Price: ₹${priceRange[0]} - ₹${priceRange[1]}`}
                  onDelete={() => setPriceRange([0, 2000])}
                  color="primary"
                  variant="outlined"
                />
              )}
            </Box>
          </Paper>
        )}

        {/* Events Grid */}
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : filteredEvents.length > 0 ? (
          <Grid container spacing={4}>
            {sortedEvents.map((event) => (
              <Grid item xs={12} sm={6} lg={4} key={event.id}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No events found matching your criteria
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDate('');
                setPriceRange([0, 2000]);
              }}
              sx={{ mt: 2 }}
            >
              Clear All Filters
            </Button>
          </Paper>
        )}
      </Container>

      {/* Booking Dialog */}
      <BookingDialog />

      {/* Filter Drawer */}
      <FilterDrawer />

      {/* Scroll to Top Button */}
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>

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

      {/* Add EventDetailsDialog */}
      <EventDetailsDialog />
    </Box>
  );
}

export default Events;
