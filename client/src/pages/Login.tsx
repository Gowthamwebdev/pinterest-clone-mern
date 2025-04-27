import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../hooks/mutations/authMutations';
import { useUserStore } from '../stores/userStore/userStore';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const {
    email,
    setEmail,
    password,
    setPassword
  } = useUserStore();

  const loginMutation = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginMutation.mutateAsync({ email, password });
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleLogin}>
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

      {error && (
        <Typography color="error" textAlign="left">
          {error}
        </Typography>
      )}

      <a href="/password/reset" className="text-black normal-case hover:underline">
        <h1 className="text-sm normal-case text-black hover:underline">Forgot your password?</h1>
      </a>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{
          mt: 2,
          bgcolor: '#fb2c36',
          borderRadius: 100,
        }}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  );
};

export default LoginForm;
