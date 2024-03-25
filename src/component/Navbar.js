import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo1 from './Image/logo1.jpg';
function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary fixed-top ">
  <div class="container-fluid" >
    <a class="navbar-brand"  >
      <img src={logo1} width='180px' height='40px'/>
      
    </a>
    <ul class="nav justify-content-end" >
        <li class="nav-item">
          <a class="nav-link" href="./Home" style={{color:'gray'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./AboutUs" style={{color:'gray'}}>About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'gray'}}>
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./Login">Admin</a></li>
            <li><a class="dropdown-item" href="./FarmerLogin">Farmer</a></li>
            <li><a class="dropdown-item" href="./CustomerLogin">Customer</a></li>
            <li><a class="dropdown-item" href="./KrishibhavanLogin">Krishibhavan</a></li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'gray'}}>
            Register
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./FarmerRegister">Farmer</a></li>
            <li><a class="dropdown-item" href="./CustomerRegister">Customer</a></li>
            <li><a class="dropdown-item" href="./KrishibhavanRegister">Krishibhavan</a></li>
          </ul>
        </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar