import {Link} from "react-router-dom";
import dragdrop from '../Images/dragdrop-bg.png'
import cloud from '../Images/cloud.png'
import dustbin_inactive from '../Images/dustbin_inactive.png'
import dustbin_active from '../Images/dustbin_active.png'
import mash_btn_inactive from '../Images/mash_btn_inactive.png'
import mash_btn_active from '../Images/mash_btn_active.png'
import home_white from '../Images/home_white.png'
import circlesdesign from '../Images/circlesdesign.png'
import { motion } from "framer-motion";
import BlackScreenAnimation from "./BlackScreenAnimation";
import WhiteScreenAnimation from "./WhiteScreenAnimation";



export default function DragDropOne() {

    return (
<div>
            <BlackScreenAnimation/>
        <div>
            <div className="w-screen h-screen relative overflow-hidden flex">
                <Link to='../LandingTwo'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white} alt=""/></motion.div>
                </Link>
                <motion.img initial={{ y:-100}} animate={{rotate:360}} transition={{ ease: "linear", duration: 10   , repeat: Infinity }}  alt = "BG Design" src={circlesdesign} className="absolue opacity-[5%] h-96 mr-96 top-[-50%]"/>
                <div className = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg min-h-[50%] min-w-[50%] text-whiteone">
                    <div className = "relative m-5 p-5 border-2 rounded-lg border-dashed">
                        <div className="flex flex-wrap items-center flex-col ">
                            <img alt = "Upload Cloud" src={cloud} className=" max-w-[3rem]"/>
                            <div className="">Drag and Drop Music</div>
                            <div>------ or ------</div>
                            <div className="border-2 rounded-lg px-3 py-1 align-middle hover:text-blackone hover:bg-whiteone font-extrabold cursor-pointer">
                                Browse Music
                            </div>
                        </div>
                    </div>
                    <img alt = "Inactive Delete Button" src={dustbin_inactive} className="cursor-pointer absolute right-1 bottom-1 max-w-[2rem]" onMouseOver={e => (e.currentTarget.src = dustbin_active)} onMouseOut={e => (e.currentTarget.src = dustbin_inactive)}/>

                </div>
                <Link to='../MashingOne'>
                    <motion.img src={mash_btn_inactive} className="w-[7rem] absolute bottom-10 left-[50%] translate-x-[-50%] " onMouseOver={e => (e.currentTarget.src = mash_btn_active)} onMouseOut={e => (e.currentTarget.src = mash_btn_inactive)}/>
                </Link>  
            </div>
        </div>
</div>
    )
  }
  

