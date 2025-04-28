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
    </>
  );
}
export default App;