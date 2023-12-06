import Image from "next/image";
import React, { useState } from "react";
import artiste3 from "../public/artiste3.jpeg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import MusicPlayer from "./MusicPlayer";

interface Song {
  title: string;
  artiste: string;
  image: string;
  id: number;

  audio: string; // Add the 'audio' property
}

const CardMusic3 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const openPlayerHandler = (song: Song) => {
    setSelectedSong(song);
    setIsOpen(true);
  };

  const closePlayerHandler = () => {
    setSelectedSong(null);
    setIsOpen(false);
  };

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const progressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setProgress(value);
  };

  const data: Song[] = [
    {
      id: 1,
      title: "Divinity",
      artiste: "Ali Martins",
      image: "/artiste10.jpg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 2,
      title: "closure",
      artiste: "Madi",
      image: "/artiste2.jpeg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 3,
      title: "Time knocks",
      artiste: "Martin Joy",
      image: "/artiste3.jpeg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 4,
      title: "Sweet Dreams",
      artiste: "Lax",
      image: "/artiste4.jpeg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 5,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste5.jpeg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 6,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste6.jpeg", // Replace with your image
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    {
      id: 7,
      title: "Up down",
      artiste: "Ezi Lilla",
      image: "/artiste7.jpeg", // Replace with your image path
      audio: "path_to_audio_file_1.mp3", // Add audio file path for each song
    },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-6 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.id}
            className=" h-full py-4 px-14  lg:py-4 lg:px-4 bg-[#09090c] rounded-md box-shadow-lg cursor-pointer  hover:shadow-yellow-700  transition-all duration-200 ease-in hover:scale-100 hover:-translate-y-10"
          >
            <div className="relative w-full  ">
              <Image
                src={item.image}
                alt=""
                width={200}
                height={1000}
                className="relative mx-auto h-52 lg:h-36 lg:w-36 rounded-full   transition-all ease-in-out duration-200  shadow-slate-600 hover:shadow-yellow-700 shadow-lg"
              />
            </div>
            <div className=" mt-2 flex flex-row justify-between items-center">
              <div>
                <h1 className="text-white text-2xl lg:text-lg font-bold">
                  {item.artiste}
                </h1>

                <h1 className="text-[#393939] lg:text-sm">{item.title}</h1>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlinePlayCircle
                  className=" text-white h-10 w-10  cursor-pointer inset-4 z-50 mx-auto flex opacity-10 hover:opacity-100"
                  onClick={() => openPlayerHandler(item)}
                />
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
