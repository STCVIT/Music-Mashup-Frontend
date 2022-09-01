import { Link } from "react-router-dom"

import WhiteScreenAnimation from './WhiteScreenAnimation';
import outerring from '../Images/outerring.png'
import outerring2 from '../Images/outerring2.png'
import innerring from '../Images/innerring.png'
import innerring2 from '../Images/innerring2.png'
import innerring3 from '../Images/innerring3.png'
import question_empty from '../Images/question_empty.png'
import question_fill from '../Images/question_fill.png'
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
        <div>
            <WhiteScreenAnimation />
            <div
                className="bg-whiteone w-screen h-screen overflow-hidden">
                {/* <motion.div animate={{
                scale:[0,1],
                opacity:[0,1],
                y:[1000,500]
                }}
                transition={{duration:1}}>  */}
                <div className="overflow-hidden">

                    <img
                        alt="Outer Ring"
                        src={outerring2}
                        className="absolute opacity-[70%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100vh] h-[100vh]"
                    />
                    <motion.img
                        initial={{ x: "-50%", y: "-50%" }}
                        // whileHover={{ rotate: 15 }}   
                        animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity }}
                        // onMouseEnter={handleRotate}
                        alt="Inner Ring"
                        src={innerring2}
                        className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60vh] h-[60vh] "
                    />
                    <motion.img
                        initial={{ x: "-50%", y: "-50%" }}   
                        animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity }}
                        alt="Inner Ring"
                        src={innerring3}
                        className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57vh] h-[57vh]"
                    />

                    <img
                        alt="Inner Ring" src={innerring}
                        className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[75vh] "
                    />
                    <Link to="../Help">
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            alt="Question" src={question_empty}
                            className="absolute bottom-[1rem] right-[1rem] h-[2rem] w-[2rem] cursor-pointer"
                        />
                    </Link>


                    <div
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[40vh] w-[40vh] text-blackone">

                        <Link to='../DragDropOne'>
                            <div
                                onMouseOver={handleHoverUpper}
                                onMouseOut={removeHoverUpper}

                                className="relative cursor-pointer">
                                <div className=" upper-text text-[24px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <span className="tracking-[2rem]">MAS</span>H
                                </div>
                                <motion.img
                                    whileHover={{ rotate: 180 }}
                                    className="upper_semi" src={upper_semi_fill} />
                            </div>
                        </Link>

                        <Link to='../Login'>
                            <div
                                onMouseOver={handleHoverLower}
                                onMouseOut={removeHoverLower}

                                className="relative cursor-pointer">
                                <div className=" lower-text text-[24px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <span className="tracking-[2rem]">LOGI</span>N
                                </div>
                                <motion.img
                                    whileHover={{ rotate: 180 }}
                                    className="lower_semi" src={lower_semi_fill} />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}


