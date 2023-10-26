import { useState } from "react";
import bema1 from "../public/bema1.jpg";

import bema2 from "../public/bema2.jpg";
import bema4 from "../public/bema4.jpg";
import Image from "next/image";

const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize with the first tab

  const tabData = [
    {
      title: "Flexibility",
      content: "Lorem ipsum dolor sit amet consectetur...",
      imageSrc: bema2,
    },
    {
      title: "Scale",
      content: "Lorem ipsum dolor sit amet consectetur...",
      imageSrc: bema4,
    },
    {
      title: "Support",
      content: "Lorem ipsum dolor sit amet consectetur...",
      imageSrc: bema1,
    },
  ];

  const handleTabClick = (index: number): void => {
    setSelectedTab(index);
  };

  return (
    <>
      <section className="bg-black  overflow-x-hidden">
        <div className="overflow-x-hidden w-screen  px-5 py-16 md:px-10 md:py-24 lg:py-32  flex items-center justify-center  flex-col">
          <h2 className="mb-8 text-3xl text-[#FF9500] font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">
            Make every step user-centric
          </h2>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-2">
            <div>
              <Image
                alt=""
                height={300}
                width={600}
                src={tabData[selectedTab].imageSrc}
                className="inline-block min-h-full w-full  max-w-md object-cover lg:max-w-4xl contain "
              />
            </div>
            <div className="flex flex-col gap-9 h-full">
              {tabData.map((data, index) => (
                <a
                  key={index}
                  className={`flex max-w-sm rounded-md p-4 py-8 text-[#222222] lg:w-[20rem] cursor-pointer ${
                    selectedTab === index
                      ? "box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px"
                      : "box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 10px"
                  } hover:bg-slate-900 border-r-2 ${
                    selectedTab === index
                      ? "hover:border-orange-400"
                      : "hover:border-orange-700"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <Image alt="" src="" className="w-13 inline-block" />
                  <div className="ml-4 flex flex-col">
                    <p className="font-semibold">{data.title}</p>
                    <p className="text-sm text-[#636262]">{data.content}</p>
                  </div>
                </a>
              ))}
              {/* {tabData.map((data, index) => (
                <a
                  className="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px] hover:bg-slate-900 border-r-2 hover:border-orange-700"
                  href="#w-tabs-1-data-w-pane-0"
                >
                  <Image
                    alt=""
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    className="w-13 inline-block"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="font-semibold">{data.title}</p>
                    <p className="text-sm text-[#636262]">{data.content}</p>
                  </div>
                </a>
              ))} */}
              {/* <a
                className="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]  hover:bg-slate-900 border-r-2 hover:border-orange-700"
                href="#w-tabs-1-data-w-pane-1"
              >
                <Image
                  alt=""
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                  className="w-13 inline-block"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Scale</p>
                  <p className="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </div>
              </a>
              <a
                className="flex max-w-sm rounded-md p-4 text-[#222222] [box-shadow:rgba(0,0,0,0.05)_0px_0px_30px]  hover:bg-slate-900 border-r-2 hover:border-orange-700"
                href="#w-tabs-1-data-w-pane-2"
              >
                <Image
                  alt=""
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                  className="w-13 inline-block"
                />
                <div className="ml-4 flex flex-col">
                  <p className="font-semibold">Support</p>
                  <p className="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
