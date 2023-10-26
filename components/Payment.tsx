import Image from "next/image";
import payment from "../public/Payment.png";

const Payment = () => {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div>
              <Image
                width={1000}
                height={1000}
                src={payment}
                alt=""
                className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
              />
            </div>
            <div data-aos="fade-down" data-aos-anchor-placement="top-center">
              <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                <span className="text-[#FF9500]">BEMAVERSE</span> Music App
              </h1>
              <p className="mb-6 max-w-[528px] text-[#aeaeae] md:mb-10 lg:mb-12">
                The BEMA Music App is a user-friendly mobile application that
                revolutionizes the way you handle your music and transactions.
                With its intuitive interface and robust functionality, it
                provides a seamless and convenient experience for artists and
                audience.
              </p>
              <div className="mb-6 flex items-center md:mb-10 lg:mb-12">
                <a href="#" className="flex flex-row font-bold">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28f3_CaretRight.svg"
                    alt=""
                    className="mr-2 inline-block w-5"
                  />
                  <p className="text-white">Read Full Review</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
