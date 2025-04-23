import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <Box>
      <TextField fullWidth margin="normal" label="Email" />
      <TextField fullWidth margin="normal" label="Password" type="password" />
      <Typography textAlign="right">
        Forgot your password?
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#e60023',
          '&:hover': { backgroundColor: '#ad081b' },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
