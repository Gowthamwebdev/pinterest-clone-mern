import { zodResolver } from "@hookform/resolvers/zod";
import { Close, Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { resetPasswordApi } from "../../api/authApi";
import LandingNav from "../../components/layout/LandingNav";

const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage: React.FC = () => {
  const [resetMode, setResetMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const email = watch("email");

  const handleSearch = async () => {
    setLoading(true);
    try {
      setResetMode(true);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setResetLoading(true);
    try {
      await resetPasswordApi(email, "NewRandomPassword123!");
      alert("Password reset email sent!");
      navigate("/login");
    } catch (error: any) {
      alert(error.message || "Failed to reset password.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <LandingNav />

      <div className="flex flex-col items-center pt-24 px-4">
        <h1 className="text-3xl font-semibold text-black mb-4 mt-0 text-center">
          {resetMode ? "Reset your password" : "Let's find your Pinterest account"}
        </h1>

        <p className="text-gray-600 text-center text-sm mb-5">
          What's your email, name, or username?
        </p>

        <form
          onSubmit={handleSubmit(handleSearch)}
          className="w-full max-w-md"
        >
          <div className="w-full max-w-md flex items-center gap-3">
            <div className="flex flex-grow items-center bg-white border border-gray-300 rounded-full shadow-md px-3 py-3 gap-2 hover:border-gray-400 transition">
              {!resetMode && <Search className="text-gray-500" />}
              <input
                type="email"
                placeholder="Search"
                className="w-full bg-transparent text-gray-700 focus:outline-none"
                {...register("email")}
                disabled={loading}
              />
              {resetMode && (
                <button
                  type="button"
                  onClick={() => {
                    setResetMode(false);
                    setValue("email", "");
                  }}
                  className="text-gray-500"
                >
                  <Close />
                </button>
              )}
            </div>

            <button
              type="submit"
              className={`bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-all ${
                !email || resetMode || loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-700 hover:scale-105 hover:shadow-lg cursor-pointer"
              }`}
              disabled={!email || resetMode || loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          {errors.email && (
            <p className="text-sm text-red-600 mt-1 ml-2">{errors.email.message}</p>
          )}
        </form>

        {resetMode && (
          <button
            className={`w-full max-w-md bg-red-600 text-white font-semibold text-lg px-6 py-2 rounded-full mt-6 hover:bg-red-700 transition ${
              resetLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleResetPassword}
            disabled={resetLoading}
          >
            {resetLoading ? "Sending..." : "Send a password reset email"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
