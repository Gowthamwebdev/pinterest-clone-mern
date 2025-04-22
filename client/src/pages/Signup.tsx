import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <Box mt={2}>
      <TextField fullWidth margin="normal" label="Email" />
      <TextField fullWidth margin="normal" label="Password" type="password" />
      <TextField fullWidth margin="normal" label="Age" />
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#e60023',
          '&:hover': { backgroundColor: '#ad081b' },
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default SignupForm;
