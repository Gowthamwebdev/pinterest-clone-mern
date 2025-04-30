import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuthStore } from "../stores/AuthStore";

export const useAuth = () => {
  const { setAccessToken, setIsAuthenticated } = useAuthStore();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      setAccessToken(token);
      setIsAuthenticated(true);
    }
  }, [token, setAccessToken, setIsAuthenticated]);

  return token;
};
