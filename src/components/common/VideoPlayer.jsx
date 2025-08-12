import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <Box sx={{ marginY: 2 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <video
        width="100%"
        height="auto"
        controls
        style={{ maxHeight: '400px' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer;