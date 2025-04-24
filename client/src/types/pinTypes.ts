export type pinState = {
  imgUrl: string;
  title: string;
  desc: string;
  tags: string;
  board: string;

  setImgUrl: (imgUrl: string) => void;
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setTags: (tags: string) => void;
  setBoard: (board: string) => void;
};