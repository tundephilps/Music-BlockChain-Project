import Image from "next/image";
import React from "react";
import { GoVerified } from "react-icons/go";
import artiste1 from "../public/artiste1.jpg";

import artiste2 from "../public/artiste2.jpeg";

import artiste3 from "../public/artiste3.jpeg";

import artiste4 from "../public/artiste4.jpeg";

const CardCollectors = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 sm:gap-2">
      <article className="rounded-xl border-2 border-black bg-[#09090c] relative">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-2">
          <h1 className="text-2xl font-extrabold text-white">1</h1>
          <a href="#" className="block shrink-0">
            <Image
              width={100}
              height={100}
              alt="Speaker"
              src={artiste1}
              className="h-16 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline text-white">
                Marl Peterson
              </a>
            </h3>

            <p className="text-sm text-gray-400">0.1871ETH</p>

            <div className="sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-sm">Norway</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-sm sm:text-gray-500">
                311 mints
              </p>
              <div className="absolute bottom-0.5 right-0.5">
                <strong className="-mb-[2px] -me-[2px]   flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <GoVerified />
                  <span className="text-[10px] font-medium sm:text-xs">
                    Verified
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-xl border-2 border-black bg-[#09090c] relative">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-2">
          <h1 className="text-2xl font-extrabold text-white">2</h1>
          <a href="#" className="block shrink-0">
            <Image
              width={100}
              height={100}
              alt="Speaker"
              src={artiste4}
              className="h-16 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline text-white">
                Marl Peterson
              </a>
            </h3>

            <p className="text-sm text-gray-400">0.1871ETH</p>

            <div className="sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-sm">Norway</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-sm sm:text-gray-500">
                311 mints
              </p>
              <div className="absolute bottom-0.5 right-0.5">
                <strong className="-mb-[2px] -me-[2px]   flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <GoVerified />
                  <span className="text-[10px] font-medium sm:text-xs">
                    Verified
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="rounded-xl border-2 border-black bg-[#09090c] relative">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-2">
          <h1 className="text-2xl font-extrabold text-white">3</h1>
          <a href="#" className="block shrink-0">
            <Image
              width={100}
              height={100}
              alt="Speaker"
              src={artiste2}
              className="h-16 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline text-white">
                Marl Peterson
              </a>
            </h3>

            <p className="text-sm text-gray-400">0.1871ETH</p>

            <div className="sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-sm">Norway</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-sm sm:text-gray-500">
                311 mints
              </p>
              <div className="absolute bottom-0.5 right-0.5">
                <strong className="-mb-[2px] -me-[2px]   flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <GoVerified />
                  <span className="text-[10px] font-medium sm:text-xs">
                    Verified
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="rounded-xl border-2 border-black bg-[#09090c] relative">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-2">
          <h1 className="text-2xl font-extrabold text-white">4</h1>
          <a href="#" className="block shrink-0">
            <Image
              width={100}
              height={100}
              alt="Speaker"
              src={artiste3}
              className="h-16 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline text-white">
                Marl Peterson
              </a>
            </h3>

            <p className="text-sm text-gray-400">0.1871ETH</p>

            <div className="sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-sm">Norway</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-sm sm:text-gray-500">
                311 mints
              </p>
              <div className="absolute bottom-0.5 right-0.5">
                <strong className="-mb-[2px] -me-[2px]   flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <GoVerified />
                  <span className="text-[10px] font-medium sm:text-xs">
                    Verified
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardCollectors;
