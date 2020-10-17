import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABay70v3RgaaBhteyYyuqC3r8OSwWUB6o",
  authDomain: "facebook-clone-e4bf8.firebaseapp.com",
  databaseURL: "https://facebook-clone-e4bf8.firebaseio.com",
  projectId: "facebook-clone-e4bf8",
  storageBucket: "facebook-clone-e4bf8.appspot.com",
  messagingSenderId: "139425992538",
  appId: "1:139425992538:web:7334016fde006e8909ed63",
  measurementId: "G-KYHTGY7Z2C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
