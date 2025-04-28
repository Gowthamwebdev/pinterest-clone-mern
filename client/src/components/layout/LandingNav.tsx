import { Button, TextField } from "@mui/material";

type Props = {
  onLoginClick: () => void;
};

const Navbar = ({ onLoginClick }: Props) => {
  return (
   
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0 z-10">
      <div className="flex items-centre bg-[#f5f5f5] px-2 py-0.5 rounded-lg mr-3">
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TextField
          placeholder="Search"
          variant="standard"
          InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: 14,
            textAlign: "left", // Ensures text alignment
            paddingLeft: "10px", // Adds spacing inside the input

          },
        }}
        sx={{
          width: "50%", // Sets the width for central alignment
          maxWidth: "400px", // Optional: limit the width for responsiveness
        }}
      />
      </div>
      </div>
      <div style={{display:"flex", justifyContent: "flex-start", gap:"1rem"}}>
        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
            textAlign:"left",
          }}
          >
          Explore
        </Button>

        <Button
          onClick={onLoginClick}
          sx={{
            backgroundColor: '#e60023',
            '&:hover': { backgroundColor: '#ad081b' },
            boxShadow: 'none',
            color: 'black',
            borderRadius: '30px',
            borderRadius:200,
            color:'white',
            py:1,
            border:'none',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: '8px 15px',
            fontSize: '15px',
            fontFamily:  'Neue Haas Grotesk, Arial, Helvetica, sans-serif',
          }}
        >
          Login
        </Button>
        <Button
          onClick={onLoginClick}
          sx={{
            backgroundColor: '#e6e6e6',
            '&:hover': { backgroundColor: '#d9d9d9' },
            boxShadow: 'none',
            color: 'black',
            borderRadius: '30px',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: '8px 15px',
            fontSize: '15px',
            fontFamily:  'Neue Haas Grotesk, Arial, Helvetica, sans-serif',
          }}
        >
          Sign up
      </Button>
      </div>
      </div>
  );
};

export default Navbar;
