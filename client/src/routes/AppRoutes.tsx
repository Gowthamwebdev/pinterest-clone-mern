import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SearchResults from "../components/SearchResult";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import Categories from "../components/layout/Categories";
import MasonryGallery from "../components/layout/HomePage/Masonry";
import DisplayPosts from "../components/layout/HomePage/PostDisplay";
import FetchSinglePost from "../components/layout/HomePage/PostFetch";
import Layout from "../components/layout/Layout";
import { UserProfile } from "../components/user/UserProfile";
import { useAuth } from "../hooks/useAuth";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Settings from "../pages/Settings";
import { useAuthStore } from "../stores/AuthStore";

const AppRoutes = () => {
  const token = useAuth();
  const { setIsAuthenticated, setAccessToken, isAuthenticated } = useAuthStore();

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setAccessToken(storedToken);
    }
  }, [setIsAuthenticated, setAccessToken]);

  const ProtectedRoute = () => {
    return isAuthenticated ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <Navigate to="/" replace state={{ from: window.location.pathname }} />
    );
  };

  const PublicRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
  };

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/password/reset" element={<ResetPasswordForm />} />
        <Route path="/explore" element={<Explore />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />}>
          <Route index element={<DisplayPosts />} />
        </Route>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/post/:id" element={<FetchSinglePost />} />
        <Route path="/today" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pin-creation-tool" element={<CreatePost />} />
        <Route path="/messages" element={<Home />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/category/:genre" element={<Categories />} />
        <Route path="/" element={<MasonryGallery />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
