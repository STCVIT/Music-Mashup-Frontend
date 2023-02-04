import Navbar from "../Components/Navbar";
import playing_bg_circle from "../Images/playing_bg_circle.png";
import playing_cd from "../Images/playing_cd.png";
import playing_discard_btn from "../Images/playing_discard_btn.png";
import playing_download_btn from "../Images/playing_download_btn.png";
import playing_btn from "../Images/playing_btn.png";
import { motion } from "framer-motion";
import BlackScreenAnimation from "./BlackScreenAnimation";
import Modal from "./Modal";
import axios from "axios";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MusicPlayingOne({ setSongUrl, songUrl }) {
  console.log("url recieved: ", songUrl);
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const [modalState, setModalState] = useState({
    heading: "",
    message: "",
    show: false,
  });

  const peepeepoopoo = "peepeepoopoo"

  var data = JSON.stringify({
    link: peepeepoopoo,
  });

  var config = {
    method: "post",
    url: `https://music-mashup-backend.onrender.com/remixedsongs/${user.email}`,  
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  function saveSong() {
    console.log("song saved in profile.");
    //will be completed after backend is hosted.

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function downloadSong() {
    console.log("downloaded song.");
  }

  function discardSong() {
    setSongUrl("");
    console.log("discarded song.");
    setModalState({
      heading: "DISCARDED",
      message: "The song has been discarded.",
      show: true,
    });
    setTimeout(() => {
      setModalState({ ...modalState, show: false });
    }, 3000);
    navigate("/LandingTwo");
  }

  return (
    <div>
      <BlackScreenAnimation />
      <Navbar />
      <Modal
        show={modalState.show}
        heading={modalState.heading}
        message={modalState.message}
        onClose={() => setModalState({ ...modalState, show: false })}
      />
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
        <div className="absolute flex flex-col items-center h-[75%] justify-around sm:flex-row sm:justify-around w-full z-30">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={playing_discard_btn}
            className=" cursor-pointer w-[6rem] md:w-[7rem]"
            alt="Discard Button"
            onClick={discardSong}
          />
          <a target="_blank" href={songUrl}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={playing_download_btn}
              className="cursor-pointer w-[6rem] md:w-[7rem]"
              alt="Download Button"
              onClick={downloadSong}
            />
          </a>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={playing_discard_btn}
            className="cursor-pointer w-[6rem] md:w-[7rem]"
            alt="SAVE Button"
            onClick={saveSong}
          />
        </div>
        <div className="absolute flex items-center h-[75%] sm:flex-row sm:justify-around w-full top-[40%]">
          
        </div>

        <motion.img
          whileHover={{ scale: 0.8 }}
          src={playing_btn}
          className="absolute cursor-pointer"
          alt="Play Button"
        />
      </div>
      <audio controls display>
        <source src={songUrl} type="audio/ogg"></source>
      </audio>
    </div>
  );
}
