import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Email validation regex
  };
  
  return (
    <Box>
      <Typography textAlign= "left">
      <h1 >Email</h1>
      <TextField fullWidth margin="normal" label="Email" />
      </Typography>
      <Typography textAlign= "left">
      <h1>Password</h1>
      <TextField fullWidth margin="normal" label="Password" type="password" />
      </Typography>
      <Typography textAlign="left">
        <Button
        onClick={() => navigate("/password/reset")}
        >
         <a href="/password/reset" className="text-black normal-case hover:underline">
         <h1 className='text-sm normal-case text-black hover:underline '>Forgot your password?</h1>
         </a>
        </Button>
        </Typography>

        </Box>
);
};

export default LoginForm;


