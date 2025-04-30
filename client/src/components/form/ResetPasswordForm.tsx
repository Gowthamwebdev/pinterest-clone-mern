import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!email.includes("@")) return;
    // Optional: verify if the email exists
    try {
      const response = await axios.post("/api/auth/verify-email", { email });
      if (response.data.exists) {
        setResetMode(true);
      } else {
        alert("Account not found");
      }
    } catch (error) {
      console.error("Email verification failed:", error);
      alert("Something went wrong.");
    }
  };

  const handleReset = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("/api/auth/reset-password", {
        email,
        password: newPassword,
      });
      alert("Password reset successful!");
      navigate("/login");
    } catch (error) {
      console.error("Reset failed:", error);
      alert("Failed to reset password");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-20 px-4">
      {!resetMode ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">Let's find your Pinterest account</h1>
          <p className="text-gray-600 mb-5 text-center text-lg">What's your email, name, or username?</p>

          <div className="w-full max-w-md">
            <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-3 py-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 bg-transparent text-gray-700 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition ${
                  !email.includes("@") ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                }`}
                disabled={!email.includes("@")}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Reset your password</h1>
          <input
            type="password"
            placeholder="New password"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="w-full bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition"
            onClick={handleReset}
          >
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordForm;
