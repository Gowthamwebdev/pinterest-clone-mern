import { create } from "zustand";

interface Pin {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  tags: string;
  board: string;
}

interface PinStore {
  pins: Pin[];
  categories: string[];
  title: string;
  desc: string;
  tags: string;
  board: string;
  imgUrl: string;
  addPin: (pin: Pin) => void;
  filterPinsByCategory: (category: string) => void;
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setTags: (tags: string) => void;
  setBoard: (board: string) => void;
  setImgUrl: (url: string) => void;
}

export const usePinStore = create<PinStore>((set) => ({
  pins: [],
  categories: ["Nature", "Tech", "Art", "Food"],  // Example categories
  title: "",
  desc: "",
  tags: "",
  board: "",
  imgUrl: "",
  
  addPin: (pin) => set((state) => ({ pins: [...state.pins, pin] })),
  
  filterPinsByCategory: (category) => set((state) => ({
    pins: state.pins.filter(pin => pin.tags.includes(category))
  })),

  setTitle: (title) => set({ title }),
  setDesc: (desc) => set({ desc }),
  setTags: (tags) => set({ tags }),
  setBoard: (board) => set({ board }),
  setImgUrl: (url) => set({ imgUrl: url }),
}));
