import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Standing from "./Pages/Standing";
import Warning from "./Components/Warning";
import Header from "./Pages/Header";
import Polls from "./Pages/Polls";
import Map from "./Pages/Map";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import { app } from "./Firebase";
import {
  collection,
  collectionGroup,
  getFirestore,
  query,
  getDocs,
  addDoc,
  orderBy,
  doc,
  setDoc,
} from "firebase/firestore";

function App() {
  const [constituency, setConstituency] = useState([]);
  

  const columns = [
    {
      name: "Administrative Area",
      selector: (row) => row.administration,
      sortable: true
    },
    {
      name: "Constituency",
      selector: (row) => row.constituency,
      sortable: true
    },
    {
      name: "NPP",
      selector: (row) => row.npp,
      sortable: true
    },
    {
      name: "UDP",
      selector: (row) => row.udp,
      sortable: true
    },
    {
      name: "GDC",
      selector: (row) => row.gdc,
      sortable: true
    },
    {
      name: "PDOIS",
      selector: (row) => row.pdois,
      sortable: true
    },
    {
      name: "NUP",
      selector: (row) => row.nup,
      sortable: true
    },
    {
      name: "Independent",
      selector: (row) => row.essa,
      sortable: true
    },
  ];

  useEffect(() => {
    const getConstituency = async () => {
      const db = getFirestore(app);
      const data = await getDocs(collectionGroup(db, "constituencies"));
      setConstituency(data.docs.map((doc) => ({ ...doc.data() })));
      //console.log(" me ", constituency);
    };

    getConstituency();
    console.log(" nre me ", constituency);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/data"
            element={
              <>
                {" "}
                <Header /> <Polls />{" "}
              </>
            }
          />
          <Route path="/data" element={<Polls />} />

          <Route
            exact
            path="/"
            element={
              <div className="w-100 bg-gray-100">
                <div className=" mb-5  max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-12" src={logo} alt="ChitChat Logo" />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black">
                      2021 Presidential Election
                    </div>
                    <p className="text-gray-500">The Gambia </p>
                  </div>
                </div>

                {/* <Warning /> */}

                <div className="container  mx-auto px-4">
                  <Standing />
                </div>

                <div>
                  <Map/>
                </div>

                {/* <Warning /> */}

                {/* {constituency.length >= 1 ? (
                  <div >
                    <Table
                      title="2021 election constituency results"
                      data={constituency}
                      columns={columns}
                    />
                  </div>
                ) : (
                  ""
                )} */}
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
