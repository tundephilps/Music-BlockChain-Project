// MusicPlayer.js
import { ImShuffle } from "react-icons/im";
import { FiRepeat } from "react-icons/fi";
import Image from "next/image";
import React, { useState } from "react";
import {
  BsPlayFill,
  BsPauseFill,
  BsSkipStartFill,
  BsSkipEndFill,
} from "react-icons/bs";
import { RiPlayListFill } from "react-icons/ri";
import { FaVolumeUp } from "react-icons/fa";

interface Song {
  // Define your song properties here
  title: string;
  artiste: string;
  image: string;
  audio: string;
  // Add other properties related to the song
}

interface MusicPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isOpen, onClose, song }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const playPauseHandler = () => {
    // Toggle play/pause logic
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (forward: boolean) => {
    // Logic to skip to the next or previous song
    // You need to implement the actual logic based on your data
  };

  const progressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Logic to update the progress when the slider changes
    const value = parseInt(e.target.value, 10);
    setProgress(value);
    // You may want to update the playback position based on the slider value
  };

  return (
    <div
      className={`px-16 fixed bottom-0 left-0 right-0 bg-gray-800  p-4 transition-transform duration-300 transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 z-50 w-[15rem]">
          <Image
            src={song.image}
            alt={song.title}
            width={50}
            height={50}
            className="rounded-full h-16 w-16"
          />
          <div>
            <h1 className="text-white text-2xl font-bold">{song.artiste}</h1>
            <h1 className="text-gray-400">{song.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <FiRepeat className="text-white cursor-pointer text-4xl" />
          <BsSkipStartFill
            className="text-white cursor-pointer text-4xl"
            onClick={() => skipHandler(false)}
          />
          {isPlaying ? (
            <BsPauseFill
              className="text-white cursor-pointer text-4xl"
              onClick={playPauseHandler}
            />
          ) : (
            <BsPlayFill
              className="text-white cursor-pointer text-4xl"
              onClick={playPauseHandler}
            />
          )}
          <BsSkipEndFill
            className="text-white cursor-pointer text-4xl"
            onClick={() => skipHandler(true)}
          />
          <ImShuffle className="text-white cursor-pointer text-4xl" />
        </div>
        <div className="flex items-center gap-6">
          <RiPlayListFill className="text-white cursor-pointer text-3xl" />
          <FaVolumeUp className="text-white cursor-pointer text-3xl" />
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9500] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-orange"></span>
            <span className="relative">COLLECT</span>
          </a>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={progressChangeHandler}
        className="w-full mt-4 h-1"
        style={{ appearance: "none" }}
      />
    </div>
  );
};

export default MusicPlayer;
