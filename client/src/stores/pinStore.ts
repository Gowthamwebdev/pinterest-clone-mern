import { create } from 'zustand';
import { pinState } from '../types/pinTypes';

export const usePinStore = create<pinState>((set) => ({
  imgUrl: '',
  title: '',
  desc: '',
  tags: '',
  board: '',

  setImgUrl: (imgUrl) => set({ imgUrl }),
  setTitle: (title) => set({ title }),
  setDesc: (desc) => set({ desc }),
  setTags: (tags) => set({ tags }),
  setBoard: (board) => set({board}),
}));