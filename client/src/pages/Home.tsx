import { usePinStore } from "../stores/pinStore";
import { useState } from "react";
import CreatePinModal from "../components/layout/createPinModal";
import Categories from "../components/layout/Categories";

const HomePage = () => {
  const { pins } = usePinStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Categories />
      <div className="mt-6 grid grid-cols-3 gap-6">
        {pins.map((pin) => (
          <div key={pin.id} className="border p-4 rounded-lg">
            <img src={pin.imgUrl} alt={pin.title} className="w-full h-64 object-cover" />
            <h3 className="mt-2 text-lg">{pin.title}</h3>
            <p className="text-gray-600">{pin.desc}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg"
      >
        + Pin
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full">
            <CreatePinModal />
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-sm text-gray-600 hover:text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
