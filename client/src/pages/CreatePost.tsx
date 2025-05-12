"use client";

import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Divider } from "@mui/material";
import { usePinStore } from "../stores/pinStore";

const CreatePost: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const [board, setBoard] = useState("");
  const [pins, setPins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { addPin } = usePinStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    setImageFile(file);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };
  const handlePublish = () => {
    if (!imageFile) {
      alert("Please upload an image before publishing.");
      return;
    }

    const newPin = {
      id: Date.now().toString(),
      imgUrl: imagePreview || "",
      title,
      desc,
      tags,
      board,
    };

    console.log("Post Payload:", newPin);
    addPin(newPin);
    setTitle("");
    setDesc("");
    setTags("");
    setBoard("");
    setImageFile(null);
    setImagePreview(null);
  };
  const fetchPins = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/pins?page=${page}`);
      const data = await response.json();
      setPins((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && !loading) {
        fetchPins();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="flex flex-col w-full max-w-md border border-gray-300 rounded-lg p-4 bg-white">
      {/* Header */}
      <div className="w-full flex justify-between items-center border-b border-gray-200 pb-3">
        <Typography variant="h6" fontWeight="bold">
          Create Pin
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handlePublish}
          sx={{
            px: 4,
            py: 1,
            boxShadow: "none",
            borderRadius: 6,
            textTransform: "none",
            "&:hover": { boxShadow: "none" },
          }}
        >
          Publish
        </Button>
      </div>

      <Divider className="w-full my-4" />

      <input type="file" accept="image/*" onChange={handleImageChange} className="w-full mb-2" />
      {imagePreview && <img src={imagePreview} alt="Preview" className="w-full rounded-lg mb-2" />}

      <TextField
        label="Title"
        placeholder="Pin Title"
        fullWidth
        margin="dense"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Description"
        placeholder="Pin Description"
        fullWidth
        margin="dense"
        size="small"
        multiline
        rows={3}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <TextField
        label="Tags"
        placeholder="Tags (comma-separated)"
        fullWidth
        margin="dense"
        size="small"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <TextField
        label="Board"
        placeholder="Board Name"
        fullWidth
        margin="dense"
        size="small"
        value={board}
        onChange={(e) => setBoard(e.target.value)}
      />
      <Divider className="w-full my-4" />
      <Typography fontWeight="bold" mb={2}>
        Explore More Pins
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pins.map((pin) => (
          <img key={pin.id} src={pin.imgUrl} alt={pin.title} className="w-full rounded-md" />
        ))}
        {loading && <p>Loading more pins...</p>}
      </div>
    </div>
  );
};

export default CreatePost;
