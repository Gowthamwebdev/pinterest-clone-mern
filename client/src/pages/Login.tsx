import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
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
      <a href="/reset-password" className="text-blue-600 hover:underline">
        <h1>Forgot your password?</h1>
        </a>
      </Typography>
    </Box>
  );
};

export default LoginForm;
