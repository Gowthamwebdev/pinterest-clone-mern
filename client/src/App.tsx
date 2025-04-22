import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import SidebarOptions from "./components/layout/SidebarOptions";
import Notifications from "./components/ui/Notifications";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [notification, setNotification] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-[5vw] bg-white border-r mt-5 border-gray-200">
        <Sidebar setNotification={setNotification} setSetting={setSetting} />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4 overflow-auto">
          <AppRoutes />
        </div>
      </div>
      {notification && <Notifications setNotification={setNotification} />}
      {setting && <SidebarOptions setSetting={setSetting} />}
    </div>
  );
}

export default App;
