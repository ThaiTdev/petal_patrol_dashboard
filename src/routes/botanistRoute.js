import { Routes, Route } from "react-router-dom";
import ShowAllBotanists from "../components/Home/botanists/showAllBotanists/ShowAllBotanists";
import FormUpdateProfilBotanist from "../components/Home/botanists/updateBotanistProfil/FormUpdateProfilBotanist";
// import ShowAllUsers from "../components/Home/users/showAllUsers/ShowAllUsers";

const BotanistRoutes = () => {
  return (
    <Routes>
      <Route>
        {/* <Route path="/ShowAllBotanists/:id" element={<ShowAllBotanists />} /> */}
        <Route
          path="/FormUpdateProfilBotanist/:id"
          element={<FormUpdateProfilBotanist />}
        />
        <Route path="/ShowAllBotanists/:id" element={<ShowAllBotanists />} />
      </Route>
    </Routes>
  );
};

export default BotanistRoutes;
