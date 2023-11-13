import React from "react";
import Sidebar from "../components/Sidebar/index";

import { AppProps } from "next/app";
import NFT from "./NFT";
import Music from "./Music";

export default function MarketPlace() {
  return (
    <main className="">
      <Sidebar />
      <div className="py-8 px-20 bg-black h-[100vh] flex items-center justify-center ">
        <h1 className="text-white">
          <h1 className="jt --debug">
            <span className="jt__row">
              <span className="jt__text">BEMAVERSE</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">BEMAVERSE</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">BEMAVERSE</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">BEMAVERSE</span>
            </span>
          </h1>
        </h1>
      </div>
    </main>
  );
}
