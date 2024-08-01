import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import '../styles/Services.css'; // Import the CSS file

const Services = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [currentProviderIndex, setCurrentProviderIndex] = useState(0);
  const [expandedProvider, setExpandedProvider] = useState(null); // Track expanded provider

  const services = [
    {
      id: 1,
      name: "Labour(लेबर)",
      providers: [
        {
          id: 1,
          name: "John's Farming",
          type: "Field Work",
          cost: "150",
          timing: "6 AM - 6 PM",
          image: "https://via.placeholder.com/150/FF0000/FFFFFF/?text=Labour",
          description: "Provides labor for various farming activities.",
          contact: "john@example.com",
        },
        {
          id: 2,
          name: "Farm Workers Inc.",
          type: "Field Work",
          cost: "140",
          timing: "7 AM - 5 PM",
          image: "https://via.placeholder.com/150/00FF00/FFFFFF/?text=Labour",
          description: "Expert in harvesting and field preparation.",
          contact: "farmworkers@example.com",
        },
        {
          id: 3,
          name: "Agricultural Labor Co.",
          type: "Field Work",
          cost: "130",
          timing: "5 AM - 6 PM",
          image: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Labour",
          description: "Skilled labor for all agricultural tasks.",
          contact: "agriculturallabor@example.com",
        },
        {
          id: 4,
          name: "Crop Care Workers",
          type: "Field Work",
          cost: "120",
          timing: "8 AM - 5 PM",
          image: "https://via.placeholder.com/150/FFFF00/FFFFFF/?text=Labour",
          description: "Specializes in crop care and management.",
          contact: "cropcare@example.com",
        },
        {
          id: 5,
          name: "Harvest Helpers",
          type: "Field Work",
          cost: "110",
          timing: "6 AM - 6 PM",
          image: "https://via.placeholder.com/150/FF00FF/FFFFFF/?text=Labour",
          description: "Assists in the harvesting process.",
          contact: "harvesthelpers@example.com",
        },
        {
          id: 6,
          name: "Extra Labour Co.",
          type: "Field Work",
          cost: "100",
          timing: "6 AM - 6 PM",
          image: "https://via.placeholder.com/150/FF0000/FFFFFF/?text=Labour",
          description: "Provides additional labor support.",
          contact: "extralabour@example.com",
        },
      ],
    },
    {
      id: 2,
      name: "Tractor(ट्रैक्टर)",
      providers: [
        {
          id: 1,
          name: "John's Tractors",
          type: "Transport",
          cost: "200",
          timing: "8 AM - 5 PM",
          image: "https://via.placeholder.com/150/FF0000/FFFFFF/?text=Tractor",
          description: "Reliable tractor transportation services.",
          contact: "johnstractors@example.com",
        },
        {
          id: 2,
          name: "Quick Tractor Services",
          type: "Transport",
          cost: "180",
          timing: "7 AM - 5 PM",
          image: "https://via.placeholder.com/150/00FF00/FFFFFF/?text=Tractor",
          description: "Fast and efficient tractor services.",
          contact: "quicktractors@example.com",
        },
        {
          id: 3,
          name: "Agri Transport",
          type: "Transport",
          cost: "190",
          timing: "6 AM - 6 PM",
          image: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Tractor",
          description: "Specialized transport for agricultural needs.",
          contact: "agritransport@example.com",
        },
        {
          id: 4,
          name: "Reliable Tractors",
          type: "Transport",
          cost: "210",
          timing: "5 AM - 7 PM",
          image: "https://via.placeholder.com/150/FFFF00/FFFFFF/?text=Tractor",
          description: "Trusted tractor services for your farm.",
          contact: "reliabletractors@example.com",
        },
        {
          id: 5,
          name: "Farming Solutions",
          type: "Transport",
          cost: "205",
          timing: "8 AM - 4 PM",
          image: "https://via.placeholder.com/150/FF00FF/FFFFFF/?text=Tractor",
          description: "Complete farming transport solutions.",
          contact: "farmingsolutions@example.com",
        },
      ],
    },
    // Add similar structure for other services
  ];

  const handleContactClick = (provider) => {
    setSelectedProvider(provider);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProvider(null);
  };

  const toggleExpandProvider = (providerId) => {
    setExpandedProvider((prev) => (prev === providerId ? null : providerId));
  };

  return (
    <Box className="services-container">
      <Typography variant="h4" align="center" gutterBottom color="#1b5e20">
        Services
      </Typography>
      {services.map((service) => (
        <Box className="service-box" key={service.id}>
          <Typography variant="h6" color="#1b5e20" align="center">
            {service.name}
          </Typography>
          <Box className="slider">
            <Button className="arrow-button" onClick={() => setCurrentProviderIndex((prev) => Math.max(prev - 1, 0))}>
              &#9664;
            </Button>
            <Box className="provider-box">
              {service.providers.map((provider) => (
                <Box className={`individual-provider ${expandedProvider === provider.id ? 'expanded' : ''}`} key={provider.id}>
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="provider-image"
                  />
                  <Typography variant="body1">
                    <strong>Provider:</strong> {provider.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Type:</strong> {provider.type}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Cost:</strong> ₹{provider.cost}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Timing:</strong> {provider.timing}
                  </Typography>
                  <Button
                    className="contact-button"
                    onClick={() => handleContactClick(provider)}
                  >
                    Contact Provider
                  </Button>
                  <Button
                    className="more-button"
                    onClick={() => toggleExpandProvider(provider.id)}
                  >
                    {expandedProvider === provider.id ? "Less" : "More"}
                  </Button>
                  {expandedProvider === provider.id && (
                    <Box className="more-info">
                      <Typography variant="body2">
                        <strong>Description:</strong> {provider.description}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Contact:</strong> {provider.contact}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Button className="arrow-button" onClick={() => setCurrentProviderIndex((prev) => Math.min(prev + 1, service.providers.length - 1))}>
              &#9654;
            </Button>
          </Box>
        </Box>
      ))}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Contact {selectedProvider?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            You can contact {selectedProvider?.name} for more information about their services.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Services;
