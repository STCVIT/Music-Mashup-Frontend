import {Link} from "react-router-dom";
import Ripple from "../Components/RippleAnimation";
import RippleAnimations from "../Components/RippleAnimation";
import { motion } from "framer-motion";

import pageone_circle from '../Images/pageone_circle.png'

export default function LandingOne() {
    return (
            
            <motion.div
            className="min-w-screen min-h-screen bg-blackone flex">                            
                <Link to='./LandingTwo' className="m-auto z-20">
                {/* <Link to='./Blank' className="m-auto z-20"> */}
                <motion.img
                src={pageone_circle}
                className="max-h-[2rem] max-w-[2rem]"
                whileHover={{
                    scale: [1,2,2],
                    rotate: [0,0,270]
                }}
                transition={{
                    duration: 0.5
                }}
                />
                </Link>
                    
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <RippleAnimations/>
                    </div>
                    
                    
            </motion.div>
            
    )

  }