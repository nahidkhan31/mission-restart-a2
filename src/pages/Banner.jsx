import React from 'react';
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";


const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="container mx-auto px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* In Progress */}
        <div className="bg-purple-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden">

          <div
            className="absolute inset-0 opacity-40 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundPosition: "right center"
            }}
          ></div>

          <p className="text-lg font-semibold relative z-10 mb-2">
            In-Progress
          </p>
          <p className="text-6xl font-extrabold relative z-10">
            {inProgressCount}
          </p>
        </div>

        {/* Resolved */}
        <div className="bg-green-400 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg relative overflow-hidden">

          <div
            className="absolute inset-0 opacity-40 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${vector2})`,
              backgroundPosition: "left center"
            }}
          ></div>

          <p className="text-lg font-semibold relative z-10 mb-2">
            Resolved
          </p>
          <p className="text-6xl font-extrabold relative z-10">
            {resolvedCount}
          </p>
        </div>

      </div>
    </div>
    );
};

export default Banner;