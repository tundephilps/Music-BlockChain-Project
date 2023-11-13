import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Billboard = () => {
  return (
    <article className="p-2">
      <figure className="max-w-2xl lg:max-w-3xl mx-auto bg-black hover:bg-gradient-to-t hover:from-yellow-700 hover:text-black bg-gradient-to-b from-orange-400/50 rounded-xl p-8 border-4 border-t-yellow-800 border-l-yelloe-800 border-b-yellow-900 border-r-orange-900 text-yellow-800 dark:text-orange-600 transition-all duration-300">
        <section className="flex justify-end space-x-2 mr-8 text-red-700 lg:text-6xl text-3xl leading-2 tracking-wide font-light">
          <p className="hidden lg:block">E-Commerce</p>
        </section>
        <section className="grid grid-cols-[1fr,2fr] lg:gap-x-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full hidden lg:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <div className="text-red-900 dark:text-red-600 pt-6 md:p-8  ">
            <div className="font-sans sm:flex sm:items-center sm:justify-center sm:flex-col sm:text-center  ">
              <h1 className="lg:text-4xl text-3xl  font-black ">
                Sales & Merchandize
              </h1>
              <div className="flex   mt-2">
                <FaShoppingBag className="h-8 w-8 " />
              </div>
            </div>
          </div>
        </section>
        <section className="hidden lg:flex justify-end space-x-2 mr-8 text-white text-xl leading-6 tracking-widest font-light">
          <div>5453</div>
          <div>8765</div>
          <div>0030</div>
          <div>8315</div>
          <p className="pl-8">Date</p>
          <div>11</div>
          <div>/</div>
          <div>29</div>
        </section>
      </figure>
    </article>
  );
};

export default Billboard;
