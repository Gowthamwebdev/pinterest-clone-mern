import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Notifications = ({ setNotification }: { setNotification: (val: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNotification]);

  return (
    <div
      ref={ref}
      className="absolute top-6 left-24 z-50 w-96 h-[95vh] bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold">Updates</h2>

      {count > 0 ? (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
          <p className="text-gray-700">You have {count} new notifications</p>
          <button
            onClick={() => setCount(0)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Clear All
          </button>
        </div>
      ) : (
        <div className="flex flex-col  items-center h-full text-center px-4 text-gray-900">
          <svg fill="none" height="156" viewBox="0 0 156 156" width="156" xmlns="http://www.w3.org/2000/svg"><path d="M6.73597 118.92C-6.85813 112.364 3.39896 74.1199 9.06316 60.4621C16.6599 60.4621 34.886 40.5078 43.0491 24.1182C65.7059 20.0211 103.223 32.1097 118.016 29.2416C132.81 26.3735 153.334 64.4095 156 94.286V132.186C156 141.918 81.5324 135.259 70.5371 132.186C59.5419 129.113 23.7286 127.114 6.73597 118.92Z" fill="#D3E6F4"></path><path d="M122.876 65.6959L109.637 96.4489C114.439 106.483 114.166 121.969 111.732 128.794L20.124 94.765C21.828 89.9869 34.1086 76.6429 44.1069 72.1068L53.3339 39.8634C53.3339 39.8634 81.2047 14.6653 99.3003 21.3872C106.031 23.8876 113.537 27.6322 117.839 36.2895C117.839 36.2895 123.669 60.1554 122.876 65.6959Z" fill="#1F4F60"></path><path d="M77.5664 126.922C74.7434 134.837 64.1584 135.852 58.4133 136.037C57.9123 136.053 49.808 129.362 49.808 129.362C48.2419 125.427 48.0668 120.458 49.4821 116.489L64.2544 119.658L77.5664 126.922Z" fill="#1F4F60"></path><path d="M143.149 38.668L140.613 46.8725L133.858 47.613L140.613 52.4263V58.1843L145.258 53.869L153.987 52.4263L146.526 47.613L145.258 43.5471L143.149 38.668Z" fill="#FFCF7F"></path><path d="M102.8 16.0723L98.5471 24.1121L92.5938 25.0173L98.5471 29.8305L99.3483 35.5886L103.993 31.2733L112.723 29.8305L103.993 25.0173V20.9514L102.8 16.0723Z" fill="#FFCF7F"></path><path d="M117.081 58.2247L122.494 38.668L125.602 56.8515L135.871 63.3778L123.614 67.3762L121.385 73.6091L117.081 80.7823V69.2873L104.671 59.7252L117.081 58.2247Z" fill="#FFCF7F"></path></svg>
          <p className="text-base font-semibold mb-2">Nothing to see here (yet)!</p>
          <p className="text-sm w-max-xs">
            Try exploring your home feed, creating a board or following someone with ideas that inspire you.
          </p>
          <Link to={'/'} onClick={() => setNotification(false)} className="bg-gray-200 mt-2 p-3 rounded-3xl text-black ">Go to home feed</Link>
        </div>
      )}
    </div>
  );
};

export default Notifications;
