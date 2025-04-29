import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../hooks/mutations/authMutations";
import { loginSchema } from "./Validations/loginSchema";

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

  const handleLogin = async (e:any) => {
    setLoading(true);
    console.log("head");
    

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
  
  disabled={loading}
  sx={{
    mt: 2,
    bgcolor: "#fb2c36",
    borderRadius: 100,
  }}
  onClick={() => {
    // const isLoggedIn = await handleLogin(data);
console.log('in button');

console.log('email',email);
console.log('pass',password);
if(isLoggedIn){
  navigate('/home');
}
  }}
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

