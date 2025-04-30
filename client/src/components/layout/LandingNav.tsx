import { Button, TextField } from "@mui/material";
import pinterestSvg from "../../../public/pinterest.svg";

type Props = {
  onLoginClick: () => void;
  onSignupClick: () => void;
};

const Navbar = ({ onLoginClick, onSignupClick }: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0">
      <div className="flex items-center">
        <img
          src={pinterestSvg}
          alt="Pinterest Logo"
          className="w-6 mx-auto mb-2 mr-2"
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#e60023",
            marginRight: "20px",
          }}
        >
          Pinterest
        </span>
        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            marginRight: "20px",
          }}
        >
          Explore
        </Button>
        <div className="flex items-center bg-[#f5f5f5] px-2 py-1 rounded-lg">
          <TextField
            fullWidth
            placeholder="Search"
            variant="standard"
            slotProps={{ input: { disableUnderline: true } }}
            sx={{ fontSize: 14, paddingLeft: "10px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
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
            padding: "8px 15px",
            fontSize: "15px",
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
            padding: "8px 15px",
            fontSize: "15px",
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
