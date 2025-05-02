import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useAuthStore } from "./stores/AuthStore";
import Cookies from "js-cookie";

function App() {
  const { setIsAuthenticated, setAccessToken } = useAuthStore();

  // Rehydrate Zustand state from cookie on page load
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
