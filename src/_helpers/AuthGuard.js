//import { useNavigate } from "react-router-dom";
import { accountService } from "../_services/accountService";

const AuthGuard = ({ children }) => {
  // let navigate = useNavigate();
  if (!accountService.isLogged) {
    console.log("non connecter");
    // return navigate("/RegisterForm");
  }
  return children;
};

export default AuthGuard;
