import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FiArrowUpCircle } from 'react-icons/fi';

const CreatePost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [board, setBoard] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  return (
    <div className="flex flex-col w-full h-full border rounded-lg border-gray-300 p-4 gap-4 bg-white">
      {/* Header */}
      <div className="w-full border-b border-gray-200 pb-3">
        <h1 className="text-2xl font-bold">Create Pin</h1>
      </div>

      {/* Form layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
        {/* Left: Image uploader */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between items-center gap-2  rounded-xl px-4 py-6">
          <div className='w-3/4 h-full flex items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-200'>
            {!imagePreview ? (
              <div className='flex w-full flex-col items-center justify-center h-full'>
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
                <p className="text-xs text-gray-500 text-center">
                  We recommend using high-quality .jpg files less than 20 MB or .mp4 files less than 200 MB.
                </p>
              </div>
            ) : (
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </div>
          <div className='border border-gray-300 w-3/4 my-2'></div>
          <div className='w-3/4 text-center'>
            <button className='bg-gray-200 p-2 rounded-2xl w-full'>Save from Url</button>
          </div>
        </div>

        {/* Right: Form fields */}
        <form className="w-full lg:w-[55%] flex flex-col gap-5">
          <TextField 
            label="Title" 
            placeholder="Add a title" 
            variant="outlined" 
            fullWidth 
            disabled={!imagePreview} 
          />
          <TextField
            label="Description"
            placeholder="Add a detailed description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            disabled={!imagePreview} 
          />
          <TextField 
            label="Link" 
            placeholder="Add a link" 
            variant="outlined" 
            fullWidth
            disabled={!imagePreview} 
          />
          <FormControl fullWidth disabled={!imagePreview}>
            <InputLabel>Board</InputLabel>
            <Select
              value={board}
              label="Board"
              onChange={(e) => setBoard(e.target.value)}
            >
              <MenuItem value="">Choose a board</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Inspiration">Inspiration</MenuItem>
              <MenuItem value="Ideas">Ideas</MenuItem>
            </Select>
          </FormControl>
          <TextField 
            label="Search for a tag" 
            placeholder="e.g. design, UX" 
            fullWidth
            disabled={!imagePreview} 
          />
          <p className="text-xs text-gray-400">Don’t worry, people won’t see your tags</p>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
