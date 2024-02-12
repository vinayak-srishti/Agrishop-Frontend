import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      
      <Footer/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
