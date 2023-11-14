import Image from "next/image";
import React from "react";
import nft1 from "../public/nft1.jpg";

import nft2 from "../public/nft2.jpg";
import banner from "../public/banner.png";

const NFTBanner = () => {
  return (
    <section>
      <div className="max-w-screen-xl w-full sm:px-6 sm:py-6 ">
        <ul className="grid grid-cols-1 gap-4  lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <Image
                src={nft1}
                alt=""
                className="object-cover h-40 w-full  transition duration-500 aspect-square group-hover:opacity-90"
                height={100}
                width={400}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Casual Trainers
                </h3>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9500] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange"></span>
                  <span className="relative">SHOP NOW</span>
                </a>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <Image
                src={banner}
                alt=""
                className="object-cover h-40 w-full transition duration-500 aspect-square group-hover:opacity-90"
                height={100}
                width={400}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Winter Jumpers
                </h3>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9500] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange"></span>
                  <span className="relative">SHOP NOW</span>
                </a>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <Image
                src={nft2}
                alt=""
                className="object-cover lg:h-[21rem] w-full transition duration-500 aspect-square group-hover:opacity-90"
                height={200}
                width={300}
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Based on True story
                </h3>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9500] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange"></span>
                  <span className="relative">READ MORE</span>
                </a>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NFTBanner;
