import { useState } from "react";
import { usePinStore } from "../../stores/pinStore";

const CreatePinModal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tags, setTags] = useState("");
  const [board, setBoard] = useState("");
  
  const { addPin } = usePinStore();

  const handleSubmit = () => {
    const newPin = { id: Date.now().toString(), imgUrl, title, desc, tags, board };
    addPin(newPin);
    setTitle("");
    setDesc("");
    setImgUrl("");
    setTags("");
    setBoard("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Pin Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Pin Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Board Name"
          value={board}
          onChange={(e) => setBoard(e.target.value)}
          className="border p-2 w-full mb-2"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Create Pin
      </button>
    </div>
  );
};

export default CreatePinModal;
