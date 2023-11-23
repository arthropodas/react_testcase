import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

function Footer() {
  return (
    <div className='bg-slate-700'>
    <footer>
      
        <div className="row">
          <div className="col-md-6" >
            <h6>Yes Bank</h6>
            <p>&copy; 2023 Yes bank. All rights reserved.</p>
          </div>
          <div className="col-md-6">
          <ul className="list-inline text-end">
  <li className="list-inline-item"><a href="#">Home</a></li>
  <li className="list-inline-item"><a href="#">About</a></li>
  <li className="list-inline-item"><a href="#">Services</a></li>
  <li className="list-inline-item"><a href="#">Contact</a></li>
</ul>
          </div>
        </div>
   
    </footer>
    </div>
  );
}

export default Footer;
