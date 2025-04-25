// import { Typography } from "@mui/material";
// import React, { useState } from "react";

// const ResetPassword: React.FC=()=>{
//     const[email,setEmail]=useState("");

// const handleSubmit = () => {
//     console.log("Reset link sent to:", email);
//     // Call backend API here
// };

// return (
// <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
//     <div className="bg-white px-17 py-9 rounded-lg shadow-lg max-w-sm w-full">
//         <Typography textAlign="left">
//         <h1 className="text-2xl font-Aries,san-sarif font mb-4 text-centre whitespace-nowrap">Let's find your Pinterest account</h1>
//         <p className="text-gray-600 text-left mb-6">What's your email, name, or username?</p>
//         </Typography>
//         <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />

//         <button
//         className="w-full bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700 transition"
//         onClick={handleSubmit}
//         >
//         Search
//         </button>
//     </div>
//     </div>
// );
// };

// export default ResetPassword;
import { fontFamily } from "@mui/system";
import React, { useState } from "react";

const ResetPassword: React.FC = () => {
const [email, setEmail] = useState("");

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
            type="text"
            placeholder="Search"
            className="w-full px-2 bg-transparent text-gray-700 focus:outline-none"
            style={{ fontFamily: "Inter, sans-serif" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        {/* Search Button (Disabled Until Email Is Typed) */}
        <button
        className={`bg-red-600 text-white text-lg font-semibold px-6 py-2 rounded-full transition ${!email ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"}`}
        disabled={!email}>
        Search
        </button>
    </div>
    </div>
);
};

export default ResetPassword;




