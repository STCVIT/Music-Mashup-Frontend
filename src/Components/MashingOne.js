import { Link } from "react-router-dom";
import mashing_cd from "../Images/mashing_cd.png";
import { motion } from "framer-motion";
import WhiteScreenAnimation from "./WhiteScreenAnimation";
import { useNavigate } from "react-router-dom";
export default function MashingOne({ songUrl }) {
  const navigate = useNavigate();
  console.log("url recieved: ", songUrl);
  setTimeout(() => {
    navigate("/MusicPlayingOne");
  }, 3000);

  return (
    <div>
      <WhiteScreenAnimation />
      <div className=" min-w-screen min-h-screen relative overflow-hidden text-blackone flex flex-col justify-center items-center">
        <Link to="../MusicPlayingOne">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
            src={mashing_cd}
            className="m-auto w-[15rem]"
            alt="Rotating CD"
          />
          <div className="absolute bottom-[25%] left-[50%] translate-x-[-50%] font-extrabold text-[1.2rem]">
            Hold on while we mash ...
          </div>
        </Link>
      </div>
    </div>
  );
}

//   absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
