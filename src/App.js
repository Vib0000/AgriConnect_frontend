import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import MyPage from "./pages/himanshu1";
import Announcement from "./pages/anouncement";
import { Navbar } from "./pages/navbar";
import Services from './pages/services';
import { CropDetail } from "./pages/cropdetail";
import { WeatherDetail } from "./pages/weather";
import YourServices from './pages/yourServices';
import HomePage from "./pages/HomePage";
import theme from "./pages/theme";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
     <Announcement/>
     <Navbar/>
      <ThemeProvider theme={theme}>
   
       <CssBaseline />
    <div>
      
      <Router>
        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/himanshu1"  element={<MyPage/>}/>
          <Route  path="/services"  element={<Services/>}/>
          <Route  path="/yourservices"  element={<YourServices/>}/>
          <Route  path="/cropdetail"  element={<CropDetail/>}/>
          <Route  path="/weather"  element={<WeatherDetail/>}/>

        </Routes>
      </Router>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
