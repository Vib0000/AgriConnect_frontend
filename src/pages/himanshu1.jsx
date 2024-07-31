import React, { useState } from 'react';
import '../styles/himanshu1.css';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  Box,
  Chip,
  Rating,
  FormGroup as MuiFormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';

// Styled components with enhanced and modern farming theme
const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: 'auto',
  marginTop: '15%',
  padding: theme.spacing(5),
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: 16,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
  border: `1px solid #a5d6a7`,
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0, // Ensure the form is above other components
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/path-to-your-farming-background-image.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.6,
    zIndex: -10,
    filter: 'brightness(0.6)',
  },
}));

const FormGroup = styled(MuiFormGroup)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const NewService = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ServiceDetails = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  borderRadius: 12,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
  border: '1px solid #a5d6a7',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  fontWeight: 'bold',
  borderRadius: 12,
  backgroundColor: '#66bb6a',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#388e3c',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
  },
  transition: 'background-color 0.3s, box-shadow 0.3s',
}));

const ChipStyled = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: '#a5d6a7',
  color: '#1b5e20',
  borderRadius: 20,
  fontSize: '0.9rem',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#81c784',
    transform: 'scale(1.05)',
  },
}));

const RatingStyled = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: '#66bb6a',
  },
  transition: 'color 0.3s',
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-outlined': {
    color: '#4caf50',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4caf50',
    },
    '&:hover fieldset': {
      borderColor: '#66bb6a',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#66bb6a',
    },
  },
}));

const MyPage = () => {
  const [services, setServices] = useState([
    "Labour(लेबर)",
    "Tractor(ट्रैक्टर)",
    "Thrasher(थ्रैशर)",
    "Cultivator(कल्टीवेटर)",
    "Crops(फसलें)",
    "Water Supply(पानी की आपूर्ति)",
    "Fertilizer(खाद)",
    "Pesticide(कीटनाशक)",
  ]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [village, setVillage] = useState("");
  const [charges, setCharges] = useState({});
  const [timing, setTiming] = useState({});
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState({});
  const [description, setDescription] = useState({});
  const [images, setImages] = useState({});
  const [preferredContact, setPreferredContact] = useState('phone');
  const [loading, setLoading] = useState(false);

  const handleAddService = () => {
    if (newService && !services.includes(newService)) {
      setServices([...services, newService]);
      setNewService("");
    }
  };

  const handleServiceChange = (event) => {
    setSelectedServices(event.target.value);
  };

  const handleRemoveService = (serviceToRemove) => {
    setSelectedServices(selectedServices.filter(service => service !== serviceToRemove));
  };

  const handleChargesChange = (event, service) => {
    setCharges({ ...charges, [service]: event.target.value });
  };

  const handleTimingChange = (event, service) => {
    setTiming({ ...timing, [service]: event.target.value });
  };

  const handleDescriptionChange = (event, service) => {
    setDescription({ ...description, [service]: event.target.value });
  };

  const handleRatingChange = (event, newValue, service) => {
    setRating({ ...rating, [service]: newValue });
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handlePreferredContactChange = (event) => {
    setPreferredContact(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Handle form submission logic
    setTimeout(() => setLoading(false), 2000); // Simulate a network request
  };

  return (
    <div className='md:-mt-40 -mt-12' >
    <FormContainer>
      <Typography variant="h4" align="center" gutterBottom color="#1b5e20">
        Add Services
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="AOS">Area Of Services(सेवा का क्षेत्र)</InputLabel>
            <Select
              id="AOS"
              multiple
              value={selectedServices}
              onChange={handleServiceChange}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {selected.map((value) => (
                    <ChipStyled
                      key={value}
                      label={value}
                      onDelete={() => handleRemoveService(value)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 224,
                    width: 250,
                  },
                },
              }}
              style={{ marginTop: 8 }}
            >
              {services.map((service, index) => (
                <MenuItem key={index} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <TextFieldStyled
            fullWidth
            id="phone"
            label="Phone"
            type="number"
            variant="outlined"
            placeholder="Enter your phone number"
          />
        </FormGroup>
        <FormGroup>
          <TextFieldStyled
            fullWidth
            id="village"
            label="Village Address"
            variant="outlined"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            placeholder="Enter your village address"
          />
        </FormGroup>
        <NewService>
          <TextFieldStyled
            fullWidth
            id="newService"
            label="Add new service"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            variant="outlined"
            placeholder="Enter new service"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddService}
            disabled={!newService}
          >
            Add
          </Button>
        </NewService>
        {selectedServices.map((service, index) => (
          <ServiceDetails key={index}>
            <Typography variant="h6" color="#1b5e20">
              {service}
            </Typography>
            <FormGroup>
              <TextFieldStyled
                fullWidth
                label="Charges"
                type="number"
                variant="outlined"
                value={charges[service] || ''}
                onChange={(event) => handleChargesChange(event, service)}
                placeholder={`Enter charges for ${service}`}
              />
            </FormGroup>
            <FormGroup>
              <TextFieldStyled
                fullWidth
                label="Timing"
                type="text"
                variant="outlined"
                value={timing[service] || ''}
                onChange={(event) => handleTimingChange(event, service)}
                placeholder={`Enter timing for ${service}`}
              />
            </FormGroup>
            <FormGroup>
              <TextFieldStyled
                fullWidth
                label="Description"
                type="text"
                variant="outlined"
                value={description[service] || ''}
                onChange={(event) => handleDescriptionChange(event, service)}
                placeholder={`Enter description for ${service}`}
              />
            </FormGroup>
            <FormGroup>
              <RatingStyled
                name={`${service}-rating`}
                value={rating[service] || 0}
                onChange={(event, newValue) => handleRatingChange(event, newValue, service)}
              />
            </FormGroup>
          </ServiceDetails>
        ))}
        <FormGroup>
          <TextFieldStyled
            fullWidth
            id="availability"
            label="Availability"
            variant="outlined"
            value={availability}
            onChange={handleAvailabilityChange}
            placeholder="Enter your availability"
          />
        </FormGroup>
        <FormGroup>
          <Typography component="legend">Upload Images</Typography>
          <input
            accept="image/*"
            id="images"
            multiple
            type="file"
            onChange={handleImageChange}
          />
        </FormGroup>
        <FormGroup>
          <Typography component="legend">Preferred Contact Method</Typography>
          <RadioGroup
            aria-label="preferredContact"
            name="preferredContact"
            value={preferredContact}
            onChange={handlePreferredContactChange}
          >
            <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormGroup>
        <SubmitButton type="submit" variant="contained" color="primary">
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </SubmitButton>
      </form>
    </FormContainer>
    </div>
  );
};

export default MyPage;
