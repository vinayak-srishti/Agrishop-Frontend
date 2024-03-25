import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import basket from './Image/basket.jpeg';
import buy1 from './Image/buy1.png';
import straw from './Image/straw.png';
import yellow2 from './Image/yellow2.jpg';
import applejuice from './Image/applejuice.jpg';
import cutveg from './Image/cutveg.jpg';
import DriedNuts from './Image/DriedNuts.jpg';
import grapes from './Image/grapes.jpg';
import white from './Image/white.jpg';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <section class="home">

        <h1>AgroMart</h1>
        <p>Welcome to AgroMart.<br />The ultimate online destination for farmers and customers aliked</p>
        <div class="">
          <button type="button" class="btn btn-outline-warning">Discover</button>
        </div>
      </section>
      <section class="product">
        <div class="container py-5 h-100" >
          <div class="row d-flex align-items-center justify-content-center h-100 " >
            <div class="col-md-8 col-lg-4 col-xl-4" >
              <img src={buy1}
                class="img-fluid" alt="Phone image" style={{ width: '300px', height: '300px', marginLeft: '150px' }} />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1" style={{ width: '690px', height: '200px', marginRight: '80px' }} >
              <img src={yellow2}
                class="img-fluid" alt="Phone image" style={{ width: '800px', height: '200px', marginRight: '150px' }} />
            </div>
          </div>
          <div class="row d-flex align-items-center justify-content-center h-100" >
            <div class="col-md-3 col-lg-4 col-xl-3" >
              <img src={basket}
                class="img-fluid" alt="Phone image" style={{ borderRadius: '50px', width: '300px', height: '200px' }} />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3" >
              <div class="card" className='vegetable' >
                <div class="card-body">
                  <h5 class="card-title">Vegetables</h5><br />
                  <h6 class="card-subtitle mb-2 text-body-secondary">Protect the health of every<br /> home</h6>
                  <button type="button" class="btn btn-success">Shop Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3 "  >
              <img src={straw}
                class="img-fluid" alt="Phone image" style={{ borderRadius: '50px', width: '300px', height: '200px' }} />

            </div>
          </div><br />
          <div class="row d-flex align-items-center justify-content-center h-100" >
            <div class="col-md-3 col-lg-3 col-xl-3" >
              <img src={applejuice}
                class="img-fluid" alt="Phone image" style={{ borderRadius: '50px', width: '300px', height: '200px' }} />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3" >
              <img src={DriedNuts}
                class="img-fluid" alt="Phone image" style={{ borderRadius: '50px', width: '300px', height: '200px' }} />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3 "  >
              <img src={cutveg}
                class="img-fluid" alt="Phone image" style={{ borderRadius: '50px', width: '300px', height: '200px' }} />

            </div>
          </div><br /><br />
          <p style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '25px' }}>Our Products</p>
        </div>

      </section>
      <section class="aboutcolor">
        <div class="container" className='left'>
          <div class="row">
            <div class="col-md-9">
              <h2 style={{ textAlign: 'center' }}><b>Why Choose Us?</b></h2>
              <p>At AgroMart, we are passionate about connecting farmers and customers in a seamless and efficient way. Our mission is to create a platform that supports local farmers, promotes sustainable agriculture, and provides customers with access to fresh, high-quality agricultural products.</p>
            </div>
          </div>
          <div class="container" id='aaa'>
            <div class="row">
              <div class="col-md-3">
                <h6><b>Our Journey</b></h6>
                <p>AgroMart's journey began with a vision to bridge the gap between farmers and cutting-edge agricultural resources. We embarked on this odyssey with the firm belief that technology and tradition could work hand in hand to yield the most bountiful results. Under the nurturing umbrella of Krishibhavan, we have flourished into a vibrant online marketplace, providing farmers with access to the finest products and services availabie.</p>
              </div>
              <div class="col-md-3">
                <h6><b>Empowering Farmers,<br />Growing Together</b></h6>
                <p>The heart and soul of AgroMart lie in our commitment to empowering farmers. We strive to cultivate a culture of sustainable farming practices, respecting the environment and maximizing yields without compromising on quality. Through Krishibhuvanis vast network of research and development, we continuously update our inventory with the latest innovations and techniques.</p>
              </div>
              <div class="col-md-6 ">
                <div class="image-container" id='parent'>
                  <img src={white} class="card-img-center" alt="white" className='whiteimg' />
                  <img src={grapes} class="card-img-center" alt="banner" className='bannerimg' />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <h6><b>Our Promise</b></h6>
                <p>Transparency, integrity and customer satisfaction are at the core of our operations. When you choose AgroMart, you not only gain access to a wide array of top-notch products but also become a part of a larger movement to revolutionize agriculture, With Krishibhavan's support, we remain dedicated to delivering nothing short of excellence.</p>
              </div>
              <div class="col-md-3">
                <h6><b>Join the AgroMart Familiy</b></h6>
                <p>Step into our world of farm-fresh wonders, where each bite tells a story of hard work, love, and a profound connection to nature. We invite you to be part of the AgroMart family, where the passion for farming intertwines with modern convenience, and where the beauty of the land is celebrated through every delectable offering.</p>
              </div>
            </div><br/>
            <div class="row">
              <div class="col-md-3">
              <button type="button" style={{backgroundColor:'#F6CC16',width:'150px',color:'white',marginBottom:'80px'}}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home