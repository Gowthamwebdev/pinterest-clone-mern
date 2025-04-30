import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import Layout from "../components/layout/Layout";
import { useAuth } from "../hooks/useAuth";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import SignUpForm from "../pages/Signup";
import { useAuthStore } from "../stores/authStore";

const AppRoutes = () => {
  const { isAuthenticated } = useAuthStore();
  const token = useAuth();

  const ProtectedRoute = () => {
    if (!isAuthenticated || !token) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
    return <Layout><Outlet /></Layout>;
  };

  const PublicRoute = () => {
    if (isAuthenticated && token) {
      return <Navigate to="/home" replace />;
    }
    return <Layout><Outlet /></Layout>;
  };

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/password/reset" element={<ResetPasswordForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUpForm />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pin-creation-tool" element={<CreatePost />} />
        <Route path="/messages" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;