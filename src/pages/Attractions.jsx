import { useState, useEffect, useRef } from 'react';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CloseIcon from '@mui/icons-material/Close';
import MapIcon from '@mui/icons-material/Map';
import ShareIcon from '@mui/icons-material/Share';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SortIcon from '@mui/icons-material/Sort';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { attractions } from '../data/attractions';

function Attractions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [likedAttractions, setLikedAttractions] = useState(() => {
    // Load liked attractions from localStorage
    const saved = localStorage.getItem('likedAttractions');
    return saved ? JSON.parse(saved) : {};
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', or 'map'
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isWeatherDialogOpen, setIsWeatherDialogOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false);
  const [isView360Open, setIsView360Open] = useState(false);
  const [current360Images, setCurrent360Images] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [rotationInterval, setRotationInterval] = useState(null);
  const [isLoading360, setIsLoading360] = useState(false);
  const imageRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const categories = ['all', 'Historical', 'Religious', 'Natural', 'Cultural'];

  // Mock 360 images for testing - replace with actual images in production
  const mock360Images = {
    1: [
      '/img/360/attraction1_1.jpg',
      '/img/360/attraction1_2.jpg',
      '/img/360/attraction1_3.jpg',
      '/img/360/attraction1_4.jpg',
      '/img/360/attraction1_5.jpg',
      '/img/360/attraction1_6.jpg',
      '/img/360/attraction1_7.jpg',
      '/img/360/attraction1_8.jpg',
    ],
    2: [
      '/img/360/attraction2_1.jpg',
      '/img/360/attraction2_2.jpg',
      '/img/360/attraction2_3.jpg',
      '/img/360/attraction2_4.jpg',
      '/img/360/attraction2_5.jpg',
      '/img/360/attraction2_6.jpg',
      '/img/360/attraction2_7.jpg',
      '/img/360/attraction2_8.jpg',
    ],
    // Add more attractions as needed
  };

  // Enhanced filtering logic
  const filteredAttractions = attractions.filter((attraction) => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      attraction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory === 'all' || 
      attraction.category.toLowerCase() === selectedCategory.toLowerCase();

    // Price filter
    const price = parseInt(attraction.entryFee?.replace(/[^0-9]/g, '') || '0');
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    // Accessibility filter
    const matchesAccessibility = !showAccessibility || attraction.accessibility;

    // Time filter (if implemented)
    const currentHour = new Date().getHours();
    const [openTime, closeTime] = attraction.timings.split(' - ').map(time => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours + minutes / 60;
    });
    const isOpenNow = currentHour >= openTime && currentHour <= closeTime;

    return matchesSearch && matchesCategory && matchesPrice && matchesAccessibility;
  });

  // Sorting logic
  const sortedAttractions = [...filteredAttractions].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.rating || 0) - (a.rating || 0);
      case 'price-low':
        return (parseInt(a.entryFee?.replace(/[^0-9]/g, '') || 0) - 
                parseInt(b.entryFee?.replace(/[^0-9]/g, '') || 0));
      case 'price-high':
        return (parseInt(b.entryFee?.replace(/[^0-9]/g, '') || 0) - 
                parseInt(a.entryFee?.replace(/[^0-9]/g, '') || 0));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Mock weather data - replace with actual API call
  const fetchWeatherData = async (location) => {
    // Simulated weather data
    setWeatherData({
      temperature: '28°C',
      condition: 'Sunny',
      humidity: '65%',
      windSpeed: '12 km/h',
      forecast: [
        { day: 'Today', temp: '28°C', condition: 'Sunny' },
        { day: 'Tomorrow', temp: '26°C', condition: 'Partly Cloudy' },
        { day: 'Day 3', temp: '25°C', condition: 'Cloudy' },
      ]
    });
  };

  // Handle booking
  const handleBooking = (attraction) => {
    setSelectedAttraction(attraction);
    setIsBookingDialogOpen(true);
  };

  // Handle sharing
  const handleShare = async (attraction) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: attraction.title,
          text: attraction.description,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: attraction.title,
          text: attraction.description,
          url: window.location.href,
        };
        
        // Copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`
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
        message: "Error sharing attraction",
        severity: "error"
      });
    }
  };

  // Handle weather info
  const handleWeatherInfo = (attraction) => {
    setSelectedAttraction(attraction);
    fetchWeatherData(attraction.location);
    setIsWeatherDialogOpen(true);
  };

  const FilterDrawer = () => (
    <Drawer
      anchor="right"
      open={isFilterDrawerOpen}
      onClose={() => setIsFilterDrawerOpen(false)}
    >
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Filter Attractions
        </Typography>
        <List>
            {categories.map((category) => (
            <ListItem
                key={category}
              button
              onClick={() => {
                setSelectedCategory(category);
                setIsFilterDrawerOpen(false);
              }}
              selected={selectedCategory === category}
            >
              <ListItemText
                primary={category}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  const handleLikeClick = (attractionId) => {
    setLikedAttractions(prev => {
      const newLiked = { ...prev, [attractionId]: !prev[attractionId] };
      setSnackbar({
        open: true,
        message: newLiked[attractionId] ? "Added to favorites" : "Removed from favorites",
        severity: "success"
      });
      return newLiked;
    });
  };

  // Handle 360 view
  const handle360View = (attraction) => {
    setIsLoading360(true);
    // Use mock images for testing - replace with actual images in production
    const images = mock360Images[attraction.id] || [];
    setCurrent360Images(images);
    setCurrentImageIndex(0);
    setIsView360Open(true);
    setIsAutoRotating(true);
    setIsLoading360(false);
  };

  // Auto-rotate 360 images
  useEffect(() => {
    let interval;
    if (isAutoRotating && isView360Open && current360Images.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % current360Images.length);
      }, 100); // Faster rotation for smoother experience
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoRotating, isView360Open, current360Images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isView360Open) return;

      switch (e.key) {
        case 'ArrowLeft':
          setIsAutoRotating(false);
          setCurrentImageIndex(prev => (prev - 1 + current360Images.length) % current360Images.length);
          break;
        case 'ArrowRight':
          setIsAutoRotating(false);
          setCurrentImageIndex(prev => (prev + 1) % current360Images.length);
          break;
        case ' ':
          setIsAutoRotating(prev => !prev);
          break;
        case 'Escape':
          handleClose360();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isView360Open, current360Images.length]);

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
      setIsAutoRotating(false);
      if (swipeDistance > 0) {
        // Swipe right
        setCurrentImageIndex(prev => (prev - 1 + current360Images.length) % current360Images.length);
      } else {
        // Swipe left
        setCurrentImageIndex(prev => (prev + 1) % current360Images.length);
      }
    }
  };

  const handleClose360 = () => {
    setIsView360Open(false);
    setIsAutoRotating(false);
    setCurrentImageIndex(0);
  };

  // Enhanced 360 View Dialog
  const View360Dialog = () => (
    <Dialog
      open={isView360Open}
      onClose={handleClose360}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'black',
        }
      }}
    >
      <DialogTitle sx={{ 
        p: { xs: 1, sm: 2 },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        color: 'white'
      }}>
        <Typography variant="h6">360° View</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title={isAutoRotating ? "Pause rotation" : "Start rotation"}>
            <IconButton
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              sx={{ color: 'white' }}
            >
              {isAutoRotating ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Tooltip>
          <IconButton
            onClick={handleClose360}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <Box
          ref={imageRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            width: '100%',
            height: { xs: '50vh', sm: '60vh', md: '70vh' },
            position: 'relative',
            overflow: 'hidden',
            bgcolor: 'black',
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          {isLoading360 ? (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              height: '100%'
            }}>
              <CircularProgress sx={{ color: 'white' }} />
            </Box>
          ) : (
            <Box
              component="img"
              src={current360Images[currentImageIndex]}
              alt={`360 view ${currentImageIndex + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'transform 0.1s ease-out',
              }}
            />
          )}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 2,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              p: 1,
              borderRadius: 2,
            }}
          >
            <Tooltip title="Previous">
              <IconButton
                onClick={() => {
                  setIsAutoRotating(false);
                  setCurrentImageIndex((prev) => (prev - 1 + current360Images.length) % current360Images.length);
                }}
                sx={{ color: 'white' }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                px: 1
              }}
            >
              {currentImageIndex + 1} / {current360Images.length}
            </Typography>
            <Tooltip title="Next">
              <IconButton
                onClick={() => {
                  setIsAutoRotating(false);
                  setCurrentImageIndex((prev) => (prev + 1) % current360Images.length);
                }}
                sx={{ color: 'white' }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ 
        p: { xs: 1, sm: 2 },
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1
      }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {isAutoRotating ? 'Auto-rotating - Click to pause' : 'Click play to auto-rotate'}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', opacity: 0.7 }}>
          Use arrow keys, swipe, or click arrows to navigate
        </Typography>
      </DialogActions>
    </Dialog>
  );

  const AttractionCard = ({ attraction }) => {
    const [isView360Open, setIsView360Open] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleImageClick = () => {
      setSelectedImage(attraction.image);
      setImageGalleryOpen(true);
    };

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
                  '&:hover': {
                    transform: 'translateY(-8px)',
              boxShadow: theme.shadows[8],
              '& .MuiCardMedia-root': {
                transform: 'scale(1.05)',
              },
                  },
                }}
          onMouseEnter={() => setHoveredCard(attraction.id)}
          onMouseLeave={() => setHoveredCard(null)}
              >
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <CardActionArea onClick={handleImageClick}>
                <CardMedia
                  component="img"
                height="240"
                  image={attraction.image}
                  alt={attraction.title}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </CardActionArea>
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                display: 'flex',
                gap: 1,
                opacity: hoveredCard === attraction.id ? 1 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              <Tooltip title={likedAttractions[attraction.id] ? "Remove from favorites" : "Add to favorites"}>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    handleLikeClick(attraction.id);
                  }}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  {likedAttractions[attraction.id] ? (
                    <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip title="View 360°">
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    handle360View(attraction);
                  }}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  <ViewInArIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    handleShare(attraction);
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
              label={attraction.category}
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
            {attraction.accessibility && (
              <Tooltip title="Accessibility Available">
                <AccessibilityNewIcon
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '50%',
                    p: 0.5,
                  }}
                />
              </Tooltip>
            )}
          </Box>
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 1,
              }}
            >
                    {attraction.title}
                  </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {attraction.location}
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
              {attraction.description}
                  </Typography>
            <Box sx={{ mt: 'auto' }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  size="small"
                  icon={<AccessTimeIcon />}
                  label={attraction.timings}
                  color="info"
                  variant="outlined"
                />
                <Chip
                  size="small"
                  label={attraction.entryFee}
                  color="success"
                  variant="outlined"
                />
                {attraction.rating && (
                  <Chip
                    size="small"
                    icon={<Rating value={attraction.rating} readOnly size="small" />}
                    label={`${attraction.rating}/5`}
                    color="warning"
                    variant="outlined"
                  />
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  component={RouterLink}
                  to={`/attractions/${attraction.id}`}
                  variant="contained"
                    color="primary"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    '&:hover': {
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  >
                    Learn More
                  </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleBooking(attraction)}
                  startIcon={<BookOnlineIcon />}
                >
                  Book
                </Button>
              </Box>
            </Box>
                </CardContent>
              </Card>
      </Fade>
    );
  };

  // Filter summary component
  const FilterSummary = () => {
    const activeFilters = [];
    
    if (searchQuery) activeFilters.push(`Search: "${searchQuery}"`);
    if (selectedCategory !== 'all') activeFilters.push(`Category: ${selectedCategory}`);
    if (priceRange[0] > 0 || priceRange[1] < 1000) activeFilters.push(`Price: ₹${priceRange[0]} - ₹${priceRange[1]}`);
    if (showAccessibility) activeFilters.push('Accessible Only');

    if (activeFilters.length === 0) return null;

    return (
      <Paper sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
        <Typography variant="subtitle1" gutterBottom>
          Active Filters:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {activeFilters.map((filter, index) => (
            <Chip
              key={index}
              label={filter}
              onDelete={() => {
                if (filter.startsWith('Search')) setSearchQuery('');
                if (filter.startsWith('Category')) setSelectedCategory('all');
                if (filter.startsWith('Price')) setPriceRange([0, 1000]);
                if (filter.startsWith('Accessible')) setShowAccessibility(false);
              }}
              color="primary"
              variant="outlined"
            />
          ))}
          <Button
            size="small"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setPriceRange([0, 1000]);
              setShowAccessibility(false);
            }}
          >
            Clear All
          </Button>
        </Box>
      </Paper>
    );
  };

  // Results count component
  const ResultsCount = () => (
    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
      Showing {sortedAttractions.length} of {attractions.length} attractions
    </Typography>
  );

  // No results component
  const NoResults = () => (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h6" gutterBottom>
        No attractions found matching your criteria
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Try adjusting your filters or search terms
      </Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setSearchQuery('');
          setSelectedCategory('all');
          setPriceRange([0, 1000]);
          setShowAccessibility(false);
        }}
      >
        Clear All Filters
      </Button>
    </Box>
  );

  // Image Gallery Dialog
  const ImageGalleryDialog = () => (
    <Dialog
      open={imageGalleryOpen}
      onClose={() => setImageGalleryOpen(false)}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'black',
        }
      }}
    >
      <DialogTitle sx={{ 
        p: { xs: 1, sm: 2 },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        color: 'white'
      }}>
        <Typography variant="h6">Image Gallery</Typography>
        <IconButton
          onClick={() => setImageGalleryOpen(false)}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            height: { xs: '50vh', sm: '60vh', md: '70vh' },
            position: 'relative',
            overflow: 'hidden',
            bgcolor: 'black',
          }}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="Gallery"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '40vh', md: '50vh' },
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
          src="/img/hero/attractions.jpg"
          alt="Nagpur Attractions"
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
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Explore Nagpur's Attractions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Discover the city's most iconic landmarks and hidden gems
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
            mt: -4,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={() => setIsFilterDrawerOpen(true)}
                >
                  Filter
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                  startIcon={<MapIcon />}
                  onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
                >
                  {viewMode === 'grid' ? 'Map View' : 'Grid View'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* View Mode Toggle */}
        <Paper sx={{ p: 2, mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Grid View">
              <IconButton
                onClick={() => setViewMode('grid')}
                color={viewMode === 'grid' ? 'primary' : 'default'}
              >
                <GridViewIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="List View">
              <IconButton
                onClick={() => setViewMode('list')}
                color={viewMode === 'list' ? 'primary' : 'default'}
              >
                <ViewListIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Map View">
              <IconButton
                onClick={() => setViewMode('map')}
                color={viewMode === 'map' ? 'primary' : 'default'}
              >
                <MapIcon />
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
              <MenuItem value="popular">
                <TrendingUpIcon sx={{ mr: 1 }} /> Most Popular
              </MenuItem>
              <MenuItem value="price-low">
                <LocalOfferIcon sx={{ mr: 1 }} /> Price: Low to High
              </MenuItem>
              <MenuItem value="price-high">
                <LocalOfferIcon sx={{ mr: 1 }} /> Price: High to Low
              </MenuItem>
              <MenuItem value="name">
                <SortIcon sx={{ mr: 1 }} /> Name
              </MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Advanced Filters */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort By"
                >
                  <MenuItem value="popular">Most Popular</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom>Price Range</Typography>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                step={10}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={showAccessibility}
                    onChange={(e) => setShowAccessibility(e.target.checked)}
                  />
                }
                label="Show Only Accessible Attractions"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Filter Summary */}
        <FilterSummary />

        {/* Results Count */}
        <ResultsCount />

        {/* Loading State */}
        {isLoading && (
          <Box sx={{ width: '100%', mb: 3 }}>
            <LinearProgress />
          </Box>
        )}

        {/* Attractions Grid/List/Map */}
        {sortedAttractions.length > 0 ? (
          <Grid container spacing={4}>
            {sortedAttractions.map((attraction) => (
              <Grid item xs={12} sm={6} lg={4} key={attraction.id}>
                <AttractionCard attraction={attraction} />
            </Grid>
          ))}
        </Grid>
        ) : (
          <NoResults />
        )}
      </Container>

      {/* Image Gallery Dialog */}
      <ImageGalleryDialog />

      {/* Booking Dialog */}
      <Dialog
        open={isBookingDialogOpen}
        onClose={() => setIsBookingDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Book {selectedAttraction?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            Booking functionality will be implemented here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsBookingDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary">
            Proceed to Book
          </Button>
        </DialogActions>
      </Dialog>

      {/* Share Dialog */}
      <Dialog
        open={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Share {selectedAttraction?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            Social sharing functionality will be implemented here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsShareDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Weather Dialog */}
      <Dialog
        open={isWeatherDialogOpen}
        onClose={() => setIsWeatherDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Weather at {selectedAttraction?.title}
        </DialogTitle>
        <DialogContent>
          {weatherData ? (
            <Box>
              <Typography variant="h4" gutterBottom>
                {weatherData.temperature}
              </Typography>
              <Typography variant="body1" paragraph>
                {weatherData.condition}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity: {weatherData.humidity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind Speed: {weatherData.windSpeed}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                3-Day Forecast
              </Typography>
              {weatherData.forecast.map((day, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>{day.day}</Typography>
                  <Typography>{day.temp} - {day.condition}</Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography>Loading weather data...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsWeatherDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Filter Drawer */}
      <FilterDrawer />

      {/* 360 View Dialog */}
      <View360Dialog />

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

export default Attractions; 