import React from "react";
import useSmallScreen from "../hooks/reizeScreen";

const InfoCard = ({ title, description, imageUrl }) => {
  const isSmallScreen = useSmallScreen();

  return (
    <div className="rounded shadow-lg mt-10 ml-10 mr-10 bg-white">
      {isSmallScreen ? (
        <div className="flex-col">
          <div className="flex-1">
            <div className="px-2 py-4">
              <div className="font-bold text-xl text-center mb-4 text-blue-600">
                {title}
              </div>
              <p className="text-gray-800 text-md text-center">{description}</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full h-64 flex justify-center items-center ml-auto mr-auto">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex-1">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-4 text-blue-600">
                {title}
              </div>
              <p className="text-gray-800 text-lg mb-6">{description}</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-1/2 h-96 flex justify-center mr-5">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
