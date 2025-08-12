import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import AttractionDetail from './pages/AttractionDetail';
import TouristPlaces from './pages/TouristPlaces';
import Festivals from './pages/Festivals';
import Food from './pages/Food';
import Nature from './pages/Nature';
import Heritage from './pages/Heritage';
import Adventure from './pages/Adventure';
import Shopping from './pages/Shopping';
import Nightlife from './pages/Nightlife';
import TravelPlanning from './pages/TravelPlanning';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
        }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/attractions/:id" element={<AttractionDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/festivals" element={<Festivals />} />
              <Route path="/tourist-places" element={<TouristPlaces />} />
              <Route path="/food" element={<Food />} />
              <Route path="/nature" element={<Nature />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/adventure" element={<Adventure />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/nightlife" element={<Nightlife />} />
              <Route path="/travel-planning" element={<TravelPlanning />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
