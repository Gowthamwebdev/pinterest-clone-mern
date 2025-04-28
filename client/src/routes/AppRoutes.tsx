import { Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import ResetPasswordForm from "../components/form/ResetPasswordForm";
import ResetPage from "../components/form/ResetPage";
import SignUp from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<Explore />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/pin-creation-tool" element={<CreatePost />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/Signup" element={<SignUp />}/>
      <Route path="/reset-password" element={<ResetPasswordForm/>} />
      <Route path="/password/-reset" element={<ResetPage/>} />
      
    </Routes>
  );
};
export default AppRoutes;
