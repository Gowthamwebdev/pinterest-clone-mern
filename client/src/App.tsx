import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Notifications from "./pages/Notifications";
import CreatePost from "./pages/CreatePost";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-[5vw] bg-gray-100">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/new-story" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
