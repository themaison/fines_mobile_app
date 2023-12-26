import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBc4TfwkHw42803yTCirwTHv7AY8uIr7ZA",
    authDomain: "fines-4b970.firebaseapp.com",
    projectId: "fines-4b970",
    storageBucket: "fines-4b970.appspot.com",
    messagingSenderId: "725844169801",
    appId: "1:725844169801:web:26855d24b3a7cf2c121b98",
    measurementId: "G-CG2KG1S59Z",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);