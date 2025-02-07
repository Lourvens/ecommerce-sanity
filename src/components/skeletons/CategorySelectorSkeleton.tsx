import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="container mx-auto mt-3 mb-16 animate-pulse p-4">
      <div className="h-6 w-1/3 bg-gray-300 rounded mb-4"></div>
      <div className="flex flex-wrap gap-2 mb-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-10 w-24 bg-gray-300 rounded-full"></div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-48 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
