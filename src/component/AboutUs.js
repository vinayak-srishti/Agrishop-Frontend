import React from 'react'
import Navbar from './Navbar'
import banner from './Image/banner.jpg';
import white from './Image/white.jpg';
import { FaCircle } from "react-icons/fa";
function AboutUs() {
    return (
        <div>
            <section class="about">
                <div class="container" className='left'>
                    <div class="row">
                        <div class="col-md-8">
                            <h3><b>About us</b></h3>
                            <p>At AgroMart, we are passionate about connecting farmers and customers in a seamless and efficient way. Our mission is to create a platform that supports local farmers, promotes sustainable agriculture, and provides customers with access to fresh, high-quality agricultural products.</p>
                        </div>
                    </div>
                    <div class="container" id='aaa'>
                        <div class="row">
                            <div class="col-md-3">
                                <h6 style={{marginLeft:'0px'}}><FaCircle size='1rem' color='#F6CC16' /><b>   Our Journey</b></h6>
                                <p>AgroMart's journey began with a vision to bridge the gap between farmers and cutting-edge agricultural resources. We embarked on this odyssey with the firm belief that technology and tradition could work hand in hand to yield the most bountiful results. Under the nurturing umbrella of Krishibhavan, we have flourished into a vibrant online marketplace, providing farmers with access to the finest products and services availabie.</p>
                            </div>
                            <div class="col-md-3">
                                <h6 style={{marginLeft:'5px'}}><FaCircle size='1rem' color='#F6CC16' /><b>Empowering Farmers,<br />Growing Together</b></h6>
                                <p>The heart and soul of AgroMart lie in our commitment to empowering farmers. We strive to cultivate a culture of sustainable farming practices, respecting the environment and maximizing yields without compromising on quality. Through Krishibhuvanis vast network of research and development, we continuously update our inventory with the latest innovations and techniques.</p>
                            </div>
                            <div class="col-md-6" >
                            <div id='parent'>
                                    <img src={white} class="card-img-center" alt="white" className='whiteimg' />
                                    <img src={banner} class="card-img-center" alt="banner" className='bannerimg' />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <h6 style={{marginLeft:'5px'}}><FaCircle size='1rem' color='#F6CC16' /><b>Our Promise</b></h6>
                                <p>Transparency, integrity and customer satisfaction are at the core of our operations. When you choose AgroMart, you not only gain access to a wide array of top-notch products but also become a part of a larger movement to revolutionize agriculture, With Krishibhavan's support, we remain dedicated to delivering nothing short of excellence.</p>
                            </div>
                            <div class="col-md-3">
                                <h6 style={{marginLeft:'5px'}}><FaCircle size='1rem' color='#F6CC16' /><b>Join the AgroMart Familiy</b></h6>
                                <p>Step into our world of farm-fresh wonders, where each bite tells a story of hard work, love, and a profound connection to nature. We invite you to be part of the AgroMart family, where the passion for farming intertwines with modern convenience, and where the beauty of the land is celebrated through every delectable offering.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default AboutUs