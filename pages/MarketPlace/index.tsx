import React from "react";

import { AppProps } from "next/app";
import Sidebar from "@/components/Sidebar";

export default function index({ Component, pageProps }: AppProps) {
  return (
    <
      // className="h-[100vh]  py-16  bg-black"
    >
      <div className="">
        <Sidebar />
        <div className="lg:py-8 lg:px-20 bg-black h-[100vh] flex items-center justify-center  ">
          <h1 className="overflow-hidden">
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
      </div>
    </>
  );
}
