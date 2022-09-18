import React from 'react'
import Navbar from './Navbar'
import myMusicCircle from "../Images/myMusicCircle.png"
import myMusicDisc from "../Images/myMusicDisc.png"
import myMusicAddButton from "../Images/myMusicAddButton.png"
import search from '../Images/search.png'

const MyMusic = () => {
    return (
        <div class="min-h-screen">
            <div className='bg-blackone h-[5rem] '>
                <Navbar />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder='Search your music'
                    className=" py-[0.7rem] px-[4rem] w-[40rem] ml-[35%] rounded-[10px] bg-whitone text-whiteone my-[1rem] border-whiteone border outline-none form_field"
                    required />
                    <img src={search} alt="" className='absolute h-8 top-0 left-1/2 transform -translate-x-[17.5rem] translate-y-[1.5rem]' />

            </div>


            <img src={myMusicCircle} alt="" className="absolute right-0 bottom-0" />

            <div className=''>
                <h1 className='text-blackone absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[7rem] text-4xl z-10 '>You haven't created any music yet!</h1>
                <img src={myMusicDisc} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ' />
                <img src={myMusicAddButton} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-[-1.2rem] -translate-y-[-1.2rem] z-10 ' />
            </div>


        </div>
    )
}

export default MyMusic