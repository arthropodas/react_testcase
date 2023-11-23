import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import axios from 'axios';
import logo from '../../src/images/OH3E9S0.jpg'


import { useNavigate } from 'react-router-dom';
import { updateDetails } from '../services';

function UpdateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
 
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
      console.log("inside the submit")
      const response = await updateDetails(formData)
      console.log(response)
      alert("details changed successfully")
      navigate('/customer')
    }
    catch (error){
      console.error('details updation failed', error)
    }

  }

  

  return (
    <div className='col-lg-9'>
    <div className="container mt-5 ">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">update details</h2>
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
            
        
                <br/>
                <button onClick={handleSubmit} className="btn btn-primary">
                  update
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
         <img src={logo} alt='' className='img-fluid'></img>
        </div>
        
      </div>
    </div>

    </div>
    
    
  );
}

export default UpdateUser;
