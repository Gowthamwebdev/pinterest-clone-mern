import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignupApi } from "../../api/authApi";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await userSignupApi({ email, password, dateOfBirth });
      console.log("Signup Successful:", response);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "350px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        textAlign: "left",
        p: 3,
      }}
    >
      <Typography sx={{ alignSelf: "start"}}>Email</Typography>
      <TextField
        placeholder="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "17px",
            "&.Mui-focused fieldset": { borderColor: "inkblue", borderWidth: "2px" },
            },
        }}
        />

      <Typography sx={{ alignSelf: "start"}}>Password</Typography>
      <TextField
        placeholder="Create your password"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "17px",
            "&.Mui-focused fieldset": { borderColor: "inkblue", borderWidth: "2px" },
          },
        }}
        />

      <Typography sx={{ alignSelf: "start" }}>Birthdate</Typography>
      <TextField
        fullWidth
        margin="normal"
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "17px",
              "&.Mui-focused fieldset": { borderColor: "inkblue", borderWidth: "2px" },
          },
        }}
      />

      {error && (
        <Typography color="error" sx={{ alignSelf: "start" }}>
          {error}
        </Typography>
      )}

      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ mt:2,mb:0, bgcolor: "#fb2c36", borderRadius: 100 }}
        onClick={handleSignup}
      >
        {loading ? "Signing up..." : "SignUp"}
      </Button>
    </Box>
  );
};

export default SignUpForm;
