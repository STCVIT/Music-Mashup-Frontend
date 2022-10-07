import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import dragdrop from "../Images/dragdrop-bg.png";
import cloud from "../Images/cloud.png";
import dustbin_inactive from "../Images/dustbin_inactive.png";
import dustbin_active from "../Images/dustbin_active.png";
import mash_btn_inactive from "../Images/mash_btn_inactive.png";
import mash_btn_active from "../Images/mash_btn_active.png";
import question_white from "../Images/question_white.png";
import question_fill from "../Images/question_fill.png";
import cdadd from "../Images/cdadd.png";
import youtube from "../Images/youtube.png";
import { useUserAuth } from "../context/UserAuthContext";

import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import Navbar from "./Navbar";
import BlackScreenAnimation from "./BlackScreenAnimation";
import Help from "./Help";

export default function DragDropOne() {
  // const fileTypes = ["WAV"];
  // const [file, setFile] = useState(null);
  // const handleChange = (file) => {
  //   setFile(file);
  // };

  // const dragStyle=<div className="flex flex-wrap items-center flex-col justify-between h-full w-full"><img alt = "Upload Cloud" src={cloud} className=" max-w-[4rem]"/>Drag and drop your files here</div>

  const { user } = useUserAuth();
  // const [search, setSearch] = useState("");
  const [audioList, setAudioList] = useState([]);
  const [audioUpload, setAudioUpload] = useState(null);
  const audioListRef = ref(storage, "audio/");

  const uploadAudio = () => {
    if (audioUpload == null) return;
    if (audioList.length > 2) {
      alert("maximum 3 songs only!");
      return;
    }
    console.log("uploading file...");

    const audioRef = ref(storage, `audio/${audioUpload.name + "___" + v4()}`);
    localStorage.setItem("audio-ref", JSON.stringify(audioRef));
    uploadBytes(audioRef, audioUpload).then((snapshot) => {
      console.log("uploaded: ", snapshot.metadata);
      // const fullname = item.fullPath;
      // const temp = fullname.split("__")[0];
      // const audioname = temp.slice(6, temp.length);
      getDownloadURL(snapshot.ref)
        .then((urll) => {
          setAudioList((prev) => [
            ...prev,
            // {
            //   filename: fullname,
            //   name: audioname,
            //   url: urll,
            // },
            urll,
          ]);
          alert("audio uploaded!");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
  };

  useEffect(() => {
    // console.log("use effect run");
    listAll(audioListRef).then((res) => {
      res.items.forEach((item) => {
        const fullname = item.fullPath;
        const temp = fullname.split("__")[0];
        const audioname = temp.slice(6, temp.length);
        getDownloadURL(item).then((audiourl) => {
          // me - note : async await use state - read. promiseall use.
          // console.log("url:", url);
          setAudioList((prev) => [
            ...prev, // me - warning : set functions in React do not work asynchronously
            {
              filename: fullname,
              name: audioname,
              url: audiourl,
            },
          ]);
        });
      });
    });
  }, []);

  // });
  function handleDelete() {
    console.log("delete button pressed");
  }

  onbeforeunload = (event) => {
    event.preventDefault();
    // console.log("before refresh: ", event);
    audioList.map((eachAudio) => {
      var storageRef = ref(storage, eachAudio.filename);
      deleteObject(storageRef)
        .then(() => {
          console.log("deleted all files");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
  };

  const [helpClick, setHelpClick] = useState(0);
  function handleHelpClick() {
    setHelpClick(!helpClick);
  }

  return (
    <div>
      <BlackScreenAnimation />
      <Navbar />
      <div className="h-screen w-screen text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <img
          alt="BG Design"
          src={dragdrop}
          className="absolute top-0 left-[-25vh]"
        />

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg min-h-[60%] lg:w-[50%] md:w-[70%] w-[90%] text-whiteone p-5">
          {/* Button for searching on Youtube */}
          <Link to="/YTfeature">
            <div className="border-2 border-whiteone rounded-md flex px-[0.5rem] py-[0.5rem] mb-[1rem]  text-whiteone hover:bg-whiteone hover:text-blackone duration-[800ms] cursor-pointer">
              <img
                src={youtube}
                className="sm:w-[1.5rem] max-h-[1.2rem] my-auto mx-2"
              />
              Get Music from Youtube
            </div>
          </Link>
          {/* <form className="justify-between bg-whiteone text-blackone px-[0.5rem] py-[0.5rem] mb-[1rem] rounded-md flex">
            <img
              src={youtube}
              className="sm:w-[1.5rem] max-h-[1.2rem] my-auto mx-2"
              alt=""
            />
            <input
              type="text"
              value={search}
              placeholder="Get music from Youtube"
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm md:text-lg font-black outline-none bg-whiteone text-blackone w-[75%]"
            ></input>
            <img
              src={search_black}
              className="max-w-[1.5rem] max-h-[1.2rem] my-auto mx-2"
              alt=""
            />
          </form> */}

          {/* The Uploading Arena */}

          <div className="flex flex-col font-bold align-middle text-center justify-center">
            <input
              type="file"
              accept=".wav, .mp3"
              onChange={(event) => {
                setAudioUpload(event.target.files[0]);
              }}
            />

            <button
              onClick={uploadAudio}
              className="my-5 mx-[30%] border-whiteone border-2 hover:bg-whiteone hover:text-blackone rounded-lg px-2 py-1 text-white font-bold text-sm sm:text-md"
            >
              Upload Audio
            </button>
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

          <div className="displayaudio grid grid-cols-5">
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
                  <img src={cdadd} alt="" />
                  <div className="text-whiteone text-[0.8rem]">{a.name}</div>
                </div>
              ))}
          </div>
          <img
            onClick={handleDelete}
            alt="Inactive Delete Button"
            src={audioList ? dustbin_inactive : dustbin_active}
            // src={dustbin_inactive}
            className="cursor-pointer absolute right-1 bottom-1 max-w-[2rem]"
          />
        </div>

        <Link to="../MashingOne">
          <img
            className="md:w-[7rem] w-[6rem] absolute bottom-10 left-[50%] translate-x-[-50%]"
            src={audioList.length === 0 ? mash_btn_inactive : mash_btn_active}
            alt=""
          />
        </Link>
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
