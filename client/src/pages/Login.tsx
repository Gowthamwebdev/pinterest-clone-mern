import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import ResetPasswordForm from "../components/page/resetPasswordForm"

const LoginForm: React.FC = () => {
  function setShowReset(arg0: boolean): void {
    const [showResetModal, setShowResetModal] = useState(false); 
    throw new Error('Function not implemented.');
  }

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
      <a href="/reset-password" className="text-black-600 hover:underline">
      <Button onClick={() => setShowReset(true)} color="secondary"></Button>
        <h1 className="text-xs font-normal" >Forgot your password?</h1>
        </a>
      </Typography>
    </Box>
  );
};

export default LoginForm;
