import {Link} from "react-router-dom";
import dragdrop from '../Images/dragdrop-bg.png'
import cloud from '../Images/cloud.png'
import dustbin_inactive from '../Images/dustbin_inactive.png'
import mash_btn_inactive from '../Images/mash_btn_inactive.png'
import home_white from '../Images/home_white.png'


export default function DragDropOne() {

    return (
        <div className="bg-blackone min-w-screen min-h-screen relative overflow-hidden">
            <Link to='../LandingTwo'>
                <div className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white}/></div>
            </Link>
            <img alt = "BG Design" src={dragdrop} className="absolute"/>
            <div className = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg min-h-[50%] min-w-[50%] text-whiteone">
                <div className = "relative m-5 p-5 border-2 rounded-lg border-dashed">
                    <div className="flex flex-wrap items-center flex-col ">
                        <img alt = "Upload Cloud" src={cloud} className=" max-w-[3rem]"/>
                        <div className="">Drag and Drop Music</div>
                        <div>------ or ------</div>
                        <div className="border-2 rounded-lg px-3 py-1 align-middle hover:text-blackone hover:bg-whiteone font-extrabold">
                            Browse Music
                        </div>
                    </div>
                </div>
                <img alt = "Inactive Delete Button" src={dustbin_inactive} className="absolute right-1 bottom-1 max-w-[2rem]"/>

            </div>
            <Link to='../MashingOne'>
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%] text-blackone opacity-50 bg-whiteone border-2 px-3 py-1 rounded-lg min-w-[7rem] mx-auto my-auto text-center font-extrabold">
                            MASH
                </div>    
                </Link>  
        </div>

    )
  }
  

