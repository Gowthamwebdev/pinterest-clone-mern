import { motion } from "framer-motion";
import React, { useState } from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import { Google } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import pinterestSvg from '../../public/pinterest.svg';
import { useNavigate } from "react-router-dom";

type AuthModalProps = {
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();


  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-[999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white p-8 w-[360px] rounded-2xl shadow-lg text-center relative"
      >
        <button onClick={onClose}
        className="absolute top-3 right-4 text-gray-600 text-xs hover:text-gray-800 focus:outline-none font-bold">
        <CloseIcon />
        </button>
        <img
          src={pinterestSvg}
          alt="Pinterest Logo"
          className="w-12 mx-auto mb-5"
        />
        <h4 className="text-xl font-bold mb-6 text-gray-800">
          Welcome to Pinterest
        </h4>
        
        {isLogin ? <LoginForm /> : <SignupForm />}

  
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

      
        <button className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-200">
          <Google className="text-red-500 text-lg" /> Continue with Google
        </button>

        
        <p className="mt-4 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
          onClickCapture={() => {
            setIsLogin(false);
            const className="text-blue-500 font-bold hover:underline focus:outline-none"
          }}
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
