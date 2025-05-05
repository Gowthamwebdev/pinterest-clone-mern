import { Button, TextField } from "@mui/material";
import pinterestSvg from "../../../public/pinterest.svg";
import { Search } from "@mui/icons-material";

type Props = {
  onLoginClick: () => void;
  onSignupClick: () => void;
};

const Navbar = ({ onLoginClick, onSignupClick }: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-white shadow sticky top-0">
      <div className="flex items-center gap-4">
        <img
          src={pinterestSvg}
          alt="Pinterest Logo"
          className="w-5 h-5"
        />
        <span className="text-lg font-bold text-[#e60023]">Pinterest</span>
        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "14px",
            minWidth: "auto",
            padding: "4px 8px",
          }}
        >
          Explore
        </Button>
        <div className="flex items-center bg-[#f5f5f5] px-3 py-1 rounded-full w-full max-w-md">
          <Search className="text-gray-500 mr-2" fontSize="small" />
          <TextField
            fullWidth
            placeholder="Search"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              fontSize: 14,
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onLoginClick}
          sx={{
            backgroundColor: "#e60023",
            "&:hover": { backgroundColor: "#ad081b" },
            boxShadow: "none",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
            textTransform: "none",
            padding: "6px 12px",
            fontSize: "14px",
            fontFamily: "Neue Haas Grotesk, Arial, Helvetica, sans-serif",
          }}
        >
          Login
        </Button>

        <Button
          onClick={onSignupClick}
          sx={{
            backgroundColor: "#e6e6e6",
            "&:hover": { backgroundColor: "#d9d9d9" },
            boxShadow: "none",
            color: "black",
            borderRadius: "30px",
            fontWeight: "bold",
            textTransform: "none",
            padding: "6px 12px",
            fontSize: "14px",
            fontFamily: "Neue Haas Grotesk, Arial, Helvetica, sans-serif",
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
