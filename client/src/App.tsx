import Cookies from "js-cookie";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useAuthStore } from "./stores/AuthStore";

function App() {
  const { setIsAuthenticated, setAccessToken } = useAuthStore();
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setIsAuthenticated(true);
      setAccessToken(token);
    }
  }, [setIsAuthenticated, setAccessToken]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
