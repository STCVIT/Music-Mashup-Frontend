import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";
import home_white from "../Images/home_white.png";
import userImg from "../Images/user.png";

const Navbar = () => {
  const { user } = useUserAuth();

  return (
    <div className="flex justify-between absolute z-10 top-0 w-full bg-blackone md:py-4 p-2 drop-shadow-2xl">
      <Link to="../LandingTwo" className="md:w-[2rem] w-[1.5rem]">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          src={home_white}
          className="my-auto mx-5"
        />
      </Link>
      <Link to="" className="text-whiteone my-auto mx-5 flex flex-row">
        <span className="my-auto mx-2">
          {user ? user.displayName : "LogIn"}
        </span>
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          src={user ? user.photoUrl : userImg}
          className="md:w-[2.5rem] w-[2rem]"
        />
      </Link>

      {/* <motion.div
        whileTap={{ scale: 0.9 }}
        className="absolute flex align-middle gap-2 right-[3rem] top-[1rem] max-w-[3rem] z-[20] mr-10"
      >
        <span className="text-whiteone my-auto">
          {user ? user.displayName : "LogIn"}
        </span>
        <img
          className="rounded-full"
          src={user ? user.photoUrl : userImg}
          alt=""
        />
      </motion.div> */}
    </div>
  );
};

export default Navbar;
