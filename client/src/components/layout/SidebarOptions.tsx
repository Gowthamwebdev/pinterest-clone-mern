import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SidebarOptions = ({ setSetting }: { setSetting: (val: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSetting(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSetting]);

  return (
    <div
      ref={ref}
      className="absolute bottom-6 left-24 z-50 w-96 h-inherit bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-4"
    >
    <Link to="/settings" className=" cursor-pointer">Settings</Link>
    <Link to="/edit/history" className=" cursor-pointer">Edit History</Link>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    </div>
  );
};

export default SidebarOptions;
