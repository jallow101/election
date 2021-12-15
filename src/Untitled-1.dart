
exports.updateAdminStats = functions.firestore
.document("administrative_areas/{adminId}/constituencies/{constituencyId}")

.onWrite(async (change, context) => {
  // Get value of the newly added rating
  const nppVotes = change.after.data().npp;
  const docId = change.after.data().constituency;

  // Get a reference to the restaurant
  const adminRef = db.collection('administrative_areas').doc();

  // Update aggregations in a transaction
  await db.runTransaction(async (transaction) => {
    const adminDoc = await transaction.get(adminRef);

    // Compute new number of ratings
    const newNppVotes = adminDoc.data().npp + nppVotes;


    // Compute new average rating
    // const oldRatingTotal = restDoc.data().avgRating * restDoc.data().numRatings;
    // const newAvgRating = (oldRatingTotal + ratingVal) / newNumRatings;

    // Update restaurant info
    transaction.update(adminRef, {
      npp: newNppVotes
    });
  });
});

"predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint"
    ],



  const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const firestore = admin.firestore();
var batch = firestore.batch;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.updateAdminStats = functions.firestore
  .document("administrative_areas/{adminId}/constituencies/{constituencyId}")

  .onCreate(async (snap, context) => {
    // Get value of the newly added rating
    const newValue = snap.data();

    const nppVotes = newValue.npp;
    const udpVotes = newValue.udp;
    const pdoisVotes = newValue.pdois;
    const gdcVotes = newValue.gdc;
    const nupVotes = newValue.nup;
    const essaVotes = newValue.essa;


    const docId = newValue.administration;

    // Get a reference to the restaurant
    const adminRef = firestore.collection("administrative_areas").doc(docId).get();

    const newNppVotes = adminRef.data().npp + nppVotes;
    const newUdpVotes = adminRef.data().npp + udpVotes;
    const newPdoisVotes = adminRef.data().npp + pdoisVotes;
    const newNupVotes = adminRef.data().npp + nupVotes;
    const newGdcVotes = adminRef.data().npp + gdcVotes;
    const newEssaVotes = adminRef.data().npp + essaVotes;

     // Update the votes of 'udp'
     batch.update(adminRef, { npp: newNppVotes });
     batch.update(adminRef, { udp: newUdpVotes });
     batch.update(adminRef, { pdois: newPdoisVotes });
     batch.update(adminRef, { nup: newNupVotes });
     batch.update(adminRef, { gdc: newGdcVotes });
     batch.update(adminRef, { essa: newEssaVotes });
 
     batch.commit().then(() => {
       // ...
       console.log(" updates done");
     });

    // // Update aggregations in a transaction
    // await firestore.runTransaction(async (transaction) => {
    //   const adminDoc = await transaction.get(adminRef);

    //   // Compute new number of ratings
    //   const newNppVotes = adminDoc.data().npp + nppVotes;
      

    //   // Compute new average rating
    //   // const oldRatingTotal = restDoc.data().avgRating * restDoc.data().numRatings;
    //   // const newAvgRating = (oldRatingTotal + ratingVal) / newNumRatings;

    //   // Update restaurant info
    //   transaction.update(adminRef, {
    //     npp: newNppVotes,
    //   });
    // });
  });

exports.updateAdminStatsOnUpdate = functions.firestore
  .document("administrative_areas/{adminId}/constituencies/{constituencyId}")
  .onUpdate(async (change, context) => {
    // Get value of the newly added rating
    const docId = change.after.data().administration;

    // Get a reference to the restaurant
    const adminRef = firestore
      .collection("administrative_areas")
      .doc(docId)
      .get();

      //npp section//
    const nppVotes = change.after.data().npp;
    const nppOldVotes = change.before.data().npp;
    let currentValue = adminRef.data().npp - nppOldVotes;
    const updatedNppVotes = currentValue + nppVotes;
    //END npp section//
    
    //udp section//
    const udpVotes = change.after.data().udp;
    const udpOldVotes = change.before.data().udp;
    let udpCurrentValue = adminRef.data().udp - udpOldVotes;
    const updatedUdpVotes = udpCurrentValue + udpVotes;
    //END npp section//

    //Pdois section//
    const pdoisVotes = change.after.data().pdois;
    const pdoisOldVotes = change.before.data().pdois;
    let pdoisCurrentValue = adminRef.data().pdois - pdoisOldVotes;
    const updatedPdoisVotes = pdoisCurrentValue + pdoisVotes;
    //END Pdois section//

    //Gdc section//
    const gdcVotes = change.after.data().gdc;
    const gdcOldVotes = change.before.data().gdc;
    let gdcCurrentValue = adminRef.data().gdc - gdcOldVotes;
    const updatedGdcVotes = gdcCurrentValue + gdcVotes;
    //END Pdois section//

    //Nup section//
    const nupVotes = change.after.data().nup;
    const nupOldVotes = change.before.data().nup;
    let nupCurrentValue = adminRef.data().nup - nupOldVotes;
    const updatedNupVotes = nupCurrentValue + nupVotes;
    //END Pdois section//

     //Essa section//
     const essaVotes = change.after.data().essa;
     const essaOldVotes = change.before.data().essa;
     let essaCurrentValue = adminRef.data().essa - essaOldVotes;
     const updatedEssaVotes = essaCurrentValue + essaVotes;
     //END Pdois section//

    // Update the votes of 'udp'
    batch.update(adminRef, { npp: updatedNppVotes });
    batch.update(adminRef, { udp: updatedUdpVotes });
    batch.update(adminRef, { pdois: updatedPdoisVotes });
    batch.update(adminRef, { gdc: updatedGdcVotes });
    batch.update(adminRef, { nup: updatedNupVotes });
    batch.update(adminRef, { essa: updatedEssaVotes });

    batch.commit().then(() => {
      // ...
      console.log(" updates done");
    });

    // // Update aggregations in a transaction
    // await firestore.runTransaction(async (transaction) => {
    //   const adminDoc = await transaction.get(adminRef);

    //   let currentValue = adminDoc.data().npp - nppOldVotes;

    //   // Compute new number of ratings
    //   const updatedNppVotes = currentValue + nppVotes;

    //   let udpCurrentValue = adminDoc.data().udp - udpOldVotes;

    //   // Compute new number of ratings
    //   const updatedUdpVotes = udpCurrentValue + udpVotes;

    //   // Compute new average rating
    //   // const oldRatingTotal = restDoc.data().avgRating * restDoc.data().numRatings;
    //   // const newAvgRating = (oldRatingTotal + ratingVal) / newNumRatings;

    //   // Update restaurant info
    //   transaction.update(adminRef, {
    //     npp: updatedNppVotes,
    //     udp: updatedUdpVotes,
    //   });
    // });
  });

  

exports.updatePartyStats = functions.firestore
  .document("administrative_areas/{adminId}")
  .onUpdate(async (change, context) => {
    // Get value of the newly added rating
    const nppVotes = change.after.data().npp;
    const nppOldVotes = change.before.data().npp;

    // Get a reference to the restaurant
    const nppRef = firestore.collection("parties").doc("nVskNMWe6yNSPAxH6byE");

    const udpRef = firestore.collection("parties").doc("bcqXZJQ3DzRHlUsjpWmc");

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(nppRef);
      let currentValue = adminDoc.data().votes - nppOldVotes;
      // Compute new number of ratings
      const updatedNppVotes = currentValue + nppVotes;
      // Update restaurant info
      transaction.update(nppRef, {
        votes: updatedNppVotes,
      });
    });

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(udpRef);
      let currentValue = adminDoc.data().votes - nppOldVotes;
      // Compute new number of ratings
      const updatedNppVotes = currentValue + nppVotes;
      // Update restaurant info
      transaction.update(udpRef, {
        votes: updatedNppVotes,
      });
    });
  });




 