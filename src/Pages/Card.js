import React from "react";
import Candidate from "../Components/Candidate";

const Card = ({ data }) => {
  console.log("heres the data ", data);

  return (
    <>
      {data.map((party) => (
        <div className="flex-1">
          <Candidate
            key={party.name}
            party={party.name}
            candidate={party.candidate}
            color={party.color}
            votes={party.votes}
            photo={party.candidate_photo}
          />
        </div>
      ))}
    </>
  );
};

export default Card;
