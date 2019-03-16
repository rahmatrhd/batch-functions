import * as admin from "firebase-admin";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: adminConfig.databaseURL
});

export default admin;
