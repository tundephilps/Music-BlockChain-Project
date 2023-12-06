import Image from "next/image";
import React from "react";
import artiste1 from "../public/artiste1.jpg";
import { FaClock, FaEthereum, FaHeart, FaPlay } from "react-icons/fa";

type ContentType = "music" | "video" | "locked" | "collection" | "category";

const CardMusic2: React.FC = () => {
  const renderContent = (type: ContentType) => {
    switch (type) {
      case "music":
        return <div className="wave"></div>;
      case "video":
        return (
          <video
            autoPlay
            playsInline
            muted
            loop
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          >
            <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
            <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
          </video>
        );
      case "locked":
        return (
          <div>
            <div className="nft-description">
              <p>
                Private photo’s description goes here so subscribers to know
                what they’re paying for.
              </p>
            </div>
            <div className="nft-unlock">
              <input
                type="button"
                className="btn btn--primary"
                value="Unlock"
              />
            </div>
          </div>
        );
      case "collection":
        return (
          <div>
            <div className="nft-title">
              <h3>
                <span>Collection</span> New Drop
              </h3>
            </div>
            <Image src="https://i.gifer.com/4P4W.gif" alt="" />
          </div>
        );
      case "category":
        return (
          <div>
            <div className="nft-title">
              <h3>
                <span>Category</span> Gaming
              </h3>
            </div>
            <Image
              src="https://lh3.googleusercontent.com/0uehawLNRzOUSs4qtxX0o5cDenklvm0APLUfJng0kwOu-CCX_hZZI39kf8lbfMKrOB0D0VfXJqKcyMnrUnnBW5s5Gifz6GcCt12j_Q=w1400-k"
              alt=""
            />
            <Image
              src="https://assets.polkamon.com/images/Unimons_T11C03H01B07G00.jpg"
              alt=""
            />
            <Image
              src="https://lh3.googleusercontent.com/geTFW9hgPMsAiifYUNutYZTXfREGWJ39PJeCRC3DIFgX874pnCY9Y_gKHKQwUOM_HIbE2Wf5KFqgoPiJmr_mtczCLj9ExGlmQ5ZR"
              alt=""
            />
            <Image
              src="https://res.cloudinary.com/nftrade/image/upload/w_500,c_scale/v1633826885/evm_56_0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d_10002421270.jpg"
              alt=""
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 p-3 text-white ">
      <div className="flex flex-row items-center gap-2">
        <div className="h-8 w-8 relative ">
          <Image
            src={artiste1}
            width={100}
            height={100}
            className="rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold">Astro Man</h1>
          <h3 className="text-gray-400">@Chris Brown</h3>
        </div>
      </div>
      <div className="bg-cover h-64 w-[100%] relative hover:scale-105 ease-in-out duration-300 group-hover:border-blue-600 shadow-md hover:shadow-yellow-500 transition-border inset-0">
        <div className="absolute flex flex-row items-center right-3 top-2 gap-2 ">
          <h3>1.8k</h3>
          <FaHeart />
        </div>
        <div className=" absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
          <FaPlay className="w-20 h-20  cursor-pointer " />
        </div>
        <Image
          src={artiste1}
          width={1000}
          height={700}
          className="h-64 rounded-md cursor-pointer "
          alt=""
        />
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="flex flex-row items-center gap-1 text-xs">
            <FaClock /> 3 days left
          </h2>
        </div>
        <div className="flex flex-col items-end ">
          <h3 className="text-xs text-gray-400">(803.39)</h3>
          <div className="flex flex-row gap-1 items-center w-[100%]">
            <FaEthereum />
            <h3> 0.23 ETH</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMusic2;
