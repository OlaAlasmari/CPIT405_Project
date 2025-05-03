import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyJXuOnz2rkMX_rxM_8ap8mlyllp7I9gw",
  authDomain: "saudiology-auth.firebaseapp.com",
  projectId: "saudiology-auth",
  storageBucket: "saudiology-auth.firebasestorage.app",
  messagingSenderId: "893858029116",
  appId: "1:893858029116:web:e8a6ff1dd34382d45cad39"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();