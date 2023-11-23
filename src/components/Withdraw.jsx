import React, { useState, useEffect } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import {  showAccount, withdraw } from '../services';


function WithdrawPage() {
  const [amount, setAmount] = useState('');


  const handleWithdraw = async () => {
    try {
     
      const response = await withdraw(parseFloat(amount))
   
  
      alert(response.data['message'])  
    } 
    
    catch(error){
   alert(error.response.data['message'])

    }
  };

  return (
    <div className='d-flex'>
    <div className='content col-md-9 justify-content-center'>
        <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
         
          <div className="card-body">
       

            <Form>
              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <br/>
              <Button variant="primary" onClick={handleWithdraw}>
               Withdraw
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    
    
        </div>

    
  );
}

export default WithdrawPage;
