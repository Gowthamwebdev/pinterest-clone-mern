import { create } from "zustand";
import axios from "axios";

type SearchState = {
  query: string;
  results: any[];
  loading: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  searchImages: () => Promise<void>;
};

const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  results: [],
  loading: false,
  error: null,

  setQuery: (query: string) => {
    set({ query, error: null });
  },

  searchImages: async () => {
    const query = get().query.trim();
    if (query.length < 2) return; // Prevent empty searches

    set({ loading: true, error: null });

    try {
      const response = await axios.get(`https://api.example.com/search?q=${query}`);
      set({ results: response.data, loading: false });
    } catch (error) {
      set({ error: error.message || "Search failed", loading: false });
    }
  }
}));

export default useSearchStore;
