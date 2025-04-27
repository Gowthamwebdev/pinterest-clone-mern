import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Notifications from "../ui/Notifications";
import SidebarOptions from "./SidebarOptions";
import { useUiStore } from "../../stores/UiStore";
import { useAuthStore } from "../../stores/AuthStore";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { notification, setting, setNotification, setSetting } = useUiStore();
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="flex h-screen">
      <div className="w-[5vw] bg-white border-r mt-5 border-gray-200">
       {isAuthenticated && <Sidebar setNotification={setNotification} setSetting={setSetting} /> }
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </div>
      {notification && <Notifications setNotification={setNotification} />}
      {setting && <SidebarOptions setSetting={setSetting} />}
    </div>
  );
};

export default Layout;
