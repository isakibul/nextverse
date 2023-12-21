import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkPFB5h0ZXGM6x1GiIvMDjUUYYlF7f6oU",
  authDomain: "nextverse-a1ab8.firebaseapp.com",
  projectId: "nextverse-a1ab8",
  storageBucket: "nextverse-a1ab8.appspot.com",
  messagingSenderId: "890030645899",
  appId: "1:890030645899:web:7608583c99f98403ceea8e",
  measurementId: "G-75Z3VPE8BS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
