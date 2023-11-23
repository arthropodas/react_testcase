import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import axios from 'axios';
import register from '../../Data_security_05.jpg'

import { signup } from '../../services';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',

   
  });
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit =async (event) =>{
    event.preventDefault()
    try{
    
      const response = await signup(formData)
      console.log(response)
      alert("user registered successfully")
      navigate('/')
    }
    catch (error){
      alert("registration failed")
     
    }

  }

  
  
  
  
  
 
    
  

  return (
    <div className='col-lg-9'>
    <div className="container mt-5 ">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.username}
                  />
                </div>

                <br/>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.email}
                  />
                </div>

                <br/>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.first_name}
                  />
                </div>

                <br/>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.last_name}
                  />
                </div>
                <br/>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.password}
                  />
                </div>
                <br/>
                <button data-testid = 'signup-btn' onClick={handleSubmit} className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
         <img src={register} alt='signin-image' className='img-fluid'></img>
        </div>
        
      </div>
    </div>

    </div>
    
    
  );
}

export default Signup;
