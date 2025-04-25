import { Button, TextField } from "@mui/material";

type Props = {
  onLoginClick: () => void;
};

const Navbar = ({ onLoginClick }: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0 z-10">
      <div className="flex items-center bg-[#f5f5f5] px-2 py-0.5 rounded-lg mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: 20, height: 20, color: "#757575" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z"
          />
        </svg>
        <TextField
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { ml: 1, fontSize: 14 },
          }}
          sx={{ flex: 1 }}
        />
      </div>

      <div className="flex gap-4">
        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          Explore
        </Button>

        <Button
          variant="outlined"
          onClick={onLoginClick}
          sx={{
            backgroundColor: '#e60023',
            '&:hover': { backgroundColor: '#ad081b' },
            boxShadow: 'none',
            color:'white',
            border:'none',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
