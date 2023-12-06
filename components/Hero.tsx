//import { motion } from "framer-motion";

const { motion } = require("framer-motion");
import drum from "../public/drum.jpg";
import Image from "next/image";

const Hero = () => {
  const animations = [
    {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
    {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
    },
    {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    },
  ];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  return (
    <>
      <section className="relative">
        <Image
          src={drum}
          width={1600}
          height={1200}
          alt="bero"
          className="absolute -z-10 inline-block h-full w-full object-cover"
        />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <motion.div
            className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2"
            initial={randomAnimation.initial}
            animate={randomAnimation.animate}
            transition={{ type: "spring", damping: 10, stiffness: 10 }}
          >
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">
                Fast, Reliable and Secure
              </h1>
              <p className="mb-6 max-w-[528px] text-xl text-[#aeaeae] md:mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              <div className="flex items-center">
                <div className="mr-5 inline-block rounded-full bg-[#FF9500] px-20 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">
                  <p> Let's Talk</p>
                </div>
              </div>
            </div>
            <div>
              <motion.img
                src="https://img.freepik.com/premium-photo/musician-singing-man-neon-microphone-music-studio-equipment-practice-theatre-night-recording-singer-person-artist-production-voice-media-sound-performance-light-theater_590464-128736.jpg"
                alt="buck"
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
