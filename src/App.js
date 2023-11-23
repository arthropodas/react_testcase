import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CustomerDashboard from "./components/dashboards/CustomerDashboard";
import StaffDashboard from "./components/dashboards/StaffDashboard";
import ManagerDashboard from "./components/dashboards/ManagerDashboard";



import Header from "./components/headers/Header";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import CreateAccount from "./components/CreateAccount";
import UpdateUser from "./pages/updateuser";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import BankInfo from "./pages/bankinfo/BankInfo";


function App() {



  return (
    
    <Router>

 
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/Customer/" element={<><Header/><CustomerDashboard  /></>} />
          <Route path="/staff/" element={<><Header/><StaffDashboard /></>} />
          <Route path="/manager/" element={<><Header/><ManagerDashboard /></>} />
          <Route path="/deposit/" element={<><Header/><Deposit/></>} />
        <Route path="/withdraw/" element={<><Header/><Withdraw/></>} />
        <Route path="/account/" element={<><Header/><CreateAccount/></>} />
        <Route path="/update/" element={<><Header/><UpdateUser/></>} />
        <Route path="/admin/" element={<><Header/><AdminDashboard /></>} />
        <Route path="/bankinfo/" element={<BankInfo/>} />
  
        

        
        </Routes>
       
     
    </Router>
  );
}

export default App;
