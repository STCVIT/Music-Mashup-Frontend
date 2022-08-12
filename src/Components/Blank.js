import { motion } from 'framer-motion';
import outerring2 from '../Images/outerring2.png'

export default function Blank() {
    return (
        <div>
            <motion.img
                whileHover = {{rotate:20}}
                transition = {{duration:0.4}}
                src={outerring2}
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75vh]"
            />
        </div>
    )
}