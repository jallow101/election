import React from "react";

const Candidate = ({ color, party, candidate, votes, photo }) => {
  return (
    <figure className={color ? `bg-${color} shadow-lg rounded-xl p-8 md:p-0 container-space-around`: "bg-white-400 shadow-md rounded-xl p-8 md:p-0 container-space-around"}>
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover"
        src={photo}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">{party}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">{candidate}</div>
          <div className="ml-7 pb-3 flex justify-center items-center">
            <div className="text-red-500">Votes: {votes}</div>
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
        </figcaption>
      </div>
    </figure>
  );
};

export default Candidate;
