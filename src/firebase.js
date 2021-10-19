import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvdRCcmq6l0ahJlC3jbG4fHdsa6EnOS1c",
  authDomain: "fb-clone-ad9e0.firebaseapp.com",
  projectId: "fb-clone-ad9e0",
  storageBucket: "fb-clone-ad9e0.appspot.com",
  messagingSenderId: "1038715398461",
  appId: "1:1038715398461:web:63b840eb0a4420928b7d54",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

export default db;
