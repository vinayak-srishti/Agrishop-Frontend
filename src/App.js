import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import FarmerLogin from './component/FarmerLogin';
import KrishibhavanLogin from './component/KrishibhavanLogin';
import CustomerLogin from './component/CustomerLogin';
import AdminLogin from './component/AdminLogin';
import CustomerRegister from './component/CustomerRegister';
import FarmerRegister from './component/FarmerRegister';
import KrishibhavanRegister from './component/KrishibhavanRegister';
function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Navbar/> */}
      
      <Routes>
      <Route path="/login" element={<AdminLogin/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/farmerlogin" element={<FarmerLogin/>}/>
      <Route path="/krishibhavanlogin" element={<KrishibhavanLogin/>}/>
      <Route path="/customerlogin" element={<CustomerLogin/>}/>
      <Route path="/customerregister" element={<CustomerRegister/>}/>
      <Route path="/farmerregister" element={<FarmerRegister/>}/>
      <Route path="/krishibhavanregister" element={<KrishibhavanRegister/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
