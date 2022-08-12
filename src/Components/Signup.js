import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import { useState } from 'react';
import BlackScreenAnimation from './BlackScreenAnimation';
import login_bg_1 from '../Images/login_bg_1.png';
import login_bg_2 from '../Images/login_bg_2.png';
import home_white from '../Images/home_white.png';
import google from '../Images/google.png'
import not_seen from '../Images/not_seen.png'

export default function Signup() {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [passconf, setPassconf] = useState('');


    return (
        <div>
            <BlackScreenAnimation/>
            <div className="h-screen w-screen relative z-10 text-whiteone overflow-hidden flex flex-col justify-center items-center">
            <Link to='../LandingTwo'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white} alt=""/></motion.div>
                </Link>
                <div className="text-[3rem] mb-[1rem]">Welcome</div>
                <button
                    className="flex flex-row justify-center items-center border-solid my-[1rem] border-whiteone border-2 rounded-[10px] w-[50%] px-[1.2rem] py-[0.5rem]"><img className="mx-[0.5rem] w-[1rem]" src={google}/>Sign up with Google</button>
                or

                <form
                    className="flex flex-col justify-center items-center w-[50%] my-[1rem]"
                    >
                <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
                className="px-[1.2rem] py-[0.5rem] bg-blackone text-whiteone rounded-[10px] my-[1rem] border-whiteone border w-full"
                required>
                </input>

                <input
                    value={pass}
                    placeholder="Password"
                    onChange={(e)=>setPass(e.target.value)}
                    required
                    className="px-[1.2rem] py-[0.5rem] bg-blackone text-whiteone rounded-[10px] my-[1rem] border-whiteone border w-full"
                ></input>

                <input
                    value={passconf}
                    placeholder="Confirm Password"
                    onChange={(e)=>setPassconf(e.target.value)}
                    required
                    className="px-[1.2rem] py-[0.5rem] bg-blackone text-whiteone rounded-[10px] my-[1rem] border-whiteone border w-full"
                ></input>

                <button className="border-solid border-whiteone text-blackone bg-whiteone border-2 rounded-[10px] w-full px-[1.2rem] py-[0.5rem] my-[1rem] font-bold">Sign Up</button>
            </form>
            Already have an account? <Link to="../Login" className="font-bold">Login in instead</Link>.
            

            <motion.img animate={{rotate:360}} transition={{ ease: "linear", duration: 10, repeat: Infinity }}  alt = "BG Design" src={login_bg_1} className="absolute top-[-20%] left-[-10%] opacity-[5%] h-[70vh]"/>
            <motion.img animate={{rotate:-360}} transition={{ ease: "linear", duration: 20, repeat: Infinity }}  alt = "BG Design" src={login_bg_2} className="absolute bottom-[-20%] right-[-10%] opacity-[5%] h-[70vh]"/>
                
            </div>
        </div>
    )
}