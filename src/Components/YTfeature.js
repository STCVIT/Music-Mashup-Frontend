// References:
// https://github.com/youtube/api-samples - examples
// https://rapidapi.com/ytjar/api/youtube-mp3-download1/ - radidAPI (uses musmashup account)
// https://developers.google.com/youtube/v3/sample_requests - youtube data api
// https://developers.google.com/explorer-help/ - youtube data api account
// https://medium.com/mlearning-ai/extract-youtube-data-to-csv-using-youtube-api-42683f3f3089 - youtube data api how to
// https://www.youtube.com/watch?v=Cin11iLUkLU&list=PLtMugc7g4Gaq1FdZMF3BUTQPxVxYQP_Ls&index=4 - sample code youtube
// https://console.firebase.google.com/project/music-mashup-ffb43/storage/music-mashup-ffb43.appspot.com/files/~2Faudio - our firebase console

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlackScreenAnimation from "./BlackScreenAnimation";
import dragdrop from "../Images/dragdrop-bg.png";
import search_black from "../Images/search_black.png";
import done_active from "../Images/done_active.png";
import done_inactive from "../Images/done_inactive.png";
import youtube from "../Images/youtube.png";
import Navbar from "./Navbar";
import Modal from "./Modal";
import axios from "axios";

export default function YTfeature() {
  const [search, setSearch] = useState("");
  const [modalState, setModalState] = useState({
    heading: "",
    message: "",
    show: false,
  });
  const API_KEY = "AIzaSyCNwlyKFyVNrX8evy9Y4CnazgoD8Zo_Efc";
  const maxResults = 10;
  const topics = "/m/04rlf";
  let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&regionCode=US&maxResults=${maxResults}&topicId=${topics}&q=${search}`;

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "44636f74ccmsh3e85a3758ad3fd9p1f6e1fjsnf916d2251638",
  //       "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
  //     },
  //   };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aba3a24fa7msh5a17263220c79a7p13b0fbjsn40725cb8ea7b",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };

  // https://youtube-mp3-converter.p.rapidapi.com/service/run?lang=en&id=aJOTlE1K90k&action=button&widget=rapidapi&format=mp3

  const [all_details, setAllDetails] = useState([]);

  // url -> mp3 download
  // `https://convert2mp3s.com/api/single/mp3?url=https://www.youtube.com/watch?v=${videoId}`
  // gCYcHz2k5x0

  function handleSearch(query) {
    if (query) {
      setSearch(query);
      axios(url, {
        options: options,
      })
        // fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("error: ", res.status);
          } else {
            return res.json();
          }
        })
        .then((data) => {
          data.items.map((each) => {
            // console.log("each: ", each);

            // const each_url = `https://www.youtube.com/watch?v=${each.id.videoId}`;
            const theid = each.id.videoId;
            fetch(
              `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${theid}`,
              options
            )
              // fetch(
              //   `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${theid}`,
              //   options
              // )
              .then((response) => response.json())
              .then((response) => {
                setAllDetails((prev) => [
                  ...prev,
                  {
                    title: response.title,
                    link: response.link,
                  },
                ]);
              })
              .catch((err) => {
                setModalState({
                  heading: "ERROR",
                  message: err,
                  show: true,
                });
              });
          });
        })
        .catch((err) => {
          setModalState({
            heading: "ERROR",
            message: err,
            show: true,
          });
          // console.log("catching error while fetching ids: ", err);
        });
    } else {
      setModalState({
        heading: "ERROR",
        message: "Type something to serach for!",
        show: true,
      });
      // console.log("search is empty");
    }
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
      <div className="display-area h-screen w-screen text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <img
          alt="BG Design"
          src={dragdrop}
          className="absolute top-0 left-[-25vh]"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg lg:w-[50vw] md:w-[70vw] w-[90vw] text-whiteone p-5 h-[60vh] scrollbar scrollbar-thumb-[#F2F2F2] scrollbar-track-[#2A2A2A] scrollbar-thin overflow-y-scroll">
          <form className="justify-between bg-whiteone text-blackone px-[0.5rem] py-[0.5rem] mb-[1rem] rounded-md flex">
            <img
              src={youtube}
              className="sm:w-[1.5rem] max-h-[1.2rem] my-auto ml-2 -mr-8"
            />
            <input
              type="text"
              value={search}
              placeholder="Get music from Youtube"
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm md:text-lg outline-none bg-whiteone text-blackone w-[75%]"
            ></input>
            <img
              src={search_black}
              onClick={() => handleSearch(search)}
              className="cursor-pointer hover:scale-[1.2] duration-[300ms] max-w-[1.5rem] max-h-[1.2rem] my-auto mx-2"
            />
          </form>
          {!search && (
            <div>
              Download as much music as you like from youtube, on this page.
              Then, hop over to the previous page and upload it for mashing!
            </div>
          )}
          {!all_details && search && (
            <div className="text-sm italic sm:text-[1rem]">Loading</div>
          )}
          {all_details &&
            all_details.map((each) => (
              <div className="border-2 border-whiteone px-5 my-2 flex flex-row justify-between">
                <div className="text-md my-auto">{each.title}</div>
                <a
                  className="cursor-pointer text-3xl my-auto no-underline"
                  href={each.link}
                  target="_blank"
                >
                  +
                </a>
              </div>
            ))}
        </div>
        {/* <Link to="../DragDropOne">
          <div className="font-bold px-10 py-2 rounded-md bg-whiteone text-blackone absolute bottom-10 left-[50%] translate-x-[-50%]">
            BACK
          </div>
        </Link> */}
        <Link to="../DragDropOne">
          <img
            className="hover:scale-[120%] duration-300 cursor-pointer md:w-[7rem] w-[6rem] absolute bottom-10 left-[50%] translate-x-[-50%]"
            // onClick={handleUpload_YT}
            src={all_details.length === 0 ? done_inactive : done_active}
            // src={done_active}
          />
        </Link>
      </div>
    </div>
  );
}
