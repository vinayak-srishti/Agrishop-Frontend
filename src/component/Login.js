import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Login() {
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
      
      <h3>Customer Login Form</h3><br/>
        <form>
         
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example13">Email </label><br/>
            <input type="email" id="form1Example13" class="form-control form-control-lg" className='textbox'/>
            
          </div>

          
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Password</label><br/>
            <input type="password" id="form1Example23" class="form-control form-control-lg" className='textbox'/>
            
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            
            
            
          </div>

          
          <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button><br/><br/>
          <a href="#!" class="nav-link" style={{color:'blue'}}>Forgot password?</a>
          <hr class="my-4" className='line'/>

          <p class="nav-link" style={{color:'blue'}}>Don't have an account? <a href="./register" class="fw-bold text-body" >Sign up</a></p>


          

        </form>
        
      </div> 
    </div>
  </div>
</section>
    </div>
  )
}

export default Login