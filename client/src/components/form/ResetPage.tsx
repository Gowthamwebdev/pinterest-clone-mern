import React from "react";

const ResetPasswordPage: React.FC = () => {
return (
    <div className="flex flex-col items-center min-h-screen bg-white mt-2">
      {/* Heading */}
    <h1 className="mt-0 text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
        Reset your password
    </h1>
    <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
    <h1 className="text=sm" style={{fontFamily:"Inter or Helvetica Neue"}}>What's your email, name, or username?</h1>
    </p>

      {/* Password Input Fields */}
    <input
        type="password"
        placeholder="New password"
        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none mb-4"
    />
    <input
        type="password"
        placeholder="Confirm new password"
        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
    />

      {/* Reset Password Button */}
    <button className="mt-6 bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition">
        Reset Password
    </button>
    </div>
);
};

export default ResetPasswordPage;
