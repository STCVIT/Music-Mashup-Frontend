import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import BlackScreenAnimation from './BlackScreenAnimation';
import login_bg_1 from '../Images/login_bg_1.png';
import login_bg_2 from '../Images/login_bg_2.png';
import home_white from '../Images/home_white.png';
import google from '../Images/google.png'
import not_seen from '../Images/not_seen.png'
import { useUserAuth } from "../context/UserAuthContext"

export default function Login() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const { reset } = useUserAuth();
    const navigate = useNavigate()
    const handleSubmit =  async(e)=>{
        e.preventDefault();
        try{
            await reset(email)
            navigate('/Login')
        } catch(err) {
            setError(err.message);
        }
    }   


    return (
        <div>
            <BlackScreenAnimation />
            <div className="h-screen w-screen relative z-10 text-whiteone overflow-hidden flex flex-col justify-center items-center">
                <Link to='../LandingTwo'>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="absolute right-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white} alt="" /></motion.div>
                </Link>
                <div className="text-[3rem] mb-[1rem]">Reset Password</div>

                <form onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center w-[50%] my-[1rem]"
                >
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-[1.2rem] py-[0.5rem] bg-blackone text-whiteone rounded-[10px] my-[1rem] border-whiteone border w-full"
                        required>
                    </input>

                    <button type='submit' className="border-solid border-whiteone text-blackone bg-whiteone border-2 rounded-[10px] w-full px-[1.2rem] py-[0.5rem] my-[1rem] font-bold">Send password reset email</button>
                </form>
                <Link to="../Login" className="font-bold">Return to login</Link>.
                



                <motion.img animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} alt="BG Design" src={login_bg_1} className="absolute top-[-20%] left-[-10%] opacity-[5%] h-[70vh]" />
                <motion.img animate={{ rotate: -360 }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} alt="BG Design" src={login_bg_2} className="absolute bottom-[-20%] right-[-10%] opacity-[5%] h-[70vh]" />

            </div>
        </div>
    )
}