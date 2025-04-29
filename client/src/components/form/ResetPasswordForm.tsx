import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [resetMode, setResetMode] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-20">
      <div className="text-center">
        <h1
          className="text-2xl font-bold text-gray-900 mt-2"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Let's find your Pinterest account
        </h1>
        <p
          className="text-gray-600 mt-3 mb-1 text-lg"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <h1
            className="text-sm"
            style={{ fontFamily: "Inter, Helvetica Neue, sans-serif" }}
          >
            What's your email, name, or username?
          </h1>
        </p>
      </div>

      <div className="mt-4 w-full max-w-md flex items-center space-x-3">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-3 py-3 w-full">
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 015.29 13.71l3.71 3.71a1 1 0 01-1.42 1.42l-3.71-3.71A8 8 1 110 10zM2 10a8 8 0 1016 0 8 8 0 00-16 0z" />
          </svg>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 bg-transparent text-gray-700 focus:outline-none"
            style={{ fontFamily: "Inter, sans-serif" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className={`bg-red-600 text-white text-lg font-semibold px-6 py-2 rounded-full transition ${
              !email.includes("@")
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-700"
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
          <h1
            className="mt-0 text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Reset your password
          </h1>
          <p
            className="text-lg text-gray-600 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <h1
              className="text-sm"
              style={{ fontFamily: "Inter, Helvetica Neue, sans-serif" }}
            >
              What's your email, name, or username?
            </h1>
          </p>

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
export default ResetPassword;
