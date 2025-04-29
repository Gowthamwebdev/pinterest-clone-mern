import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../hooks/mutations/authMutations";
import { useUserStore } from "../stores/userStore/userStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./Validations/signupSchema";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const { email, setEmail, password, setPassword, name, setName, dateOfBirth, setDateOfBirth } = useUserStore();
  const signupMutation = useSignupMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: { email, password, dateOfBirth },
  });

  const handleSignup = async (data: any): Promise<boolean> => {
    setLoading(true);
    try {
      const userData={
        name: data.name,
        email: data.email,
        password: data.password,
        dateOfBirth: data.dateOfBirth,
        userId: "",
        profileImg: "",
      };
      
      await signupMutation(userData);
      useUserStore.setState({userId:userData});
      console.log("Stored user Data in authStore");
      return true;
    
    } catch (err: any) {
      console.error("Signup error:", err.message || "Signup failed");
      return false;
    
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleSignup)} sx={{ maxWidth: "400px", margin: "0 auto" }}>
      <Typography textAlign="left" sx={{ mb: 1, fontSize: "14px" }}>
        Email
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Enter your email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 1 }}
      />

      <Typography textAlign="left" sx={{ mb: 1, fontSize: "14px" }}>
        Password
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Enter your password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 1 }}
      />

      <Typography textAlign="left" sx={{ mb: 1, fontSize: "14px" }}>
        Birthdate
      </Typography>
      <TextField
        fullWidth
        margin="dense"
        placeholder="Select your birthdate"
        {...register("dateOfBirth")}
        error={!!errors.dateOfBirth}
        helperText={errors.dateOfBirth?.message}
        type="date"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 1 }}
      />

<Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
        sx={{
          mt: 1,
          bgcolor: "#e60023",
          borderRadius: "30px",
          padding: "10px",
          fontWeight: "bold",
          textTransform: "none",
        }}
        onClick={handleSubmit(async (data) => {
          const isSignedUp = await handleSignup(data);
          if (isSignedUp) {
            navigate("/login");
          }
        })}
      >
        {loading ? "Signing up..." : "SignUp"}
      </Button>
    </Box>
  );
};

export default SignUpForm;
