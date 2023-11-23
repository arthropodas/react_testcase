import React, { useState ,useEffect} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { deposit, showAccount } from '../services';
// import img from '../../src/images/OH3E9S0.jpg'

function DepositPage() {
  const [amount, setAmount] = useState('');
 


  const handleDeposit = async () => {
     try{
      const amountFloat = parseFloat(amount);
      const response = await deposit(parseFloat(amountFloat));
   
      alert("deposit successfull");
    
      console.log(response);
     }
      catch(error){
        alert(error.response.data['message'])
      }

      
  }


  return (
    <div className='d-flex'>
    <div className='content col-md-9 justify-content-center'>
        <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
         
          <div className="card-body">
            <h5 className="card-title">Deposit Page</h5>
          
            <Form>
              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleDeposit}>
                Submit
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

export default DepositPage;
