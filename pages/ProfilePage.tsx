import React from "react";
import artiste from "../public/artiste6.jpeg";

import artiste1 from "../public/artiste1.jpg";
import artiste2 from "../public/artiste2.jpeg";
import artiste3 from "../public/artiste3.jpeg";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import ActivityCard from "@/components/ActivityCard";
import ActivityMint from "@/components/ActivityMint";
import { useState } from "react";
import Tabs from "@/components/Tabs";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8  lg:py-24 py-2 bg-black px-2 lg:px-8">
      <div className=" rounded-lg bg-[#09090c] p-8 ">
        <div className="relative flex justify-center">
          <Image
            className="w-40 h-40 rounded-full"
            src={artiste}
            alt=""
            width={300}
            height={300}
          />
          <span className="bottom-0 left-[60%] absolute  w-[15px] h-[15px] bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="flex justify-center pt-2 flex-col items-center">
          <h1 className="text-white font-bold text-2xl">James Brown</h1>
          <h1 className="text-white  ">jamesbrown@gmail.com</h1>
          <div className="flex flex-row gap-2 pt-2">
            <div className="bg-slate-700 p-1 flex items-center justify-center rounded-md">
              <h1 className="text-white text-xs font-semibold">3.4k ffers</h1>
            </div>

            <div className="bg-slate-700 p-1 flex items-center justify-center rounded-md">
              <h1 className="text-white  text-xs font-semibold">2.7k Mints</h1>
            </div>

            <div className="bg-slate-700 p-1 flex items-center justify-center rounded-md">
              <h1 className="text-white text-xs font-semibold">
                8.6k Collectors
              </h1>
            </div>

            <div className="bg-slate-700 p-1 flex items-center justify-center rounded-md">
              <h1 className="text-white  text-xs font-semibold">5 Collected</h1>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <h1 className="text-white text-1xl font-medium">Bio</h1>
        </div>
        <p className="text-white text-sm">
          A work of art, good at my craft, making music till the heavens sing
          along.
        </p>
        <div className="pt-4">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <Image
              width={100}
              height={100}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={artiste1}
              alt=""
            />
            <Image
              width={100}
              height={100}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={artiste2}
              alt=""
            />
            <Image
              width={100}
              height={100}
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={artiste3}
              alt=""
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
          <div className="pt-2">
            <h1 className="text-sm text-slate-300">
              Followed by "Dr Dre" "Snoop Dogg" and 99 others
            </h1>
          </div>
        </div>

        <div className="pt-6 flex gap-4  cursor-pointer">
          <FaTwitter className="text-white hover:text-[#FF9500] text-2xl" />
          <FaFacebook className="text-white hover:text-[#FF9500] text-2xl" />
          <FaInstagram className="text-white hover:text-[#FF9500] text-2xl" />
          <FaYoutube className="text-white hover:text-[#FF9500] text-2xl" />
        </div>
        <div className="pt-6 flex flex-row justify-between items-center">
          <div>
            <h1 className="text-slate-100">Joined Jan 2022</h1>
          </div>
          <div className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9500] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange"></span>
            <span className="relative">FOLLOW</span>
          </div>
        </div>
      </div>
      <div className=" rounded-lg bg-[#09090c] lg:col-span-2 p-6 flex flex-col gap-4">
        <ActivityCard />
        <h1 className="text-white text-2xl">Activities</h1>
        <ActivityMint />
      </div>
      <div className=" rounded-lg bg-[#09090c] p-6 ">
        <Tabs />
      </div>
    </div>
  );
};

export default ProfilePage;
