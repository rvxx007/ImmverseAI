import {initializeApp} from "firebase/app";
import "firebase/auth";
import envConfig from "./config/envConfig";

const firebaseConfig = {
    // apiKey: envConfig.FB_apiKey,
    // authDomain: envConfig.FB_authDomain,
    // projectId: envConfig.FB_projectId,
    // storageBucket: envConfig.FB_storageBucket,
    // messagingSenderId: envConfig.FB_messagingSenderId,
    // appId: envConfig.FB_appId,
    // measurementId: envConfig.FB_measurementId
    apiKey: "AIzaSyD1zbNLboCC5HqiAtEb-OuY0bP3A3Rr6SE",
    authDomain: "immverseai-0505.firebaseapp.com",
    projectId: "immverseai-0505",
    storageBucket: "immverseai-0505.firebasestorage.app",
    messagingSenderId: "945155810875",
    appId: "1:945155810875:web:c563b676d4fc54518ade1e",
    measurementId: "G-P9JKKB2XKM",
}

export const fbApp = initializeApp(firebaseConfig);