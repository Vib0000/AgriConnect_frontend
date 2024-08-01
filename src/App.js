import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import MyPage from "./pages/newservice";
import Announcement from "./pages/anouncement";
import { Navbar } from "./pages/navbar";
import Services from "./pages/services";
import { CropDetail } from "./pages/cropdetail";
import { WeatherDetail } from "./pages/weather";
import YourServices from "./pages/yourServices";
import AggrNewDetails from "./vlogs/aggrNews/AggrNewDetails";
import AggrNews from "./vlogs/aggrNews/AggrNews";
import HomePage from "./pages/HomePage";
import theme from "./pages/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ServiceCard from "./seevices/ServiceCard";
import ServiceDetail from "./seevices/ServiceDetail";
import { Footer } from "./pages/footer";
import ContactPage from "./pages/contactpage";
import About from "./pages/aboutus";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Announcement />
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/himanshu1" element={<MyPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/seviceCard" element={<ServiceCard />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/yourservices" element={<YourServices />} />
              <Route path="/cropdetail" element={<CropDetail />} />
              <Route path="/wether" element={<WeatherDetail />} />
              <Route path="/vlogs/aggrNewCard" element={<AggrNews />} />
              <Route
                path="/vlogs/aggrNewCard/cardDetails/:id"
                element={<AggrNewDetails />}
              />
              <Route path="/weather" element={<WeatherDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
