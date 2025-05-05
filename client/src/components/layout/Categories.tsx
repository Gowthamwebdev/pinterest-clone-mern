import React from "react";
import { useParams } from "react-router-dom";

type CategoryParams = {
  genre: string;
};

const CategoryPage: React.FC = () => {
  const { genre } = useParams<CategoryParams>();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-4">
        Category: {genre}
      </h1>
      <p className="text-gray-700">
        You can show filtered content here for the "{genre}" category.
      </p>
    </div>
  );
};

export default CategoryPage;
