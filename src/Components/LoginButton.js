import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to="/Login"
          className={`${
            active ? "bg-gray-100 text-blackone" : "text-whitone"
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
        >
          Sign in
        </Link>
      )}
    </Menu.Item>
  );
};

export default LoginButton;
