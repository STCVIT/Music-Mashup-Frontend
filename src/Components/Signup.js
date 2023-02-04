import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import Help from "./Help";

import BlackScreenAnimation from "./BlackScreenAnimation";
import Navbar from "./Navbar";
import Modal from "./Modal";
import google from "../Images/google.png";
import login_bg_1 from "../Images/login_bg_1.png";
import login_bg_2 from "../Images/login_bg_2.png";
import not_seen from "../Images/not_seen.png";
import question_white from "../Images/question_white.png";
import question_fill from "../Images/question_fill.png";
import axios from "axios";

export default function Signup() {
  const [modalState, setModalState] = useState({
    heading: "",
    message: "",
    show: false,
  });
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [conf_password, setConf_Password] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass == conf_password) {
      try {
        await signUp(email, conf_password);
        await createUser();
        navigate("/DragDropOne");
      } catch (err) {
        setError(err.message);
        setModalState({
          heading: "ERROR",
          message: error,
          show: true,
        });
      }
    } else {
      setError("Passwords don't match!");
      setModalState({
        heading: "ERROR",
        message: error,
        show: true,
      });
    }
  };

  function handlePasswordEye(e) {
    const passInput = document.getElementById("password");
    if (passInput.getAttribute("type") === "text") {
      passInput.setAttribute("type", "password");
    } else {
      passInput.setAttribute("type", "text");
    }
  }

  const [helpClick, setHelpClick] = useState(0);
  function handleHelpClick() {
    setHelpClick(!helpClick);
  }

  var data = JSON.stringify({
    email: email,
  });

  var config = {
    method: "post",
      url: 'https://music-mashup-backend.onrender.com/users',
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function createUser() {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <BlackScreenAnimation />
      <div className="h-screen w-screen absolute text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <Navbar />
        <Modal
          show={modalState.show}
          heading={modalState.heading}
          message={modalState.message}
          onClose={() => setModalState({ ...modalState, show: false })}
        />
        <div className="flex flex-col justify-center text-center items-center w-[80%]">
          <div className="text-2xl md:text-3xl mb-8">Welcome</div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-[45%] md:w-[70%] sm:w-[80%] w-[95%]"
          >
            <button
              // onClick={handleGoogleSignIn}
              className="bg-whiteone text-blackone font-black text-sm md:text-md py-2 rounded-md w-full"
            >
              <img className="w-[1rem] inline-flex mr-2 mb-1" src={google} />
              SIGN UP WITH GOOGLE
            </button>
            <span className="md:text-md my-4 block">or</span>
            <div className="text-left">
              <input
                type="text"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form_field bg-blackone text-whiteone md:py-2 border-whiteone border rounded-md outline-none  md:text-md px-2 py-2 w-full"
                required
              />
              <label
                forHTML="email"
                className="text-sm md:text-md px-1 bg-blackone relative bottom-[3.5rem] left-5"
              >
                Enter your Email
              </label>
              <input
                value={pass}
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form_field bg-blackone text-whiteone border-whiteone border rounded-md outline-none  px-2 py-2 w-full md:text-md"
              />

              <label
                forHTML="password"
                className="text-sm md:text-md px-1 bg-blackone relative bottom-[3.5rem] left-5"
              >
                Enter your Password
              </label>
              <img
                alt="Show Password"
                // bottom-[3.5rem] md:bottom-[3.7rem]
                className="z-10 password_eye w-[1.3rem] relative left-[90%] md:left-[93%] cursor-pointer bottom-[3.5rem]"
                src={not_seen}
                onClick={(e) => handlePasswordEye(e)}
              />
              <input
                value={conf_password}
                type="password"
                id="re_password"
                name="re_password"
                onChange={(e) => setConf_Password(e.target.value)}
                required
                className="form_field bg-blackone text-whiteone border-whiteone border rounded-md outline-none  px-2 py-2 w-full md:text-md"
              />

              <label
                forHTML="re_password"
                className="text-sm md:text-md px-1 bg-blackone relative bottom-[3.5rem] left-5"
              >
                Confirm your Password
              </label>
              {/* <img
                alt="Show Password"
                className="z-10 cursor-pointer password_eye w-[1.3rem] relative left-[90%] md:left-[93%] bottom-[3.5rem]"
                src={not_seen}
                onClick={(e) => handlePasswordEye(e)}
              /> */}
            </div>
            <button
              type="submit"
              className="bg-whiteone text-blackone font-black md:text-md text-sm py-2 rounded-md w-full"
            >
              SIGN UP
            </button>
          </form>
          <div className="md:text-md my-2">
            Already have an account?
            <Link to="../Login" className="font-bold block md:text-md my-2">
              Login instead
            </Link>
          </div>
        </div>

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
        <motion.img
          whileHover={{ scale: 1.2 }}
          alt="Question"
          src={helpClick ? question_fill : question_white}
          onClick={handleHelpClick}
          className="z-40 absolute bottom-[1rem] right-[1rem] w-[2rem] cursor-pointer"
        />
        <div className={helpClick ? "absolute block z-100" : "hidden"}>
          <Help />
        </div>
      </div>
    </div>
  );
}
