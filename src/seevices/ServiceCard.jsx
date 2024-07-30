// ServiceList.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import serviceCategories from './servicesData'; // Import the data

function ServiceCard({ service }) {
    return (
      <Link to={`/service/${service.id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ 
          minWidth: 250, 
          margin: 2, 
          boxShadow: 3, 
          borderRadius: 2,
          zIndex: -1 // Set zIndex of the card
        }}>
          <CardMedia
            component="img"
            height="140"
            image={service.image}
            alt={service.name}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">{service.name}</Typography>
            <Typography variant="body2" color="text.secondary">{service.service}</Typography>
            <Typography variant="body2" color="text.secondary">{service.cost}</Typography>
            <Typography variant="body2" color="text.secondary">{service.contact}</Typography>
          </CardContent>
        </Card>
      </Link>
    );
}

function ServiceCarousel({ category }) {
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
        {category.title}
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
        {category.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Box>
      <IconButton
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: 10, 
          transform: 'translateY(-50%)', 
          zIndex: -1, // Ensure this is above the content
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
          zIndex: -1, // Ensure this is above the content
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

function ServiceList() {
  return (
    <Box sx={{ width: '100%', padding: 2}}>
      {serviceCategories.map((category, index) => (
        <Box key={index} sx={{ marginTop: index === 0 ? '200px' : 0 }}>
          <ServiceCarousel category={category} />
        </Box>
      ))}
    </Box>
  );
}

export default ServiceList;
