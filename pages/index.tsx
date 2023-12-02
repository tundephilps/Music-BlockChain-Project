import Homepage from "./Homepage";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfilePage from "./ProfilePage";
import Connect from "@/components/Connect";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <Connect /> */}
      {/* <ProfilePage /> */}
      <Homepage />
    </>
  );
}
