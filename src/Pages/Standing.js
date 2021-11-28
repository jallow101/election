import React, { useState, useEffect } from "react";
import Card from "./Card";

import { app } from "../Firebase";
import { getFirestore, collection, query, getDocs, orderBy } from "firebase/firestore";

const Standing = () => {

  const [wards, setWards] = useState();
  const [parties, setParties] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParties = async () => {
      const db = getFirestore(app);
      const data = await collection(db, "parties");
      const x = query(data,  orderBy("votes","desc"));

      const test = await collection(db, "administrative regions");

      getDocs(test).then((querySnapshot) => {
             
        setWards(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        console.log("test query ", wards);
        

      })
      .catch((err) => {
        // TODO: Handle errors
        console.error("Failed to retrieve data", err);
      });

      getDocs(x)
        .then((querySnapshot) => {
             
          setParties(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          setLoading(false);

        })
        .catch((err) => {
          // TODO: Handle errors
          console.error("Failed to retrieve data", err);
        });
    };

    getParties();
    console.log(parties);
    console.log("test query ", wards);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {loading ? 
        <div>Please ...</div>
      : <Card data={parties}/>
      

      /* <div className="">
        <Candidate
          party="UDP"
          candidate="Ousainou Darboe"
          color="yellow-400"
          votes="120,343"
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDf72X6JS48bu1jb6iFY743EEGEsi8tfeyGpWDgDoqELWCb1U0bGNLfPUr4up5hkGCGZU&usqp=CAU"
        />
      </div>
      <div className="">
        <Candidate
          party="NPP"
          candidate="Adama Barrow"
          color="gray-400"
          votes="102,342"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Adama_Barrow_-_2018_%2839774084330%29_%28cropped%29.jpg/330px-Adama_Barrow_-_2018_%2839774084330%29_%28cropped%29.jpg"
        />
      </div>

      <div className="">
        <Candidate
          party="Independent"
          candidate="Essa Faal"
          votes="62,342"
          photo="https://i1.wp.com/www.thegambiatimes.com/wp-content/uploads/2021/08/Essa-Mbye-Faal.png?w=600&ssl=1"
        />
      </div>

      <div className="">
        <Candidate
          party="GDC"
          candidate="Mama Kandeh"
          color="purple-800"
          votes="42,342"
          photo="https://www.freedomnewspaper.com/wp-content/uploads/2020/12/MAMA-KANDEH-1.jpg"
        />
      </div>

      <div className="">
        <Candidate
          party="Independent"
          candidate="Abdoulie Jammeh"
          color="orange-600"
          votes="22,342"
          photo="https://standard.gm/wp-content/uploads/2021/10/abdoulie-jammeh.png"
        />
      </div> */}
    </div>
  );
};

export default Standing;
