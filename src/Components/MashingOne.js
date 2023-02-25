import { Link } from "react-router-dom";
import mashing_cd from "../Images/mashing_cd.png";
import { motion } from "framer-motion";
import WhiteScreenAnimation from "./WhiteScreenAnimation";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

export default function MashingOne({ linkList, foldername }) {
  const navigate = useNavigate();
  // console.log("url recieved: ", songUrl);
  // setTimeout(() => {
  //   navigate("/MusicPlayingOne");
  // }, 3000);

  const [modalState, setModalState] = useState({
    heading: "",
    message: "",
    show: false,
  });

  const base_link =
    "http://ec2-54-238-72-104.ap-northeast-1.compute.amazonaws.com:8000/";

  console.log("linkList: ", linkList);
  console.log("foldername: ", foldername);

  fetch(base_link, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    // body: JSON.stringify(audioList),
    body: JSON.stringify(linkList),
  })
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (response) {
          console.log("recieved: " + response);
          navigate("/MusicPlayingOne");
        });
      } else {
        throw Error("encountered some error.");
      }
    })
    .catch(function (error) {
      setModalState({
        heading: "ERROR",
        message: error,
        show: true,
      });
    });

  return (
    <div>
      <WhiteScreenAnimation />
      <Modal
        show={modalState.show}
        heading={modalState.heading}
        message={modalState.message}
        onClose={() => setModalState({ ...modalState, show: false })}
      />
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
