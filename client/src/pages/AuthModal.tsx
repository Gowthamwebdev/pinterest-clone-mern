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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="bg-white p-8 w-[400px] rounded-2xl text-center relative font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl bg-transparent border-none cursor-pointer"
        >
        </button>

        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174863.png"
          alt="Pinterest Logo"
          className="w-10 mx-auto mb-3"
        />

        <h2 className="text-xl font-bold mb-4">Welcome to Pinterest</h2>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm font-bold text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          className="w-full py-2 px-4 border border-gray-300 rounded-full font-bold flex items-center justify-center gap-2 mb-4"
        >
          <Google />
          Continue with Google
        </button>

        <p className="text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 font-bold text-red-600 bg-transparent border-none cursor-pointer"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;