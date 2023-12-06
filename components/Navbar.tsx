import { useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";

const { motion, AnimatePresence } = require("framer-motion");
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const router = useRouter();

  // Check if the current route is the About page
  const isMarketPlace = router.pathname === "/MarketPlace";

  const isMusic = router.pathname === "/Music";

  const isNFT = router.pathname === "/NFT";

  const isMerchs = router.pathname === "/Merchs";

  const isLogin = router.pathname === "/Login";

  // If it's the About page, don't render the Navbar

  if (isMarketPlace) {
    return null;
  }

  if (isMusic) {
    return null;
  }
  if (isNFT) {
    return null;
  }
  if (isLogin) {
    return null;
  }
  if (isMerchs) {
    return null;
  }

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <div className="lg:hidden">
      <header className="flex justify-between  px-6">
        <h1 className="text-white cursor-pointer">BeamerVerse</h1>
        <div className="py-8 " onClick={isOpen}>
          <FiMenu className=" text-white text-3xl  top-3" />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "75vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              X
            </div>
            <motion.a
              href="/"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              Home
            </motion.a>
            <motion.a
              href="/HowItWorks"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              How It Works
            </motion.a>
            <motion.a
              href="/AboutUs"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              About Us
            </motion.a>
            <motion.a
              href="/FAQ"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              FAQ
            </motion.a>
            <motion.a
              href="/ContactUs"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/MarketPlace"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              MarketPlace
            </motion.a>
            <div>
              <Link
                href="/MobileApp"
                className="flex items-center justify-center rounded-full bg-yellow-600 px-5 py-2 text-center font-bold text-black transition hover:border-black hover:bg-[#FF9500]"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
