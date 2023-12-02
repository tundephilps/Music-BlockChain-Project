import Image from "next/image";
import React from "react";
import cover1 from "../../public/cover7.jpg";
import { FaPlay } from "react-icons/fa";

const Collection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        <div className="pt-4 h-44 w-[100%] rounded-md">
          <a href="#" className="group relative block bg-black rounded-md">
            <Image
              width={3000}
              height={3000}
              alt="Developer"
              src={cover1}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
            />

            <div className="relative p-2  ">
              <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
                Feat Rihanna
              </p>

              <p className="text-base font-bold text-white ">Stair Wall</p>

              <div className="pt-24">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg text-white">
                    <FaPlay />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="pt-4 h-44 w-[100%] rounded-md">
          <a href="#" className="group relative block bg-black rounded-md">
            <Image
              width={3000}
              height={3000}
              alt="Developer"
              src={cover1}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
            />

            <div className="relative p-2  ">
              <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
                Feat Usher
              </p>

              <p className="text-base font-bold text-white ">Turn On Me</p>

              <div className="mt-24">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg text-white">
                    <FaPlay />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="pt-4 h-44 w-[100%] rounded-md">
          <a href="#" className="group relative block bg-black rounded-md">
            <Image
              width={3000}
              height={3000}
              alt="Developer"
              src={cover1}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
            />

            <div className="relative p-2  ">
              <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
                Feat Wizkid
              </p>

              <p className="text-base font-bold text-white ">Turn On Me</p>

              <div className="mt-24">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg text-white">
                    <FaPlay />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="pt-4 h-44 w-[100%] rounded-md">
          <a href="#" className="group relative block bg-black rounded-md">
            <Image
              width={3000}
              height={3000}
              alt="Developer"
              src={cover1}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
            />

            <div className="relative p-2  ">
              <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
                Feat Davido
              </p>

              <p className="text-base font-bold text-white ">Turn On Me</p>

              <div className="mt-24">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg text-white">
                    <FaPlay />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
