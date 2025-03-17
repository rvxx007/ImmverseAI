import {initializeApp} from "firebase/app";
import "firebase/auth";
import envConfig from "./config/envConfig";

const firebaseConfig = {
    apiKey: envConfig.FB_apiKey,
    authDomain: envConfig.FB_authDomain,
    projectId: envConfig.FB_projectId,
    storageBucket: envConfig.FB_storageBucket,
    messagingSenderId: envConfig.FB_messagingSenderId,
    appId: envConfig.FB_appId,
    measurementId: envConfig.FB_measurementId
    
}

export const fbApp = initializeApp(firebaseConfig);