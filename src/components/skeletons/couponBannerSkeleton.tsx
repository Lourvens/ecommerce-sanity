import React from "react";

const CouponBannerSkeleton = () => {
  return (
    <div className="container  bg-gradient-to-r from-slate-500 to-neutral-900 text-white p-6 md:p-8 rounded-lg shadow-lg mx-auto mt-3 mb-16 animate-pulse">
      <div className="h-8 w-3/4 md:w-1/2 bg-gray-600 rounded mb-4"></div>
      <div className="h-6 w-full md:w-3/4 bg-gray-500 rounded mb-4"></div>
      <div className="h-5 w-2/3 bg-gray-500 rounded mb-4"></div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="h-8 w-24 bg-gray-400 rounded"></div>
        <div className="h-8 w-16 bg-gray-400 rounded"></div>
      </div>
      <div className="h-4 w-5/6 bg-gray-500 rounded mt-4"></div>
    </div>
  );
};

export default CouponBannerSkeleton;
