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
import Navbar from "./Navbar";
import BlackScreenAnimation from "./BlackScreenAnimation";
import Help from "./Help";

export default function DragDropOne() {
  const { token } = useUserAuth();
  console.log("token in drag drop one: ", token);

  const [audioList, setAudioList] = useState([]);
  const [audioUpload, setAudioUpload] = useState(null);
  const foldername = token;
  console.log("foldername is " + foldername);
  const audioListRef = ref(storage, `${foldername}/`);

  const uploadAudio = () => {
    if (audioUpload == null) return;
    if (audioList.length > 2) {
      alert("maximum 3 songs only!");
      return;
    }
    console.log("uploading file...");
    const audioname = audioUpload.name;
    console.log("audio name: ", audioname);
    const audioRef = ref(storage, `${foldername}/${audioname}`);
    localStorage.setItem("audio-ref", JSON.stringify(audioRef));
    uploadBytes(audioRef, audioUpload).then((snapshot) => {
      console.log("uploaded: ", snapshot.metadata);
      getDownloadURL(snapshot.ref)
        .then((urll) => {
          setAudioList((prev) => [...prev, urll]);
          alert("audio uploaded to storage!");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
  };

  useEffect(() => {
    listAll(audioListRef).then((res) => {
      res.items.forEach((item) => {
        const fullname = item.fullPath;
        const audioname2 = fullname.split("/")[1];
        getDownloadURL(item).then((audiourl) => {
          setAudioList((prev) => [
            ...prev,
            {
              filename: fullname,
              name: audioname2,
              url: audiourl,
            },
          ]);
        });
      });
    });
  }, []);

  onbeforeunload = (event) => {
    event.preventDefault();
    handleDelete();
  };

  function handleDelete() {
    audioList.map((eachaudio) => {
      var audioRefDel = ref(storage, `${foldername}/${eachaudio.name}`);
      deleteObject(audioRefDel)
        .then(() => {
          console.log(`deleted ${eachaudio.name}`);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
  }

  const [helpClick, setHelpClick] = useState(0);
  function handleHelpClick() {
    setHelpClick(!helpClick);
  }

  function handleMash() {
    console.log("mash btn clicked");
    // https://mm-backend.rbsparky.repl.co/
    if (audioList) {
      fetch("https://mm-backend.rbsparky.repl.co", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(audioList),
      })
        .then(function (response) {
          console.log(response);
          if (response.ok) {
            response.json().then(function (response) {
              console.log(response);
            });
          } else {
            throw Error("encountered some error.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("nothing there to mash!");
    }
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

          <div className="displayaudio grid grid-cols-5">
            {audioList &&
              audioList.map((a) => (
                <div
                  id={a.filename}
                  className="flex flex-col align-middle text-center"
                >
                  <img src={cdadd} alt="" />
                  <div className="text-whiteone text-[0.8rem]">{a.name}</div>
                </div>
              ))}
          </div>
          <img
            onClick={handleDelete}
            alt="Inactive Delete Button"
            src={audioList ? dustbin_active : dustbin_inactive}
            className="cursor-pointer absolute right-1 bottom-1 max-w-[2rem]"
          />
        </div>

        {/* <Link to="../MashingOne"> */}
        <img
          className="md:w-[7rem] w-[6rem] absolute bottom-10 left-[50%] translate-x-[-50%]"
          src={audioList ? mash_btn_active : mash_btn_inactive}
          alt=""
          onClick={handleMash}
        />
        {/* </Link> */}
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
