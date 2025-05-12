import { Button, IconButton, List, ListItem } from "@mui/material";
import pinterestSvg from "../../../public/pinterest.svg";
import { Search, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../stores/useSearchStore";
import PinterestSearchBar from "../ui/Searchbar";
import { useState } from "react";

const suggestedSearches = ["Nature", "Street Photography", "Minimalism", "Abstract", "Urban Vibes"];

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { setQuery, searchImages, results, error } = useSearchStore();

  const handleSearch = (query) => {
    if (query.trim().length > 2) {
      setQuery(query);
      searchImages();
    }
  };

  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-white sticky top-0">
      <div className="flex items-center gap-4">
        <img src={pinterestSvg} alt="Pinterest Logo" className="w-5 h-5" />
        <span className="text-sm font-bold text-[#e60023]">Pinterest</span>

        <Button
          variant="text"
          sx={{ color: "black", fontWeight: "bold", textTransform: "none", fontSize: "11px", minWidth: "auto", padding: "4px 6px" }}
          onClick={() => navigate("/Explore")}
        >
          Explore
        </Button>

        <PinterestSearchBar
          suggestedText={suggestedSearches}
          onSearch={handleSearch}
        />
      </div>

      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

      {results.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-3">
          {results.map((img) => (
            <img key={img.id} src={img.url} alt={img.title} className="w-full h-auto rounded-md" />
          ))}
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button onClick={onLoginClick} sx={{fontSize:"11px",backgroundColor: "#e60023", color: "white", borderRadius: "30px", fontWeight: "semibold", textTransform: "none", padding: "1px 1py" }}>
          Log in
        </Button>
        <Button onClick={onSignupClick} sx={{fontSize:"11px",backgroundColor: "#e6e6e6", color: "black", borderRadius: "30px", fontWeight: "semibold", textTransform: "none", padding: "1px 1py" }}>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
