import { useState } from "react";
import AuthModal from "./AuthModal";
import Navbar from "../components/layout/LandingNav";
import MasonryGallery from "../components/layout/Masonry";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        onLoginClick={() => {
          setAuthType("login");
          setOpenModal(true);
        }}
        onSignupClick={() => {
          setAuthType("signup");
          setOpenModal(true);
        }}
      />

      <div className="flex-1 overflow-y-auto p-6 bg-[#FFFFFF]">
        <MasonryGallery />
      </div>

      {openModal && (
        <AuthModal
          onClose={() => setOpenModal(false)}
          defaultType={authType}
        />
      )}
    </div>
  );
};

export default LandingPage;
