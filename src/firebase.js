import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOKqP0OP_5xIMcdxmiioeQFH_D9vru6Vc",
  authDomain: "slack-clone-51cbc.firebaseapp.com",
  projectId: "slack-clone-51cbc",
  storageBucket: "slack-clone-51cbc.appspot.com",
  messagingSenderId: "991170566583",
  appId: "1:991170566583:web:643f7c3610551cefa7f032",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore is the real time db
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
