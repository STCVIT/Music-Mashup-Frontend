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
  // UNLINKING :
  // firebase.auth().currentUser.unlink(firebase.auth.FacebookAuthProvider.PROVIDER_ID)

  function googleSignIn() {
    console.log("pressed");
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log("credential generated");
        const id_token = credentials.accessToken;
        console.log("id token: ", id_token);
        const googleUser = result.user;
        //i think not sure, the error message
        const credential = GoogleAuthProvider.credential(
          googleUser.getAuthResponse(true).id_token
        );
        // const credential = GoogleAuthProvider.credential(googleUser.get().getAuthResponse().id_token);
        // const credential = GoogleAuthProvider.credential(id_token);
        linkWithCredential(auth.currentUser, credential)
          .then((usercred) => {
            const userf = usercred.user;
            console.log("Anonymous account successfully upgraded", userf);
          })
          .catch((error) => {
            console.log("Error upgrading anonymous account", error);
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const emailerr = error.customData.email;
        const credentialerr = GoogleAuthProvider.credentialFromError(error);
        console.log("errors: ");
        console.log(errorCode);
        console.log(errorMessage);
        // console.log(emailerr);
        console.log(credentialerr);
      });

    // aap kar
    // return signInWithPopup(auth, googleAuthProvider);
    // const temp2 = signInWithPopup(auth, googleAuthProvider);
    // console.log("temp2:", temp2);
    // console.log(auth.currentUser);
    //   signInWithPopup(auth, googleAuthProvider).then(
    //     (result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credential(result)
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   // const user = result.user;
    //   // ...
    //   }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // }
    //   );

    // console.log("in google sign in ");
    // const credential = GoogleAuthProvider.credential(
    //   user.getAuthResponse().token
    // );
    //   console.log("in line 39");
    // linkWithCredential(auth.currentUser, credential)
    //   .then((usercred) => {
    //     const userf = usercred.user;
    //     console.log("Anonymous account successfully upgraded", userf);
    //   })
    //   .catch((error) => {
    //     console.log("Error upgrading anonymous account", error);
    //   });

    // auth.currentUser.linkWithCredential(credential).then(
    //   function (user) {
    //     console.log("Anonymous account successfully upgraded", user);
    //   },
    //   function (error) {
    //     console.log("Error upgrading anonymous account", error);
    //   }
    // );

    // var credential = auth.GoogleAuthProvider.credential();

    // auth.currentUser.linkWithCredential(credential).then(
    //   function (user) {
    //     console.log("Anonymous account successfully upgraded", user);
    //   },
    //   function (error) {
    //     console.log("Error upgrading anonymous account", error);
    //   }
    // );

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
      if (user) {
        setUser(user);
        setTokenFunc(user);
        console.log("user: ", user);
        console.log("unsubscribe: ", unsubscribe);
      } else {
        // logging in as another anonymous user as soon as you log out.
        // everything's wiped out though?
        anonUser();
      }

      // console.log("token is now: ", token);
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
