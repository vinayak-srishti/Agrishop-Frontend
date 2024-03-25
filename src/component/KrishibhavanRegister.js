import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Footer from './Footer';

function KrishibhavanRegister() {
    const[data,setdata]=useState({name:'',age:'',city:'',pincode:'',district:'',contact:'', email:'',password:''})
    const func=(a)=>{
        setdata({...data,[a.target.name]:a.target.value})
        console.log(a)
    }
    const onsubmit=(Event)=>{
        Event.preventDefault()
        // axios.post("https://jsonplaceholder.typicode.com/posts",data)
        // .then((result)=>{
        //     console.log(result)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        console.log("save")
    }

    console.log(data)
  return (
    <div>
        <section class="vh-100">
  <div class="container py-5 h-100" >
    <div class="row d-flex align-items-center justify-content-center h-100" >
      <div class="col-md-8 col-lg-7 col-xl-6" >
        <img src="https://img.freepik.com/free-vector/organic-farming-concept_52683-33124.jpg?w=740&t=st=1706802314~exp=1706802914~hmac=7998d3a610753ae0ae352e140ff2c8ba2190ee646fbc97d1f51d300f54373b96"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1"  >
      
      <h3>Krishibhavan Registration Form</h3><br/>
        <form onSubmit={onsubmit}>
         
        <div class="row">
                <div class="col-md-8 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="Name"> Name</label><br/>
                    <input type="text" id="Name" class="form-control form-control-lg"  className='nametextbox' onChange={func} name="name" value={data.name}/>
                    
                  </div>

                </div>
                <div class="col-md-4 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="Age">Age</label><br/>
                    <input type="text" id="age" class="form-control form-control-lg" className='agetextbox' onChange={func} name="age" value={data.age}/>
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline ">
                  <label for="city" class="form-label">City</label><br/>
                    <input type="text" class="form-control form-control-lg" id="city" className='registertextbox' onChange={func} name="city" value={data.city}/>
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline ">
                  <label for="pincode" class="form-label">Pincode</label><br/>
                    <input type="text" class="form-control form-control-lg" id="pincode" className='registertextbox' onChange={func} name="pincode" value={data.pincode}/>
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline ">
                  <label for="district" class="form-label">District</label><br/>
                    <input type="text" class="form-control form-control-lg" id="district" className='registertextbox' onChange={func} name="district" value={data.district}/>
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline ">
                  <label for="contact" class="form-label">Contact</label><br/>
                    <input type="tel" class="form-control form-control-lg" id="contact" className='registertextbox' onChange={func} name="contact" value={data.contact}/>
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="emailAddress">Email</label><br/>
                    <input type="email" id="emailAddress" class="form-control form-control-lg" className='registertextbox' onChange={func} name="email" value={data.email}/>
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="password">Password</label><br/>
                    <input type="password" id="password" class="form-control form-control-lg" className='registertextbox' onChange={func} name="password" value={data.password}/>
                    
                  </div>

                </div>
              </div>

              

          
          <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button><br/><br/>
          


          

        </form>
        
      </div> 
    </div>
  </div>
</section>
<Navbar/>
<Footer/>
    </div>
  )
}

export default KrishibhavanRegister