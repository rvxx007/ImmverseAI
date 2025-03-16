const envObj = {
    FB_apiKey: process.env.FB_APIKEY,
    FB_authDomain: process.env.FB_AUTHDOMAIN,
    FB_projectId: process.env.FB_PROJECTID,
    FB_storageBucket: process.env.FB_STORAGEBUKET,
    FB_messagingSenderId: process.env.FB_MESSAGINGSENDERID,
    FB_appId: process.env.FB_APPID,
    FB_measurementId: process.env.FB_MEASUREMENTID
}

export default Object.freeze(envObj);