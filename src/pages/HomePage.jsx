import React from "react";
import { Box, Typography, Container, Button, Grid, Paper, Fade, Grow, useMediaQuery, useTheme } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgagebg from '../Assets/blockofwood.jpeg';
import backgroundVideo from '../Assets/myfarmingbg.mp4'; 
import farmingTechnology from '../Assets/farmingTechnology.mp4';
import farmingExpert from '../Assets/farmingExpert.mp4';
import crops from '../Assets/crops.mp4';
import agriNews from '../Assets/agrinews.mp4';

import { Footer } from "./footer";

const VideoBackground = styled('video')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
});

const float1 = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
`;

const float2 = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
`;

const float3 = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
`;

const float4 = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
`;

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  zIndex: 1,
  position: 'relative',
}));

const PlankBox1 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  background: `url(${imgagebg}) no-repeat center center`,
  backgroundSize: "cover",
  color: "#fff",
  fontFamily: "Cursive, Arial, sans-serif",
  fontSize: "1.2rem",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%', // Changed to percentage for responsiveness
  maxWidth: '500px',
  margin: '0 auto',
  animation: `${float1} 1.5s ease-in-out`, // Increased speed
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const PlankBox2 = styled(PlankBox1)({
  animation: `${float2} 1.5s ease-in-out`, // Increased speed
});

const PlankBox3 = styled(PlankBox1)({
  animation: `${float3} 1.5s ease-in-out`, // Increased speed
});

const PlankBox4 = styled(PlankBox1)({
  animation: `${float4} 1.5s ease-in-out`, // Increased speed
});

const BlogBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  color: theme.palette.secondary.contrastText,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  textAlign: "center",
  justifyContent: 'space-between',
  zIndex: 1,
  position: 'relative',
  overflow: 'hidden',
  width: '100%', // Changed to percentage for responsiveness
  maxWidth: '550px',
  height: '400px',
  padding: '0 15px',
  margin: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledVideo = styled('video')({
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '4px',
});

const InfoBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogSections = [
    {
      title: 'Listen to Farming Expert',
      video: farmingExpert,
      description: 'Content about different farming techniques and methods.',
    },
    {
      title: 'New Technology',
      video: farmingTechnology,
      description: 'Insights on the latest agricultural technologies.',
    },
    {
      title: 'Agriculture News',
      video: agriNews,
      description: 'Tips for improving crop yield and soil health.',
    },
    {
      title: 'Crops',
      video: crops,
      description: 'Weather patterns and their impact on farming.',
    },
  ];

  return (
    <>
      <Container 
        style={{ 
          marginTop: "2%", 
          position: 'relative',
          backgroundColor: 'transparent',
          padding: 0,
          boxShadow: 'none',
          zIndex: 1,
        }}
      >
        <VideoBackground autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
      
        <Typography variant="h3" align="center" gutterBottom style={{ 
          color: 'white'
        }}>
          Welcome to the Farming Services Portal
        </Typography>
        <MainBox>
          <Fade in={true} timeout={1000}>
            <PlankBox1>
              <Typography variant="h5"><a href="/yourservices">Offer Services</a></Typography>
            </PlankBox1>
          </Fade>
          <Fade in={true} timeout={1500}>
            <PlankBox2>
              <Typography variant="h5"><a href="/seviceCard">Find Service</a></Typography>
            </PlankBox2>
          </Fade>
          <Fade in={true} timeout={2000}>
            <PlankBox3>
              <Typography variant="h5"><a href="/cropdetail">Crop Detail</a></Typography>
            </PlankBox3>
          </Fade>
          <Fade in={true} timeout={2500}>
            <PlankBox4>
              <Typography variant="h5"><a href="/weather">Weather Report</a></Typography>
            </PlankBox4>
          </Fade>
        </MainBox>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff', zIndex: 1, position: 'relative' }}>
          Farming Blogs
        </Typography>
        <Slider {...settings}>
          {blogSections.map((section, index) => (
            <Grow in={true} key={index} timeout={index * 500}>
              <BlogBox>
                <Typography variant="h5">{section.title}</Typography>
                <StyledVideo controls>
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </StyledVideo>
                <Typography variant="body1">{section.description}</Typography>
                <ExploreButton variant="contained">Explore</ExploreButton>
              </BlogBox>
            </Grow>
          ))}
        </Slider>
        <Grid container spacing={3} style={{ marginTop: '2rem', zIndex: 1, position: 'relative' }}>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox>
              <Typography variant="h6">Chat with Farmers</Typography>
              <Typography variant="body2">Connect and share knowledge.</Typography>
            </InfoBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox>
              <Typography variant="h6">Video Calls</Typography>
              <Typography variant="body2">Discuss farming techniques face-to-face.</Typography>
            </InfoBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox>
              <Typography variant="h6">Market Prices</Typography>
              <Typography variant="body2">Stay updated with the latest prices.</Typography>
            </InfoBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InfoBox>
              <Typography variant="h6">Crop Diseases</Typography>
              <Typography variant="body2">Identify and treat crop diseases.</Typography>
            </InfoBox>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
