import { Google } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import React, { useState } from "react";
import pinterestSvg from "../../../public/pinterest.svg";
import LoginForm from "../auth/Login";
import SignupForm from "./Signup";

type AuthModalProps = {
  onClose: () => void;
  defaultType: "login" | "signup";
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose, defaultType }) => {
  const [isLogin, setIsLogin] = useState(defaultType === "login");

  return (
    <div className="fixed inset-0 bg-light-gray bg-opacity-20 backdrop-blur-md bg-white/30 flex items-center justify-center z-[999]">
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white p-6 w-[95%] max-w-[510px] h-[650px] rounded-[40px] shadow-lg text-center relative"
      >


        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-xl focus:outline-none hover:text-gray-800"
        >
          <CloseIcon />
        </button>

        <img
          src={pinterestSvg}
          alt="Pinterest Logo"
          className="w-10 mx-auto mt-3 mb-5"
        />

        <p className="text-4xl mb-2 font-bold text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Welcome to Pinterest
        </p>


        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="flex items-center my-1 mt-1 w-[66%] mx-auto">
          <div className="w-1/2 mt-1 border-t border-gray-300"></div>
            <span className="mx-2 text-xs font-medium text-gray-500">OR</span>
          <div className="w-1/2 border-t border-gray-300"></div>
        </div>


        <button className="w-[67%] py-2 px-3 border border-gray-300 rounded-full flex items-center justify-center gap-2 text-gray-700 text-sm font-medium hover:bg-gray-100 mx-auto">
          <Google className="text-base" />
          Continue with Google
        </button>


        <div className="text-sm mt-1 text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-red-600 font-bold hover:underline focus:outline-none text-xs"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
