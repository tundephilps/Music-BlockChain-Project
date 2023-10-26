import Image from "next/image";
import Vision from "../components/Vision";

const AboutUs = () => {
  return (
    <>
      <section className="bg-black">
        <div className="py-12 md:py-16 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-8">
            <div className="flex-col flex-1 flex justify-center gap-8">
              <div className="flex-col flex gap-8">
                <h2 className="font-bold text-3xl md:text-5xl text-[#FF9500]">
                  About us
                </h2>
                <p className="max-[479px]:text-sm text-[#ffffff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Proin fermentum leo vel orci. Dui faucibus in ornare quam
                  viverra orci sagittis eu. Viverra nam libero justo laoreet sit
                  amet. Vulputate odio ut enim blandit volutpat maecenas
                  volutpat blandit. A lacus vestibulum sed arcu non odio
                  euismod. Feugiat pretium nibh ipsum consequat. Cum sociis
                  natoque penatibus et. Leo in vitae turpis massa sed. Neque
                  aliquam vestibulum morbi blandit cursus. Facilisis sed odio
                  morbi quis. A pellentesque sit amet porttitor eget.
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 flex-wrap">
                <a
                  href="#"
                  className="inline-block items-center rounded-md bg-[#FF9500] px-6 py-3 text-center font-semibold text-white"
                >
                  Learn More
                </a>
              </div>
              <div className="mb-8 mt-8 h-px w-full bg-black"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                <div className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-[#f2f2f7] rounded-md p-6 md:p-4">
                  <p className="text-sm sm:text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-2">
                    <div className="flex items-center gap-x-2">
                      <Image
                        width={1000}
                        height={1000}
                        src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
                        alt=""
                        className="flex h-12 min-h-[48px] w-12 min-w-[48px] items-center rounded-[100%] object-cover"
                      />
                      <p className="font-semibold max-[479px]:text-sm">
                        Alleyah
                      </p>
                    </div>
                    <div className="w-px bg-[#636262] h-5"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="font-semibold max-[479px]:text-sm">5.0</p>
                      <div className="flex text-[#f6ad1b]">
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-[#f2f2f7] rounded-md p-6 md:p-4">
                  <p className="text-sm sm:text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-2">
                    <div className="flex items-center gap-x-2">
                      <Image
                        width={1000}
                        height={1000}
                        src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
                        alt=""
                        className="flex h-12 min-h-[48px] w-12 min-w-[48px] items-center rounded-[100%] object-cover"
                      />
                      <p className="font-semibold max-[479px]:text-sm">
                        Alleyah
                      </p>
                    </div>
                    <div className="w-px bg-[#636262] h-5"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="font-semibold max-[479px]:text-sm">5.0</p>
                      <div className="flex text-[#f6ad1b]">
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-col flex h-4 w-4 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block overflow-hidden bg-[#f2f2f7] max-[991px]:h-[475px] rounded-md w-full lg:w-[35%]"></div>
          </div>
        </div>
        <Vision />
      </section>
    </>
  );
};

export default AboutUs;
