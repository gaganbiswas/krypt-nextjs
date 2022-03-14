import Image from "next/image";
import React, { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import { TransactionContext } from "../context/TransactionContext";

function Header() {
  const [menu, setMenu] = useState(false);
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="w-full py-4">
      <div className="mx-auto w-11/12 max-w-6xl flex items-center justify-between">
        <Image
          src={Logo}
          width={128}
          height={40}
          objectFit="contain"
          layout="fixed"
        />

        <nav className="relative flex items-center">
          <div className="hidden md:flex items-center text-gray-100 hover:text-white font-medium text-sm">
            <a className="mr-4 p-1 hover:underline">Market</a>
            <a className="mx-4 p-1 hover:underline">Exchange</a>
            <a className="mx-4 p-1 hover:underline">Tutorials</a>
            <a className="mx-4 p-1 hover:underline">Wallets</a>
            {!currentAccount && (
              <button
                type="button"
                className="ml-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium"
                onClick={connectWallet}
              >
                Log In
              </button>
            )}
          </div>

          {menu ? (
            <XIcon
              className="w-6 h-6 text-white flex md:hidden z-20 cursor-pointer"
              onClick={closeMenu}
            />
          ) : (
            <MenuAlt4Icon
              className="w-6 h-6 text-white flex md:hidden z-20 cursor-pointer"
              onClick={openMenu}
            />
          )}

          <div
            className={`z-10 py-4 flex md:hidden fixed top-0 right-0 flex-col justify-start blue-glassmorphism w-[70vw] h-screen rounded-l-md text-white text-base transition duration-300 ${
              menu ? "" : "translate-x-full opacity-0"
            }`}
          >
            <div className="w-11/12 mt-16 flex flex-col items-start mx-auto">
              <a className="mb-2 p-1">Market</a>
              <a className="my-2 p-1">Exchange</a>
              <a className="my-2 p-1">Tutorials</a>
              <a className="mt-2 p-1">Wallets</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
