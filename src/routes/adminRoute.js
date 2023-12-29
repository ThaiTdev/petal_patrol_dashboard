import { Routes, Route } from "react-router-dom";

import AccueilAdmin from "../components/Home/pageAccueilDashboard/pageAccueilDashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/pageAccueilDashboard/:id" element={<AccueilAdmin />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
