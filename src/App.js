import { Route, Routes } from 'react-router-dom';
import LandingOne from './Components/LandingOne'
import LandingTwo from './Components/LandingTwo'
import LandingThree from './Components/LandingThree'
import LandingFour from './Components/LandingFour'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<LandingOne />} />
        <Route path='/LandingTwo' exact element={<LandingTwo />} />
        <Route path='/LandingThree' exact element={<LandingTwo />} />
        <Route path='/LandingFour' exact element={<LandingTwo />} />
      </Routes>      
    </div>
  )
}
