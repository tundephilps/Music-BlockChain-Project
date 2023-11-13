import React from "react";

import { AppProps } from "next/app";
import Sidebar from "@/components/Sidebar";

export default function index({ Component, pageProps }: AppProps) {
  return (
    <
      // className="h-[100vh]  py-16  bg-black"
    >
      <main className="h-[100vh]">
        <Sidebar />
        <div className="p-12">Home</div>
      </main>
    </>
  );
}
