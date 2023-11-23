import React, { useState ,useEffect} from 'react';
import { addStaffManager, downloadAllTransactions, searchUsers} from '../../services'; // Import your signup function from services
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dashboards/dashboard.css'
function StaffManagerForm() {
  const [result,setResult] = useState('');
  const [query, setQuery] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    user_type: '', 
    email: '',
    password: '',
  });

  const handleSearch = async ()=>{ 
    const response = await searchUsers(query)
    console.log("inside the search\n response>>>>>>>>>>",response.data) 
     setResult(response.data)
  }
useEffect(()=>{
    
},[formData])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("this is form data>>>>>>>",formData.user_type)
      const response = await addStaffManager(formData);
     
    } catch (error) {

      alert("adding member is failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                
            />
            <button data-testid = 'search' className="bg-white p-4" onClick={handleSearch}>🔍</button>
        </div>

        {result? (<div>
          <h3> search results  </h3>
          <div>
          <p> username:{result.username}</p>
          <p> firstname: {result.first_name}</p>
          <p> lastname:{result.last_name}</p>
          <p> email:  {result.email}</p>
          </div>
 

        </div>) : null }
    
    
      <div className='add-staff-manager'>
      <h1>Add manger Staff</h1>
      <div style={{padding:'10px'}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Type</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="staff"
              name="user_type"
              value="staff"
              checked={formData.user_type === 'staff'}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="staff">
              Staff
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="manager"
              name="user_type"
              value="manager"
              checked={formData.user_type === 'manager'}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="manager">
              Manager
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="mb-3">
         
        
           <button className='btn btn-warning ' style={{float:"right"}}> add </button>
        </div>
       
      </form>

      </div>
    
      </div>
    
    </div>
  );
}

export default StaffManagerForm;
