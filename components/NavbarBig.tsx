import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarBig = () => {
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

  return (
    <section className="left-0 w-full overflow-x-hidden absolute top-0 hidden lg:flex  bg-black  ">
      <div className="  min-w-[100vw]   z-50 bg-black ">
        <div className="h-auto bg-transparent   text-white">
          <nav
            className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0"
            x-data="{isOpen: false, menuOne:false}"
          >
            <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
              <Link href="#">Bema Verse</Link>
              <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
                <div className="relative flex flex-col">
                  <Link
                    href="/"
                    className="flex flex-row rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                  >
                    Home
                  </Link>
                </div>
                <Link
                  href="/HowItWorks"
                  className="font-inter rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                >
                  How It Works
                </Link>
                <Link
                  href="/AboutUs"
                  className="font-inter rounded-lg hover:text-[#FF9500] lg:px-6 lg:py-4"
                >
                  About US
                </Link>
                <Link
                  href="/FAQ"
                  className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                >
                  FAQ
                </Link>
                <Link
                  href="/ContactUs"
                  className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                >
                  Contact Us
                </Link>
                <Link
                  href="/MarketPlace"
                  className="font-inter rounded-lg pb-8 hover:text-[#FF9500] lg:px-6 lg:py-4 lg:pb-0"
                >
                  Market Place
                </Link>
              </div>
              <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                <Link
                  href="/MobileApp"
                  className="inline-block rounded-full bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-[#FF9500]"
                >
                  Download App
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default NavbarBig;
