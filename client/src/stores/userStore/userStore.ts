import { create } from 'zustand';
import { userState } from '../../types/userTypes';

export const useUserStore = create<userState>((set) => ({
  userId: '',
  name: '',
  email: '',
  profileImg: '',
  password: '',

  setUserId: (userId: string) => set({ userId }),
  setName: (name: string) => set({ name }),
  setEmail: (email: string) => set({ email }),
  setProfileImg: (profileImg: string) => set({ profileImg }),
  setPassword: (password: string) => set({ password }),

  resetUser: () =>
    set({
      userId: '',
      name: '',
      email: '',
      profileImg: '',
      password: '',
    }),
}));
