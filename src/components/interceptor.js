

import axios from "axios";



const apiEndpoint = 'http://127.0.0.1:8000/'; 
const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {  
    'Content-Type': 'application/json',
   
  },
});

axiosInstance.interceptors.request.use((config) => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens') || '{}');
  console.log("authotjesadnf",authTokens)
  console.log("inside the intercepto")
  const token = authTokens?.access;
  console.log("tokne>>>>>>>>>>>>>access",token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
    localStorage.removeItem('authTokens');
      window.location.href = '/';
    } else {
      throw error;
    }
  }
);

const refreshAccessToken = async () => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens') || '{}');

  const refreshToken = authTokens.refreshToken;
  const data = { refreshToken: refreshToken };
  try {
    const response = await axios.post('/api/token/refresh/', data);
    const accessToken = response?.data?.data?.accessToken;
    let updatedAuthTokens = JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    localStorage.setItem('authTokens', updatedAuthTokens);
    return accessToken;
  } catch (err) {
    console.log('Error occurred in generating refresh token: ', err);
    localStorage.clear();

  }
};


const axiosPrivate = axiosInstance;




export default axiosPrivate;
