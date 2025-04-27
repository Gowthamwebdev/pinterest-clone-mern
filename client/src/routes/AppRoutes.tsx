  import { Route, Routes, Navigate } from "react-router-dom";
  import { useAuthStore } from "../stores/AuthStore"; 
  import CreatePost from "../pages/CreatePost";
  import Explore from "../pages/Explore";
  import Home from "../pages/Home";
  import Login from "../pages/Login";
  import Settings from "../pages/Settings";
  import ResetPasswordForm from "../components/form/ResetPasswordForm";
  import ResetPage from "../components/form/ResetPage";

  const AppRoutes = () => {
    const { isAuthenticated } = useAuthStore();

    const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
      if (!isAuthenticated) {
        return <Navigate to="/login" replace />; 
      }
      return children;
    };

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/password/-reset" element={<ResetPage />} />

        <Route
          path="/today"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pin-creation-tool"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  };
  export default AppRoutes;
