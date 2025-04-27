import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Notifications from "../ui/Notifications";
import SidebarOptions from "./SidebarOptions";

interface LayoutProps {
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  setSetting: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
  setting: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ setNotification, setSetting, notification, setting, children }) => (
  <div className="flex h-screen">
    <div className="w-[5vw] bg-white border-r mt-5 border-gray-200">
      <Sidebar setNotification={setNotification} setSetting={setSetting} />
    </div>
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="flex-1 p-4 overflow-auto">
        {children}
      </div>
    </div>
    {notification && <Notifications setNotification={setNotification} />}
    {setting && <SidebarOptions setSetting={setSetting} />}
  </div>
);

export default Layout;
