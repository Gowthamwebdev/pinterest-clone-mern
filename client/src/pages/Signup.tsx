import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore/userStore';
import Cookies from 'js-cookie';
import { userSignupApi } from '../api/authApi';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
    setUserId,
    setProfileImg,
    setAccessToken,
  } = useUserStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await userSignupApi({
        name, email, password,
        userId: '',
        profileImg: ''
      }); 
      const { accessToken, user } = data;

      setUserId(user.id.toString());
      setName(user.name);
      setEmail(user.email);
      setProfileImg(user.profile_img !== 'null' ? user.profile_img : '');
      setAccessToken(accessToken);
      Cookies.set('token', accessToken, { expires: 0.1 });

      console.log('Login success:', data);
      setTimeout(() =>{
        navigate('/');
      },2000)
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleLogin}>
      <Typography textAlign="left">
        <h1>Name</h1>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Typography>

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
        {loading ? 'Signing in...' : 'SignUp'}
      </Button>
    </Box>
  );
};

export default SignUpForm;
