import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { FiArrowUpCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { postType } from '../types/postTypes';

const CreatePost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [accordion, setAccordion] = useState(false);

  type CreatePostType = postType & {
    board: string;
    allowComments: boolean;
    showSimilar: boolean;
    altText: string;
  };
  

  const [postData, setPostData] = useState<CreatePostType>({
    title: '',
    desc: '',
    link: '',
    tag: '',
    board: '',
    allowComments: true,
    showSimilar: true,
    altText: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handlePublish = async () => {
    if (!image) {
      alert("Please upload an image before publishing.");
      return;
    }
  
    try {
      const postPayload = {
        ...postData,
        allowComments: postData.allowComments,
        showSimilar: postData.showSimilar,
        image, 
      };
      console.log("Post Payload:", postPayload); 
      // await axios.post("/api/posts", postPayload, { headers: { 'Content-Type': 'multipart/form-data' } });
  
      setImage(null);
      setImagePreview(null);
      setAccordion(false);
      setPostData({
        title: '',
        desc: '',
        link: '',
        tag: '',
        board: '',
        allowComments: true,
        showSimilar: true,
        altText: '',
      });
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Something went wrong while publishing.");
    }
  };
  

  return (
    <div className="flex flex-col w-full h-full border-t border-t-gray-300 rounded-lg p-4 gap-4 bg-white">
      {/* Header */}
      <div className="w-full flex justify-between flex-row border-b border-gray-200 pb-3">
        <h1 className="text-2xl font-bold">Create Pin</h1>
        <button
          className='bg-red-600 text-white p-3 rounded-3xl'
          onClick={handlePublish}
          type="button"
        >
          Publish
        </button>

      </div>

      {/* Form layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
        {/* Left: Image uploader */}
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
                <p className="text-xs text-gray-500 text-center">
                  We recommend using high-quality .jpg files less than 20 MB or .mp4 files less than 200 MB.
                </p>
              </div>
            ) : (
              <img src={imagePreview} alt="Uploaded" className="w-full h-full object-contain rounded-xl" />
            )}
          </div>
          <div className="border border-gray-300 w-3/4 my-2"></div>
          <div className="w-3/4 text-center">
            <button className="bg-gray-200 p-2 rounded-2xl w-full">Save from Url</button>
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
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <TextField
            label="Description"
            placeholder="Add a detailed description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            disabled={!imagePreview}
            value={postData.desc}
            onChange={(e) => setPostData({ ...postData, desc: e.target.value })}
          />
          <TextField
            label="Link"
            placeholder="Add a link"
            variant="outlined"
            fullWidth
            disabled={!imagePreview}
            value={postData.link}
            onChange={(e) => setPostData({ ...postData, link: e.target.value })}
          />
          <FormControl fullWidth disabled={!imagePreview}>
            <InputLabel>Board</InputLabel>
            <Select
              value={postData.board}
              label="Board"
              onChange={(e) => setPostData({ ...postData, board: e.target.value })}
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
            value={postData.tag}
            onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
          />
          <p className="text-xs text-gray-400">Don’t worry, people won’t see your tags</p>

          {/* Toggle Button */}
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => setAccordion(!accordion)}
          >
            <p className="font-semibold text-lg">More options</p>
            {accordion ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </div>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              accordion ? 'max-h-[1000px] opacity-100 overflow-visible mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <FormGroup className="flex flex-col gap-4">
              <FormControlLabel
                control={
                  <Switch
                    checked={postData.allowComments}
                    onChange={(e) => setPostData({ ...postData, allowComments: e.target.checked })}
                  />
                }
                label="Allow people to comment"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={postData.showSimilar}
                    onChange={(e) => setPostData({ ...postData, showSimilar: e.target.checked })}
                  />
                }
                label="Show similar products"
              />
              <p className="text-sm text-gray-600 pl-4 lg:pl-12 pr-2 leading-relaxed">
                People can shop for products similar to what's shown in this Pin using visual search. Shopping
                recommendations aren't available for Idea ads and Pins with tagged products or paid partnership labels.
              </p>

              {/* Alt Text Section */}
              <div className="flex flex-col gap-1 px-1 lg:px-12">
                <p className="text-xs text-gray-500">Alt text</p>
                <TextareaAutosize
                  minRows={3}
                  placeholder="Describe your pin’s visual details"
                  className="border-2 border-gray-300 mt-1 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  value={postData.altText}
                  onChange={(e) => setPostData({ ...postData, altText: e.target.value })}
                />
                <p className="text-xs text-gray-500">
                  This helps people using screen readers understand what your Pin is about.
                </p>
              </div>
            </FormGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
