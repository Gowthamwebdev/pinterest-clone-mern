import { Button, TextField } from "@mui/material";
type Props = {
  onLoginClick: () => void;
};
const Navbar = ({ onLoginClick }: Props) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0 z-10">
      <div className="flex items-centre px-2 py-0.5 rounded-lg mr-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174863.png"
          alt="Pinterest Logo"
          style={{ width: "30px", height:"30px"  }}
        />
        <span style={{ color: "#8B0000", fontWeight: "bold", fontSize: "20px",marginRight:"10px" }}>
          Pinterest
        </span>
        <Button
          variant="text"
          sx={{
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
            fontSize:"15px",
          }}
        >
          Explore
        </Button>
        <div className="flex justify-center flex-1">
        <TextField
          placeholder="Search"
          variant="outlined"
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: 14,
              paddingLeft: "15px",
              borderRadius: "500px",
              backgroundColor: "#f2f2f2",
              height: "40px",
            },
          }}
          sx={{
            //width: "full",
            //maxWidth: "500px",
            flexGrow: "90",
            margin: "20 200px",
          }}
        />
      </div>
      </div>
      <div style={{display:"flex", justifyContent: "flex-start", gap:"1rem"}}>
        <Button
          onClick={onLoginClick}
          sx={{
            backgroundColor: '#e60023',
            '&:hover': { backgroundColor: '#ad081b' },
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
