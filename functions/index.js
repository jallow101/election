const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const firestore = admin.firestore();

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
    const adminRef = firestore.collection("administrative_areas").doc(docId);

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newNppVotes = adminDoc.data().npp + nppVotes;
      transaction.update(adminRef, {
        npp: newNppVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newUdpVotes = adminDoc.data().udp + udpVotes;
      transaction.update(adminRef, {
        udp: newUdpVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newPdoisVotes = adminDoc.data().pdois + pdoisVotes;
      transaction.update(adminRef, {
        pdois: newPdoisVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newGdcVotes = adminDoc.data().gdc + gdcVotes;
      transaction.update(adminRef, {
        gdc: newGdcVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newNupVotes = adminDoc.data().nup + nupVotes;
      transaction.update(adminRef, {
        nup: newNupVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      const newEssaVotes = adminDoc.data().essa + essaVotes;
      transaction.update(adminRef, {
        essa: newEssaVotes,
      });
    });



  });

exports.updateAdminStatsOnUpdate = functions.firestore
  .document("administrative_areas/{adminId}/constituencies/{constituencyId}")
  .onUpdate(async (change, context) => {
    // Get value of the newly added rating
    const nppVotes = change.after.data().npp;
    const udpVotes = change.after.data().udp;
    const pdoisVotes = change.after.data().pdois;
    const gdcVotes = change.after.data().gdc;
    const nupVotes = change.after.data().nup;
    const essaVotes = change.after.data().essa;
    

    const nppOldVotes = change.before.data().npp;
    const udpOldVotes = change.before.data().udp;
    const pdoisOldVotes = change.before.data().pdois;
    const gdcOldVotes = change.before.data().gdc;
    const nupOldVotes = change.before.data().nup;
    const essaOldVotes = change.before.data().essa;

    const docId = change.after.data().administration;

    // Get a reference to the restaurant
    const adminRef = firestore.collection("administrative_areas").doc(docId);

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);

      let currentValue = adminDoc.data().npp - nppOldVotes;
      // Compute new number of ratings
      const updatedNppVotes = currentValue + nppVotes;

      // Update restaurant info
      transaction.update(adminRef, {
        npp: updatedNppVotes,
      });
    });

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      let udpCurrentValue = adminDoc.data().udp - udpOldVotes;

      // Compute new number of votes
      const updatedUdpVotes = udpCurrentValue + udpVotes;

      // Update party votes to constituency
      transaction.update(adminRef, {
        udp: updatedUdpVotes,
      });
    });

    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      let pdoisCurrentValue = adminDoc.data().pdois - pdoisOldVotes;

      // Compute new number of votes
      const updatedPdoisVotes = pdoisCurrentValue + pdoisVotes;

      // Update party votes to constituency
      transaction.update(adminRef, {
        pdois: updatedPdoisVotes,
      });
    });


    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      let gdcCurrentValue = adminDoc.data().gdc - gdcOldVotes;

      // Compute new number of votes
      const updatedGdcVotes = gdcCurrentValue + gdcVotes;

      // Update party votes to constituency
      transaction.update(adminRef, {
        gdc: updatedGdcVotes,
      });
    });

     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      let nupCurrentValue = adminDoc.data().nup - nupOldVotes;

      // Compute new number of votes
      const updatedNupVotes = nupCurrentValue + nupVotes;

      // Update party votes to constituency
      transaction.update(adminRef, {
        nup: updatedNupVotes,
      });
    });


    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(adminRef);
      let essaCurrentValue = adminDoc.data().essa - essaOldVotes;

      // Compute new number of votes
      const updatedEssaVotes = essaCurrentValue + essaVotes;

      // Update party votes to constituency
      transaction.update(adminRef, {
        essa: updatedEssaVotes,
      });
    });

  });

exports.updatePartyStats = functions.firestore
  .document("administrative_areas/{adminId}")
  .onUpdate(async (change, context) => {
    // Get value of the newly added rating
    const nppVotes = change.after.data().npp;
    const nppOldVotes = change.before.data().npp;

    const udpVotes = change.after.data().udp;
    const udpOldVotes = change.before.data().udp;

    const pdoisVotes = change.after.data().pdois;
    const pdoisOldVotes = change.before.data().pdois;
    
    const gdcVotes = change.after.data().gdc;
    const gdcOldVotes = change.before.data().gdc;
    
    const nupVotes = change.after.data().nup;
    const nupOldVotes = change.before.data().nup;

    const essaVotes = change.after.data().essa;
    const essaOldVotes = change.before.data().essa;

    // Get a reference to the parties
    const nppRef = firestore.collection("parties").doc("nVskNMWe6yNSPAxH6byE");
    const udpRef = firestore.collection("parties").doc("bcqXZJQ3DzRHlUsjpWmc");
    const pdoisRef = firestore.collection("parties").doc("xtdGvcRQBPRr9Me4bJFr");
    const gdcRef = firestore.collection("parties").doc("hVBe6hZ8weWE6bJ3nJnW");
    const nupRef = firestore.collection("parties").doc("9FrXnTj55eI1FvZZLohp");
    const essaRef = firestore.collection("parties").doc("JpBaywHSYrMadESq0qSt");

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
      let currentValue = adminDoc.data().votes - udpOldVotes;
      // Compute new number of ratings
      const updatedUdpVotes = currentValue + udpVotes;
      // Update restaurant info
      transaction.update(udpRef, {
        votes: updatedUdpVotes,
      });
    });


    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(pdoisRef);
      let currentValue = adminDoc.data().votes - pdoisOldVotes;
      // Compute new number of ratings
      const updatedPdoisVotes = currentValue + pdoisVotes;
      // Update restaurant info
      transaction.update(pdoisRef, {
        votes: updatedPdoisVotes,
      });
    });


    // Update aggregations in a transaction
    await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(gdcRef);
      let currentValue = adminDoc.data().votes - gdcOldVotes;
      // Compute new number of ratings
      const updatedGdcVotes = currentValue + gdcVotes;
      // Update restaurant info
      transaction.update(gdcRef, {
        votes: updatedGdcVotes,
      });
    });


     // Update aggregations in a transaction
     await firestore.runTransaction(async (transaction) => {
      const adminDoc = await transaction.get(nupRef);
      let currentValue = adminDoc.data().votes - nupOldVotes;
      // Compute new number of ratings
      const updatedNupVotes = currentValue + nupVotes;
      // Update restaurant info
      transaction.update(nupRef, {
        votes: updatedNupVotes,
      });
    });


      // Update aggregations in a transaction
      await firestore.runTransaction(async (transaction) => {
        const adminDoc = await transaction.get(essaRef);
        let currentValue = adminDoc.data().votes - essaOldVotes;
        // Compute new number of ratings
        const updatedEssaVotes = currentValue + essaVotes;
        // Update restaurant info
        transaction.update(essaRef, {
          votes: updatedEssaVotes,
        });
      });



  });
