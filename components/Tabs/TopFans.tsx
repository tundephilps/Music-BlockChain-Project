import Image from "next/image";
import React from "react";
import artiste8 from "../../public/artiste8.jpeg";

import artiste7 from "../../public/artiste7.jpeg";
import { IoPersonAddSharp } from "react-icons/io5";

export const TopFans = () => {
  return (
    <div className="pt-4 lg:flex flex-col gap-2">
      <div className=" p-1 gap-4 flex items-center flex-row border border-b-4 hover:border-b-yellow-700 shadow-sm rounded-xl bg-black border-gray-700  dark:shadow-slate-700/[.7]">
        <div>
          <Image
            alt=""
            src={artiste8}
            width={100}
            height={300}
            className="h-16 w-18 rounded-md"
          />
        </div>

        <div className="p-1  w-32">
          <h3 className="text-sm font-bold text-gray-800 dark:text-white">
            Cardi Bestista
          </h3>

          <a
            className="mt-3 inline-flex items-center gap-x-1 text-xs font-semibold rounded-lg border border-transparent text-yellow-500 hover:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            @Cardi_B
          </a>
        </div>
        <div>
          <IoPersonAddSharp className="text-white text-3xl cursor-pointer hover:shadow-md hover:shadow-slate-700" />
        </div>
      </div>
      <div className=" p-1 gap-4 flex items-center flex-row border border-b-4 hover:border-b-yellow-700 shadow-sm rounded-xl bg-black border-gray-700  dark:shadow-slate-700/[.7]">
        <div>
          <Image
            alt=""
            src={artiste7}
            width={100}
            height={1300}
            className="h-16 w-18 rounded-md"
          />
        </div>

        <div className="p-1 w-32">
          <h3 className="text-sm font-bold text-gray-800 dark:text-white">
            Bingo
          </h3>

          <a
            className="mt-3 inline-flex items-center gap-x-1 text-xs font-semibold rounded-lg border border-transparent text-yellow-500 hover:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            @Bingodude
          </a>
        </div>
        <div>
          <IoPersonAddSharp className="text-white text-3xl cursor-pointer hover:shadow-md hover:shadow-slate-700" />
        </div>
      </div>
    </div>
  );
};
