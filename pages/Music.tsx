import Card from "@/components/Card";
import CardMusic2 from "@/components/CardMusic2";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import Swipe from "@/components/Swipe";
import React, { useEffect, useState } from "react";

const Music = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    // <div className="bg-black">
    //   <Sidebar />
    //   <div className="py-8 px-20  h-[100vh]  ">
    //     <h1 className="text-white">Music</h1>
    //     <div>
    //       <h1 className="text-white">Hey</h1>

    //       <Card />
    //     </div>
    //   </div>
    // </div>
    <>
      {!showComponent && (
        <div>
          <div className="preloader">
            <div className="bar">
              <Loader />{" "}
            </div>
          </div>
        </div>
      )}
      {showComponent && <MusicContainer />}
    </>
  );
};

export default Music;

const MusicContainer = () => {
  return (
    <main className="">
      <Sidebar />
      <div className="lg:py-8 lg:px-20 bg-black h-[100vh]">
        <Swipe />
      </div>
    </main>
  );
};
