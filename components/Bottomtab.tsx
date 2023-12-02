import Link from "next/link";
import React from "react";
import { FaHome, FaMusic, FaStar } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";

const Bottomtab = () => {
  return (
    <div className="lg:hidden flex fixed bottom-0 left-0 z-50 w-full h-16  border-t border-gray-200 bg-[#09090c] dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium pt-2">
        <div>
          <Link href="/Homepage">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group"
            >
              <FaHome className="w-6 h-6 text-white " />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 ">
                Home
              </span>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/Music">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800  group"
            >
              <FaMusic className="w-6 h-6 text-white " />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 ">
                Music
              </span>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/NFT">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800  group"
            >
              <SiMarketo className="w-6 h-6 text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 ">
                NFT
              </span>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/Merchs">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800  group"
            >
              <FaStar className="w-6 h-6 text-white" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-yellow-600">
                Merchs
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottomtab;
