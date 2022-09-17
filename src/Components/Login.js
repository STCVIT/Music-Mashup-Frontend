import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BlackScreenAnimation from "./BlackScreenAnimation";
import login_bg_1 from "../Images/login_bg_1.png";
import login_bg_2 from "../Images/login_bg_2.png";
import notseen from "../Images/not_seen.png";
import home_white from "../Images/home_white.png";
import google from "../Images/google.png";
import not_seen from "../Images/not_seen.png";
import seen from "../Images/seen.png";
import { useUserAuth } from "../context/UserAuthContext";
import user from "../Images/user.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/DragDropOne");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/DragDropOne");
    } catch (err) {
      setError(err.message);
    }
  };

  function handlePasswordEye() {
    // console.log("in handle password eye function");
    const passInput = document.getElementById("password");

    if (passInput.getAttribute("type") === "text") {
      passInput.setAttribute("type", "password");
    } else {
      passInput.setAttribute("type", "text");
    }
  }

  return (
    <div>
      <BlackScreenAnimation />
      <div className="h-screen w-screen relative z-10 text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <Link to="../LandingTwo">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-[1rem] top-[1rem] max-w-[2rem] z-[20]"
          >
            <img src={home_white} alt="" />
          </motion.div>
        </Link>
        <div className="text-[3rem] mb-[1rem]">Welcome Back</div>
        <button
          onClick={handleGoogleSignIn}
          className="flex flex-row justify-center items-center border-solid my-[1rem] border-whiteone border-2 rounded-[10px] w-[30%] px-[1.2rem] py-[0.5rem] bg-whiteone font-bold text-blackone transition ease-in-out"
        >
          <img className="mx-[0.5rem] w-[1rem]" src={google} />
          SIGN IN WITH GOOGLE
        </button>
        or
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-[30%] my-[1rem]"
        >
          <div className="relative w-full bg-blackone">
            <input
              type="text"
              value={email}
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-[1.2rem] py-[0.8rem] rounded-[10px] bg-blackone text-whiteone my-[1rem] border-whiteone border outline-none w-full form_field"
              required
            />
            <label
              for="email"
              className="absolute rounded-lg left-[50px] px-2 z-10 bg-blackone"
            >
              Enter your Email
            </label>
          </div>

          <div className="relative w-full bg-blackone">
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-[1.2rem] py-[0.8rem] rounded-[10px] bg-blackone text-whiteone my-[1rem] border-whiteone border outline-none w-full form_field"
            />
            <label
              for="password"
              className="absolute rounded-lg left-[50px] z-10 px-2 bg-blackone"
            >
              Enter your Password
            </label>
            <Link
              to="../ResetPassword"
              className="text-[0.8rem] align-top ml-[80%]"
            >
              Reset Password
            </Link>
            <img
              alt="Show Password"
              className="password_eye absolute max-w-[1.5rem] top-[30%] right-[20px] "
              src={not_seen}
              onClick={handlePasswordEye}
            />
          </div>

          <button
            type="submit"
            className="border-solid border-whiteone text-blackone bg-whiteone border-2 rounded-[10px] w-full px-[1.2rem] py-[0.5rem] my-[1rem] font-bold"
          >
            SIGN IN
          </button>
        </form>
        Haven't signed up yet?{" "}
        <Link to="../Signup" className="font-bold">
          Create an account
        </Link>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          alt="BG Design"
          src={login_bg_1}
          className="absolute top-[-20%] left-[-10%] opacity-[5%] h-[70vh]"
        />
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          alt="BG Design"
          src={login_bg_2}
          className="absolute bottom-[-20%] right-[-10%] opacity-[5%] h-[70vh]"
        />
      </div>
    </div>
  );
}
