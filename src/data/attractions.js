export const featuredAttractions = [
  {
    id: 1,
    title: 'Deekshabhoomi',
    image: '/img/attractions/deekshabhoomi.jpg',
    description: 'The largest stupa in Asia and a sacred monument of Buddhism.',
    location: 'Nagpur, Maharashtra',
    category: 'Religious',
    fullDescription: 'Deekshabhoomi is a sacred monument of Buddhism at Nagpur, India. It is where Dr. B.R. Ambedkar converted to Buddhism along with his followers on 14 October 1956. The stupa is the largest hollow stupa in the world.',
    timings: '6:00 AM - 9:00 PM',
    bestTimeToVisit: 'October to March',
    entryFee: 'Free',
    nearbyAttractions: ['Zero Mile Marker', 'Raman Science Centre'],
    virtualTour: '/img/360/deekshabhoomi-360.jpg'
  },
  {
    id: 2,
    title: 'Futala Lake',
    image: '/img/attractions/futala-lake.jpg',
    description: 'A beautiful lake with musical fountains and food street.',
    location: 'West Nagpur',
    category: 'Nature',
    fullDescription: 'Futala Lake is a historic lake in Nagpur, India. It is known for its musical fountains, food street, and beautiful sunset views. The lake is surrounded by a 2.5 km long walkway and is a popular spot for evening relaxation.',
    timings: 'Open 24 hours',
    bestTimeToVisit: 'October to March',
    entryFee: 'Free',
    nearbyAttractions: ['Dragon Palace Temple', 'Ambazari Lake'],
    virtualTour: '/img/360/futala-lake-360.jpg'
  },
  {
    id: 3,
    title: 'Zero Mile Marker',
    image: '/img/attractions/zero-mile.jpg',
    description: 'Historical monument marking the geographical center of India.',
    location: 'Central Nagpur',
    category: 'Historical',
    fullDescription: 'The Zero Mile Marker is a monument built by the British in 1867 to mark the geographical center of India. It consists of four horses and a pillar made of sandstone. The monument is surrounded by a garden and is a significant historical landmark.',
    timings: '6:00 AM - 8:00 PM',
    bestTimeToVisit: 'October to March',
    entryFee: '₹10 per person',
    nearbyAttractions: ['Deekshabhoomi', 'Central Museum'],
    virtualTour: '/img/360/zero-mile-360.jpg'
  },
];

export const attractions = [
  ...featuredAttractions,
  {
    id: 4,
    title: 'Ambazari Lake',
    image: '/img/attractions/ambazari-lake.jpg',
    description: 'A scenic lake surrounded by gardens and walking trails.',
    location: 'South Nagpur',
    category: 'Natural',
    timing: '6:00 AM - 8:00 PM',
    fullDescription: 'Ambazari Lake is one of the largest lakes in Nagpur, known for its scenic beauty and recreational activities. The lake is surrounded by a well-maintained garden and walking trails.',
    timings: '6:00 AM - 8:00 PM',
    bestTimeToVisit: 'October to March',
    entryFee: 'Free',
    nearbyAttractions: ['Futala Lake', 'Dragon Palace Temple'],
    virtualTour: '/img/360/ambazari-lake-360.jpg'
  },
  {
    id: 5,
    title: 'Dragon Palace Temple',
    image: '/img/attractions/dragon-palace.jpg',
    description: 'A beautiful Buddhist temple with unique architecture.',
    location: 'Kamptee Road',
    category: 'Religious',
    timing: '6:00 AM - 8:00 PM',
    fullDescription: 'The Dragon Palace Temple is a stunning Buddhist temple known for its unique architecture and peaceful atmosphere. The temple features beautiful gardens and meditation areas.',
    timings: '6:00 AM - 8:00 PM',
    bestTimeToVisit: 'October to March',
    entryFee: 'Free',
    nearbyAttractions: ['Ambazari Lake', 'Futala Lake'],
    virtualTour: '/img/360/dragon-palace-360.jpg'
  },
  {
    id: 6,
    title: 'Raman Science Centre',
    image: '/img/attractions/raman-science.jpg',
    description: 'Interactive science museum with educational exhibits.',
    location: 'Civil Lines',
    category: 'Cultural',
    timing: '10:00 AM - 5:00 PM',
    fullDescription: 'The Raman Science Centre is an interactive science museum that makes learning fun and engaging. It features various exhibits, a planetarium, and regular science shows.',
    timings: '10:00 AM - 5:00 PM',
    bestTimeToVisit: 'Year-round',
    entryFee: '₹50 per person',
    nearbyAttractions: ['Deekshabhoomi', 'Zero Mile Marker'],
    virtualTour: '/img/360/raman-science-360.jpg'
  }
]; 