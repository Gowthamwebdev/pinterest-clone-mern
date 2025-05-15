
import { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import pinterestSvg from "../../../public/pinterest.svg";
import { Search, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../stores/useSearchStore";
import PinterestSearchBar from "../ui/Searchbar";

const suggestedSearches = ["Nature", "Street Photography", "Minimalism", "Abstract", "Urban Vibes"];

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { setQuery, searchImages, results, error } = useSearchStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 2) {
      setQuery(query);
      searchImages();
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <img src={pinterestSvg} alt="Pinterest Logo" className="w-6 h-6 mr-[-12px]" />
        <span className="text-lg font-bold text-[#e60023]">Pinterest</span>

        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "14px",
            minWidth: "auto",
            padding: "6px 10px",
          }}
          onClick={() => navigate("/explore")}
        >
          Explore
        </Button>
         
        <PinterestSearchBar
          suggestedText={suggestedSearches}
          onSearch={handleSearch}
        />
          {searchQuery && (
            <IconButton onClick={() => setSearchQuery("")}>
              <Close fontSize="small" />
            </IconButton>
          )}
      </div>

      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

      {results.length > 0 && (
        <div className="absolute bg-white shadow-md p-3 rounded-lg top-[50px] left-1/2 transform -translate-x-1/2 w-[400px]">
          <h3 className="text-sm font-bold mb-2">Search Results</h3>
          <div className="grid grid-cols-3 gap-2">
            {results.map((img) => (
              <img key={img.id} src={img.url} alt={img.title} className="w-full h-auto rounded-md" />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          onClick={onLoginClick}
          sx={{
            fontSize: "14px",
            backgroundColor: "#e60023",
            color: "white",
            borderRadius: "40px",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 15px",
            boxShadow: "none",
          }}
        >
          Log in
        </Button>
        <Button
          onClick={onSignupClick}
          sx={{
            fontSize: "14px",
            backgroundColor: "#e6e6e6",
            color: "black",
            borderRadius: "30px",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 15px",
            boxShadow: "none",
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
