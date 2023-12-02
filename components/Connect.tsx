import Image from "next/image";
import React from "react";
import Meta from "../public/Meta.png";

import wallet from "../public/wallet.png";
import Coinbase from "../public/coinbase.png";

import fort from "../public/fort.jpg";

import opera from "../public/opera.png";

const Connect = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Connect wallet
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Connect with one of our available wallet providers or create a new one.
      </p>
      <ul className="my-4 space-y-3">
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image src={Meta} height={30} width={30} alt="" />
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image src={Coinbase} height={30} width={30} alt="" />
            <span className="flex-1 ms-3 whitespace-nowrap">
              Coinbase Wallet
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image src={opera} height={30} width={30} alt="" />
            <span className="flex-1 ms-3 whitespace-nowrap">Opera Wallet</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image src={wallet} height={30} width={30} alt="" />
            <span className="flex-1 ms-3 whitespace-nowrap">WalletConnect</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image src={fort} height={30} width={30} alt="" />
            <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
          </a>
        </li>
      </ul>
      <div>
        <a
          href="#"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Why do I need to connect with my wallet?
        </a>
      </div>
    </div>
  );
};

export default Connect;
