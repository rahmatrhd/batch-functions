import * as functions from "firebase-functions";
import admin from "../admin";

export default functions.auth.user().onCreate(user => {
  admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid
    });
});
