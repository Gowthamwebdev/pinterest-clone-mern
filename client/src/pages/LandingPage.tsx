import { useState } from "react";
import AuthModal from "./AuthModal";
import Navbar from "../components/layout/LandingNav";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onLoginClick={() => setOpenModal(true)} />

      <div className="flex-1 flex items-center justify-center text-3xl font-bold text-gray-600">
        Welcome to Our Pinterest ✨
      </div>

      {openModal && <AuthModal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default LandingPage;
