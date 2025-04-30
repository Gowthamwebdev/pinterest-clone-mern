import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import LandingPage from "./pages/LandingPage";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const token = useAuth();

  return (
    <>
      {!token ? (
        <LandingPage />
      ) : (
          <AppRoutes />
      )}
      {/* <Outlet/> */}
    </>
  );
}
export default App;