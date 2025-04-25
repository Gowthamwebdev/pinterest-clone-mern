import { create } from 'zustand';

type AuthModalState = {
  isOpen: boolean;
  isLogin: boolean;
  openModal: (isLogin?: boolean) => void;
  closeModal: () => void;
  toggleForm: () => void;
};

export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  isLogin: true,
  openModal: (isLogin = true) => set({ isOpen: true, isLogin }),
  closeModal: () => set({ isOpen: false }),
  toggleForm: () => set((state) => ({ isLogin: !state.isLogin })),
}));
