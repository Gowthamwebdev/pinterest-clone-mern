import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { userState } from '../../types/userTypes';

export const useUserStore = create(
  persist<userState & {
    accessToken: string,
    setAccessToken: (accessToken: string) => void;
  }>(
    (set) => ({
      userId: '',
      name: '',
      email: '',
      password: '',
      profileImg: '',
      accessToken: '',

      setUserId: (userId: string) => set({ userId }),
      setName: (name: string) => set({ name }),
      setEmail: (email: string) => set({ email }),
      setPassword: (password: string) => set({ password }),
      setProfileImg: (profileImg: string) => set({ profileImg }),
      setAccessToken: (accessToken: string) => set({ accessToken }),

      resetUser: () =>
        set({
          userId: '',
          name: '',
          email: '',
          password: '',
          profileImg: '',
          accessToken: '',
        }),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
