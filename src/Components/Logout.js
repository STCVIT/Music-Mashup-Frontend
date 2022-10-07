import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { Menu } from '@headlessui/react';

const Logout = () => {

    const { logOut } = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onClick={handleLogOut}
                    className={`${active
                        ? "bg-gray-100 text-blackone"
                        : "text-whitone"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                >
                    Sign out
                </button>
            )}
        </Menu.Item>
    )
}

export default Logout