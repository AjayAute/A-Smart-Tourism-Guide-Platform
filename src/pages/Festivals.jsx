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
  Modal,
  Backdrop,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {
  CalendarMonth as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import EventIcon from '@mui/icons-material/Event';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SortIcon from '@mui/icons-material/Sort';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import { Link as RouterLink } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { format, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

// Mock data for festivals
const festivals = [
  {
    id: 1,
    title: 'Nagpur Orange Festival',
    description: 'Celebrate the city\'s famous orange heritage with cultural performances, food stalls, and activities.',
    image: '/img/festivals/orange event.png',
    date: '2024-12-15',
    endDate: '2024-12-17',
    location: 'Sitabuldi Fort Ground',
    category: 'Cultural',
    entryFee: '₹200',
    rating: 4.5,
    highlights: [
      'Orange picking experience',
      'Cultural performances',
      'Food stalls',
      'Art exhibitions',
      'Live music'
    ],
    schedule: [
      { time: '10:00 AM', event: 'Opening Ceremony' },
      { time: '11:00 AM', event: 'Cultural Performances' },
      { time: '1:00 PM', event: 'Lunch Break' },
      { time: '2:00 PM', event: 'Orange Picking' },
      { time: '4:00 PM', event: 'Live Music' },
      { time: '6:00 PM', event: 'Closing Ceremony' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: true
  },
  {
    id: 2,
    title: 'Nagpur Food Festival',
    description: 'Experience the diverse culinary heritage of Nagpur with local and international cuisines.',
    image: '/img/festivals/food-festival.jpg',
    date: '2024-11-20',
    endDate: '2024-11-22',
    location: 'Dharampeth Ground',
    category: 'Food',
    entryFee: '₹150',
    rating: 4.8,
    highlights: [
      'Local cuisine stalls',
      'International food',
      'Cooking demonstrations',
      'Food competitions',
      'Live entertainment'
    ],
    schedule: [
      { time: '11:00 AM', event: 'Festival Opening' },
      { time: '12:00 PM', event: 'Cooking Demo' },
      { time: '2:00 PM', event: 'Food Competition' },
      { time: '4:00 PM', event: 'Live Music' },
      { time: '7:00 PM', event: 'Closing' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: true
  },
  {
    id: 3,
    title: 'Nagpur Music Festival',
    description: 'A three-day music extravaganza featuring local and national artists across various genres.',
    image: '/img/festivals/music-festival.jpg',
    date: '2024-10-05',
    endDate: '2024-10-07',
    location: 'MIG Club Ground',
    category: 'Music',
    entryFee: '₹500',
    rating: 4.7,
    highlights: [
      'Live performances',
      'Workshop sessions',
      'Artist meet & greet',
      'Food & beverage stalls',
      'Camping area'
    ],
    schedule: [
      { time: '4:00 PM', event: 'Gates Open' },
      { time: '5:00 PM', event: 'Opening Act' },
      { time: '7:00 PM', event: 'Main Performance' },
      { time: '10:00 PM', event: 'Late Night Session' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  },
  {
    id: 4,
    title: 'Nagpur Literature Festival',
    description: 'A celebration of literature, poetry, and storytelling with renowned authors and poets.',
    image: '/img/festivals/literature-festival.jpg',
    date: '2024-09-15',
    endDate: '2024-09-17',
    location: 'Chitnavis Centre',
    category: 'Cultural',
    entryFee: '₹300',
    rating: 4.6,
    highlights: [
      'Author readings',
      'Panel discussions',
      'Book launches',
      'Poetry sessions',
      'Children\'s literature'
    ],
    schedule: [
      { time: '9:00 AM', event: 'Registration' },
      { time: '10:00 AM', event: 'Opening Ceremony' },
      { time: '11:00 AM', event: 'Author Panel' },
      { time: '2:00 PM', event: 'Book Reading' },
      { time: '4:00 PM', event: 'Poetry Session' },
      { time: '6:00 PM', event: 'Closing' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  },
  {
    id: 5,
    title: 'Nagpur Film Festival',
    description: 'Showcasing independent films, documentaries, and short films from across the country.',
    image: '/img/festivals/film-festival.jpg',
    date: '2024-08-10',
    endDate: '2024-08-12',
    location: 'Cinepolis, Empress Mall',
    category: 'Cultural',
    entryFee: '₹250',
    rating: 4.4,
    highlights: [
      'Film screenings',
      'Director Q&A',
      'Workshop sessions',
      'Award ceremony',
      'Networking events'
    ],
    schedule: [
      { time: '10:00 AM', event: 'Opening Ceremony' },
      { time: '11:00 AM', event: 'Film Screenings' },
      { time: '2:00 PM', event: 'Director Q&A' },
      { time: '4:00 PM', event: 'Workshop' },
      { time: '7:00 PM', event: 'Award Ceremony' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  },
  {
    id: 6,
    title: 'Nagpur Dance Festival',
    description: 'A vibrant celebration of dance forms from classical to contemporary.',
    image: '/img/festivals/dance-festival.jpg',
    date: '2024-07-20',
    endDate: '2024-07-22',
    location: 'Suresh Bhat Auditorium',
    category: 'Cultural',
    entryFee: '₹200',
    rating: 4.5,
    highlights: [
      'Classical dance',
      'Contemporary performances',
      'Folk dance',
      'Dance workshops',
      'Competition'
    ],
    schedule: [
      { time: '5:00 PM', event: 'Gates Open' },
      { time: '6:00 PM', event: 'Opening Performance' },
      { time: '7:30 PM', event: 'Main Show' },
      { time: '9:00 PM', event: 'Closing' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: false,
    isUpcoming: true,
    featured: false
  },
  {
    id: 7,
    title: 'Nagpur Art Festival',
    description: 'Showcasing contemporary and traditional art forms with exhibitions and live demonstrations.',
    image: '/img/festivals/art-festival.jpg',
    date: '2024-06-15',
    endDate: '2024-06-17',
    location: 'Art Gallery, Civil Lines',
    category: 'Cultural',
    entryFee: '₹100',
    rating: 4.3,
    highlights: [
      'Art exhibitions',
      'Live painting',
      'Sculpture display',
      'Art workshops',
      'Artist talks'
    ],
    schedule: [
      { time: '10:00 AM', event: 'Gallery Opening' },
      { time: '11:00 AM', event: 'Artist Talk' },
      { time: '2:00 PM', event: 'Workshop' },
      { time: '4:00 PM', event: 'Live Painting' },
      { time: '6:00 PM', event: 'Closing' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: false,
    isUpcoming: true,
    featured: false
  },
  {
    id: 8,
    title: 'Nagpur Comedy Festival',
    description: 'A laughter-filled weekend with top comedians from across the country.',
    image: '/img/festivals/comedy-festival.jpg',
    date: '2024-05-10',
    endDate: '2024-05-12',
    location: 'Gurudeo Nagar Ground',
    category: 'Entertainment',
    entryFee: '₹300',
    rating: 4.7,
    highlights: [
      'Stand-up comedy',
      'Open mic sessions',
      'Comedy workshops',
      'Late night shows',
      'Meet & greet'
    ],
    schedule: [
      { time: '6:00 PM', event: 'Gates Open' },
      { time: '7:00 PM', event: 'Opening Act' },
      { time: '8:30 PM', event: 'Main Show' },
      { time: '10:00 PM', event: 'Late Night Show' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  },
  {
    id: 9,
    title: 'Nagpur Fashion Festival',
    description: 'Showcasing the latest trends in fashion with designer collections and runway shows.',
    image: '/img/festivals/fashion-festival.jpg',
    date: '2024-04-20',
    endDate: '2024-04-22',
    location: 'Taj Hotel Convention Centre',
    category: 'Fashion',
    entryFee: '₹500',
    rating: 4.6,
    highlights: [
      'Runway shows',
      'Designer collections',
      'Fashion workshops',
      'Styling sessions',
      'Exhibition'
    ],
    schedule: [
      { time: '11:00 AM', event: 'Exhibition Opens' },
      { time: '2:00 PM', event: 'Workshop' },
      { time: '5:00 PM', event: 'Runway Show' },
      { time: '7:00 PM', event: 'Designer Talk' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  },
  {
    id: 10,
    title: 'Nagpur Sports Festival',
    description: 'A multi-sport event featuring competitions, demonstrations, and fitness activities.',
    image: '/img/festivals/sports-festival.jpg',
    date: '2024-03-15',
    endDate: '2024-03-17',
    location: 'VCA Stadium',
    category: 'Sports',
    entryFee: '₹200',
    rating: 4.4,
    highlights: [
      'Cricket tournament',
      'Football matches',
      'Athletics events',
      'Fitness workshops',
      'Kids activities'
    ],
    schedule: [
      { time: '7:00 AM', event: 'Registration' },
      { time: '8:00 AM', event: 'Opening Ceremony' },
      { time: '9:00 AM', event: 'Tournaments Begin' },
      { time: '2:00 PM', event: 'Workshops' },
      { time: '5:00 PM', event: 'Finals' }
    ],
    accessibility: true,
    parking: true,
    foodAvailable: true,
    isUpcoming: true,
    featured: false
  }
];

function Festivals() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [likedFestivals, setLikedFestivals] = useState(() => {
    const saved = localStorage.getItem('likedFestivals');
    return saved ? JSON.parse(saved) : {};
  });
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('upcoming');
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [countdown, setCountdown] = useState({});

  const categories = ['all', 'Cultural', 'Food', 'Music', 'Religious', 'Sports'];

  // Enhanced filtering logic
  const filteredFestivals = festivals.filter((festival) => {
    const matchesSearch = searchQuery === '' || 
      festival.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      festival.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      festival.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || 
      festival.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesAccessibility = !showAccessibility || festival.accessibility;

    const matchesFeatured = !showFeatured || festival.featured;

    return matchesSearch && matchesCategory && matchesAccessibility && matchesFeatured;
  });

  // Sorting logic
  const sortedFestivals = [...filteredFestivals].sort((a, b) => {
    switch (sortBy) {
      case 'upcoming':
        return new Date(a.date) - new Date(b.date);
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Handle like/unlike
  const handleLikeClick = (festivalId) => {
    setLikedFestivals(prev => {
      const newLiked = { ...prev, [festivalId]: !prev[festivalId] };
      localStorage.setItem('likedFestivals', JSON.stringify(newLiked));
      setSnackbar({
        open: true,
        message: newLiked[festivalId] ? "Added to favorites" : "Removed from favorites",
        severity: "success"
      });
      return newLiked;
    });
  };

  // Handle share
  const handleShare = async (festival) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: festival.title,
          text: festival.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          `${festival.title}\n${festival.description}\n${window.location.href}`
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
        message: "Error sharing festival",
        severity: "error"
      });
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextFestival = festivals
        .filter(festival => new Date(festival.date) > now)
        .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

      if (nextFestival) {
        const days = differenceInDays(new Date(nextFestival.date), now);
        const hours = differenceInHours(new Date(nextFestival.date), now) % 24;
        const minutes = differenceInMinutes(new Date(nextFestival.date), now) % 60;

        setCountdown({
          days,
          hours,
          minutes,
          festival: nextFestival
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Countdown Timer Component
  const CountdownTimer = () => {
    if (!countdown.festival) return null;

    return (
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Next Festival: {countdown.festival.title}
            </Typography>
            <Typography variant="body1">
              {format(new Date(countdown.festival.date), 'MMMM dd, yyyy')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                  {countdown.days}
                </Typography>
                <Typography variant="body2">Days</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                  {countdown.hours}
                </Typography>
                <Typography variant="body2">Hours</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                  {countdown.minutes}
                </Typography>
                <Typography variant="body2">Minutes</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  // Calendar View Component
  const CalendarView = () => (
    <Modal
      open={showCalendar}
      onClose={() => setShowCalendar(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showCalendar}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Festival Calendar</Typography>
            <IconButton onClick={() => setShowCalendar(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={(newDate) => {
                setSelectedDate(newDate);
                const festivalsOnDate = festivals.filter(festival => 
                  format(new Date(festival.date), 'yyyy-MM-dd') === format(newDate, 'yyyy-MM-dd')
                );
                if (festivalsOnDate.length > 0) {
                  setSelectedFestival(festivalsOnDate[0]);
                  setIsDetailsDialogOpen(true);
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Fade>
    </Modal>
  );

  // Enhanced Festival Card
  const FestivalCard = ({ festival }) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme();
    const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    return (
      <Grow in={true} timeout={500}>
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
            <CardActionArea 
              onClick={() => {
                setSelectedFestival(festival);
                setIsDetailsDialogOpen(true);
              }}
              sx={{ height: '100%' }}
            >
              <CardMedia
                component="img"
                image={festival.image}
                alt={festival.title}
                sx={{
                  height: '100%',
                  width: '100%',
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
                opacity: isHovered ? 1 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              <Tooltip title={likedFestivals[festival.id] ? "Remove from favorites" : "Add to favorites"}>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    handleLikeClick(festival.id);
                  }}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  {likedFestivals[festival.id] ? (
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
                    handleShare(festival);
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
              label={festival.category}
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
                {festival.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary" sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {festival.location}
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
                {festival.description}
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                <Chip
                  size="small"
                  icon={<CalendarIcon />}
                  label={formatDate(festival.date)}
                  color="info"
                  variant="outlined"
                />
                <Chip
                  size="small"
                  label={festival.entryFee}
                  color="success"
                  variant="outlined"
                />
                {festival.rating && (
                  <Chip
                    size="small"
                    icon={<Rating value={festival.rating} readOnly size="small" />}
                    label={`${festival.rating}/5`}
                    color="warning"
                    variant="outlined"
                  />
                )}
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  setSelectedFestival(festival);
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
      </Grow>
    );
  };

  // Festival Details Dialog
  const FestivalDetailsDialog = () => (
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
      {selectedFestival && (
        <>
          <DialogTitle sx={{ 
            p: { xs: 1, sm: 2 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Typography variant="h5">{selectedFestival.title}</Typography>
            <IconButton onClick={() => setIsDetailsDialogOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ mb: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedFestival.image}
                alt={selectedFestival.title}
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  About the Festival
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedFestival.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Highlights
                </Typography>
                <Grid container spacing={2}>
                  {selectedFestival.highlights.map((highlight, index) => (
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
                    Event Details
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle2">Date</Typography>
                        <Typography variant="body2">
                          {formatDate(selectedFestival.date)} - {formatDate(selectedFestival.endDate)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle2">Location</Typography>
                        <Typography variant="body2">{selectedFestival.location}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocalOfferIcon color="primary" />
                      <Box>
                        <Typography variant="subtitle2">Entry Fee</Typography>
                        <Typography variant="body2">{selectedFestival.entryFee}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Schedule
                  </Typography>
                  <Timeline>
                    {selectedFestival.schedule.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot color="primary" />
                          {index < selectedFestival.schedule.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography variant="subtitle2">{item.time}</Typography>
                          <Typography variant="body2">{item.event}</Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
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
              onClick={() => {
                // Handle booking/ticket purchase
                setSnackbar({
                  open: true,
                  message: "Booking functionality coming soon!",
                  severity: "info"
                });
              }}
            >
              Book Tickets
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  // Featured Festivals Section
  const FeaturedFestivals = () => {
    const featuredFestivals = festivals.filter(festival => festival.featured);
    
    return (
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ 
          fontWeight: 'bold',
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '60%',
            height: 4,
            backgroundColor: 'primary.main',
            borderRadius: 2
          }
        }}>
          Featured Festivals
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {featuredFestivals.map((festival) => (
            <Grid item xs={12} md={6} key={festival.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: theme.shadows[8],
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                  },
                }}
              >
                <Box sx={{ 
                  width: { xs: '100%', md: '40%' },
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={festival.image}
                    alt={festival.title}
                    sx={{
                      height: { xs: 200, md: '100%' },
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Chip
                    label="Featured"
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontWeight: 'bold',
                    }}
                  />
                </Box>
                <Box sx={{ 
                  width: { xs: '100%', md: '60%' },
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3
                }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {festival.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {festival.location}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {festival.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip
                      size="small"
                      icon={<CalendarIcon />}
                      label={formatDate(festival.date)}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      size="small"
                      label={festival.entryFee}
                      color="success"
                      variant="outlined"
                    />
                    {festival.rating && (
                      <Chip
                        size="small"
                        icon={<Rating value={festival.rating} readOnly size="small" />}
                        label={`${festival.rating}/5`}
                        color="warning"
                        variant="outlined"
                      />
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                      setSelectedFestival(festival);
                      setIsDetailsDialogOpen(true);
                    }}
                    sx={{
                      alignSelf: 'flex-start',
                      '&:hover': {
                        transform: 'translateX(4px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  // Upcoming Festivals Timeline
  const UpcomingFestivalsTimeline = () => {
    const upcomingFestivals = [...festivals]
      .filter(festival => new Date(festival.date) >= new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5);
    
    return (
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ 
          fontWeight: 'bold',
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '60%',
            height: 4,
            backgroundColor: 'primary.main',
            borderRadius: 2
          }
        }}>
          Upcoming Festivals
        </Typography>
        <Timeline position="alternate" sx={{ mt: 3 }}>
          {upcomingFestivals.map((festival, index) => (
            <TimelineItem key={festival.id}>
              <TimelineSeparator>
                <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"} />
                {index < upcomingFestivals.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[6],
                    },
                  }}
                  onClick={() => {
                    setSelectedFestival(festival);
                    setIsDetailsDialogOpen(true);
                  }}
                >
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {festival.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarIcon sx={{ fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2">
                      {formatDate(festival.date)} - {formatDate(festival.endDate)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationIcon sx={{ fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2">{festival.location}</Typography>
                  </Box>
                  <Chip
                    label={festival.category}
                    size="small"
                    color="primary"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    );
  };

  // Category Tabs
  const CategoryTabs = () => (
    <Box sx={{ mb: 4 }}>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => {
          setActiveTab(newValue);
          setSelectedCategory(newValue === 0 ? 'all' : categories[newValue]);
        }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="festival categories"
        sx={{
          '& .MuiTabs-indicator': {
            height: 4,
            borderRadius: 2,
          },
          '& .MuiTab-root': {
            minWidth: 120,
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1rem',
          },
        }}
      >
        <Tab label="All Festivals" />
        {categories.slice(1).map((category) => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>
    </Box>
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
          src="/img/hero/festivals.jpg"
          alt="Nagpur Festivals"
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
            Nagpur Festivals
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
            Experience the city's vibrant cultural celebrations and create unforgettable memories
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                const element = document.getElementById('featured-festivals');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Festivals
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<CalendarIcon />}
              onClick={() => setShowCalendar(true)}
              sx={{
                borderRadius: 30,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Calendar View
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Featured Festivals */}
        <Box id="featured-festivals">
          <FeaturedFestivals />
        </Box>

        {/* Upcoming Festivals Timeline */}
        <UpcomingFestivalsTimeline />

        {/* Category Tabs */}
        <CategoryTabs />

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
                placeholder="Search festivals..."
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
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={() => setIsFilterDrawerOpen(true)}
                  sx={{ borderRadius: 2 }}
                >
                  Filter
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                  startIcon={viewMode === 'grid' ? <GridViewIcon /> : <ViewListIcon />}
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  sx={{ borderRadius: 2 }}
                >
                  {viewMode === 'grid' ? 'Grid View' : 'List View'}
                </Button>
                <Button
                  variant={showMap ? 'contained' : 'outlined'}
                  startIcon={<MapIcon />}
                  onClick={() => setShowMap(!showMap)}
                  sx={{ borderRadius: 2 }}
                >
                  Map View
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* View Mode Toggle */}
        <Paper sx={{ 
          p: 2, 
          mb: 3, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}>
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
            <Tooltip title="Calendar View">
              <IconButton
                onClick={() => setShowCalendar(true)}
                color={showCalendar ? 'primary' : 'default'}
              >
                <CalendarIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Map View">
              <IconButton
                onClick={() => setShowMap(!showMap)}
                color={showMap ? 'primary' : 'default'}
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
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="upcoming">
                <TrendingUpIcon sx={{ mr: 1 }} /> Upcoming
              </MenuItem>
              <MenuItem value="rating">
                <TrendingUpIcon sx={{ mr: 1 }} /> Rating
              </MenuItem>
              <MenuItem value="name">
                <SortIcon sx={{ mr: 1 }} /> Name
              </MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Advanced Filters */}
        <Paper sx={{ 
          p: 3, 
          mb: 4,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={showAccessibility}
                    onChange={(e) => setShowAccessibility(e.target.checked)}
                  />
                }
                label="Show Only Accessible Festivals"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={showFeatured}
                    onChange={(e) => setShowFeatured(e.target.checked)}
                  />
                }
                label="Show Only Featured Festivals"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Festivals Grid/List */}
        {sortedFestivals.length > 0 ? (
          <Grid container spacing={3}>
            {sortedFestivals.map((festival) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={festival.id}>
                <FestivalCard festival={festival} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" gutterBottom>
              No festivals found matching your criteria
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Try adjusting your filters or search terms
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowAccessibility(false);
                setShowFeatured(false);
              }}
              sx={{ borderRadius: 2 }}
            >
              Clear All Filters
            </Button>
          </Box>
        )}
      </Container>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Filter Festivals
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
                  primary={category.charAt(0).toUpperCase() + category.slice(1)}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={showAccessibility}
                onChange={(e) => setShowAccessibility(e.target.checked)}
              />
            }
            label="Show Only Accessible Festivals"
          />
          <FormControlLabel
            control={
              <Switch
                checked={showFeatured}
                onChange={(e) => setShowFeatured(e.target.checked)}
              />
            }
            label="Show Only Featured Festivals"
          />
        </Box>
      </Drawer>

      {/* Festival Details Dialog */}
      <FestivalDetailsDialog />

      {/* Calendar View */}
      <CalendarView />

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

export default Festivals; 