import { InformationCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { SiEthereum } from "react-icons/si";
import { useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, type, value, name, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full white-glassmorphism outline-none border-none py-2 px-4 rounded-md text-white"
  />
);

function Hero() {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    setLoading(true);
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) {
      setLoading(false);
      return;
    }

    sendTransaction();
    setLoading(false);
  };

  return (
    <section className="py-16 sm:pb-20">
      <div className="mx-auto w-11/12 max-w-6xl flex flex-col md:flex-row items-center md:items-start">
        {/* Left */}
        <div className="flex flex-1 flex-col md:mr-10">
          <div className="flex flex-col text-white">
            <h1 className="text-5xl sm:text-7xl font-bold mb-2 leading-tight sm:leading-tight text-gradient">
              Send Crypto <br /> all over the world
            </h1>
            <p className="w-11/12 sm:w-9/12 my-2">
              Explore the crypto world. Buy and sell crypto-currencies easily on
              Krypt.
            </p>
            {!currentAccount && (
              <button
                className="self-start mt-6 px-8 py-4 font-medium text-base bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                onClick={connectWallet}
              >
                Connect your wallet
              </button>
            )}
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 justify-items-center text-white">
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center rounded-tl-2xl">
              Reliability
            </p>
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center rounded-tr-2xl sm:rounded-none">
              Security
            </p>
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center sm:rounded-tr-2xl">
              Ethereum
            </p>
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center sm:rounded-bl-2xl">
              Web 3.0
            </p>
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center rounded-bl-2xl sm:rounded-none">
              Low Fees
            </p>
            <p className="px-6 py-10 border border-slate-400 w-full flex justify-center rounded-br-2xl">
              Blockchain
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="mt-10 md:mt-0 flex flex-col items-center md:w-2/5 max-w-lg">
          <div className="w-full max-w-sm eth-card h-52 md:h-56 rounded-2xl overflow-hidden">
            <div className="white-glassmorphism w-full h-full p-4 flex flex-col justify-between">
              <div className="w-full flex justify-between items-center">
                <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white">
                  <SiEthereum fontSize={22} />
                </div>
                <InformationCircleIcon className="w-6 h-6 text-white" />
              </div>

              <div className="flex flex-col text-white">
                <p className="text-base mb-2">
                  {currentAccount
                    ? shortenAddress(currentAccount)
                    : "Connect your wallet"}
                </p>
                <p className="text-xl font-bold">Ethereum</p>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full blue-glassmorphism p-6 rounded-2xl">
            <Input
              type="text"
              name="addressTo"
              placeholder="Address To"
              handleChange={handleChange}
            />
            <Input
              type="number"
              name="amount"
              step="0.0001"
              placeholder="Amount (ETH)"
              handleChange={handleChange}
            />
            <Input
              type="text"
              name="keyword"
              placeholder="Keyword (Gif)"
              handleChange={handleChange}
            />
            <Input
              type="text"
              name="message"
              placeholder="Message"
              handleChange={handleChange}
            />
            <div className="w-full h-[1px] mt-6 mb-8 bg-slate-400" />
            {isLoading ? (
              <div className="w-full flex items-center justify-center py-3.5">
                <svg
                  role="status"
                  className="w-6 h-6 text-white animate-spin dark:text-gray-600 fill-red-700"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <button
                type="button"
                className="w-full border-2 border-slate-600 px-6 py-3 rounded-full text-white"
                onClick={handleSubmit}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
