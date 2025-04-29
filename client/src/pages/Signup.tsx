import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../hooks/mutations/authMutations';
import { useUserStore } from '../stores/userStore/userStore';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const { email, password, name, dateOfBirth, setEmail, setPassword, setName, setDateOfBirth } = useUserStore();

  const { mutateAsync: signupMutation } = useSignupMutation();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signupMutation({ name, email, password, dateOfBirth, userId: '', profileImg: '' });
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSignup} sx={{ maxWidth: '400px', margin: '0 auto' }}>
      <Typography textAlign="left" sx={{ mb: 1, fontSize: '14px' }}>
        Email
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 1 }}
      />

      <Typography textAlign="left" sx={{ mb: 1, fontSize: '14px' }}>
        Password
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 1 }}
      />

      <Typography textAlign="left" sx={{ mb: 1, fontSize: '14px' }}>
        Birthdate
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Select your birthdate"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        sx={{ mb: 1 }}
      />

      {error && (
        <Typography color="error" textAlign="left" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}

      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{
          mt: 2,
          bgcolor: '#e60023',
          borderRadius: '30px',
          padding: '10px',
          fontWeight: 'bold',
          textTransform: 'none',
        }}
      >
        {loading ? 'Signing up...' : 'SignUp'}
      </Button>
    </Box>
  );
};

export default SignUpForm;
