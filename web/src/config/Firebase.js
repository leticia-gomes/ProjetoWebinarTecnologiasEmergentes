
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMekbbTmUbiXkoMgp_OCuJJP0Gt35835c",
  authDomain: "projetoavaliacao-eaaf6.firebaseapp.com",
  databaseURL: "https://projetoavaliacao-eaaf6-default-rtdb.firebaseio.com",
  projectId: "projetoavaliacao-eaaf6",
  storageBucket: "projetoavaliacao-eaaf6.firebasestorage.app",
  messagingSenderId: "349478066530",
  appId: "1:349478066530:web:4c5018afcfc7e1a2d8f43b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
