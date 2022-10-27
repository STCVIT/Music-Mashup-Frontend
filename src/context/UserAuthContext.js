import { createContext, useEffect, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  EmailAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInAnonymously,
  linkWithCredential,
  linkWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    var credential = auth.GoogleAuthProvider.credential();
    
      auth()
      .currentUser.linkWithCredential(credential)
      .then(
        function (user) {
          console.log("Anonymous account successfully upgraded", user);
        },
        function (error) {
          console.log("Error upgrading anonymous account", error);
        }
      );

    // const provider = new auth.GoogleAuthProvider();
    // console.log("provider: ",provider);
    // auth.currentUser.linkWithPopup(provider);
    // console.log(provider);
    // const credential = GoogleAuthProvider.credential(
    //   user.getAuthResponse().id_token
    // );
    // console.log("credentials: ", credential);
    // user.linkWithCredential(credential).then(
    //   function (user_temp) {
    //     console.log("Anonymous account successfully upgraded", user_temp);
    //   },
    //   function (error) {
    //     console.log("Error upgrading anonymous account", error);
    //   }
    // );
    // const googleAuthProvider = new GoogleAuthProvider();
    // return signInWithPopup(auth, googleAuthProvider);
  }

  function setTokenFunc(x) {
    const temp1 = x.auth.lastNotifiedUid;
    console.log("from userauth: ", temp1);
    setToken(temp1);
    return temp1;
  }

  function anonUser() {
    return signInAnonymously(auth);
  }

  function reset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setTokenFunc(user);
      console.log("user: ", user);
      console.log("unsubscribe: ", unsubscribe);
      console.log("token is now: ", token);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        token,
        setTokenFunc,
        signUp,
        signIn,
        logOut,
        googleSignIn,
        reset,
        anonUser,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
