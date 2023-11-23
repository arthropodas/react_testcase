import React, { useState, useEffect } from "react";



import {
  CustomerService,
  commonService,
  downloadUserTransactions,
  pagination,
  showTransactions,
} from "../../services";
import { jwtDecode } from "jwt-decode";


function CustomerDashboard() {
  const [accountData, setAccountData] = useState(null);
  const [username, setUsername] = useState(null);
  

  useEffect(() => {
    
    const handleShowAccount = async () => {
      try{const tokens = JSON.parse(localStorage.getItem('authTokens'));
      const decodedToken = jwtDecode(tokens.access);
 
     // Access the user_id property from the decoded token
     const user_id = decodedToken.user_id;
 
 
     const response = await CustomerService.showAccount(user_id);
     setUsername(decodedToken.username)
     setAccountData(response.data);}
     catch(error){
          alert("account is not found")
     }
    }
    
   const handleGetUserData= async ()=>{
    const tokens = JSON.parse(localStorage.getItem('authTokens'));
    // commonService.getUserData(jwtDecode(tokens.access).userType)
   }



    handleGetUserData();
    handleShowAccount();
  
  }, []);

  const handleShowTransactions = async ()=>{
   const response =  await showTransactions();

   

  }


  const renderAccountInfo = () => {
    if (accountData) {
      return (
        <div style={{marginLeft:'250px'}} className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h1 data-testid = "header" className="card-title">Customer Dashboard</h1>
                  {accountData ? (
                    <p className="card-text">
                      <strong>Hello, {username}!</strong>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Account Information</h5>
                  <p className="card-text">
                   
                  </p>
                  <div>
                    download transations:
                    <button
                      className="btn btn-warning"
                      onClick={downloadUserTransactions}
                    >
                      download
                    </button>
                    <p1 style={{paddingLeft:'100px'}}>show transactions :</p1>
                     
                    {/* <button data-testid ="show"
                    name="show"
                      className="btn btn-warning"
                      onClick={handleShowTransactions}
                    >
                      show
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div style={{ padding: '50px' }}>
          <table className="table table-striped">
  {/*  */}
</table>


        {/* Pagination controls */}
        
       
      </div>

       
          </div>
        </div>
      );
    }
  };

  return <>{renderAccountInfo()}</>;
}

export default CustomerDashboard;
