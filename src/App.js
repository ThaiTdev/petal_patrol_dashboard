import AuthRoutes from "./routes/authRoute";
import AdminRoutes from "./routes/adminRoute";
import UserRoutes from "./routes/userRoute";
import AuthGuard from "./_helpers/AuthGuard";
import BotanistRoutes from "./routes/botanistRoute";

function App() {
  return (
    <div>
      <AuthRoutes />
      <AdminRoutes />
      <AuthGuard>
        <UserRoutes />
        <BotanistRoutes />
      </AuthGuard>
    </div>
  );
}

export default App;
