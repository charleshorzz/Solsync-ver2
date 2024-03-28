import React from "react";

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded shadow-lg mt-20 ml-20 mr-20 bg-white">
      {/* Information Section */}
      <div className="flex items-center h-full">
        <div className="flex-1">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-1">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
