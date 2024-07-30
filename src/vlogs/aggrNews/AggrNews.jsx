import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AggrNewsData from './AggrNewData'; // Import the data

// Helper function to truncate text
const truncateText = (text, maxLength = 100) => {
  // Truncate to a certain number of characters
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

function ServiceCard({ detail }) {
  return (
    <Link to={`/vlogs/aggrNewCard/cardDetails/${detail.id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: 300, // Fixed width for consistent dimensions
          height: 400, // Fixed height for consistent dimensions
          margin: 2,
          boxShadow: 3,
          borderRadius: 2,
          zIndex: -1, // Set zIndex of the card
          transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
          '&:hover': {
            transform: 'scale(1.05)', // Scale up slightly on hover
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: '100%', // Ensure it covers the entire width
            height: 200, // Fixed height for consistent dimensions
            objectFit: 'cover', // Maintain aspect ratio and cover the area
          }}
          image={detail.image}
          alt={detail.title}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">{detail.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateText(detail.description, 100)} {/* Adjust length as needed */}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

function ServiceCarousel({ section }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', marginY: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        {section.sectionTitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: 2,
          '::-webkit-scrollbar': { display: 'none' },
        }}
        ref={carouselRef}
      >
        {section.details.map((detail, index) => (
          <ServiceCard key={index} detail={detail} />
        ))}
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1, // Ensure this is above the content
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
        }}
        onClick={() => scroll('left')}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1, // Ensure this is above the content
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
        }}
        onClick={() => scroll('right')}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

function AggrNews() {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      {AggrNewsData[0].content.map((section, index) => (
        <Box key={index} sx={{ marginTop: index === 0 ? '200px' : 0 }}>
          <ServiceCarousel section={section} />
        </Box>
      ))}
    </Box>
  );
}

export default AggrNews;
