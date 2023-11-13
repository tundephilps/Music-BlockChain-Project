import Image from "next/image";
//import metaverse from "../public/metaverse.mp4";
import { useEffect, useRef } from "react";

const Login = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    // You can now use "video" to interact with the video element
    if (video) {
      // Example: Play the video when the component mounts
      video
        .play()
        .catch((error) => console.error("Error playing video:", error));
    }

    // Cleanup: Pause the video when the component unmounts
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./metaverse.mp4" type="video/mp4" />
      </video>
      <div className="w-full max-w-md bg-[rgba(255,255,255,0.6)] backdrop-blur-md rounded-xl shadow-xl overflow-hidden dark:bg-[rgba(0,0,0,0.6)]">
        <div className="py-10 px-6 sm:px-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Log In
            </h1>
            <p className="text-gray-600 dark:text-gray-200 mt-2">
              Enter your credentials below.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 dark:text-gray-400"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-gray-800 dark:text-white"
                id="username"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 dark:text-gray-400"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-gray-800 dark:text-white"
                id="password"
                required
                type="password"
              />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full text-white bg-blue-500 hover:bg-blue-600"
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="absolute z-[-1]">
          <Image
            src="/logo.png"
            alt="Background"
            width={1920}
            height={1080}
            style={{ aspectRatio: "1920 / 1080", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
