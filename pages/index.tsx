import Homepage from "./Homepage";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}
