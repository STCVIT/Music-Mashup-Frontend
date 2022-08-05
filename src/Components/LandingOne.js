import {Link} from "react-router-dom";
import Ripple from "../Components/RippleAnimation";
import RippleAnimations from "../Components/RippleAnimation";

import pageone_circle from '../Images/pageone_circle.png'

export default function LandingOne() {
    return (
            <div className="min-w-screen min-h-screen bg-blackone relative overflow-hidden">
                
                <div className="no-underline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <RippleAnimations/>
                </div>
                <Link to='./LandingTwo'>
                    <img src={pageone_circle} className = "max-w-[2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
                </Link>
            </div>
    )

  }
  