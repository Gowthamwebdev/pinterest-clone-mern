import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import CreatePost from "../pages/CreatePost";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<Explore />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/pin-creation-tool" element={<CreatePost />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
};

export default AppRoutes;
