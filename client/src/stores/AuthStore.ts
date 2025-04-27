import { create } from 'zustand';
import { AuthState } from '../types/AuthTypes';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  accessToken: '',

  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setAccessToken: (accessToken: string) => set({ accessToken }),

  resetAuth: () =>
    set({
      isAuthenticated: false,
      accessToken: '',
    }),
}));
