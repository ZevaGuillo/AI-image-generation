import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { FcGoogle } from "react-icons/fc";
import UserNavbar from "./UserNavbar";
import { FaFacebook } from "react-icons/fa";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { status } = useAppSelector(state => state.auth);

  const handleOnClick = () => {
    window.open(
      `${import.meta.env.VITE_SERVER}/api/v1/auth/google/callback`,
      "_self"
    );
  };

  const handleFacebookOnClick = () => {
    window.open(
      `${import.meta.env.VITE_SERVER}/api/v1/auth/facebook/callback`,
      "_self"
    );
  };

  return (
    <nav className="fixed z-[1001] bg-bgColor bg-opacity-70 border-b border-hover backdrop-blur-lg drop-shadow-sm w-full flex justify-between items-center px-2 md:px-20 h-16">
      <section className="inline-flex">
        <Link to="/">
          <div className="text-gradient text-lg md:text-4xl">PixelAI</div>
        </Link>
      </section>

      <section className="flex items-center">
        {status === "authenticated" ? (
          <UserNavbar />
        ) : status === "not-authenticated" ? (
          <>
            <Menu
              as="div"
              className="relative inline-block text-left">
              <div className="gradient rounded-md p-[2px]">
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-bgColor px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 ">
                  Access all features
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 mt-2 md:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-bgColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <div
                        className="w-full inline-block rounded-md gradient-google p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        onClick={handleOnClick}>
                        <span className="flex justify-center items-center rounded-md gap-2 bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-opacity-80">
                          <span className="hidden md:block">
                            Sign in with Google
                          </span>
                          <FcGoogle className="text-base" />
                        </span>
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="mt-2 w-full inline-block rounded-md gradient-facebook p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        onClick={handleFacebookOnClick}>
                        <span className="flex justify-center items-center gap-2 rounded-md bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-opacity-80">
                          <span className="hidden md:block">
                            Sign in with Facebook
                          </span>
                          <FaFacebook className="text-base" />
                        </span>
                      </div>
                    </Menu.Item>
                  </div>
                  
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <></>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
