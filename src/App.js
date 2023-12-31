import AuthRoutes from "./routes/authRoute";
import AdminRoutes from "./routes/adminRoute";
import UserRoutes from "./routes/userRoute";
import BotanistRoutes from "./routes/botanistRoute";
import PlantRoutes from "./routes/plantRoute";

function App() {
  return (
    <div>
      <AuthRoutes />
      <AdminRoutes />
      <UserRoutes />
      <BotanistRoutes />
      <PlantRoutes />
    </div>
  );
}

export default App;
