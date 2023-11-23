import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { accountRequest, approveAccount, getUserData, rejectAccount, showUsers } from '../../services';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [accountRequests, setAccountRequests] = useState([]);
  const [staff,setStaff] = useState([])

  useEffect(() => {
    async function fetchData() {
      
        const response = await accountRequest();
        console.log("accoutn requests", response.data['results'])
        setAccountRequests(response.data['results']);
       const response1  = await getUserData()
       setStaff(response1.data)
    }


    fetchData();
    
 
  },[accountRequest]);

  const handleReject = async (userId) => {
  console.log("inside the jhandiling rejection ");
  const response = await rejectAccount(userId);
  };

  const handleApprove = async (userId) => {
    console.log("you pressed the approve handling.................",userId)
    const response = await approveAccount(userId)
  };

  return (
    <div className="container-fluid staff-main">

<div className="container mt-5">
     
     <div className='staff-header'><h1>hello {staff.username}!!</h1></div>
      
     
      {accountRequests.length? <table className="table table-striped table-bordered table-hover">
      <h1>Account Request</h1>
        <thead className="thead-dark">
          <tr>
            <th>Phone number</th>
            <th>Account Number</th>
            <th>IFSC Code</th>
            <th>UserID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accountRequests.map((account, index) => (
            <tr key={account}>
              <td>{account.phone_number}</td>
              <td>{account.account_number}</td>
              <td>{account.ifsc_code}</td>
              <td>{account.user_id}</td>
              <td>
                <span
                data-testid = 'approve'
                  className="action-icon accept-icon"
                  onClick={() => handleApprove(account.user_id)}
                >
                  <FontAwesomeIcon role='icon' icon={faCheckCircle} color="green" />
                </span>
                <span  data-testid = 'reject'
                  className="delete-icon action-icon"
                  onClick={() => handleReject(account.user_id)}
                >&nbsp;
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:(<p1 className='alert-box'>no requests are there</p1>)}
      
    </div>
    </div>
   
  );
}

export default Dashboard;
