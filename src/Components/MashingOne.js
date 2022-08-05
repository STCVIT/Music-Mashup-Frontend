import {Link} from "react-router-dom";
import mashing_cd from '../Images/mashing_cd.png'
import home_black from '../Images/home_black.png'


export default function MashingOne() {

    return (
        <div className="bg-whiteone min-w-screen min-h-screen relative overflow-hidden text-blackone">
            <Link to='../LandingTwo'>
                <div className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_black}/></div>
            </Link>
            <Link to='../MusicPlayingOne'>
                <img src={mashing_cd} className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  max-w-[15%]"/>
                <div className="absolute bottom-[25%] left-[50%] translate-x-[-50%] font-extrabold">Hold on while we mash ...</div>
            </Link>
        </div>
    )
  }
  

//   absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 