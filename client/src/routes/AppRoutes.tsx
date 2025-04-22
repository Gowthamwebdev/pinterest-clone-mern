import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import CreatePost from "../pages/CreatePost";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<Explore />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/pin-creation-tool" element={<CreatePost />} />
    </Routes>
  );
};

export default AppRoutes;
