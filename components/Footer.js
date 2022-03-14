import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-16 sm:py-20 gradient-bg-footer">
      <div className="mx-auto w-11/12 max-w-6xl flex flex-col">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between">
          <Image
            src={Logo}
            width={128}
            height={40}
            objectFit="contain"
            layout="fixed"
          />
          <nav className="mt-2 flex flex-col sm:flex-row items-start sm:items-center text-gray-100 hover:text-white font-medium text-sm">
            <a className="mt-4 sm:mt-0 sm:mr-4 p-1 hover:underline">Market</a>
            <a className="mt-4 sm:mt-0 sm:mx-4 p-1 hover:underline">Exchange</a>
            <a className="mt-4 sm:mt-0 sm:mx-4 p-1 hover:underline">
              Tutorials
            </a>
            <a className="mt-4 sm:mt-0 sm:ml-4 p-1 hover:underline">Wallets</a>
          </nav>
        </div>

        <div className="mt-10 w-full flex flex-col items-center text-sm">
          <p className="text-white mb-1">Check out my portfolio</p>
          <a
            href="https://www.gaganbiswas.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <p className="text-cyan-500 underline">Gagan Biswas</p>
          </a>
        </div>

        <div className="my-6 bg-gray-400 w-full h-[1px]" />

        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-gray-300">@Krypt 2022</p>
          <p className="text-sm text-gray-300 mt-2 sm:mt-0">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
