import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../hooks/mutations/authMutations";
import { useUserStore } from "../stores/userStore/userStore";
import { loginSchema } from "./Validations/loginSchema";
import { any } from "zod";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const loginMutation = useLoginMutation();
  const[email,setEmail]= useState("");
  const[password, setPassword]=useState("");


  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email, password },
  });

  const handleLogin = async (email: any,password: any) => {
    setLoading(true);

  try {
    await loginMutation.mutateAsync({
      email,
      password,
      userId: "",
      name: "",
      profileImg: ""
    });
    navigate('/home');
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Invalid email or password');
  } finally {
    setLoading(false);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleLogin)}>
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
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Typography>

      <Link to="password/-reset" className="text-black normal-case hover:underline">
        <h1 className="flex-left text-sm normal-case text-black hover:underline">
          Forgot your password?
        </h1>
      </Link>
      <Button
  fullWidth
  variant="contained"
  color="primary"
  type="submit"
  disabled={loading}
  sx={{
    mt: 2,
    bgcolor: "#fb2c36",
    borderRadius: 100,
  }}
  onClick={handleSubmit(async (data) => {
    const isLoggedIn = await handleLogin(data);
    if (isLoggedIn) {
      navigate("/home");
    }
  })}
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

