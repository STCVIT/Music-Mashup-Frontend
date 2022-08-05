import {Link} from "react-router-dom";
import playing_bg_circle from '../Images/playing_bg_circle.png'
import playing_cd from '../Images/playing_cd.png'
import playing_discard_btn from '../Images/playing_discard_btn.png'
import playing_download_btn from '../Images/playing_download_btn.png'
import playing_btn from '../Images/playing_btn.png'
import home_white from '../Images/home_white.png'


export default function MusicPlayingOne() {

    return (
        <div className="bg-blackone min-w-screen min-h-screen relative overflow-hidden">
            <Link to='../LandingTwo'>
                <div className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white}/></div>
            </Link>
            <img src={playing_bg_circle} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <img src={playing_cd} className="scale-[35%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <img src={playing_discard_btn} className="absolute top-[50%] left-[20%] translate-y-[-50%] max-w-[7rem]"/>
            <img src={playing_download_btn} className="absolute top-[50%] right-[20%] translate-y-[-50%] max-w-[7rem]"/>
            <img src={playing_btn} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>

        </div>

    )
  }
  

