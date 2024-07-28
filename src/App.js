import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./pages/hero";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import MyPage from "./pages/himanshu1";
import Announcement from "./pages/anouncement";
import { Navbar } from "./pages/navbar";
import Services from './pages/services';
import ServiceCard from "./seevices/ServiceCard";
import ServiceDetail from './seevices/ServiceDetail';
import { CropDetail } from "./pages/cropdetail";
import { WeatherDetail } from "./pages/weather";
import YourServices from './pages/yourServices';
function App() {
  return (
    <>

    <Announcement/>
       <Navbar/>
    { 
      <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/himanshu1"  element={<MyPage/>}/>
          <Route  path="/services"  element={<Services/>}/>
          <Route path="/seviceCard" element={<ServiceCard />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
          <Route  path="/yourservices"  element={<YourServices/>}/>
          <Route  path="/cropdetail"  element={<CropDetail/>}/>
          <Route  path="/weather"  element={<WeatherDetail/>}/>

        </Routes>
      </Router>
    </div>}
    </>
  );
}

export default App;
