import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVB8wdnX7RzlkbPhVu9b1UT06soWoixSE",
    authDomain: "official-digicheck.firebaseapp.com",
    projectId: "official-digicheck",
    storageBucket: "official-digicheck.appspot.com",
    messagingSenderId: "63470572701",
    appId: "1:63470572701:web:95f13bc350c7602a4ff074",
    measurementId: "G-C8CF861B2J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };