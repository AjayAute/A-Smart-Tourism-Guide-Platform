import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
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
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Slider,
  Tooltip,
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
  Hotel,
  DirectionsCar,
  Pool,
  Pets,
  Restaurant,
  Wifi,
  LocalParking,
  AcUnit,
  LocalBar,
  FitnessCenter,
  Spa,
  EventSeat,
  AttachMoney,
  Star,
  StarBorder,
  StarHalf,
  EmojiEvents,
  LocalOffer,
  TrendingUp,
  Whatshot,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: "Taj Vivanta",
    description: "Luxury hotel in the heart of Nagpur with world-class amenities and dining options.",
    image: "/img/travelplanning/hotels/taj-vivanta.jpg",
    rating: 4.8,
    reviews: 245,
    price: "₹8,000",
    location: "Civil Lines",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Parking", "AC"],
    category: "Luxury",
  },
  {
    id: 2,
    name: "Radisson Blu",
    description: "Modern hotel with contemporary design and excellent service.",
    image: "/img/travelplanning/hotels/radisson-blu.jpg",
    rating: 4.7,
    reviews: 180,
    price: "₹6,500",
    location: "Wardha Road",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Parking", "AC"],
    category: "Business",
  },
  {
    id: 3,
    name: "Hotel Centre Point",
    description: "Comfortable stay with great location and value for money.",
    image: "/img/travelplanning/hotels/centre-point.jpg",
    rating: 4.5,
    reviews: 150,
    price: "₹4,000",
    location: "Sitabuldi",
    amenities: ["WiFi", "Restaurant", "Parking", "AC"],
    category: "Mid-range",
  },
  {
    id: 4,
    name: "Hotel Tuli International",
    description: "Premium hotel with excellent dining and conference facilities.",
    image: "/img/travelplanning/hotels/tuli.jpg",
    rating: 4.6,
    reviews: 200,
    price: "₹7,000",
    location: "Ramdaspeth",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Parking", "AC", "Conference Hall"],
    category: "Business",
  },
  {
    id: 5,
    name: "Hotel Pride",
    description: "Modern hotel with rooftop restaurant and city views.",
    image: "/img/travelplanning/hotels/pride.jpg",
    rating: 4.4,
    reviews: 160,
    price: "₹5,500",
    location: "Wardha Road",
    amenities: ["WiFi", "Restaurant", "Parking", "AC", "Rooftop Dining"],
    category: "Mid-range",
  },
  {
    id: 6,
    name: "Hotel Airport Plaza",
    description: "Convenient location near airport with comfortable accommodations.",
    image: "/img/travelplanning/hotels/airport-plaza.jpg",
    rating: 4.3,
    reviews: 140,
    price: "₹4,500",
    location: "Airport Road",
    amenities: ["WiFi", "Restaurant", "Parking", "AC", "Airport Shuttle"],
    category: "Mid-range",
  }
];

// Mock data for wildlife safaris
const wildlifeSafaris = [
  {
    id: 1,
    name: "Tadoba Andhari Tiger Reserve",
    description: "Experience the thrill of spotting tigers and other wildlife in their natural habitat.",
    image: "/img/travelplanning/safaris/tadoba.jpg",
    rating: 4.9,
    reviews: 320,
    price: "₹2,500",
    duration: "3 hours",
    timings: "6:00 AM - 9:00 AM, 3:00 PM - 6:00 PM",
    location: "Chandrapur",
    highlights: ["Tiger Spotting", "Bird Watching", "Nature Trail", "Photography"],
  },
  {
    id: 2,
    name: "Pench National Park",
    description: "Famous for its diverse wildlife and scenic beauty.",
    image: "/img/travelplanning/safaris/pench.jpg",
    rating: 4.8,
    reviews: 280,
    price: "₹2,000",
    duration: "3 hours",
    timings: "6:00 AM - 9:00 AM, 3:00 PM - 6:00 PM",
    location: "Ramtek",
    highlights: ["Wildlife Safari", "Bird Watching", "Nature Walk", "Photography"],
  },
  {
    id: 3,
    name: "Navegaon National Park",
    description: "Home to diverse bird species and wildlife in a scenic setting.",
    image: "/img/travelplanning/safaris/navegaon.jpg",
    rating: 4.7,
    reviews: 250,
    price: "₹1,800",
    duration: "3 hours",
    timings: "6:00 AM - 9:00 AM, 3:00 PM - 6:00 PM",
    location: "Navegaon",
    highlights: ["Bird Watching", "Wildlife Safari", "Nature Trail", "Photography"],
  },
  {
    id: 4,
    name: "Bor Wildlife Sanctuary",
    description: "Compact sanctuary known for tiger sightings and bird watching.",
    image: "/img/travelplanning/safaris/bor.jpg",
    rating: 4.6,
    reviews: 220,
    price: "₹1,500",
    duration: "3 hours",
    timings: "6:00 AM - 9:00 AM, 3:00 PM - 6:00 PM",
    location: "Bor",
    highlights: ["Tiger Spotting", "Bird Watching", "Nature Trail", "Photography"],
  }
];

// Mock data for water parks
const waterParks = [
  {
    id: 1,
    name: "Fun N Food Village",
    description: "Exciting water rides and attractions for all ages.",
    image: "/img/travelplanning/waterparks/fun-n-food.jpg",
    rating: 4.6,
    reviews: 420,
    price: "₹800",
    timings: "10:00 AM - 6:00 PM",
    location: "Wardha Road",
    attractions: ["Water Slides", "Wave Pool", "Lazy River", "Kids Zone"],
  },
  {
    id: 2,
    name: "Aqua Kingdom",
    description: "Modern water park with thrilling rides and entertainment.",
    image: "/img/travelplanning/waterparks/aqua-kingdom.jpg",
    rating: 4.5,
    reviews: 380,
    price: "₹1,000",
    timings: "10:00 AM - 6:00 PM",
    location: "Hingna Road",
    attractions: ["Water Coasters", "Wave Pool", "Rain Dance", "Food Court"],
  },
  {
    id: 3,
    name: "Splash Water Park",
    description: "Family-friendly water park with various attractions.",
    image: "/img/travelplanning/waterparks/splash.jpg",
    rating: 4.4,
    reviews: 350,
    price: "₹900",
    timings: "10:00 AM - 6:00 PM",
    location: "Kamptee Road",
    attractions: ["Water Slides", "Wave Pool", "Kids Pool", "Food Court"],
  },
  {
    id: 4,
    name: "Water World",
    description: "Adventure water park with extreme rides and attractions.",
    image: "/img/travelplanning/waterparks/water-world.jpg",
    rating: 4.3,
    reviews: 320,
    price: "₹1,200",
    timings: "10:00 AM - 6:00 PM",
    location: "Butibori",
    attractions: ["Extreme Slides", "Wave Pool", "Adventure Zone", "Food Court"],
  }
];

function TravelPlanning() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1,
    rooms: 1,
    roomType: '',
    specialRequests: '',
    paymentMethod: '',
    termsAccepted: false,
    customerEmail: '',
    customerName: '',
    customerPhone: ''
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [showAllHotels, setShowAllHotels] = useState(false);
  const [showAllSafaris, setShowAllSafaris] = useState(false);
  const [showAllParks, setShowAllParks] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Add room type price multipliers
  const roomTypePrices = {
    standard: 1, // Base price
    deluxe: 1.5, // 50% more than standard
    suite: 2,    // Double the standard price
    executive: 2.5 // 2.5 times the standard price
  };

  // Define video paths for each section
  const sectionVideos = {
    hotels: "/img/travelplanning/videos/hotels-bg.mp4",    // Hotel background video
    safaris: "/img/travelplanning/videos/safaris-bg.mp4",  // Safari background video
    waterparks: "/img/travelplanning/videos/waterparks-bg.mp4"  // Water park background video
  };

  // State for video management
  const [currentVideo, setCurrentVideo] = useState(sectionVideos.hotels);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  // Add section titles and descriptions
  const sectionDetails = {
    hotels: {
      title: "Luxury Hotels & Resorts",
      description: "Experience world-class hospitality and comfort"
    },
    safaris: {
      title: "Wildlife Safaris",
      description: "Explore the wilderness and spot magnificent creatures"
    },
    waterparks: {
      title: "Water Parks",
      description: "Enjoy thrilling water rides and attractions"
    }
  };

  // Function to handle video switching when tabs change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setIsVideoLoading(true);
    
    // Switch video based on selected tab
    switch (newValue) {
      case 0:
        setCurrentVideo(sectionVideos.hotels);
        break;
      case 1:
        setCurrentVideo(sectionVideos.safaris);
        break;
      case 2:
        setCurrentVideo(sectionVideos.waterparks);
        break;
      default:
        setCurrentVideo(sectionVideos.hotels);
    }
  };

  // Function to handle video loading completion
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleBooking = (item) => {
    setSelectedItem(item);
    setIsBookingDialogOpen(true);
  };

  // Update the calculateTotalPrice function
  const calculateTotalPrice = () => {
    if (!selectedItem || !bookingDetails.checkIn || !bookingDetails.checkOut) return 0;
    
    const nights = Math.ceil((bookingDetails.checkOut - bookingDetails.checkIn) / (1000 * 60 * 60 * 24));
    const basePrice = parseInt(selectedItem.price.replace(/[^0-9]/g, ''));
    const roomTypeMultiplier = roomTypePrices[bookingDetails.roomType] || 1;
    const totalPrice = basePrice * nights * bookingDetails.rooms * roomTypeMultiplier;
    
    return totalPrice;
  };

  // Add a function to get room type price
  const getRoomTypePrice = (roomType) => {
    const basePrice = parseInt(selectedItem?.price.replace(/[^0-9]/g, '') || '0');
    const multiplier = roomTypePrices[roomType] || 1;
    return basePrice * multiplier;
  };

  const validateBooking = () => {
    if (!bookingDetails.checkIn || !bookingDetails.checkOut) {
      setSnackbar({
        open: true,
        message: "Please select check-in and check-out dates",
        severity: "error"
      });
      return false;
    }
    if (bookingDetails.checkIn >= bookingDetails.checkOut) {
      setSnackbar({
        open: true,
        message: "Check-out date must be after check-in date",
        severity: "error"
      });
      return false;
    }
    if (!bookingDetails.roomType) {
      setSnackbar({
        open: true,
        message: "Please select a room type",
        severity: "error"
      });
      return false;
    }
    if (!bookingDetails.paymentMethod) {
      setSnackbar({
        open: true,
        message: "Please select a payment method",
        severity: "error"
      });
      return false;
    }
    if (!bookingDetails.termsAccepted) {
      setSnackbar({
        open: true,
        message: "Please accept the terms and conditions",
        severity: "error"
      });
      return false;
    }
    return true;
  };

  // Add function to format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Add function to generate booking reference
  const generateBookingReference = () => {
    return 'BK' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
  };

  // Modify handleBookingSubmit
  const handleBookingSubmit = () => {
    if (!validateBooking()) return;
    setShowConfirmation(true);
  };

  // Add function to handle final confirmation
  const handleFinalConfirmation = () => {
    // Here you would typically make an API call to save the booking
    setBookingConfirmed(true);
    setShowConfirmation(false);
    setIsBookingDialogOpen(false);
    
    // Send confirmation email (mock implementation)
    const bookingRef = generateBookingReference();
    const confirmationDetails = {
      bookingReference: bookingRef,
      hotelName: selectedItem.name,
      checkIn: formatDate(bookingDetails.checkIn),
      checkOut: formatDate(bookingDetails.checkOut),
      roomType: bookingDetails.roomType,
      guests: bookingDetails.guests,
      rooms: bookingDetails.rooms,
      totalPrice: calculateTotalPrice(),
      customerName: bookingDetails.customerName,
      customerEmail: bookingDetails.customerEmail
    };

    // Mock email sending
    console.log('Sending confirmation email with details:', confirmationDetails);
    
    setSnackbar({
      open: true,
      message: `Booking confirmed! Reference: ${bookingRef}. Confirmation details have been sent to ${bookingDetails.customerEmail}`,
      severity: "success"
    });
  };

  // Booking Dialog Component
  const BookingDialog = () => (
    <Dialog
      open={isBookingDialogOpen}
      onClose={() => setIsBookingDialogOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        Book {selectedItem?.name}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Check-in Date"
                  value={bookingDetails.checkIn}
                  onChange={(newValue) => setBookingDetails({ ...bookingDetails, checkIn: newValue })}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  minDate={new Date()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Check-out Date"
                  value={bookingDetails.checkOut}
                  onChange={(newValue) => setBookingDetails({ ...bookingDetails, checkOut: newValue })}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  minDate={bookingDetails.checkIn || new Date()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Number of Guests"
                value={bookingDetails.guests}
                onChange={(e) => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Number of Rooms"
                value={bookingDetails.rooms}
                onChange={(e) => setBookingDetails({ ...bookingDetails, rooms: e.target.value })}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Room Type</InputLabel>
                <Select
                  value={bookingDetails.roomType}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, roomType: e.target.value })}
                  label="Room Type"
                >
                  <MenuItem value="standard">
                    Standard Room - ₹{getRoomTypePrice('standard')}/night
                  </MenuItem>
                  <MenuItem value="deluxe">
                    Deluxe Room - ₹{getRoomTypePrice('deluxe')}/night
                  </MenuItem>
                  <MenuItem value="suite">
                    Suite - ₹{getRoomTypePrice('suite')}/night
                  </MenuItem>
                  <MenuItem value="executive">
                    Executive Room - ₹{getRoomTypePrice('executive')}/night
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Special Requests"
                value={bookingDetails.specialRequests}
                onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequests: e.target.value })}
                placeholder="Any special requests or requirements?"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={bookingDetails.paymentMethod}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, paymentMethod: e.target.value })}
                  label="Payment Method"
                >
                  <MenuItem value="credit">Credit Card</MenuItem>
                  <MenuItem value="debit">Debit Card</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                  <MenuItem value="netbanking">Net Banking</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bookingDetails.termsAccepted}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, termsAccepted: e.target.checked })}
                  />
                }
                label="I accept the terms and conditions"
              />
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                <Typography variant="h6" gutterBottom>Booking Summary</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Room Type:</Typography>
                  <Typography>
                    {bookingDetails.roomType ? 
                      `${bookingDetails.roomType.charAt(0).toUpperCase() + bookingDetails.roomType.slice(1)} Room` : 
                      'Not Selected'}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Base Price:</Typography>
                  <Typography>
                    ₹{bookingDetails.roomType ? getRoomTypePrice(bookingDetails.roomType) : selectedItem?.price}/night
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Number of Nights:</Typography>
                  <Typography>
                    {bookingDetails.checkIn && bookingDetails.checkOut
                      ? Math.ceil((bookingDetails.checkOut - bookingDetails.checkIn) / (1000 * 60 * 60 * 24))
                      : 0}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Number of Rooms:</Typography>
                  <Typography>{bookingDetails.rooms}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total Price:</Typography>
                  <Typography variant="h6" color="primary">
                    ₹{calculateTotalPrice()}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsBookingDialogOpen(false)}>Cancel</Button>
        <Button 
          onClick={handleBookingSubmit} 
          variant="contained" 
          color="primary"
          disabled={!bookingDetails.termsAccepted}
        >
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );

  // Add BookingConfirmationDialog component
  const BookingConfirmationDialog = () => (
    <Dialog
      open={showConfirmation}
      onClose={() => setShowConfirmation(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Confirm Your Booking</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>Customer Details</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                value={bookingDetails.customerName}
                onChange={(e) => setBookingDetails({ ...bookingDetails, customerName: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={bookingDetails.customerEmail}
                onChange={(e) => setBookingDetails({ ...bookingDetails, customerEmail: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={bookingDetails.customerPhone}
                onChange={(e) => setBookingDetails({ ...bookingDetails, customerPhone: e.target.value })}
                required
              />
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Booking Summary</Typography>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Hotel:</Typography>
                <Typography variant="body1" gutterBottom>{selectedItem?.name}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Room Type:</Typography>
                <Typography variant="body1" gutterBottom>
                  {bookingDetails.roomType.charAt(0).toUpperCase() + bookingDetails.roomType.slice(1)} Room
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Check-in:</Typography>
                <Typography variant="body1" gutterBottom>{formatDate(bookingDetails.checkIn)}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Check-out:</Typography>
                <Typography variant="body1" gutterBottom>{formatDate(bookingDetails.checkOut)}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Guests:</Typography>
                <Typography variant="body1" gutterBottom>{bookingDetails.guests}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1">Rooms:</Typography>
                <Typography variant="body1" gutterBottom>{bookingDetails.rooms}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total Price:</Typography>
                  <Typography variant="h6" color="primary">
                    ₹{calculateTotalPrice()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            A confirmation email will be sent to your email address with all booking details.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowConfirmation(false)}>Back</Button>
        <Button 
          onClick={handleFinalConfirmation}
          variant="contained"
          color="primary"
          disabled={!bookingDetails.customerName || !bookingDetails.customerEmail || !bookingDetails.customerPhone}
        >
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );

  // Add a function to get current section video
  const getCurrentSectionVideo = () => {
    switch (activeTab) {
      case 0:
        return sectionVideos.hotels;
      case 1:
        return sectionVideos.safaris;
      case 2:
        return sectionVideos.waterparks;
      default:
        return sectionVideos.hotels;
    }
  };

  // Add a function to get current section details
  const getCurrentSectionDetails = () => {
    switch (activeTab) {
      case 0:
        return sectionDetails.hotels;
      case 1:
        return sectionDetails.safaris;
      case 2:
        return sectionDetails.waterparks;
      default:
        return sectionDetails.hotels;
    }
  };

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
          key={currentVideo}  // Key forces re-render when video changes
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'opacity 0.5s ease-in-out',
            opacity: isVideoLoading ? 0 : 1,
          }}
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Content Overlay */}
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '0.02em',
            }}
          >
            {getCurrentSectionDetails().title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              lineHeight: 1.4,
            }}
          >
            {getCurrentSectionDetails().description}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Tabs with enhanced styling */}
        <Paper 
          sx={{ 
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                py: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
              },
              '& .Mui-selected': {
                fontWeight: 'bold',
              },
            }}
          >
            <Tab 
              icon={<Hotel />} 
              label="Hotels" 
              sx={{
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
            <Tab 
              icon={<Pets />} 
              label="Wildlife Safaris"
              sx={{
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
            <Tab 
              icon={<Pool />} 
              label="Water Parks"
              sx={{
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
          </Tabs>
        </Paper>

        {/* Search Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
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
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Content based on active tab */}
        {activeTab === 0 && (
          <>
            <Grid container spacing={4}>
              {hotels.slice(0, showAllHotels ? hotels.length : 3).map((hotel) => (
                <Grid item xs={12} md={4} key={hotel.id}>
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
                        height="300"
                        image={hotel.image}
                        alt={hotel.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {hotel.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {hotel.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating
                            value={hotel.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            ({hotel.reviews} reviews)
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                          <Typography variant="body2">{hotel.location}</Typography>
                        </Box>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          {hotel.amenities.map((amenity, index) => (
                            <Chip
                              key={index}
                              label={amenity}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" color="primary">
                            {hotel.price}/night
                          </Typography>
                          <Button
                            variant="contained"
                            onClick={() => handleBooking(hotel)}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
            {hotels.length > 3 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowAllHotels(!showAllHotels)}
                  sx={{ borderRadius: '25px', px: 4 }}
                >
                  {showAllHotels ? 'Show Less' : 'View More Hotels'}
                </Button>
              </Box>
            )}
          </>
        )}

        {activeTab === 1 && (
          <>
            <Grid container spacing={4}>
              {wildlifeSafaris.slice(0, showAllSafaris ? wildlifeSafaris.length : 2).map((safari) => (
                <Grid item xs={12} md={6} key={safari.id}>
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
                        height="300"
                        image={safari.image}
                        alt={safari.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {safari.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {safari.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating
                            value={safari.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            ({safari.reviews} reviews)
                          </Typography>
                        </Box>
                        <Stack spacing={1} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2">{safari.location}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2">{safari.timings}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EventSeat sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2">{safari.duration}</Typography>
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          {safari.highlights.map((highlight, index) => (
                            <Chip
                              key={index}
                              label={highlight}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" color="primary">
                            {safari.price}/person
                          </Typography>
                          <Button
                            variant="contained"
                            onClick={() => handleBooking(safari)}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
            {wildlifeSafaris.length > 2 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowAllSafaris(!showAllSafaris)}
                  sx={{ borderRadius: '25px', px: 4 }}
                >
                  {showAllSafaris ? 'Show Less' : 'View More Safaris'}
                </Button>
              </Box>
            )}
          </>
        )}

        {activeTab === 2 && (
          <>
            <Grid container spacing={4}>
              {waterParks.slice(0, showAllParks ? waterParks.length : 2).map((park) => (
                <Grid item xs={12} md={6} key={park.id}>
                  <Zoom in={true} timeout={500}>
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
                        height="300"
                        image={park.image}
                        alt={park.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {park.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {park.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating
                            value={park.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            ({park.reviews} reviews)
                          </Typography>
                        </Box>
                        <Stack spacing={1} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2">{park.location}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2">{park.timings}</Typography>
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                          {park.attractions.map((attraction, index) => (
                            <Chip
                              key={index}
                              label={attraction}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" color="primary">
                            {park.price}/person
                          </Typography>
                          <Button
                            variant="contained"
                            onClick={() => handleBooking(park)}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
            {waterParks.length > 2 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowAllParks(!showAllParks)}
                  sx={{ borderRadius: '25px', px: 4 }}
                >
                  {showAllParks ? 'Show Less' : 'View More Water Parks'}
                </Button>
              </Box>
            )}
          </>
        )}
      </Container>

      {/* Booking Dialog */}
      <BookingDialog />

      {/* Add the new confirmation dialog */}
      <BookingConfirmationDialog />

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

export default TravelPlanning; 