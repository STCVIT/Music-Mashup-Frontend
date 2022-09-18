import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useUserAuth } from '../context/UserAuthContext'
import home_white from "../Images/home_white.png"
import userImg from "../Images/user.png"

const Navbar = () => {

    const { user } = useUserAuth();


    return (
        <div className=''>
            <Link to='../LandingTwo'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="z-[20] absolute left-[1rem] top-[1rem] max-w-[2rem] mt-1"><img className='' src={home_white} /></motion.div>
            </Link>

            {/* <Link to='../LandingTwo'> */}
            <motion.div whileTap={{ scale: 0.9 }} className="absolute flex align-middle gap-2 right-[3rem] top-[1rem] max-w-[3rem] z-[20] mr-10"><span className="text-whiteone my-auto">{user ? user.displayName : "LogIn"}</span><img className="rounded-full" src={user ? user.photoUrl : userImg} alt=""  /></motion.div>
            {/* </Link> */}
            

            
            


        </div>
    )
}

export default Navbar