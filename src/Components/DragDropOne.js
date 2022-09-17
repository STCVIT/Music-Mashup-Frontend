import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import dragdrop from "../Images/dragdrop-bg.png";
import cloud from "../Images/cloud.png";
import dustbin_inactive from "../Images/dustbin_inactive.png";
import mash_btn_inactive from "../Images/mash_btn_inactive.png";
import home_white from "../Images/home_white.png";
import search_black from "../Images/search_black.png";
import cdadd from "../Images/cdadd.png";
import { useUserAuth } from "../context/UserAuthContext";

import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import BlackScreenAnimation from "./BlackScreenAnimation";

export default function DragDropOne() {
  // const fileTypes = ["WAV"];
  // const [file, setFile] = useState(null);
  // const handleChange = (file) => {
  //   setFile(file);
  // };

  // const dragStyle=<div className="flex flex-wrap items-center flex-col justify-between h-full w-full"><img alt = "Upload Cloud" src={cloud} className=" max-w-[4rem]"/>Drag and drop your files here</div>

  const { user } = useUserAuth();
  const [search, setSearch] = useState("");
  const [audioList, setAudioList] = useState([]);
  const [audioUpload, setAudioUpload] = useState(null);
  const audioListRef = ref(storage, "audio/");

  const uploadAudio = () => {
    if (audioUpload == null) return;
    if (audioList.length > 3) {
      alert("maximum 3 songs only!");
      return;
    }

    const audioRef = ref(storage, `audio/${audioUpload.name + "___" + v4()}`);
    uploadBytes(audioRef, audioUpload).then((snapshot) => {
      getDownloadURL(snapshot).then((url) => {
        setAudioList((prev) => [...prev, url]);
        alert("audio uploaded!");
      });
    });
  };

  useEffect(() => {
    listAll(audioListRef).then((res) => {
      res.items.forEach((item) => {
        const temp = item.fullPath.split("__")[0];
        const audioname = temp.slice(6, temp.length);
        getDownloadURL(item).then((audiourl) => {
          // async await use state - read. promiseall use.
          //   console.log("url:", url);
          setAudioList((prev) => [
            ...prev, // set functions do not work asynchronously
            {
              name: audioname,
              url: audiourl,
            },
          ]);
        });
      });
    });
  }, []);

  //   const b = document.querySelector(".mash-btn").classList;

  return (
    <div>
      <BlackScreenAnimation />

      <div className="bg-blackone min-w-screen min-h-screen relative overflow-hidden">
        <Link to="../LandingTwo">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="z-[20] absolute left-[1rem] top-[1rem] max-w-[2rem]"
          >
            <img src={home_white} />
          </motion.div>
        </Link>

        {/* <Link to='../LandingTwo'> */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute flex align-middle gap-2 right-0 top-[1rem] z-[20] "
        >
          <span className="text-whiteone my-auto">
            {user ? user.displayName : "LogIn"}
          </span>
          <img
            className="rounded-full w-[30%] h-[30%]"
            src={`${user.photoURL}`}
            alt="user img"
          />
        </motion.div>
        {/* </Link> */}
        {/* user ? userImg : user.photoURL */}

        <img alt="BG Design" src={dragdrop} className="absolute" />

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg min-h-[75%] min-w-[50%] text-whiteone">
          {/* Search on Youtube */}

          <form className="bg-whiteone text-blackone px-[0.5rem] py-[0.2rem] my-[2%] mx-[5%] rounded-lg flex flex-wrap">
            <img
              src={search_black}
              className="max-w-[1.5rem] max-h-[1.2rem] my-auto mr-[1rem]"
            />
            <input
              type="text"
              value={search}
              placeholder="Browse on web"
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-whiteone px-[0.5rem] text-blackone w-[75%]"
            ></input>
          </form>

          {/* The Uploading Arena */}

          {/* <div className="relative m-[5%] py-[5rem] border-2 rounded-lg border-dashed cursor-pointer"> */}
          <div className="flex justify-center">
            <input
              type="file"
              accept=".wav, .mp3"
              onChange={(event) => {
                setAudioUpload(event.target.files[0]);
              }}
            />
          </div>

          {/* <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        multiple={true}
                        hoverTitle="Drop Here"
                        minSize={2}
                        // children={dragStyle}
                    /> */}
          {/* </div> */}
          <div className="displayaudio grid grid-cols-4">
            {audioList &&
              audioList.map((a) => (
                <div className="flex flex-col align-middle text-center">
                  {/* {console.log(a)} */}
                  {/* <audio
                  className="my-5"
                  controls
                  src={a.url}
                  type="audio/wav"
                ></audio> */}
                  <img src={cdadd} />
                  <div className="text-[0.8rem]">{a.name}</div>
                </div>
              ))}
          </div>

          <img
            alt="Inactive Delete Button"
            src={dustbin_inactive}
            className="absolute right-1 bottom-1 max-w-[2rem]"
          />

          <button
            onClick={uploadAudio}
            className="absolute border-whiteone border-2 hover:bg-whiteone hover:text-blackone bottom-1 left-1 rounded-lg px-2 py-1 text-white font-bold"
          >
            Upload Audio
          </button>
        </div>

        <Link to="../MashingOne">
          <div className="mash-btn absolute bottom-10 left-[50%] translate-x-[-50%] text-blackone bg-whiteone border-2 px-3 py-1 rounded-lg min-w-[7rem] mx-auto my-auto text-center font-extrabold">
            {/* {console.log(b)} */}
            {/* {audioList.length === 0 && b.classList.add("opacity-50")} */}
            {audioList.length === 0 ? `CAN'T MASH` : `MASH`}
          </div>
        </Link>
      </div>
    </div>
  );
}
