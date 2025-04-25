import { Google } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import LoginForm from './Login';
import SignupForm from './Signup';

type AuthModalProps = {
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
<div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center">
<div className="bg-white p-6 rounded-lg shadow-lg">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-[999]"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white p-8 w-[360px] rounded-2xl shadow-lg text-center relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl focus:outline-none hover:text-gray-800"
        >
          ×
        </button>

        {/* Pinterest Logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174863.png"
          alt="Pinterest Logo"
          className="w-12 mx-auto mb-5"
        />

        {/* Heading */}
        <h4 className="text-xl font-bold mb-6 text-gray-800">
          Login in to see more
        </h4>

        {/* Form Section */}
        {isLogin ? <LoginForm /> : <SignupForm />}

        {isLogin &&(
            <button className="flex flex-col gap-2 max-w-full mx-auto bg-red-500 text-white px-29 py-1 rounded-full text-lg font-semibold hover:bg-red-600 transition"
            onClick={()=>setIsLogin(true)}>
            Login
          </button>
        )}

        {isLogin && (
  <div className="flex items-center my-3">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="mx-3 text-sm font-medium text-gray-500">OR</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>
)}
{isLogin && (
  <button className="w-full py-2 px-4 border border-gray-300 rounded-full flex items-center justify-center gap-3 text-gray-700 font-semibold hover:bg-gray-100">
    <Google className="text-lg" />
    Continue with Google
  </button>
)}
      {!isLogin &&(
          <button className="mt-3 flex flex-col gap-2 max-w-full mx-auto bg-red-500 text-white px-20 py-1 rounded-full text-lg font-semibold hover:bg-red-600 transition"
          onClick={()=>setIsLogin(true)}>
          Create account
          </button>
      )}

{/* OR Divider - Positioned between buttons */}
{!isLogin && (
  <div className="flex items-center my-3">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="mx-3 text-sm font-medium text-gray-500">OR</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>
)}

{/* Log in to Existing Account Button (Signup Page) */}
{!isLogin && (
  <button
    className="w-full py-3 px-6 border border-gray-300 rounded-full flex items-center justify-center gap-3 text-gray-700 font-semibold hover:bg-gray-100"
    onClick={() => setIsLogin(true)}
  >
    Log in to existing account
  </button>
)}
        {/* Footer Section */}
        <p className="text-sm mt-6 text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-red-600 font-bold hover:underline focus:outline-none"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </motion.div>
    </motion.div>
    </div>
</div>


  );
};

export default AuthModal;


