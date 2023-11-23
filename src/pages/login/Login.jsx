import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faSignOutAlt,faAddressBook, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/login.jpg';
import { login } from '../../services';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { Alert } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
function Login() {
  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authTokens,setAuthTokens] = useState('')
  const [userType, setUserType] = useState('')
  const handleLogin = async () => {
    try {
      console.log("you pressed");
      const credentials = {
        username: username,
        password: password,
      };
  
      let response = await login(credentials);
   
      localStorage.setItem('authTokens', JSON.stringify(response.data));

      // const decodedToken = jwtDecode(response.data.access); // Fix typo here
     const userType =response.data.user_type
    
     
     
  
     localStorage.setItem('userType',userType)
      if (userType) {
        if (userType === 'staff') navigate('/staff');
        if (userType === 'customer') navigate('/customer');
        if (userType === 'manager') navigate('/manager');
        if (userType === 'admin') navigate('/admin');
        console.log("you are redirected to the handle login");
      }
    } catch (error) {
    alert("wrong username and password")
    }
  };
  
  return (
    <div >
      <div className='justify-content'>
     
    
      {error && <Alert variant="danger">{error}</Alert>}
    </div>

    <header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
        <span
        data-testid = 'bank-icon'
        className="action-icon bank-icon"
        onClick={() => {
          navigate('bankinfo')
        }}
      >
        <FontAwesomeIcon icon={faBank} color="white" size="lg" />
      </span>
        </a>
        
      </div>
    </nav>
      
    </header>

    <div className="row justify-content-center ">
    <div className="col-lg-6" >
      <div className="row justify-content-center mt-10" id='login-div'>
        <div className="col-md-9 ">
          <div className="card Login-main">
            <div className="card-header text-center">
              Login
            </div>
            <div className="card-body">
              <form className='bootstrap'onSubmit={handleLogin}>
                <div className="mb-3">
                  <label data-testid = 'username' id = 'form-label' htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label id = 'form-label' htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button data-testid = 'form-label'
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleLogin}
                style={{float:'right'}}>
                  Log in
                </button>
                <div style={{float:'bottom'}}> <Link to="/signup">I have not registered</Link></div>
               
             
                
              </form>
             
            </div>
          </div>
        </div>
     
        </div>
        
        </div>
        <div className="col-lg-6">
        <img src = {logo} alt= 'login-image' className='img-fluid'></img>
        </div>
        </div>
    </div>
  );
}

export default Login;
