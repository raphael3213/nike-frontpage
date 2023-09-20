"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <header className=" max-lg:px-4 padding-x py-8 absolute z-50 w-full ">
      <nav className="flex justify-between items-center max-container max-lg:hidden ">
        <a href="/">
          <Image
            src="/header-logo.svg"
            alt="Nike Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="group">
              <a
                className="font-montserrat leading-normal  text-lg text-slate-gray hover:text-orange-600"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="justify-between hidden max-container max-lg:flex flex-col w-full">
        <div className="flex justify-between w-full">
          <a href="/">
            <Image
              src="/header-logo.svg"
              alt="Nike Logo"
              width={130}
              height={29}
            />
          </a>
          <Image
            src="/hamburger.svg"
            width={20}
            height={20}
            alt="Hamburger"
            className="cursor-pointer"
            onClick={handleShowMenu}
          />
        </div>
        <Transition
          show={showMenu}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="shadow-lg ">
            {
              <ul className="text-center bg-white cursor-pointer">
                {navLinks.map((item) => (
                  <li key={item.label} className="m-5 p-5 group">
                    <a
                      className="font-montserrat leading-normal  text-lg text-slate-gray group-hover:text-orange-600"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </div>
        </Transition>
      </nav>
    </header>
  );
}

export default Navbar;
