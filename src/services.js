import axiosInstance from "./components/interceptor";
import axios from "axios";
// import { jwtDecode } from "jwt-decode"; // Import jwtDecode, not jwt_decode

export const login = async (credentials) => {
  return await axiosInstance.post("/api/login/", credentials);
};

export const signup = async (userData) => {
 
    const response = await axios.post(
      "http://127.0.0.1:8000/api/signup/",
      userData
    );

};

export const accountRequest = async () => {
  return await axiosInstance.get("/account/list/");
};

export const deposit = async (amount) => {
  
    return await axiosInstance.post("transaction/deposit/", amount);

};

export const withdraw = async (amount) => {
  return await axiosInstance.post("transaction/withdraw/", amount);
};

export const showAccount = async (user_id) => {
  console.log("inside the show account user id",user_id)
  return await axiosInstance.get(`account/${user_id}`);
};
export const getUserData = async (user_id) => {
  console.log("inside get user data:::: user id is  ", user_id);
  return await axiosInstance.get("api/details/");
};

export const updateDetails = async (formData) => {
  return await axiosInstance.patch("api/update/", formData);
};

export const showUsers = async () => {
  console.log("insssssssssssssssssss");

  return await axiosInstance.get("/api/managerview/");
};

export const accountCreate = async (accountData) => {
  console.log("insssssssssssssssssss");
  try {
    const response = await axiosInstance.post("/account/", accountData);
    console.log(response);
    return response;
  } catch (error) {
    return alert("you have already account");
  }
};

export const logout = () => {
  localStorage.removeItem("authTokens");
};
export const searchUsers =async (query)=>{
  return await axiosInstance(`/api/search/${query}/`)
}


export const pagination =async (url)=>{
  console.log("inisided the pagination next value",url)
  // const response= await axiosInstance.get(url)
  // console.log("insidd the pagination response", response.data['results'])
  
  return await axiosInstance.get(url)
}
export const approveAccount = async (user_id) => {

    console.log("inside the approve account service >>>>>", user_id);
   return  await axiosInstance.put(`/account/status/${user_id}/`);

};
export const rejectAccount = async (user_id) => {
  return await axiosInstance.delete(`/account/delete/${user_id}`);
};
export const addStaffManager = async (formData) => {

    return await axiosInstance.post("/api/admin/", formData);

};

export const downloadUserTransactions = async () => {
  return await axiosInstance.get("/transaction/history/");
};

export const downloadAllTransactions = async () => {
  return await axiosInstance.get("/transaction/transactiontable/");
};


export const showTransactions = async() =>{
  return await axiosInstance.get("/transaction/showtransactions")
}
const CustomerService = {

accountCreate,
downloadUserTransactions,
deposit,
withdraw,
showAccount
};

const commonService = {

  login,
  signup,
  logout,
  updateDetails,
  getUserData,

}

const staffService={
  accountRequest,
  
  approveAccount,
  rejectAccount,


}

const ManagerService ={
downloadAllTransactions,showUsers
}

const adminService ={
  addStaffManager,showUsers
}






export {adminService, commonService,ManagerService,CustomerService,staffService}