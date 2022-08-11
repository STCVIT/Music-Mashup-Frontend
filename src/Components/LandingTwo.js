import { Link } from "react-router-dom"

import outerring from '../Images/outerring.png'
import innerring from '../Images/innerring.png'
import upper_semi_fill from '../Images/upper_semi_fill.png'
import lower_semi_fill from '../Images/lower_semi_fill.png'
import lower_semi_empty from '../Images/lower_semi_empty.png'
import upper_semi_empty from '../Images/upper_semi_empty.png'
import { motion } from "framer-motion";

export default function LandingTwo() {

    function handleHoverUpper() {
        document.querySelector('.upper-text').classList.remove('text-whiteone');
        document.querySelector('.upper_semi').setAttribute('src', lower_semi_empty);
    }

    function removeHoverUpper() {
        document.querySelector('.upper-text').classList.add('text-whiteone');
        document.querySelector('.upper_semi').setAttribute('src', upper_semi_fill);
    }

    function handleHoverLower() {
        document.querySelector('.lower-text').classList.remove('text-whiteone');
        document.querySelector('.lower_semi').setAttribute('src', upper_semi_empty);
    }

    function removeHoverLower() {
        document.querySelector('.lower-text').classList.add('text-whiteone');
        document.querySelector('.lower_semi').setAttribute('src', lower_semi_fill);
    }

    // flex justify-center align-middle

    return (
        <div className="bg-whiteone w-screen h-screen overflow-clip">
             {/* <motion.div animate={{
                scale:[0,1],
                opacity:[0,1],
                y:[1000,500]
                }}
                transition={{duration:1}}>  */}

                <motion.div>
                <img alt = "Outer Ring" src={outerring} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh]"/>
                <img alt = "Inner Ring" src={innerring} className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80vh] "/>
                <img alt = "Inner Ring" src={innerring} className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[75vh] "/>



                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[40vh] w-[40vh] text-blackone">
                    
                    <Link to='../DragDropOne'>
                        <div               
                            onMouseOver={handleHoverUpper}
                            onMouseOut={removeHoverUpper}

                            className="relative cursor-pointer">
                            <div className=" upper-text text-[24px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <span className = "tracking-[2rem]">MAS</span>H
                            </div>
                            <motion.img
                            whileHover = {{rotate: 180}}
                            className = "upper_semi" src={upper_semi_fill}/>
                        </div>
                    </Link>

                    <Link to='@'>
                        <div               
                            onMouseOver={handleHoverLower}
                            onMouseOut={removeHoverLower}

                            className="relative cursor-pointer">
                            <div className=" lower-text text-[24px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <span className = "tracking-[2rem]">LOGI</span>N
                            </div>
                            <motion.img
                            whileHover = {{rotate: 180}}
                            className = "lower_semi" src={lower_semi_fill}/>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
  }
  

