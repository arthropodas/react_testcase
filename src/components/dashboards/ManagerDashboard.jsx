import React, { useState, useEffect } from 'react';
import { showUsers, downloadAllTransactions, getUserData, pagination } from '../../services';
import './dashboard.css';

function ManagerDashboard() {
  const [userData, setUserData] = useState([]);
  const [manager, setManager] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);


  async function fetchData(url) {
    const response = await showUsers();
    console.log("users list>>>",userData)
    const response1 =  await getUserData();
    setManager(response1.data)
    setUserData(response.data['results']);
    setNext(response.data['next']);
   
    setPrev(response.data['previous']);
  }

  useEffect(() => {
 
    fetchData();
    // fetchDataAndUserData();
  }, []);

const handlePageChange = async(url) =>{
  console.log(">> value of next ",next)
 const response = await pagination(url)

 setUserData(response.data['results'])
 setNext(response.data['next'])
 setPrev(response.data['previous'])

}

  return (
    <div>
      <div style={{ padding: '50px' }}>
        <div className="header">
          <h1>Manager Dashboard</h1>&nbsp;
          <h4> hello {manager.username}!!!!</h4>
          <div>
            Download All Transactions
            <button className='btn btn-warning' onClick={downloadAllTransactions}>download</button>
          </div>
        </div>
      </div>

      <div style={{ padding: '50px' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.length === 0 ? <h1>no user found</h1> :
              userData.map((user, index) => (
                <tr className='poster' key={index}>
                  <td>{user.username}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        
        <div className='button-container'>
          {prev && <button className = 'previous ' onClick={() => handlePageChange(prev)}>Previous</button> }
          {next && <button   className = 'next'  onClick={() => handlePageChange(next)}>Next</button>}
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
