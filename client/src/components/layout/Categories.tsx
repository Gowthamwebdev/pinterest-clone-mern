import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { postState } from "../../types/postTypes";

const CategoryPage: React.FC = () => {
  const { genre } = useParams();
  const [images, setImages] = useState<postState[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/${genre}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch category images:", error);
      }
      setLoading(false);
    };

    if (genre) {
      fetchCategoryImages();
    }
  }, [genre]);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-4">{genre} Collection</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <Masonry columns={4} spacing={1}>
          {images.map(({ id, image_url, title }) => (
            <img key={id} src={image_url} alt={title} className="rounded-lg w-full h-auto object-cover" />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default CategoryPage;
