import React from "react";
import Sidebar from "../components/Sidebar/index";
import Bottomtab from "@/components/Bottomtab";

export default function MarketPlace() {
  return (
    <div className="">
      <Sidebar />

      <div className="lg:py-8 lg:px-20 bg-black h-[100vh] flex items-center justify-center ">
        <h1 className="">
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
      <Bottomtab />
    </div>
  );
}
