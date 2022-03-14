import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";
import Image from "next/image";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1 sm:min-w-[270px] sm:max-w-[300px] flex-col rounded-md p-3 hover:shadow-xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2 text-white text-sm">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>From: {shortenAddress(addressFrom)}</p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>To: {shortenAddress(addressTo)}</p>
          </a>
          <p>Amount: {amount} ETH</p>

          {message && (
            <>
              <br />
              <p>Message: {message}</p>
            </>
          )}
        </div>
        <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
          {gifUrl && (
            <Image src={gifUrl} alt="gif" layout="fill" objectFit="cover" />
          )}
        </div>

        <div className="bg-black bg-opacity-90 py-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl z-[1]">
          <p className="text-cyan-500">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

function Transactions() {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <section className="py-16 sm:py-20 gradient-bg-transactions">
      <div className="mx-auto w-11/12 max-w-6xl flex flex-col justify-center items-center">
        {currentAccount ? (
          <h2 className="text-white text-center text-2xl sm:text-4xl font-bold">
            Latest Transactions
          </h2>
        ) : (
          <h2 className="text-white text-center text-2xl sm:text-4xl font-bold">
            Connect your account to see the latest transactions
          </h2>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions &&
            transactions
              .reverse()
              .map((transaction, i) => (
                <TransactionCard key={i} {...transaction} />
              ))}
        </div>
      </div>
    </section>
  );
}

export default Transactions;
