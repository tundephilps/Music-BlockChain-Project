import Billboard from "@/components/Billboard";
import Card from "@/components/Card";
import CardMerch from "@/components/CardMerch";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

const Merch = () => {
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
      {showComponent && <MerchContainer />}
    </>
  );
};

export default Merch;

const MerchContainer = () => {
  return (
    <main className="">
      <Sidebar />
      <div className="lg:py-12 lg:px-20 bg-black   ">
        {/* <Billboard /> */}
        <CardMerch />
      </div>
    </main>
  );
};
