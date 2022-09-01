import { Link } from "react-router-dom"

import outerring from '../Images/outerring.png'
import outerring2 from '../Images/outerring2.png'
import innerring from '../Images/innerring.png'
import innerring2 from '../Images/innerring2.png'
import question_empty from '../Images/question_empty.png'
import question_fill from '../Images/question_fill.png'
import upper_semi_fill from '../Images/upper_semi_fill.png'
import lower_semi_fill from '../Images/lower_semi_fill.png'
import help_content from '../Images/help_content.png'
import help_cross from '../Images/help_cross.png'
import { motion } from "framer-motion";

export default function Help() {
    return (
        <div>

            <motion.div
                initial={{x:"-50%",y:"-50%"}}
                animate={{scale:[0,0.8]}}
                transition={{duration:0.5}}

                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] z-10">
                <img
                    alt=""
                    src={help_content}
                />
                <Link to='../LandingTwo'>
                    <motion.img whileHover={{ scale: 1.2 }} className="cursor-pointer absolute top-[15%] right-[1rem] w-[2rem]"
                        src={help_cross}
                    />
                </Link>
            </motion.div>

            <Link to="../LandingTwo">
                <img
                    alt="Question" src={question_fill}
                    className="absolute bottom-[1rem] right-[1rem] h-[2rem] w-[2rem] cursor-pointer"
                />
            </Link>

        </div>
    )
}


