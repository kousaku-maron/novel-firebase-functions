const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase)

exports.createAccountDoc = functions.auth.user().onCreate(user => {
  const db = admin.firestore();
  const userCollection = db.collection('user');

  userCollection.doc(user.uid).set({
    active: true,
  })
});
