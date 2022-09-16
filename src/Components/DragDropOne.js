import { useState } from "react";
import { motion } from 'framer-motion';
import { FileUploader } from "react-drag-drop-files";
import {Link} from "react-router-dom";
import dragdrop from '../Images/dragdrop-bg.png'
import cloud from '../Images/cloud.png'
import dustbin_inactive from '../Images/dustbin_inactive.png'
import mash_btn_inactive from '../Images/mash_btn_inactive.png'
import home_white from '../Images/home_white.png'
import search_white from '../Images/search_white.png'
import search_black from '../Images/search_black.png'
import user from '../Images/user.png';

export default function DragDropOne() {

    const fileTypes = ["WAV"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };


    const dragStyle=<div className="flex flex-wrap items-center flex-col justify-between h-full w-full"><img alt = "Upload Cloud" src={cloud} className=" max-w-[4rem]"/>Drag and drop your files here</div>


    const [search, setSearch] = useState('');

    return (
        <div className="bg-blackone min-w-screen min-h-screen relative overflow-hidden">
            <Link to='../LandingTwo'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="z-[20] absolute left-[1rem] top-[1rem] max-w-[2rem]"><img src={home_white}/></motion.div>
            </Link>
            <img alt = "BG Design" src={dragdrop} className="absolute"/>
            
            <div className = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 rounded-lg min-h-[75%] min-w-[50%] text-whiteone">

            <form className="bg-whiteone text-blackone p-[0.8rem] my-[2%] mx-[5%] rounded-lg flex flex-wrap">
            <img src={search_black} className="max-w-[1.5rem] max-h-[1.5rem] mr-[1rem]"/>
            <input
                        type="text"
                        value={search}
                        placeholder="Browse on web"
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none bg-whiteone px-[0.5rem] text-blackone w-[75%]">
                        
            </input>
            </form>

                <div className = "relative m-[5%] py-[5rem] border-2 rounded-lg border-dashed cursor-pointer">
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        multiple={true}
                        hoverTitle="Drop Here"
                        minSize={2}
                        // children={dragStyle}
                    />
                    
                </div>
                
                <img alt = "Inactive Delete Button" src={dustbin_inactive} className="absolute right-1 bottom-1 max-w-[2rem]"/>

            </div>
            <Link to='../MashingOne'>
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%] text-blackone opacity-50 bg-whiteone border-2 px-3 py-1 rounded-lg min-w-[7rem] mx-auto my-auto text-center font-extrabold">
                            MASH
                </div>    
                </Link>  
        </div>

    )
  }
  

