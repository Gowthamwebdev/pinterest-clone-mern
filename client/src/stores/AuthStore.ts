import { create } from 'zustand';
import Cookies from 'js-cookie';
import { authState } from '../types/AuthTypes';

// Define the authentication store using Zustand
export const useAuthStore = create<authState>((set) => ({
  isAuthenticated: false,
  accessToken: '',

  // Set authentication state
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setAccessToken: (accessToken: string) => set({ accessToken }),

  // Logout function
  logout: () => {
    Cookies.remove('token');  // Clear cookie
    set({
      isAuthenticated: false,
      accessToken: '',
    });
  },

  // Reset authentication state (for logout)
  resetAuth: () =>
    set({
      isAuthenticated: false,
      accessToken: '',
    }),
}));
