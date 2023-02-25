import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import myMusicCircle from "../Images/myMusicCircle.png";
import dustbin_active from "../Images/dustbin_active.png";
import myMusicDisc from "../Images/myMusicDisc.png";
import myMusicAddButton from "../Images/myMusicAddButton.png";
import search from "../Images/search.png";
import WhiteScreenAnimation from "./WhiteScreenAnimation";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { data } from "./sample_data";





const MyMusic = () => {
  const { user } = useUserAuth();


  function handleSongDelete(song_details) {
    console.log(`deleting song ${song_details.song}, url= ${song_details.url}`);
  }



  return (
    <div>
      <WhiteScreenAnimation />
      <Navbar />
      <form className="search-bar px-4 absolute z-50 top-3.5 left-1/2 transform translate-x-[-12rem] hidden md:block">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Music"
            className="w-full py-2 pl-12 pr-32 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
          />
        </div>
      </form>
      <div className="h-screen w-screen text-whiteone overflow-hidden flex flex-col justify-center items-center">
        <img
          src={myMusicCircle}
          alt="bg image"
          className="absolute right-0 bottom-0"
        />

        <div className={user.email && "hidden"}>
          <div>
            <div className="text-blackone absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[7rem] text-sm z-10 md:text-2xl">
              You haven't created any music yet!
            </div>
            <img
              src={myMusicDisc}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            />
            <Link to="/DragDropOne">
              <img
                src={myMusicAddButton}
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-[-1.2rem] -translate-y-[-1.2rem] z-10 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div
          className={
            user.email
              ? "z-30 w-full px-[10vw] overflow-scroll mt-[20vh]"
              : "hidden"
          }
        >
          {data.map(function (each_data, i) {
            return (
              <div key={i} className="bg-blackone p-[3vw] rounded-lg my-[2vh]">
                <div className="sm:text-3xl text-xl">{each_data.date}</div>
                <hr className="my-5" />
                {each_data.mashes.map(function (mash, j) {
                  return (
                    <div key={j} className="p-2 grid rounded-md grid-cols-4 cursor-pointer hover:bg-whiteone hover:bg-opacity-20">
                      <div>{mash.time}</div>
                      <div>{mash.song}</div>
                      <img
                        src={dustbin_active}
                        onClick={()=>handleSongDelete(mash)}
                        className="col-start-5 w-[2vw]"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyMusic;
