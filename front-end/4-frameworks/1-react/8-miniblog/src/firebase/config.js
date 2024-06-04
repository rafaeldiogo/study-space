import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDPntFpleVWnQwKTZzE0DTFwExaKL_LPs",
  authDomain: "miniblog-9e663.firebaseapp.com",
  projectId: "miniblog-9e663",
  storageBucket: "miniblog-9e663.appspot.com",
  messagingSenderId: "98533834171",
  appId: "1:98533834171:web:424abc37711ecbd65d189e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
