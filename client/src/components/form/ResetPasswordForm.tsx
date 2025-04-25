import { fontFamily } from "@mui/system";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
const [email, setEmail] = useState("");
const navigate= useNavigate();
return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-20">
    <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
        Let's find your Pinterest account
        </h1>
        <p className="text-gray-600 mt-3 mb-1 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
        <h1 className="text-sm " style={{fontFamily:"Inter or Helvetica Neue"}} >What's your email, name, or username?</h1>
        </p>
    </div>

      {/* Search Bar & Button (With Space) */}
    <div className="mt-4 w-full max-w-md flex items-center space-x-3">
        {/* Oval-Shaped Search Bar */}
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-3 py-3 w-full">
          {/* Default Search Icon */}
        <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 015.29 13.71l3.71 3.71a1 1 0 01-1.42 1.42l-3.71-3.71A8 8 1 110 10zM2 10a8 8 0 1016 0 8 8 0 00-16 0z" />
        </svg>

          {/* Input Field */}
        <input
        type="email" 
        placeholder="Enter your email"
        className="w-full px-2 bg-transparent text-gray-700 focus:outline-none"
        style={{ fontFamily: "Inter, sans-serif" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
/>


        {/* Search Button (Disabled Until Email Is Typed) */}
        <button
        className={`bg-red-600 text-white text-lg font-semibold px-6 py-2 rounded-full transition ${
            !email.includes("@") ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"}`}
        disabled={!email.includes("@")}
        onClick={() => email.includes("@") && navigate("/password/-reset")}
        >
        Search
        </button>

    </div>
    </div>
    </div>
);
};

export default ResetPassword;





