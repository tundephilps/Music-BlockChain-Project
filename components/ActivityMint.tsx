import React from "react";

const ActivityMint = () => {
  return (
    <>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-black p-4  sm:p-6">
          <time className="block text-xs text-gray-500">8th Jan 2023</time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-300">
              Minted "Big Bang" by "Snoop Dogg" for 0.008ETH
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-4 cursor-pointer">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Share
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Like
            </span>
          </div>
        </div>
      </article>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-black p-4  sm:p-6">
          <time className="block text-xs text-gray-500">23rd Sept 2022</time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-300">
              Minted "Hello Out there" by "Alica Keys" for 0.0156ETH
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-4 cursor-pointer">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Share
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Like
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default ActivityMint;
