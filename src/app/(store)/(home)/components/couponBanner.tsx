import React from "react";

const CouponBanner = () => {
  return (
    <div className="container bg-gradient-to-r from-purple-500 to-blue-900 text-white p-8 rounded-lg shadow-lg  mx-auto mt-3 mb-16">
      <div className="text-3xl font-bold mb-4">Spesyal Piyay!</div>
      <div className="text-lg mb-4">
        Jwenn <span className="text-yellow-400 font-bold">25%</span> Rab&egrave;
        nan prochen acha ou yo!
      </div>
      <div className="text-base mb-4">Itilize k&ograve;d coupon sa:</div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold">PIYAY25</span>
        <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Copy
        </button>
      </div>
      <div className="text-sm mt-4">
        <p>
          Li valid rive jiska{" "}
          <span className="font-semibold">December 31, 2023</span>
        </p>
      </div>
    </div>
  );
};

export default CouponBanner;
