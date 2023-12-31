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

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Botanists//
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
//plants//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let showAllPlants = () => {
  return Axios.get(`/plant/`);
};
let showDetailsPlant = (id) => {
  return Axios.get(`/plant/${id}`);
};
let UpdateDetailsPlant = (data, id) => {
  return Axios.put(`/plant/${id}`, data);
};

export const accountService = {
  //Authentification//
  signin,
  signout,
  forgotPassword,
  resetPassword,
  //Users//
  showAllUsers,
  showProfileUser,
  UpdateProfilUser,
  uploadAvatarUser,
  //Botanist//
  showAllBotanists,
  showProfileBotanist,
  UpdateProfilBotanist,
  //Plants//
  showAllPlants,
  showDetailsPlant,
  UpdateDetailsPlant,
};
