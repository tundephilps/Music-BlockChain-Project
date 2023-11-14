import React from "react";
import CardMusic from "./CardMusic";
import CardMusic3 from "./CardMusic3.jsx";

const PlayList = () => {
  return (
    <div>
      <h1 className="text-white text-3xl">Top PlayLists</h1>
      <div>
        <CardMusic3 />
      </div>
    </div>
  );
};

export default PlayList;
