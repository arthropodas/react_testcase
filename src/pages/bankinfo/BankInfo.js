import React from 'react';
 import './BankInfo.css'; // Create a corresponding CSS file for styling

const BankInfo = () => {
  return (
    <div className="bank-main">
     
      <div >
        <p>
          Welcome to Our Bank! We are dedicated to providing you with the best
          banking experience.
        </p>
        <p>
          "Your satisfaction is our priority. We adhere to the highest standards
          of service, integrity, and security."
        </p>
        <p>
          Rules and Regulations:
          <ul>
            <li>Always protect your account information.</li>
            <li>Use strong passwords for your online banking.</li>
            <li>Report any suspicious activity to our customer support.</li>
           
          </ul>
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
