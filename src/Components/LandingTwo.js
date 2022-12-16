import { Link } from "react-router-dom";
import { useState } from "react";
import Help from "./Help";

import WhiteScreenAnimation from "./WhiteScreenAnimation";
import outerring from "../Images/outerring.png";
import outerring2 from "../Images/outerring2.png";
import innerring from "../Images/innerring.png";
import innerring2 from "../Images/innerring2.png";
import innerring3 from "../Images/innerring3.png";
import question_white from "../Images/question_white.png";
import question_fill from "../Images/question_fill.png";
import upper_semi_fill from "../Images/upper_semi_fill.png";
import lower_semi_fill from "../Images/lower_semi_fill.png";
import lower_semi_empty from "../Images/lower_semi_empty.png";
import upper_semi_empty from "../Images/upper_semi_empty.png";
import { motion } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";

export default function LandingTwo() {
  // const {tokenlist } = useUserAuth();
  // console.log("token in landing two: ", token);
  // window.onload = () => {
  //   console.log("user: ", user);
  // };

  function handleHoverUpper() {
    document.querySelector(".upper-text").classList.remove("text-whiteone");
    document.querySelector(".upper_semi").setAttribute("src", lower_semi_empty);
  }

  function removeHoverUpper() {
    document.querySelector(".upper-text").classList.add("text-whiteone");
    document.querySelector(".upper_semi").setAttribute("src", upper_semi_fill);
  }

  function handleHoverLower() {
    document.querySelector(".lower-text").classList.remove("text-whiteone");
    document.querySelector(".lower_semi").setAttribute("src", upper_semi_empty);
  }

  function removeHoverLower() {
    document.querySelector(".lower-text").classList.add("text-whiteone");
    document.querySelector(".lower_semi").setAttribute("src", lower_semi_fill);
  }

  const [helpClick, setHelpClick] = useState(0);
  function handleHelpClick() {
    setHelpClick(!helpClick);
  }

  return (
    <div>
      <WhiteScreenAnimation />
      <div className="bg-whiteone w-screen h-screen absolute overflow-hidden ">
        <img
          alt="outerring-farthest"
          src={outerring2}
          className="h-[98%] object-scale-down absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <img
          alt="outerring-dark"
          src={innerring}
          className="sm:h-[80%] w-[90%] object-scale-down absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "
        />
        <motion.img
          initial={{ x: "-50%", y: "-50%" }}
          alt="light-circle-moving-ring"
          src={innerring2}
          className="sm:h-[70%] sm:block hidden object-scale-down absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          initial={{ x: "-50%", y: "-50%" }}
          alt="dark-circle-moving-ring"
          src={innerring3}
          className=" sm:h-[65%] sm:block hidden object-scale-down absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link to="../DragDropOne">
            <div
              onMouseOver={handleHoverUpper}
              onMouseOut={removeHoverUpper}
              className="sm:w-[80%] w-[100%] object-scale-down mx-auto relative cursor-pointer"
            >
              <div className="upper-text sm:text-[18px] text-[16px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="sm:tracking-[2rem] tracking-[1rem]">MAS</span>H
              </div>
              <motion.img
                whileHover={{ rotate: 180 }}
                className="upper_semi"
                src={upper_semi_fill}
              />
            </div>
          </Link>

          <Link to="../Login">
            <div
              onMouseOver={handleHoverLower}
              onMouseOut={removeHoverLower}
              className="sm:w-[80%] w-[100%] object-scale-down mx-auto relative cursor-pointer"
            >
              <div className=" lower-text sm:text-[18px] text-[16px] text-whiteone absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="sm:tracking-[2rem] tracking-[1rem]">LOGI</span>
                N
              </div>
              <motion.img
                whileHover={{ rotate: 180 }}
                className="lower_semi"
                src={lower_semi_fill}
              />
            </div>
          </Link>
        </div>
        <motion.img
          whileHover={{ scale: 1.2 }}
          alt="Question"
          src={helpClick ? question_fill : question_white}
          onClick={handleHelpClick}
          className="z-40 absolute bottom-[1rem] right-[1rem] w-[2rem] cursor-pointer"
        />
        <div className={helpClick ? "block z-30" : "hidden"}>
          <Help />
        </div>
      </div>
    </div>
  );
}
