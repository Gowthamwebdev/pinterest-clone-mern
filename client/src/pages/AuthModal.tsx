import React, { useState } from 'react'
 import './AuthModal.css'
 import LoginForm from './Login'
 import SignupForm from './Signup'
 
 
 type AuthModalProps = {
   onClose: () => void
 }
 
 const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
   const [isLogin, setIsLogin] = useState(true)
 
   return (
     <div className="modal-overlay">
       <div className="auth-modal">
         <button className="close-btn" onClick={onClose}>×</button>
         <img src="https://cdn-icons-png.flaticon.com/512/174/174863.png" alt="Pinterest Logo" className="logo" />
         <h2>Welcome to Pinterest</h2>
         
         {isLogin ? <LoginForm /> : <SignupForm />}
         
         <p>
           {isLogin ? "Don't have an account?" : "Already have an account?"}
           <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
             {isLogin ? "Sign up" : "Login"}
             <div style={{ marginTop: '20px' }}>
               <button className="google-btn">Continue with Google</button>
   <button
     className="red-btn"
     onClick={() => setIsLogin(true)}
     style={{ marginBottom: '10px' }}
   >
     Log in
   </button>
   <button
     className="google-btn"
     onClick={() => setIsLogin(false)}
   >
     Sign up
   </button>
 </div>
 
           </button>
         </p>
       </div>
     </div>
   )
 }
 
 export default AuthModal