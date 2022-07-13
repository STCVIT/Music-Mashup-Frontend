import {Link} from "react-router-dom";

import outerring from '../Images/outerring.png'
import innerring from '../Images/innerring.png'
import upper_semi_fill from '../Images/upper_semi_fill.png'
import lower_semi_fill from '../Images/lower_semi_fill.png'

export default function LandingTwo() {

    


    return (
        <div className="bg-whiteone min-w-screen min-h-screen relative overflow-hidden">
            <img alt = "Outer Ring" src={outerring} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <img alt = "Inner Ring" src={innerring} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img alt = "Upper Filled" src={upper_semi_fill} className="relative"/>
                <img alt = "Lower Filled" src={lower_semi_fill} className="relative"/>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                <div className="text-[24px] text-whiteone">
                    <span className = "tracking-[4rem]">MAS</span>H
                </div>
                <div className = "text-[100px] text-blackone">
                    <span className = "tracking-[8rem]">MU<span className="text-whiteone">SMA</span>S</span>H
                </div>
                <div className="text-[24px] text-whiteone">
                    <span className="tracking-[4rem]">LOGI</span>N
                </div>
            </div>
        </div>
    )
  }
  

