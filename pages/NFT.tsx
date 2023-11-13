import Card from "@/components/Card";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

const NFT = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
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
      {showComponent && <NFTContainer />}
    </>
  );
};

export default NFT;

const NFTContainer = () => {
  return (
    <main className="">
      <Sidebar />
      <div className="px-20 bg-black py-12  ">
        <h1 className="text-white">NFT</h1>
        <Card />
      </div>
    </main>
  );
};
