import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZRb0PZum_TBdIgSNRDvj-f7btaAm2-Zw",
  authDomain: "travel-gram-3766d.firebaseapp.com",
  projectId: "travel-gram-3766d",
  storageBucket: "travel-gram-3766d.appspot.com",
  messagingSenderId: "356032343112",
  appId: "1:356032343112:web:ee6657d41a1bc5ff0bbc7d"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);