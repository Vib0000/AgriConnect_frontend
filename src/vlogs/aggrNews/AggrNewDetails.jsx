import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import AggrNewsData from './AggrNewData'; // Update with actual path

function AggrNewDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const detail = AggrNewsData.flatMap(category => 
    category.content.flatMap(section => section.details)
  ).find(detail => detail.id === id);

  if (!detail) {
    return <Typography variant="h6" align="center">Detail not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: 'auto', marginTop: 20 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={detail.image}
          alt={detail.title}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>{detail.title}</Typography>
          <Box marginBottom={2}>
            <Typography variant="subtitle1" fontWeight="bold">Description:</Typography>
            <Typography>{detail.description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AggrNewDetails;
