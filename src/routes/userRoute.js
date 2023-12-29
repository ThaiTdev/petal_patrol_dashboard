import { Routes, Route } from "react-router-dom";
import ShowProfilUser from "../components/Home/users/showProfilUser/ShowProfilUser";
import FormUpdateProfilUser from "../components/Home/users/updateUserProfil/FormUpdateProfilUser";
import ShowAllUsers from "../components/Home/users/showAllUsers/ShowAllUsers";

const UserRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/ShowProfilUser/:id" element={<ShowProfilUser />} />
        <Route
          path="/FormUpdateProfilUser/:id"
          element={<FormUpdateProfilUser />}
        />
        <Route path="/ShowAllUsers/:id" element={<ShowAllUsers />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
