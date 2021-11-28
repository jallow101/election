import React from "react";

const Warning = () => {
  return (
    <div className="m-5">
      <h2 className="text-red-500 text-center font-medium">Warning</h2>
      <h4 className="text-grey-300 text-center font-serif">
        These are pliminary results gathered from different sources.
      </h4>
      <div className="flex items-center justify-center">
        <h4 className="text-yellow-300 text-center font-serif">
          Verified results will have a green tick
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Warning;
