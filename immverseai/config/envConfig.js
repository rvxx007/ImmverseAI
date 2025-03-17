const envObj = {
    FB_apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
    FB_authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
    FB_projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
    FB_storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUKET,
    FB_messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
    FB_appId: process.env.NEXT_PUBLIC_FB_APPID,
    FB_measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID

    
}

export default Object.freeze(envObj);