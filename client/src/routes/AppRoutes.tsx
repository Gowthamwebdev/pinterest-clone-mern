import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import Layout from "../components/layout/Layout";
import { useAuthStore } from "../stores/AuthStore";
import LandingPage from "../pages/LandingPage";
import Settings from "../pages/Settings";

// Main Routes Component
const AppRoutes = () => {
  const { isAuthenticated } = useAuthStore();

  // ProtectedRoute: Check if authenticated before accessing protected routes
  const ProtectedRoute = () => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return <Layout><Outlet /></Layout>;
  };

  // PublicRoute: Allow public access (e.g., landing page, reset password)
  const PublicRoute = () => {
    return <div><Outlet /></div>;
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="password/reset" element={<ResetPasswordForm />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pin-creation-tool" element={<CreatePost />} />
        <Route path="/messages" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
