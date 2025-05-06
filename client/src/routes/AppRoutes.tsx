import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import Layout from "../components/layout/Layout";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Settings from "../pages/Settings";
import { useAuthStore } from "../stores/AuthStore";
import MasonryGallery from "../components/layout/Masonry";
import Categories from "../components/layout/Categories";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Layout><Outlet /></Layout> : <Navigate to="/" replace />;
};

const PublicRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="password/reset" element={<ResetPasswordForm />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pin-creation-tool" element={<CreatePost />} />
        <Route path="/messages" element={<Home />} />
        <Route path="/" element={<MasonryGallery />} />
        <Route path="/category/:genre" element={<Categories />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
