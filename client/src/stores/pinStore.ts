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
  addPins: (newPins: Pin[]) => void;  // ✅ New: Add multiple pins
  clearPins: () => void;              // ✅ New: Clear all pins
  filterPinsByCategory: (category: string) => Pin[]; // ✅ Updated: Return filtered list
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setTags: (tags: string) => void;
  setBoard: (board: string) => void;
  setImgUrl: (url: string) => void;
}

export const usePinStore = create<PinStore>((set) => ({
  pins: [],
  categories: ["Nature", "Tech", "Art", "Food"],
  title: "",
  desc: "",
  tags: "",
  board: "",
  imgUrl: "",

  addPin: (pin) => set((state) => ({ pins: [...state.pins, pin] })),

  addPins: (newPins) => set((state) => ({ pins: [...state.pins, ...newPins] })), // ✅ Efficient Infinite Scrolling

  clearPins: () => set({ pins: [] }), // ✅ Efficient Clearing

  filterPinsByCategory: (category) => {
    const pins = usePinStore.getState().pins;
    return pins.filter((pin) => pin.tags.includes(category)); // ✅ Filtered list without changing state
  },

  setTitle: (title) => set({ title }),
  setDesc: (desc) => set({ desc }),
  setTags: (tags) => set({ tags }),
  setBoard: (board) => set({ board }),
  setImgUrl: (url) => set({ imgUrl: url }),
}));
