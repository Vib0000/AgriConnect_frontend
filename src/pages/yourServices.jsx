import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Modal,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import image1 from '../Assets/f1.jpeg';
import image2 from '../Assets/f2.jpeg';
import image3 from '../Assets/f3.jpeg';
import image4 from '../Assets/f4.jpeg';
import image5 from '../Assets/f5.jpeg';
import image6 from '../Assets/f6.jpeg';
import image7 from '../Assets/f7.jpeg';
import image8 from '../Assets/f8.jpeg';
import image9 from '../Assets/f9.jpeg';
import image10 from '../Assets/f10.jpeg';
import t1 from '../Assets/t1.jpeg';
import t2 from '../Assets/t2.jpeg';
import t3 from '../Assets/t3.jpeg';
import t4 from '../Assets/t4.jpeg';
import t5 from '../Assets/t5.jpeg';
import t6 from '../Assets/t6.jpeg';
import t7 from '../Assets/t7.jpeg';
import t8 from '../Assets/t8.jpeg';
import t9 from '../Assets/t9.jpeg';
import t10 from '../Assets/t10.jpeg';

import thr1 from '../Assets/thr1.jpeg';
import thr2 from '../Assets/thr2.jpeg';
import thr3 from '../Assets/thr3.jpeg';
import thr4 from '../Assets/thr4.jpeg';
import thr5 from '../Assets/thr5.jpeg';
import thr6 from '../Assets/thr6.jpeg';
import thr7 from '../Assets/thr7.jpeg';
import thr8 from '../Assets/thr8.jpeg';
import thr9 from '../Assets/thr9.jpeg';
import thr10 from '../Assets/thr10.jpeg';

import cul1 from '../Assets/cul1.jpeg';
import cul2 from '../Assets/cul2.jpeg';
import cul3 from '../Assets/cul3.jpeg';
import cul4 from '../Assets/cul4.jpeg';
import cul5 from '../Assets/cul5.jpeg';
import cul6 from '../Assets/cul6.jpeg';
import cul7 from '../Assets/cul7.jpeg';
import cul8 from '../Assets/cul8.jpeg';
import cul9 from '../Assets/cul9.jpeg';
import cul10 from '../Assets/cul10.jpeg';

import cro1 from '../Assets/cro1.jpeg';
import cro2 from '../Assets/cro2.jpeg';
import cro3 from '../Assets/cro3.jpeg';
import cro4 from '../Assets/cro4.jpeg';
import cro5 from '../Assets/cro5.jpeg';
import cro6 from '../Assets/cro6.jpeg';
import cro7 from '../Assets/cro7.jpeg';
import cro8 from '../Assets/cro8.jpeg';
import cro9 from '../Assets/cro9.jpeg';
import cro10 from '../Assets/cro10.jpeg';




const workerImages=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10];
const tractorImages=[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10];
const cultivatorImages=[cul1,cul2,cul3,cul4,cul5,cul6,cul7,cul8,cul9,cul10];
const thraserImages=[thr1,thr2,thr3,thr4,thr5,thr6,thr7,thr8,thr9,thr10];
const cropImages=[cro1,cro2,cro3,cro4,cro5,cro6,cro7,cro8,cro9,cro10];

const ServicesContainer = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: 'auto',
  marginTop: '15%', 
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: 16,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
  border: `1px solid #a5d6a7`,
  fontFamily: 'Arial, sans-serif',
  zIndex: 0,
  position: 'relative', 
}));

const ServiceBox = styled(Box)(({ theme }) => ({
  border: '1px solid #4caf50',
  borderRadius: '8px',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  backgroundColor: 'rgba(233, 245, 233, 0.9)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden', 
  zIndex: 1,
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#1b5e20',
}));

const EditDeleteButtons = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  display: 'flex',
  gap: theme.spacing(1),
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80%', 
  overflowY: 'auto', 
  backgroundColor: 'white',
  border: '2px solid #4caf50',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  borderRadius: 12,
  zIndex: 2, 
}));

const WorkerImage = styled('img')({
  width: 50,
  height: 50,
  borderRadius: '50%',
  marginRight: 16,
});

const WorkerDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  border: '1px solid #c8e6c9',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));

const WorkersAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto', 
  maxHeight: 200, 
}));

const YourServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Labour(लेबर)',
      charges: '1000',
      timing: '9am - 5pm',
      description: 'General labor services',
      rating: 4,
      workers: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Labour ${i + 1}`,
        areaOfWork: 'Field Work',
        cost: '100',
        timing: '8am - 5pm',
        contact: `12345678${i}`,
        experience: `${i + 1} years`,
        imageUrl:workerImages[i%workerImages.length],
      })),
    },
    {
      id: 2,
      name: 'Tractor(ट्रैक्टर)',
      charges: '2000',
      timing: '8am - 6pm',
      description: 'Tractor services for plowing and tilling.',
      rating: 5,
      workers: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Tractor Operator ${i + 1}`,
        areaOfWork: 'Field Work',
        cost: '150',
        timing: '8am - 6pm',
        contact: `23456789${i}`,
        experience: `${i + 1} years`,
        imageUrl: tractorImages[i%tractorImages.length],
      })),
    },
    {
      id: 3,
      name: 'Thrasher(थ्रैशर)',
      charges: '1500',
      timing: '10am - 4pm',
      description: 'Threshing services to separate grains from plants.',
      rating: 3,
      workers: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Thrasher Operator ${i + 1}`,
        areaOfWork: 'Field Work',
        cost: '120',
        timing: '10am - 4pm',
        contact: `34567890${i}`,
        experience: `${i + 1} years`,
        imageUrl: thraserImages[i%thraserImages.length],
      })),
    },
    {
      id: 4,
      name: 'Cultivator(कल्टीवेटर)',
      charges: '1200',
      timing: '7am - 3pm',
      description: 'Cultivating the soil for farming.',
      rating: 4,
      workers: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Cultivator Operator ${i + 1}`,
        areaOfWork: 'Field Work',
        cost: '130',
        timing: '7am - 3pm',
        contact: `45678901${i}`,
        experience: `${i + 1} years`,
        imageUrl: cultivatorImages[i%cultivatorImages.length],
      })),
    },
    {
      id: 5,
      name: 'Crops(फसलें)',
      charges: '500',
      timing: '6am - 2pm',
      description: 'Crop management services including planting and harvesting.',
      rating: 5,
      workers: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Crop Manager ${i + 1}`,
        areaOfWork: 'Field Work',
        cost: '110',
        timing: '6am - 2pm',
        contact: `56789012${i}`,
        experience: `${i + 1} years`,
        imageUrl: cropImages[i%cropImages.length],
      })),
    },
    // {
    //   id: 6,
    //   name: 'Water Supply(पानी की आपूर्ति)',
    //   charges: '800',
    //   timing: '8am - 5pm',
    //   description: 'Water supply services for irrigation.',
    //   rating: 4,
    //   workers: Array.from({ length: 10 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Water Supplier ${i + 1}`,
    //     areaOfWork: 'Field Work',
    //     cost: '90',
    //     timing: '8am - 5pm',
    //     contact: `67890123${i}`,
    //     experience: `${i + 1} years`,
    //     imageUrl: 'https://example.com/images/water_supplier_${i + 1}.jpg',
    //   })),
    // },
    // {
    //   id: 7,
    //   name: 'Fertilizer(खाद)',
    //   charges: '600',
    //   timing: '9am - 6pm',
    //   description: 'Fertilizer supply services for enhancing crop yield.',
    //   rating: 5,
    //   workers: Array.from({ length: 10 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Fertilizer Supplier ${i + 1}`,
    //     areaOfWork: 'Field Work',
    //     cost: '100',
    //     timing: '9am - 6pm',
    //     contact: `78901234${i}`,
    //     experience: `${i + 1} years`,
    //     imageUrl: 'https://example.com/images/fertilizer_supplier_${i + 1}.jpg',
    //   })),
    // },
    // {
    //   id: 8,
    //   name: 'Pesticide(कीटनाशक)',
    //   charges: '700',
    //   timing: '7am - 4pm',
    //   description: 'Pesticide application services to protect crops.',
    //   rating: 3,
    //   workers: Array.from({ length: 10 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Pesticide Applicator ${i + 1}`,
    //     areaOfWork: 'Field Work',
    //     cost: '110',
    //     timing: '7am - 4pm',
    //     contact: `89012345${i}`,
    //     experience: `${i + 1} years`,
    //     imageUrl: 'https://example.com/images/pesticide_applicator_${i + 1}.jpg',
    //   })),
    // },
    // {
    //   id: 9,
    //   name: 'Harvesting(कटाई)',
    //   charges: '1000',
    //   timing: '8am - 5pm',
    //   description: 'Services for harvesting crops at peak time.',
    //   rating: 4,
    //   workers: Array.from({ length: 10 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Harvester ${i + 1}`,
    //     areaOfWork: 'Field Work',
    //     cost: '120',
    //     timing: '8am - 5pm',
    //     contact: `90123456${i}`,
    //     experience: `${i + 1} years`,
    //     imageUrl: 'https://example.com/images/harvester_${i + 1}.jpg',
    //   })),
    // },
    // {
    //   id: 10,
    //   name: 'Irrigation(सिंचाई)',
    //   charges: '800',
    //   timing: '9am - 5pm',
    //   description: 'Irrigation setup and management services.',
    //   rating: 5,
    //   workers: Array.from({ length: 10 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Irrigation Specialist ${i + 1}`,
    //     areaOfWork: 'Field Work',
    //     cost: '130',
    //     timing: '9am - 5pm',
    //     contact: `01234567${i}`,
    //     experience: `${i + 1} years`,
    //     imageUrl: 'https://example.com/images/irrigation_specialist_${i + 1}.jpg',
    //   })),
    // },
  ]);
  
  const handleAddServiceRedirect = () => {
    navigate('/himanshu1'); 
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    charges: '',
    timing: '',
    description: '',
    rating: 0,
    workerId: null,
    workerName: '',
    workerCost: '',
    workerTiming: '',
    workerContact: '',
    workerExperience: '',
  });

  const handleOpenModal = (service = null, worker = null) => {
    if (worker) {
      setFormData({ ...worker, id: service.id, name: service.name });
    } else if (service) {
      setFormData(service);
    } else {
      setFormData({ id: null, name: '', charges: '', timing: '', description: '', rating: 0 });
    }
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (selectedService) {
      if (formData.workerId) {
        const updatedServices = services.map((service) => {
          if (service.id === formData.id) {
            const updatedWorkers = service.workers.map((worker) =>
              worker.id === formData.workerId
                ? { ...worker, name: formData.workerName, cost: formData.workerCost, timing: formData.workerTiming, contact: formData.workerContact, experience: formData.workerExperience }
                : worker
            );
            return { ...service, workers: updatedWorkers };
          }
          return service;
        });
        setServices(updatedServices);
      } else {
        const updatedServices = services.map((service) =>
          service.id === formData.id ? { ...service, ...formData } : service
        );
        setServices(updatedServices);
      }
    } else {
      const newService = { ...formData, id: services.length + 1 };
      setServices((prev) => [...prev, newService]);
    }
    handleCloseModal();
  };

  const handleDelete = (serviceId, workerId) => {
    if (workerId) {
      const updatedServices = services.map((service) => {
        if (service.id === serviceId) {
          const updatedWorkers = service.workers.filter((worker) => worker.id !== workerId);
          return { ...service, workers: updatedWorkers };
        }
        return service;
      });
      setServices(updatedServices);
    } else {
      const updatedServices = services.filter((service) => service.id !== serviceId);
      setServices(updatedServices);
    }
  };

  return (
    <ServicesContainer>
      <Typography variant="h4" gutterBottom>
        Your Services
      </Typography>

      {services.map((service) => (
        <ServiceBox key={service.id}>
          <ServiceTitle variant="h6">
            {service.name}
            <EditDeleteButtons>
              <IconButton onClick={() => handleOpenModal(service)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(service.id)}>
                <DeleteIcon />
              </IconButton>
            </EditDeleteButtons>
          </ServiceTitle>
          <Typography variant="body2">Charges: ₹{service.charges}</Typography>
          <Typography variant="body2">Timing: {service.timing}</Typography>
          <Typography variant="body2">Description: {service.description}</Typography>
          <Typography variant="body2">Rating: {service.rating}★</Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Workers ({service.workers.length})</Typography>
            </AccordionSummary>
            <WorkersAccordionDetails>
              <Box flexDirection="column" width="100%">
                {service.workers.map((worker) => (
                  <WorkerDetails key={worker.id}>
                    <WorkerImage src={worker.imageUrl} alt={worker.name} />
                    <Box flexGrow={1}>
                      <Typography variant="subtitle1">{worker.name}</Typography>
                      <Typography variant="body2">Area of Work: {worker.areaOfWork}</Typography>
                      <Typography variant="body2">Cost: ₹{worker.cost}</Typography>
                      <Typography variant="body2">Timing: {worker.timing}</Typography>
                      <Typography variant="body2">Contact: {worker.contact}</Typography>
                      <Typography variant="body2">Experience: {worker.experience}</Typography>
                    </Box>
                    <IconButton onClick={() => handleOpenModal(service, worker)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(service.id, worker.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </WorkerDetails>
                ))}
              </Box>
            </WorkersAccordionDetails>
          </Accordion>
        </ServiceBox>
      ))}

      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddServiceRedirect}>
        Add New Service
      </Button>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <ModalContainer>
          <Typography variant="h6" gutterBottom>
            {formData.workerId ? 'Edit Worker' : formData.id ? 'Edit Service' : 'Add New Service'}
          </Typography>
          <TextField
            name={formData.workerId ? 'workerName' : 'name'}
            label={formData.workerId ? 'Worker Name' : 'Service Name'}
            value={formData.workerId ? formData.workerName : formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name={formData.workerId ? 'workerCost' : 'charges'}
            label={formData.workerId ? 'Worker Cost' : 'Service Charges'}
            value={formData.workerId ? formData.workerCost : formData.charges}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name={formData.workerId ? 'workerTiming' : 'timing'}
            label={formData.workerId ? 'Worker Timing' : 'Service Timing'}
            value={formData.workerId ? formData.workerTiming : formData.timing}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {formData.workerId ? (
            <>
              <TextField
                name="workerContact"
                label="Worker Contact"
                value={formData.workerContact}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="workerExperience"
                label="Worker Experience"
                value={formData.workerExperience}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          ) : (
            <>
              <TextField
                name="description"
                label="Service Description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="rating"
                label="Service Rating"
                value={formData.rating}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" variant="contained" style={{ marginLeft: '8px' }}>
              Save
            </Button>
          </Box>
        </ModalContainer>
      </Modal>
    </ServicesContainer>
  );
};

export default YourServices;
