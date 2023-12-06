import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

const Loader = () => {
  return (
    <div className="grid place-content-center bg-black px-4 h-[100vh]">
      <BarLoader />
    </div>
  );
};

const variants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-orange-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-orange-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-orange-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-orange-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-orange-700" />
    </motion.div>
  );
};

export default Loader;
