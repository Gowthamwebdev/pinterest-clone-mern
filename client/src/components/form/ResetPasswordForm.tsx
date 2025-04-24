import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 

    const handleReset = async () => {
    try {
        const response = await axios.post("/api/reset-password", { email });
        setMessage(response.data.message);
    } catch (error) {
        setMessage("Something went wrong. Please try again.");
    }
};

    return (
    <Box display="flex" flexDirection="column" gap={2} width="100%" maxWidth={400} mx="auto">
        <Typography variant="h5" fontWeight="bold">Reset Password</Typography>
        <TextField
        label="Email Address"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleReset}>
        Send Reset Link
      </Button>
      {message && <Typography color="error">{message}</Typography>}
    </Box>
  );
};

export default ResetPassword;
