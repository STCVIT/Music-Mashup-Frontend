import { Route, Routes } from 'react-router-dom';
import LandingOne from './Components/LandingOne'
import LandingTwo from './Components/LandingTwo'
import LandingThree from './Components/LandingThree'
import LandingFour from './Components/LandingFour'
import DragDropOne from './Components/DragDropOne'
import MusicPlayingOne from './Components/MusicPlayingOne'
import MashingOne from './Components/MashingOne'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<LandingOne />} />
        <Route path='/LandingTwo' exact element={<LandingTwo />} />
        <Route path='/LandingThree' exact element={<LandingThree />} />
        <Route path='/LandingFour' exact element={<LandingFour />} />
        <Route path='/DragDropOne' exact element={<DragDropOne />} />
        <Route path='/MusicPlayingOne' exact element={<MusicPlayingOne />} />
        <Route path='/MashingOne' exact element={<MashingOne />} />
      </Routes>  
      
    </div>
  )
}
