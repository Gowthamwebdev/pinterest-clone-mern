import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore/userStore';
import { userLoginApi } from '../api/authApi';
import Cookies from 'js-cookie'
import { useAuthStore } from '../stores/authStore';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const { email, setEmail, password, setPassword } = useUserStore();
  const { setAccessToken, setIsAuthenticated } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await userLoginApi({ email, password });
        console.log(data.token)
        setAccessToken(data.token);
        setIsAuthenticated(true);
        Cookies.set('token', data.token, { expires: 1 });
      navigate('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password');
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
          required
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
          required
        />
      </Typography>

      {error && (
        <Typography color="error" textAlign="left">
          {error}
        </Typography>
      )}

      <a href="/password/reset" className="text-black normal-case hover:underline">
        <h1 className=" flex-left text-sm normal-case text-black hover:underlinet">Forgot your password?</h1>
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