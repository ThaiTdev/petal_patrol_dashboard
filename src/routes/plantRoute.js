import { Routes, Route } from "react-router-dom";
import ShowDetailsplant from "../components/Home/plants/showDetailsplant/ShowDetailsPlant";
import FormUpdateDetailsPlant from "../components/Home/plants/updateDetailsplant/FormUpdateDetailsPlant";
import ShowAllPlants from "../components/Home/plants/showAllPlants/ShowAllPlants";

const PlantRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/ShowDetailsplant/:id" element={<ShowDetailsplant />} />
        <Route
          path="/FormUpdateDetailsPlant/:id"
          element={<FormUpdateDetailsPlant />}
        />
        <Route path="/ShowAllPlants/:id" element={<ShowAllPlants />} />
      </Route>
    </Routes>
  );
};

export default PlantRoutes;
