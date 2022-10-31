import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import myMusicCircle from "../Images/myMusicCircle.png";
import myMusicDisc from "../Images/myMusicDisc.png";
import myMusicAddButton from "../Images/myMusicAddButton.png";
import search from "../Images/search.png";
import WhiteScreenAnimation from "./WhiteScreenAnimation";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const MyMusic = () => {
  const { user } = useUserAuth();

  return (
    <div className="min-h-screen">
      <WhiteScreenAnimation />
      <Navbar />
      <form className="search-bar px-4 absolute z-10 top-3.5 left-1/2 transform translate-x-[-12rem] hidden md:block">
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
            placeholder="Search"
            className="w-full py-2 pl-12 pr-32 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
          />
        </div>
      </form>

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
            ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 text-blackone text-3xl"
            : "hidden"
        }
      >
        User is logged in. User data:
      </div>
    </div>
  );
};

export default MyMusic;
