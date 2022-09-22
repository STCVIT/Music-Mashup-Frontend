import Navbar from "../Components/Navbar";
import playing_bg_circle from "../Images/playing_bg_circle.png";
import playing_cd from "../Images/playing_cd.png";
import playing_discard_btn from "../Images/playing_discard_btn.png";
import playing_download_btn from "../Images/playing_download_btn.png";
import playing_btn from "../Images/playing_btn.png";

import { motion } from "framer-motion";
import BlackScreenAnimation from "./BlackScreenAnimation";

export default function MusicPlayingOne() {
  return (
    <div>
      <BlackScreenAnimation />
      {/* <span className="block z-300"> */}
      <Navbar />
      {/* </span> */}
      <div className="h-screen w-screen bg-blackone text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <img
          src={playing_bg_circle}
          className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          alt="Play button"
        />
        <img
          src={playing_cd}
          className="sm:scale-[40%] scale-[45%]"
          alt="Playing CD"
        />
        <div className="absolute flex flex-col items-center h-[75%] justify-around sm:flex-row sm:justify-around w-full">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={playing_discard_btn}
            className=" cursor-pointer w-[6rem] md:w-[7rem]"
            alt="Discard Button"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={playing_download_btn}
            className="cursor-pointer w-[6rem] md:w-[7rem]"
            alt="Download Button"
          />
        </div>

        <motion.img
          whileHover={{ scale: 0.8 }}
          src={playing_btn}
          className="absolute cursor-pointer"
          alt="Play Button"
        />
      </div>
    </div>
  );
}
