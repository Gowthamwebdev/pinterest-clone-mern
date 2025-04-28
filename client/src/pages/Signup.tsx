import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore/userStore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const SignUpForm: React.FC = () => {
const navigate = useNavigate();
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState('');
const [dob,setDob]=React.useState('');

const { name, email, password, setEmail, setPassword, setName } = useUserStore();

const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
    const data = await userSignupApi({ name, email, password });

    console.log('Signup success:', data);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
    setError('Signup failed. Please try again.');
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
        sx={{ mt: 2 }}
        InputProps={{
          style: {
            height: '40px',
          },
        }}
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
        sx={{ mt: 2 }}
        InputProps={{
          style: {
            height: '40px',
          },
        }}
        />
        <Typography sx={{ textAlign: 'left', mb: 2 }}>
  <h1 className="text-gray-800">Birthdate</h1>
  <TextField
    fullWidth
    margin="dense"
    type="date"
    value={dob}
    onChange={(e) => setDob(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      style: {
        height: '40px',
      },
      endAdornment: (
        <CalendarTodayIcon
          sx={{ color: 'gray', marginLeft: '8px' }}
        />
      ),
    }}
  />
</Typography>
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
        sx={{ mt: 2, bgcolor: '#fb2c36' }}
        >
        {loading ? 'Signing up...' : 'Sign Up'}
    </Button>
    </Box>
);
};

export default SignUpForm;
