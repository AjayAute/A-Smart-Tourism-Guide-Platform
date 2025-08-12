import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Food = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Food in Nagpur
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the culinary delights of Nagpur, from traditional Saoji cuisine to modern dining experiences.
        </Typography>
      </Container>
    </Box>
  );
};

export default Food; 