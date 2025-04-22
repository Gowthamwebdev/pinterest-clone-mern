import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SidebarOptions = ({ setSetting }: { setSetting: (val: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  // Outside click logic
  useEffect(() => { 
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        triggerFadeOut();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => setSetting(false), 200); 
  };

  const handleLinkClick = () => {
    triggerFadeOut();
  };

  return (
    <div
      ref={ref}
      className={`absolute bottom-6 left-24 z-50 w-96 h-inherit m-2 bg-white border font-semibold border-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-4 transition-opacity duration-200 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Link to="/settings" className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg" onClick={handleLinkClick}>
        Settings
      </Link>
      <Link to="/edit/history" className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg " onClick={handleLinkClick}>
        Edit History
      </Link>
    </div>
  );
};

export default SidebarOptions;
