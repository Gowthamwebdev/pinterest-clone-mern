import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Let's find your Pinterest account</h1>
        <p className="text-gray-600 mt-3 mb-1 text-lg">What's your email, name, or username?</p>
      </div>

      <div className="mt-4 w-full max-w-md flex items-center space-x-3">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-3 py-3 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 bg-transparent text-gray-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className={`bg-red-600 text-white text-lg font-semibold px-6 py-2 rounded-full transition ${
              !email.includes("@") ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            }`}
            disabled={!email.includes("@")}
            onClick={() => setResetMode(true)}
          >
            Search
          </button>
        </div>
      </div>

      {resetMode && (
        <div className="flex flex-col items-center mt-10 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset your password</h1>
          <input
            type="password"
            placeholder="New password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none mb-4"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />

          <button className="mt-6 bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition">
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordForm;