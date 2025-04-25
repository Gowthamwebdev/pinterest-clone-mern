import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
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
        onClick={() => navigate("/reset-password")}
        >
         <a href="/ResetPasswordForm" className="text-black-300 hover:underline">
         <h1 className='text=black-200 hover:underline'>Forgot your password?</h1>
         </a>
        </Button>
        </Typography>
        </Box>
);
};

export default LoginForm;


