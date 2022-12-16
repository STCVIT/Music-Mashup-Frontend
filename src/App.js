import { Route, Routes, useLocation } from "react-router-dom";
import LandingOne from "./Components/LandingOne";
import LandingTwo from "./Components/LandingTwo";
import TempFile from "./Components/TempFile";
import DragDropOne from "./Components/DragDropOne";
import MusicPlayingOne from "./Components/MusicPlayingOne";
import MashingOne from "./Components/MashingOne";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { AnimatePresence } from "framer-motion";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./Components/ResetPassword";
import MyMusic from "./Components/MyMusic";
import YTfeature from "./Components/YTfeature";
import { useUserAuth } from "./context/UserAuthContext";

export default function App() {
  const { setTokenFunc, anonUser } = useUserAuth;
  window.onload = async () => {
    const temp = await anonUser();
    const setid = setTokenFunc(temp.user);
    console.log("id is now: ", setid);
  };

  const location = useLocation();
  return (
    <div>
      <UserAuthContextProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<LandingOne />} />
            <Route path="/LandingTwo" exact element={<LandingTwo />} />
            <Route path="/TempFile" exact element={<TempFile />} />
            <Route path="/DragDropOne" exact element={<DragDropOne />} />
            <Route
              path="/MusicPlayingOne"
              exact
              element={<MusicPlayingOne />}
            />
            <Route path="/MashingOne" exact element={<MashingOne />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/ResetPassword" exact element={<ResetPassword />} />
            <Route path="/MyMusic" exact element={<MyMusic />} />
            <Route path="/YTfeature" exact element={<YTfeature />} />
          </Routes>
        </AnimatePresence>
      </UserAuthContextProvider>
    </div>
  );
}
