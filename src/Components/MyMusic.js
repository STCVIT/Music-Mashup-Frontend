import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import myMusicCircle from "../Images/myMusicCircle.png"
import myMusicDisc from "../Images/myMusicDisc.png"
import myMusicAddButton from "../Images/myMusicAddButton.png"
import search from '../Images/search.png'

const MyMusic = () => {

    

    return (
        <div className="min-h-screen">
            {/* <div className='bg-blackone h-[5rem] '>
                <Navbar />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder='Search your music'
                    className=" py-[0.7rem] px-[4rem] w-[40rem] ml-[35%] rounded-[10px] bg-whitone text-whiteone my-[1rem] border-whiteone border outline-none form_field"
                    required />
                    <img src={search} alt="" className='absolute h-8 top-0 left-1/2 transform -translate-x-[17.5rem] translate-y-[1.5rem]' />

            </div> */}
            <Navbar />

            <img src={myMusicCircle} alt="" className="absolute right-0 bottom-0" />

            <div className=''>
                <h1 className='text-blackone absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[7rem] text-4xl z-10 '>You haven't created any music yet!</h1>
                <img src={myMusicDisc} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ' />
                <img src={myMusicAddButton} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-[-1.2rem] -translate-y-[-1.2rem] z-10 ' />
            </div>

        <form className="search-bar px-4 absolute z-20 top-3 left-1/2 transform translate-x-[-12rem]">
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
                    className="w-full py-2 pl-12 pr-32 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>


        </div>
    )
}

export default MyMusic