import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLoginApi } from "../../api/authApi";
import { loginSchema } from "../../pages/Validations/loginSchema";
import { useAuthStore } from "../../stores/AuthStore";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken, setIsAuthenticated } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email, password },
  });

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await userLoginApi({ email, password });
      console.log(data.token);
      setAccessToken(data.token);
      setIsAuthenticated(true);
      Cookies.set("token", data.token, { expires: 1 });
      navigate("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
  sx={{
    width: "90%",
    maxWidth: "350px",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    textAlign: "left",
    p: 3,
  }}
>
   <Typography sx={{ alignSelf: "start",mb:1 }}>Email</Typography>
  <TextField
  placeholder="Email"
  fullWidth
  margin="normal"
  {...register("email")}
  error={!!errors.email}
  helperText={errors.email?.message}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  sx={{
  "& .MuiOutlinedInput-root": {
    borderRadius: "17px",
    "&.Mui-focused fieldset": { borderColor: "inkblue", borderWidth: "2px" },
  },
}}

/>


  <Typography sx={{ alignSelf: "start" }}>Password</Typography>
  <TextField
    placeholder="Password"
    fullWidth
    margin="normal"
    {...register("password")}
    error={!!errors.password}
    helperText={errors.password?.message}
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    sx={{
    "& .MuiOutlinedInput-root": {
    borderRadius: "17px",
    "&.Mui-focused fieldset": { borderColor: "inkblue", borderWidth: "2px" },
  },
}}
  />

  <Link to="/password/reset" className="text-black normal-case hover:underline" style={{ alignSelf: "start" }}>
    <Typography sx={{ fontSize: "14px", textDecoration: "underline" }}>
      Forgot your password?
    </Typography>
  </Link>

  <Button
    fullWidth
    variant="contained"
    color="primary"
    disabled={loading}
    sx={{ mt: 2, bgcolor: "#fb2c36", borderRadius: 100 }}
    onClick={handleLogin}
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
