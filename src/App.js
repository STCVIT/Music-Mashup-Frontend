import { Route, Routes, useLocation } from 'react-router-dom';
import LandingOne from './Components/LandingOne'
import Blank from './Components/Blank'
import LandingTwo from './Components/LandingTwo'
import DragDropOne from './Components/DragDropOne'
import MusicPlayingOne from './Components/MusicPlayingOne'
import MashingOne from './Components/MashingOne'
import Help from './Components/Help';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AnimatePresence } from "framer-motion";
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ResetPassword from './Components/ResetPassword'

export default function App() {
  const location = useLocation();
  return (
    <div>
      <UserAuthContextProvider>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<LandingOne />} />
          <Route path='/Blank' exact element={<Blank />} />
          <Route path='/LandingTwo' exact element={<LandingTwo />} />
          <Route path='/Help' exact element={<Help />} />
          <Route path='/DragDropOne' exact element={<ProtectedRoute><DragDropOne /></ProtectedRoute>} />
          <Route path='/MusicPlayingOne' exact element={<ProtectedRoute><MusicPlayingOne /></ProtectedRoute>} />
          <Route path='/MashingOne' exact element={<ProtectedRoute><MashingOne /></ProtectedRoute>} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
          <Route path='/ResetPassword' exact element={<ResetPassword />} />
      </Routes> 
      </AnimatePresence>
      </UserAuthContextProvider>
    </div>
  )
}
