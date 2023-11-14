import Image from "next/image";
import React, { useState } from "react";
import artiste3 from "../public/artiste3.jpeg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import MusicPlayer from "./MusicPlayer";

const CardMusic3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const openPlayerHandler = (song) => {
    setSelectedSong(song);
    setIsOpen(true);
  };

  const closePlayerHandler = () => {
    setSelectedSong(null);
    setIsOpen(false);
  };

  const playPauseHandler = () => {
    // Toggle play/pause logic
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (forward) => {
    // Logic to skip to the next or previous song
    // You need to implement the actual logic based on your data
  };

  const progressChangeHandler = (e) => {
    // Logic to update the progress when the slider changes
    const value = e.target.value;
    setProgress(value);
    // You may want to update the playback position based on the slider value
  };

  const data = [
    {
      id: 1,
      title: "Divinity",
      artiste: "Alissa Martins",
      image: "/artiste10.jpg", // Replace with your image path
    },
    {
      id: 2,
      title: "closure",
      artiste: "Madi",
      image: "/artiste2.jpeg", // Replace with your image path
    },
    {
      id: 3,
      title: "Time knocks",
      artiste: "Martin Joy",
      image: "/artiste3.jpeg", // Replace with your image path
    },
    {
      id: 4,
      title: "Sweet Dreams",
      artiste: "Lax",
      image: "/artiste4.jpeg", // Replace with your image path
    },
    {
      id: 5,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste5.jpeg", // Replace with your image path
    },
    {
      id: 6,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste6.jpeg", // Replace with your image path
    },
    {
      id: 7,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste7.jpeg", // Replace with your image path
    },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-6 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {data.map((item) => (
          <div className=" h-full  py-6 bg-[#09090c] rounded-md box-shadow-lg cursor-pointer  hover:shadow-yellow-700  transition-all duration-200 ease-in hover:scale-100 hover:-translate-y-10">
            <div className="relative w-full  ">
              <Image
                src={item.image}
                alt=""
                width={200}
                height={1000}
                className="relative mx-auto h-52 rounded-full   transition-all ease-in-out duration-200  shadow-slate-600 hover:shadow-yellow-700 shadow-lg"
              />
            </div>
            <div className="px-4 mt-2 flex flex-row justify-between items-center">
              <div>
                <h1 className="text-white text-2xl font-bold">
                  {item.artiste}
                </h1>

                <h1 className="text-[#393939]">{item.title}</h1>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlinePlayCircle
                  className=" text-white h-10 w-10  cursor-pointer inset-4 z-50 mx-auto flex opacity-10 hover:opacity-100"
                  onClick={() => openPlayerHandler(item)}
                />
                <BsThreeDots className="text-white text-2xl cursor-pointer inset-0 z-50 mx-auto flex opacity-10 hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {isOpen && selectedSong && (
        <MusicPlayer
          isOpen={isOpen}
          onClose={closePlayerHandler}
          song={selectedSong}
        />
      )}
    </div>
  );
};

export default CardMusic3;