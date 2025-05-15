import { useRef } from "react";
import { usePinStore } from "../../stores/pinStore";
import { TextField, Button, Box } from "@mui/material";
import { Description } from "@mui/icons-material";

const CreatePinModal = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const boardRef = useRef<HTMLInputElement>(null);


  const { addPin } = usePinStore();

  const handleSubmit = () => {
  if (!titleRef.current || !descRef.current || !imgUrlRef.current || !tagsRef.current || !boardRef.current) {
    return;
  }

  const newPin = {
    id: Date.now().toString(),
    imgUrl: imgUrlRef.current.value,
    title: titleRef.current.value,
    desc: descRef.current.value,
    tags: tagsRef.current.value,
    board: boardRef.current.value,
  };

  addPin(newPin);

  titleRef.current.value = "";
  descRef.current.value = "";
  imgUrlRef.current.value = "";
  tagsRef.current.value = "";
  boardRef.current.value = "";
};


  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Pin Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Pin Description"
          variant="outlined"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          fullWidth
        />
        <TextField
          label="Tags"
          variant="outlined"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
        />
        <TextField
          label="Board Name"
          variant="outlined"
          value={board}
          onChange={(e) => setBoard(e.target.value)}
          fullWidth
        />
      </Box>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Create Pin
      </Button>
    </Box>
  );
};

export default CreatePinModal;
