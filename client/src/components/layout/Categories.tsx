import React from "react";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { realImages } from "./image";

const CategoryPage: React.FC = () => {
  const { genre } = useParams();

  const filteredImages = realImages.filter((img) => img.genre.toLowerCase() === genre?.toLowerCase());

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-4">{genre} Collection</h1>
      
      <Masonry columns={4} spacing={1}>
        {filteredImages.map(({ url, genre }, index) => (
          <img key={index} src={url} alt={genre} className="rounded-lg w-full h-auto object-cover" />
        ))}
      </Masonry>
    </div>
  );
};

export default CategoryPage;
