import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";
import home_white from "../Images/home_white.png";
import userImg from "../Images/user.png";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const { user } = useUserAuth();



  return (
    <div className="flex justify-between absolute z-10 top-0 w-full bg-blackone md:py-4 p-2 drop-shadow-2xl">
      <Link to="../LandingTwo" className="md:w-[2rem] w-[1.5rem] ml-2">
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          src={home_white}
          className=""
        />
      </Link>
      <div className="md:w-[2.5rem] w-[2rem] order-last flex flex-row mr-16">
        <img
          className="rounded-full"
          src={user ? user.photoUrl : userImg}
          alt=""
        />
        <Menu>
          {({ open }) => (
            <div className="">
              <span className="rounded-md shadow-sm">
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-whiteone transition duration-150 ease-in-out bg-blackone border rounded-md  focus:outline-none focus:shadow-outline-blue">
                  <span>Profile</span>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-blackone border divide-y divide-gray-100 rounded-md shadow-lg outline-none text-whiteone"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="text-sm font-medium leading-5 text-whitone truncate">
                      {user.email}
                    </p>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#account-settings"
                          className={`${active
                            ? "bg-gray-100 text-blackone"
                            : "text-whitone"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#sign-out"
                          className={`${active
                            ? "bg-gray-100 text-whitone"
                            : "text-whitone"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          )}
        </Menu>
      </div>


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
