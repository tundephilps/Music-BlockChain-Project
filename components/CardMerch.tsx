import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaEye,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    image: "/Merch1.jpg",
    title: "Best Headphone Ever",
    price: "€ 159.99",
    originalPrice: "€ 199.99",
    discount: "20",
    authorImage: "/artiste1.jpg",
    authorName: "David Hanks",
    date: "3 days ago",
  },

  {
    id: 2,
    image: "/Merch4.jpg",
    title: "    Mix Tap Catelog",
    price: "€ 159.99",
    originalPrice: "€ 199.99",
    discount: "20",
    authorImage: "/artiste1.jpg",
    authorName: "Balor Cruise",
    date: "18 days ago",
  },
  {
    id: 3,
    image: "/Merch3.png",
    title: "     Guitar Aux",
    price: "€ 159.99",
    originalPrice: "€ 199.99",
    discount: "20",
    authorImage: "/artiste1.jpg",
    authorName: "Iysa Abdul",
    date: "18 days ago",
  },
  {
    id: 4,
    image: "/Merch2.webp",
    title: "Jacket",
    price: "€ 159.99",
    originalPrice: "€ 199.99",
    discount: "20",
    authorImage: "/artiste1.jpg",
    authorName: "Iysa Abdul",
    date: "18 days ago",
  },
];

const CardMerch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10  gap-6 lg:gap-12 items-center, justify-center">
        {data.map((card) => (
          <div
            key={card.id}
            className="w-[100%] lg:w-[100%]   max-w-sm bg-[#09090c] overflow-hidden shadow-md shadow-[#FF9500] ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl"
          >
            <div
              style={{
                backgroundImage: `url('${card.image}')`,
                backgroundSize: "cover",
              }}
              className="h-[150px] flex flex-col  relative rounded-2xl shadow-sky-950 before:content-[''] before:absolute before:bg-transparent before:h-4 before:w-4 before:shadow-[-5px_-7px_0_2px] before:rounded-tl-xl  before:left-0 before:top-8 before:shadow-[#09090c]"
            >
              <div className="h-[33px] w-[130px] bg-[#09090c] relative -skew-x-[47deg] shadow-[-10px_-10px_0_0] rounded-br-xl shadow-[#09090c]  before:content-[''] before:absolute before:w-4 before:h-1 before:-right-[15px] before:bg-transperent before:shadow-[-5px_-5px_0_2px] before:rounded-tl-2xl before:top-0 before:shadow-[#09090c]"></div>
              <div className="absolute w-full h-8 flex justify-between top-0">
                <div className="h-full aspect-1 pl-3 pr-0 py-2">
                  <svg fill="none" className="svg" viewBox="0 0 94 94">
                    {/* ... SVG Path ... */}
                  </svg>
                </div>
                <div className="h-full flex gap-2 px-2 py-2">
                  <FaInstagram className="h-full fill-sky-800 hover:fill-white" />
                  <FaTwitter className="h-full fill-sky-800 hover:fill-white" />
                  <FaFacebook className="h-full fill-sky-800 hover:fill-white" />
                </div>
              </div>
            </div>
            <div className="py-2 flex flex-col gap-1">
              <h5 className="font-semibold text-1xl overflow-ellipsis overflow-hidden whitespace-nowrap text-white">
                {card.title}
              </h5>
              <div>
                <span className="text-md font-bold text-white">
                  {card.price}
                </span>
                <div className="flex items-center mt-1 gap-2">
                  <span className="text-sm line-through opacity-50 text-white">
                    {card.originalPrice}
                  </span>
                  <span className="bg-green-400 px-2 py-0.5 rounded-md text-xs text-white">
                    Save %{card.discount}
                  </span>
                </div>
              </div>
              <div className="flex max-w-[480px] flex-row items-center text-left mt-2">
                <Image
                  src={card.authorImage}
                  alt=""
                  width={24}
                  height={24}
                  className="mr-4 inline-block h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-semibold text-white">
                    {card.authorName}
                  </h6>
                  <div className="flex items-start max-[991px]:flex-col lg:items-center">
                    <p className="text-sm text-[#636262]">{card.date}</p>
                    <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                      -
                    </p>
                    <p className="text-sm text-[#636262]">6 mins read</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="bg-[#FF9500] px-6 py-2 text-white rounded-md hover:bg-yellow-400 font-medium tracking-wider">
                  Add to Cart
                </button>
                <button className=" flex flex-grow items-center justify-center rounded-md bg-gray-300 hover:bg-gray-400">
                  <FaHeart />
                </button>
                <button className=" flex flex-grow items-center justify-center rounded-md bg-gray-300 hover:bg-gray-400">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMerch;
