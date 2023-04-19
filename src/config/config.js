import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwPyWTAaX2qF-F_VCyRoyfl1d-9g_B5Cs",
  authDomain: "whereishieronymus.firebaseapp.com",
  projectId: "whereishieronymus",
  storageBucket: "whereishieronymus.appspot.com",
  messagingSenderId: "704050616370",
  appId: "1:704050616370:web:e3d2063a7d858738afc42b"
};

export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);