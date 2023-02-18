import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BlackScreenAnimation from "./BlackScreenAnimation";
import login_bg_1 from "../Images/login_bg_1.png";
import login_bg_2 from "../Images/login_bg_2.png";
// import home_white from "../Images/home_white.png";
// import google from "../Images/google.png";
// import not_seen from "../Images/not_seen.png";
import { useUserAuth } from "../context/UserAuthContext";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { reset } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reset(email);
      navigate("/Login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <BlackScreenAnimation />
      <div className="h-screen w-screen absolute text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <div className="text-2xl md:text-[2.5rem] mb-8">Reset Password</div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-[45%] md:w-[70%] sm:w-[80%] w-[95%]"
        >
          <div className="text-left">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form_field bg-blackone text-whiteone md:py-2 border-whiteone border rounded-md outline-none  md:text-xl px-2 py-2 w-full"
              required
            ></input>
            <label
              forHTML="password"
              className="text-sm md:text-lg bg-blackone relative bottom-[3.45rem] md:bottom-[3.8rem] left-5"
            >
              Enter your Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-whiteone text-blackone font-black text-sm md:text-lg py-2 rounded-md w-full"
          >
            Send Password Reset Email
          </button>
        </form>
        <Link to="../Login" className="font-bold block md:text-xl my-2">
          Return to login
        </Link>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          alt="BG Design"
          src={login_bg_1}
          className="absolute top-[-20%] left-[-10%] opacity-[5%]  md:w-[50vh] w-[40vh]"
        />
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          alt="BG Design"
          src={login_bg_2}
          className="absolute bottom-[-10%] right-[-10%] opacity-[5%] md:w-[70vh] w-[50vh]"
        />
      </div>
    </div>
  );
}
