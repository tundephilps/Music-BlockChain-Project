import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section>
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
            <div className="max-[991px]:max-w-[720px]">
              <h2 className="font-bold mb-2 text-3xl md:text-5xl">
                Let's build something exciting together!
              </h2>
              <div className="mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
                <p className="text-[#636262] max-[479px]:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus
                </p>
              </div>
              <div className="mb-4 flex items-center max-[991px]:mb-px"></div>
              <div className="mb-8 max-w-[480px]">
                <p className="text-[#636262] max-[479px]:text-sm">
                  Lorem ipsum dolor sit ametelit ut aliquam, purus sit amet
                  luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
              </div>
              <div className="flex-row flex items-start">
                <Image
                  width={1000}
                  height={1000}
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                  alt="buck"
                  className="inline-block h-16 w-16 object-cover mr-4"
                />
                <div className="flex-col flex items-start">
                  <h6 className="text-base font-bold">KiddHillz</h6>
                  <p className="text-[#636262] text-sm sm:text-sm">CEO</p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 max-[991px]:pt-[2em] pb-8">
              <div className="text-center">
                <h3 className="font-bold text-2xl md:text-3xl">
                  Get a free quote
                </h3>
                <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                  <p className="text-[#636262] text-sm sm:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                  </p>
                </div>
                <div className="mx-auto w-full max-w-[400px]">
                  <div className="mx-auto max-w-[400px] text-left mb-4">
                    <div>
                      <div className="relative">
                        <label className="mb-1 font-medium">Your Name</label>
                        <input
                          type="text"
                          className="mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                          name="name-2"
                          placeholder=""
                        />
                      </div>
                      <div className="relative mb-2">
                        <label className="mb-1 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                          name="name-2"
                          placeholder=""
                        />
                      </div>
                      <div className="relative mb-5 md:mb-6 lg:mb-8">
                        <label className="mb-1 font-medium">
                          Project Brief
                        </label>
                        <textarea
                          placeholder=""
                          name="field"
                          className="block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Get free quote"
                        className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
