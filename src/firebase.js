import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRt1v29xcBXiS6gb6nTEOCOhjt9OHMib4",
  authDomain: "auth-test-413c8.firebaseapp.com",
  projectId: "auth-test-413c8",
  storageBucket: "auth-test-413c8.appspot.com",
  messagingSenderId: "624248380951",
  appId: "1:624248380951:web:89b1fea599c04363104652",
  measurementId: "G-5EMLF4JF1G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
