import { createContext, useEffect, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInAnonymously,
  linkWithCredential,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [tokenlist, setToken] = useState([]);

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
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credentialFromResult =
          GoogleAuthProvider.credentialFromResult(result);
        console.log("credentials: ", credentialFromResult);
        console.log("credential generated");
        const id_token = credentialFromResult.idToken;
        console.log("id token: ", id_token);
        const googleUser = result.user;
        linkWithCredential(auth.currentUser, credentialFromResult)
          .then((usercred) => {
            const userf = usercred.user;
            console.log("Anonymous account successfully upgraded", userf);
          })
          .catch((error) => {
            console.log("Error upgrading anonymous account", error);
          });
      })

      .catch((error) => {
        console.log("errors: ");
        console.log(error.message);
      });
  }

  function setTokenFunc(x) {
    const temp1 = x.auth.lastNotifiedUid;
    console.log("from userauth: ", temp1);
    setToken((prev) => [...prev, temp1]);
    return tokenlist;
  }

  function anonUser() {
    return signInAnonymously(auth);
  }

  function reset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setTokenFunc(user);
        console.log("user: ", user);
        console.log("unsubscribe: ", unsubscribe);
      } else {
        anonUser();
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        tokenlist,
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
