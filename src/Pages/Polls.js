import React, { useState } from "react";
import Dropdown from "../Components/Dropdown";
import { Admins, Constituencies } from "../Data/Data";
import Form from "./Form";

const Polls = () => {
  const [admin, setAdmin] = useState("");
  const [constituency, setConstituency] = useState("");

  const test = Constituencies.filter((constituency) => {
    return constituency.adminArea === admin;
  });

  return (
    <>
      <div className="flex justify-around align-center ">
        <h1 className=" w-70 bg-blue-500 text-lg text-white font-bold font-serif mt-10 p-2 rounded">
          Add New Results
        </h1>
      </div>
      <div className="flex justify-around align-center">
        <Dropdown
          data={Admins}
          setAdmin={setAdmin}
          setConsituency={setConstituency}
          type="admin"
        />
        {admin == "" ? (
          "Select Admins. region "
        ) : (
          <Dropdown
            data={test}
            setAdmin={setAdmin}
            setConsituency={setConstituency}
            type="constituency"
          />
        )}
      </div>

      {constituency  != "" ? (
        <>
          <h1 className="flex justify-around align-center text-lg text-orange-400 font-bold font-serif ">
            Party Votes
          </h1>
          <Form admin={admin} constituency={constituency} />
        </>
      ) : (
        <h1 className="flex justify-around align-center text-lg text-orange-400 font-bold font-serif ">
          Select Administrative area and constituency
        </h1>
      )}
    </>
  );
};

export default Polls;
