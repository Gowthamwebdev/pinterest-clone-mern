import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
// import Login from "../pages/Login";
import Settings from "../pages/Settings";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import LandingPage from "../pages/LandingPage";
import Layout from "../components/layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "../stores/AuthStore";

const AppRoutes = () => {
  const { isAuthenticated } = useAuthStore();
  const token = useAuth();

  const ProtectedRoute = () => {
    if (!isAuthenticated || !token) {
      return <Navigate to="/" replace state={{ from: window.location.pathname }} />;
    }
    return <Layout><Outlet /></Layout>;
    // return <Outlet/>
  };

  const PublicRoute = () => {
    if (isAuthenticated && token) {
      return <Navigate to="/home" replace />;
    }
    // return <Layout><Outlet /></Layout>;
    return <Outlet/>
  };

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
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