import React, { useState } from "react";
import { app } from "../Firebase";
import {
  collection,
  getFirestore,
  query,
  getDocs,
  addDoc,
  orderBy,
  doc, 
  setDoc 
} from "firebase/firestore";

const Form = ({ admin, constituency }) => {

const db = getFirestore(app);

  const [npp, setNpp] = useState(3);
  const [udp, setUdp] = useState(0);
  const [pdois, setPdois] = useState(0);
  const [essa, setEssa] = useState(25);
  const [gdc, setGdc] = useState(0);
  const [nup, setNup] = useState(0);

  const [registered, setRegistered] = useState(0);
  const [invalid, setInvalid] = useState(0);

  const [polls, setPools] = useState({
    udp: udp,
    npp: npp,
    gdc: gdc,
    pdois: pdois,
    nup: nup,
    essa: essa,
    registered_votres: registered,
    invalid_votes: invalid,
  });


  const sendResult = () => {
    
//     const admin_areas = collection(db, 'administrative_areas');
//    // const constz = collection(db, "constituencies");
//     setDoc(doc(admin_areas, admin,"constituencies", constituency), polls);
    //doc(db, "administrative_areas", admin, "constituencies", constituency)

    console.log("here the results ", polls);
    
  };

  console.log("the admin is : ", admin);
  console.log("the constituency is : ", constituency);

  return (
    <div>
      <form>
        <div className="flex justify-center mt-10 ">
          <div className="w-3/5">
            <div className="flex flex-wrap -mx-3 mb-6  ">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  NPP
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="# of votes"
                  required
                  defaultValue={npp}
                  onChange={(e) => setNpp(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  UDP
                </label>
                <input
                  className="appearance-none block w-full bg-orange-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of votes"
                  onChange={(e) => setUdp(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  PDOIS
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="# of votes"
                  onChange={(e) => setPdois(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  ESSA MBEYE FAAL
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of votes"
                  onChange={(e) => setEssa(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  GDC
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of votes"
                  onChange={(e) => setGdc(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  NUP
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of votes"
                  onChange={(e) => setNup(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mt-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Registered Voters
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of registerd voters"
                  onChange={(e) => setRegistered(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mt-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Invalid Votes
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="# of invalide votes"
                  onChange={(e) => setInvalid(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse mr-20 ">
          <button
            className="bg-orange-700 hover:bg-green-800 
        text-white font-bold py-2 px-4 border-b-4 
        border-white-900 hover:border-yellow-500 rounded"
           
            onClick={sendResult}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
