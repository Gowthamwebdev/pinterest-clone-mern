import { create } from 'zustand';
import { AuthState } from '../types/AuthTypes';
import Cookies from 'js-cookie';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  accessToken: '',

  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setAccessToken: (accessToken: string) => set({ accessToken }),

  logout: () => {
    Cookies.remove('token');
    set({
      isAuthenticated: false,
      accessToken: '',
    });
  },

  resetAuth: () =>
    set({
      isAuthenticated: false,
      accessToken: '',
    }),
}));
