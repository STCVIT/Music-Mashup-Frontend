import { useState, useEffect } from "react";
// import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import dragdrop from "../Images/dragdrop-bg.png";
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
import { useNavigate } from "react-router-dom";
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
import Modal from "./Modal";

export default function DragDropOne({ setSongUrl }) {
  const navigate = useNavigate();
  const { tokenlist, user } = useUserAuth();
  const [modalState, setModalState] = useState({
    heading: "",
    message: "",
    show: false,
  });

  const [audioList, setAudioList] = useState([]);
  const [audioUpload, setAudioUpload] = useState(null);
  const foldername = tokenlist[tokenlist.length - 1];
  if (user.email && tokenlist.length > 1) {
    handleTransfer(tokenlist[tokenlist.length - 2], foldername);
  }

  // ------------- FETCHING DATA FROM THE FOLDER -------------

  useEffect(() => {
    setAudioList([]);
    const audioListRef = ref(storage, `${foldername}/`);
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

  const uploadAudio = () => {
    if (!audioUpload == 0) {
      setModalState({
        heading: "ERROR",
        message: "Can't upload NULL!",
        show: true,
      });
    }

    setModalState({
      show: true,
      heading: "Please wait!",
      message: "Your music's gettin' uploaded...",
    });
    if (audioUpload == null) {
      setModalState({
        heading: "ALERT",
        message: "No songs uploaded!",
        show: true,
      });
      setTimeout(() => {
        setModalState({ ...modalState, show: false });
      }, 3000);
    } else {
      // console.log(
      //   "audio upload stores: " + audioUpload + " | type: " + typeof audioUpload
      // );
      const audioRef = ref(storage, `${foldername}/${audioUpload.name}`);
      uploadBytes(audioRef, audioUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((urll) => {
            setAudioList((prev) => [...prev, urll]);
            setModalState({
              heading: "GREAT!",
              message: "Music uploaded to storage",
              show: true,
            });
          })
          .catch((error) => {
            setModalState({
              heading: "ERROR",
              message: "" + error,
              show: true,
            });
            // console.log("error: ", error);
          });
      });
    }

    // if (audioList.length > 2) {
    //   showboard.innerText = "UPLOADING";
    //   return;
    // }
  };

  // ------------- Delete Audios -------------

  // onbeforeunload = (event) => {
  //   event.preventDefault();
  //   try {
  //     tokenlist.forEach((usertoken)=>{
  //       handleDelete(usertoken);
  //     })
  //   } catch {
  //     console.log("faced errors in deleting");
  //   }

  // };

  function handleDelete(userfoldername = foldername) {
    // console.log("foldername: ", userfoldername);
    if (audioList.length == 0) {
      setModalState({
        heading: "ERROR",
        message: "Can't delete NULL!",
        show: true,
      });
      return;
    } else {
      audioList.map((eachaudio) => {
        var audioRefDel = ref(storage, `${userfoldername}/${eachaudio.name}`);
        // console.log("audioRefDel: ", audioRefDel);
        deleteObject(audioRefDel)
          .then(() => {
            // console.log(`deleted ${eachaudio.name}`);
          })
          .catch((error) => {
            // console.log("error in deletion: ", error);
            setModalState({
              heading: "ERROR",
              message: "" + error,
              show: true,
            });
          });
      });
    }

    window.location.reload();
  }

  function handleTransfer(userfoldername1, userfoldername2) {
    // console.log("in handle transfer function");
    const audioListRef1 = ref(storage, `${userfoldername1}/`);

    listAll(audioListRef1).then((res) => {
      res.items.forEach((item) => {
        // console.log("item: "+item+" type: "+typeof(item));
        const audioListRef22 = ref(storage, `${userfoldername2}/${item.name}`);
        uploadBytes(audioListRef22, item)
          .then((snapshot) => {
            console.log("transfered: ", snapshot.metadata);
          })
          .catch((error) => {
            setModalState({
              heading: "ERROR",
              message: "" + error,
              show: true,
            });
            // console.log("error: ", error);
          });
      });
    });

    handleDelete(userfoldername1);
  }

  const [helpClick, setHelpClick] = useState(0);

  function handleHelpClick() {
    setHelpClick(!helpClick);
  }

  function handleMash() {
    console.log("mash btn clicked");

    // const recieved_url =
    //   "https://archive.org/download/Creative_Commons_Song_MP3/creativecommonssong.mp3";
    // setSongUrl(recieved_url);
    // navigate("/MashingOne");

    // server link: http://ec2-54-238-72-104.ap-northeast-1.compute.amazonaws.com:8000/


    // -----------------------------------
    if (audioList.length == 0) {
      setModalState({
        heading: "ERROR",
        message: "Can't mash NULL!",
        show: true,
      });
      return;
    }
    // https://mm-backend.rbsparky.repl.co/
    if (audioList) {
      fetch("http://ec2-54-238-72-104.ap-northeast-1.compute.amazonaws.com:8000/", {
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
              console.log("recieved: " + response);
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
    }
    // -----------------------------------
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
          {/* <div
            className={
              (!loader ? "hidden " : "") +
              "w-full h-[10vh] bg-whiteone rounded-md flex items-center justify-center text-blackone font-bold"
            }
            id="showboard"
          ></div> */}

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
            onClick={() => handleDelete(foldername)}
            alt="Delete Button"
            src={audioList.length == 0 ? dustbin_inactive : dustbin_active}
            className="cursor-pointer absolute right-2 bottom-2 max-w-[2rem] hover:scale-[120%] duration-300"
          />
        </div>

        {/* <Link to="../MashingOne"> */}
        <img
          className="md:w-[7rem] w-[6rem] absolute bottom-10 left-[50%] translate-x-[-50%] hover:scale-[120%] duration-300 cursor-pointer"
          src={audioList.length == 0 ? mash_btn_inactive : mash_btn_active}
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
