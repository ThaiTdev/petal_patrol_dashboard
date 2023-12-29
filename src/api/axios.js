import axios from "axios";
//Je paramètre ma base url avec axios
const Axios = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: API_SERVER,
  withCredentials: true,
});

export default Axios;
