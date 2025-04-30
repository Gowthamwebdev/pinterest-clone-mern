import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../api/authApi";
import { loginSchema } from "./Validations/loginSchema";
import { useUserStore } from '../stores/userStore/userStore';
import { useAuthStore } from '../stores/AuthStore';
import Cookies from 'js-cookie';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const { email, setEmail, password, setPassword } = useUserStore();
  const { setAccessToken, setIsAuthenticated } = useAuthStore();
    
  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email, password },
  });

  const handleLogin = async () => {
    setLoading(true);
    console.log('login fn')
    try {
      const data = await userLoginApi({ email, password });
        console.log(data.token)
        setAccessToken(data.token);
        setIsAuthenticated(true);
        Cookies.set('token', data.token, { expires: 1 });
      navigate('/home');
    } catch (error) {
      console.error("Login Error:",error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box>
      <Typography textAlign="left">
        <h1>Email</h1>
        <TextField
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
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
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Typography>

      <Link to="/password/reset" className="text-black normal-case hover:underline">
      <h1 className="text-sm text-black hover:underline flex justify-start">
      Forgot your password?
      </h1>
      </Link>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{
        mt: 2,
        bgcolor: "#fb2c36",
        borderRadius: 100,
  }}
 onClick={()=>handleLogin()}
>
{loading ? "Logging in..." : "Login"}
</Button>
    </Box>
  );
};

export default LoginForm;
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

