import React, { useState } from 'react';
import { TextField, Button, Typography, Divider } from '@mui/material';
import { FiArrowUpCircle } from 'react-icons/fi';
import { usePinStore } from '../stores/pinStore';

const CreatePost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    imgUrl,
    title,
    desc,
    tags,
    board,
    setImgUrl,
    setTitle,
    setDesc,
    setTags,
    setBoard,
  } = usePinStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handlePublish = () => {
    if (!image) {
      alert('Please upload an image before publishing.');
      return;
    }

    const postPayload = {
      title,
      desc,
      tags,
      board,
      image,
    };

    console.log('Post Payload:', postPayload);

    setTitle('');
    setDesc('');
    setTags('');
    setBoard('');
    setImgUrl('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col w-full h-full border-t border-t-gray-300 rounded-lg p-4 gap-4 bg-white">
      <div className="w-full flex justify-between flex-row border-b border-gray-200 pb-3">
        <Typography variant="h5" fontWeight="bold">
          Create Pin
        </Typography>
        <Button variant="contained" color="error" 
          sx={{
                paddingX: 4, 
                paddingY: 1.5,
                boxShadow: 'none', 
                borderRadius: 6,
                textTransform: 'none',
              }} onClick={handlePublish}>
          Publish
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
        <div className="w-full lg:w-[40%] flex flex-col justify-between items-center gap-2 rounded-xl px-4 py-6">
          <div className="w-3/4 h-full flex items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-200">
            {!imagePreview ? (
              <div className="flex w-full flex-col items-center justify-center h-full">
                <FiArrowUpCircle size={50} className="text-gray-900 mb-4" />
                <label htmlFor="image-upload" className="text-center cursor-pointer text-gray-700">
                  <span className="font-medium">Choose a file or drag and drop it here</span>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                <Typography variant="caption" className="text-gray-500 text-center mt-2">
                  High-quality .jpg under 20MB or .mp4 under 200MB.
                </Typography>
              </div>
            ) : (
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </div>

          <Divider className="w-3/4 my-2" />

          <div className="w-3/4 text-center">
          <Button variant="outlined" fullWidth sx={{ boxShadow: 'none', borderRadius: 2 }}>
            Save from URL
          </Button>

          </div>
        </div>

        <form className="w-full lg:w-[55%] flex flex-col gap-5">
          <TextField
            label="Title"
            placeholder="Add a title"
            variant="outlined"
            fullWidth
            disabled={!imagePreview}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            placeholder="Add a detailed description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            disabled={!imagePreview}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            label="Tags"
            placeholder="e.g. design, UX"
            fullWidth
            disabled={!imagePreview}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <Typography variant="caption" color="textSecondary">
            Don’t worry, people won’t see your tags
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
