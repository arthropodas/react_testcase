import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import { accountCreate } from '../services';


function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone_number: '',
    ifsc_code: '',
   

   
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
      const response = await accountCreate(formData)
      console.log(response.data,"<<<<<<<<<<<<<<<<")

      alert("account created successfully")
      navigate('/customer')
    }
    catch (error){
      console.error('account already exists')
      navigate('/customer')
    }

  }

  


  return (
    <div className='col-lg-9'>
    <div className="container mt-5 ">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">create account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label >IFSC code</label>
                  <input
                    type="text"
                    name="ifsc_code"
                    placeholder="ifsc"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.ifsc_code}
                  />
                </div>

                <br/>
                <div className="form-group">
                  <label data-testid="phoneNumber">phone number</label>
                  <input
                    type= 'phoneNumber'
                    name= "phone_number"
                    placeholder= "phone number"
                    className="form-control"
                    onChange={handleChange}
                    required
                    value={formData.phone_number}
                  />
                </div>

                <br/>
               
                <br/>
                <button onClick={handleSubmit} className="btn btn-primary" style={{float:'center'}}>
                   submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
   
        </div>
        
      </div>
    </div>

    </div>
    
    
  );
}

export default CreateAccount;
