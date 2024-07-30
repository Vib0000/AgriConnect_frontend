import React from 'react';
import tractorimg from './images/images.jpg';
import { Typography, Box, Paper } from '@mui/material';

function UserService() {
  return (
    <Paper elevation={3} sx={{ padding: 2, maxWidth: 400, margin: 'auto', marginTop: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Tractor
      </Typography>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img src={tractorimg} alt="Tractor" style={{ maxWidth: '100%', borderRadius: '10px' }} />
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Name</Typography>
        <Typography>Amit Kumar</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Service</Typography>
        <Typography>Jutai</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Cost</Typography>
        <Typography>2000 Rupees</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Timing</Typography>
        <Typography>Whole Day</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Description</Typography>
        <Typography>Amit Kumar offers tractor services for various agricultural needs.</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="subtitle1" fontWeight="bold">Contact</Typography>
        <Typography>+91 12345 67890</Typography>
      </Box>
    </Paper>
  );
}

export default UserService;
