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
    <Box component="form" onSubmit={handleSignup}>
      <Typography textAlign="left">
        <h1>Email</h1>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Typography>

      <Typography textAlign="left">
        <h1>Password</h1>
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Typography>

      <Typography textAlign="left">
        <h1>Birthdate</h1>
        <TextField
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </Typography>

      {error && (
        <Typography color="error" textAlign="left">
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
          bgcolor: '#fb2c36',
          borderRadius: 300,
        }}
      >
        {loading ? 'Signing up...' : 'SignUp'}
      </Button>
    </Box>
  );
};

export default SignUpForm;
