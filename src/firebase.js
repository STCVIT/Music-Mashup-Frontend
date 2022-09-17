import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWVxfjR-g_8aS2BG_Q8OfPJpvCz9HU_7I",
  authDomain: "music-mashup-ffb43.firebaseapp.com",
  projectId: "music-mashup-ffb43",
  storageBucket: "music-mashup-ffb43.appspot.com",
  messagingSenderId: "232196038624",
  appId: "1:232196038624:web:26fa47ec4f1583872a9585",
  measurementId: "G-09KY6RGVXB"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const storage = getStorage(app);

