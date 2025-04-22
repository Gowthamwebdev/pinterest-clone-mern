import CloseIcon from '@mui/icons-material/Close';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, Dialog, DialogContent, Divider, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginForm from './Login';
import SignupForm from './Signup';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ p: 4, textAlign: 'center' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <PinterestIcon sx={{ color: '#e60023', fontSize: 48, mb: 2 }} />

        <Typography variant="h5" fontWeight="bold">
          Welcome to Pinterest
        </Typography>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <button className="fb-btn">Continue with Facebook</button>
          <button className="google-btn">Continue with Google</button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: '#e60023', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </span>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
