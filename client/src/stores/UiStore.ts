import { create } from 'zustand';

interface appState {
  notification: boolean;
  setting: boolean;

  setNotification: (notification: boolean) => void;
  setSetting: (setting: boolean) => void;
}

export const useUiStore = create<appState>((set) => ({
  notification: false,
  setting: false,

  setNotification: (notification: boolean) => set({ notification }),
  setSetting: (setting: boolean) => set({ setting }),
}));
