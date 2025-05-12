import { useState } from "react";
import { Link } from "react-router-dom";
import LandingNav from "../components/layout/LandingNav";
import { realImages } from "../components/layout/image";
import MasonryGallery from "../components/layout/Masonry";

const Explore = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [categoryVisibleCount, setCategoryVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleSeeMore = (increment) => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + increment, realImages.length));
      setLoading(false);
    }, 1500);
  };
  const handleCategorySeeMore = (increment) => {
    setLoading(true);
    setTimeout(() => {
      setCategoryVisibleCount((prev) => Math.min(prev + increment, realImages.length));
      setLoading(false);
    }, 1500);
  };
  return (
    <>
  <LandingNav className="fixed top-0 left-0 w-full bg-white shadow-md z-50" />
  <h1 className="text-2xl font-semibold mt-8 mb-4 text-left">Explore the Best of Pinterest</h1>

  <div className="px-1 grid md:grid-cols-2 gap-x-0 gap-y-[4px]">
    {realImages.slice(0, visibleCount).map(({ url, genre, suggestedText }, index) => (
      <Link key={index} to="/" className="block">
        <div className="rounded-lg overflow-hidden w-[250px] h-[200px] flex flex-col justify-end items-center p-2 transition-transform duration-300 hover:scale-105">
          <img src={url} alt={genre} className="w-full h-full rounded-lg object-cover " />
          <div className="w-full text-center mt-[-40px]">
            <p className="text-white text-xs font-normal">{genre}</p>
            <p className="text-white text-lg font-medium">{suggestedText}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>

      {visibleCount < realImages.length && (
        <div className="mt-6 flex justify-center">
          <button className="px-3 py-2 rounded-full bg-gray-200 text-black text-[10px] font-medium hover:bg-gray-300 transition duration-300" onClick={() => handleSeeMore(6)}>
          {loading ? (
        <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
      ) : (
        "See more"
      )}
          </button>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">Browse by category</h2>
      <div className="px-1 grid grid-cols-3 md:grid-cols-4 gap-x-[1px] gap-y-[7px]">
    {realImages.slice(0, categoryVisibleCount).map(({ url, genre }, index) => (
    <Link key={index} to={`/image/${index}`} className="block group">
      <div className="rounded-lg overflow-hidden w-[160px] h-[70px] flex flex-col items-center justify-centerp-2 transition-transform duration-300 group-hover:scale-105">
        <img src={url} alt={genre} className="w-full h-full rounded-lg object-cover" />
        <div className="w-full text-center mt-[-30px]">
          <p className="text-white text-sm font-semibold opacity-90">{genre}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

{categoryVisibleCount < realImages.length && (
  <div className="mt-6 flex justify-center">
    <button
      className="px-4 py-2 rounded-full bg-gray-200 text-black text-[10px] font-medium hover:bg-gray-300 transition duration-300 flex items-center gap-2"
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setCategoryVisibleCount((prev) => Math.min(prev + 3, realImages.length));
          setLoading(false);
        }, 1500);
      }}
    >
      {loading ? (
        <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
      ) : (
        "See more"
      )}
    </button>
  </div>
)}
  
  <h2 className="text-2xl font-semibold mb-4 text-left">What's new on Pinterest</h2>
  <div className="overflow:hidden my-6 px-4">
  <MasonryGallery />
</div>
</>
  );
};

export default Explore;
