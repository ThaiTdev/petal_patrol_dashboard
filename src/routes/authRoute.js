import { Routes, Route } from "react-router-dom";
import AuthForm from "../components/Auth/signin/AuthForm";
import ForgotPassword from "../components/Auth/forgotPassword/ForgotPassword";
import ResetPassword from "../components/Auth/resetPassword/ResetPassword";
import ActivationAccount from "../components/Auth/activationAccount/ActivationAccount";
import Singout from "../components/Auth/signout/Singout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route
        path="/emailConfirm/:activationCode"
        element={<ActivationAccount />}
      />
      <Route path="/AuthForm" element={<AuthForm />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Singout" element={<Singout />} />
      <Route
        path="/user/reset-password/:id/:token/:serverToken"
        element={<ResetPassword />}
      />
    </Routes>
  );
};

export default AuthRoutes;
