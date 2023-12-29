//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Authentification//
/////////////////////////////////////////////////////////////////////////////////////////////////////
let signin = (data) => {
  return Axios.post("/auth/signin/", data);
};
let signout = () => {
  return Axios.get(`/auth/signout/`);
};

let emailConfirm = (activateCode) => {
  return Axios.post(`/emailConfirm/${activateCode}`);
};

let forgotPassword = (data) => {
  return Axios.post("/user/reset-password", data);
};

let resetPassword = (data, id, Token) => {
  return Axios.post(`/user/reset-password/${id}/${Token}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Users//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let showAllUsers = () => {
  return Axios.get(`/user/`);
};
let showProfileUser = (id) => {
  return Axios.get(`/user/${id}`);
};
let UpdateProfilUser = (data, id) => {
  return Axios.put(`/user/${id}`, data);
};

let uploadAvatarUser = (data, id) => {
  return Axios.post(`/uploadAvatarUser/${id}`, data);
};

let uploadCvUser = (data, id) => {
  return Axios.post(`/uploadCvUser/${id}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Botanist//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let showAllBotanists = () => {
  return Axios.get(`/waiting-list/`);
};
let showProfileBotanist = (id) => {
  return Axios.get(`/waiting-list/${id}`);
};
let UpdateProfilBotanist = (data, id) => {
  return Axios.put(`/waiting-list/${id}`, data);
};

///////////////////////////////////////////////////
//gestion des tokens///////////////////////////////
//////////////////////////////////////////////////
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

// let logout = () => {
//   localStorage.removeItem("token");
// };

let isLogged = () => {
  let token = localStorage.getItem("token");

  return !!token;
};

export const accountService = {
  //tokens//
  saveToken,
  isLogged,
  //Authentification//
  signin,
  signout,
  emailConfirm,
  forgotPassword,
  resetPassword,
  //Users//
  showAllUsers,
  showProfileUser,
  UpdateProfilUser,
  uploadAvatarUser,
  uploadCvUser,
  //Botanist//
  showAllBotanists,
  showProfileBotanist,
  UpdateProfilBotanist,
};
