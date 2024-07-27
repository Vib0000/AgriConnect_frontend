import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import serviceCategories from './servicesData'; // Import the data

function ServiceDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const service = serviceCategories.flatMap(category => category.services)
                                  .find(service => service.id === id);

  if (!service) {
    return <Typography variant="h6" align="center">Service not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: 'auto',marginTop:20 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={service.image}
          alt={service.name}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>{service.name}</Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>{service.service}</Typography>
          <Box marginBottom={2}>
            <Typography variant="subtitle1" fontWeight="bold">Cost:</Typography>
            <Typography>{service.cost}</Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography variant="subtitle1" fontWeight="bold">Timing:</Typography>
            <Typography>{service.timing}</Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography variant="subtitle1" fontWeight="bold">Description:</Typography>
            <Typography>{service.description}</Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography variant="subtitle1" fontWeight="bold">Contact:</Typography>
            <Typography>{service.contact}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ServiceDetail;
