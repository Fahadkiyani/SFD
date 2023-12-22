import React, { useEffect } from "react";
import axios from "../utils/axios";

function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div
        className="flex justify-center items-center rounded-full p-4 border-1"
        style={{ boxShadow: "2px 2px 14px #dedede" }}
      >
        <div className=" flex relative justify-center items-center bg-white rounded-full w-[400px] h-[400px] ">
          <img
            src="/assets/images/minuts-dial.png"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
          <img
            className="absolute top-0 left-0"
            src="/assets/images/hours-dial.png"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />

          <img
            className="absolute left-auto right-auto top-[16%] ml-36 "
            src="/assets/images/minuts-line.png"
            width="50%"
            height="197.85px"
            style={{ objectFit: "cover" }}
          />
          <img
            className="absolute left-auto right-auto top-[46%] ml-36 "
            src="/assets/images/seconds-line.png"
            width="50%"
            height="197.85px"
            style={{ objectFit: "cover" }}
          />
          <img
            className="absolute left-auto right-auto top-[20%] mr-28"
            src="/assets/images/hour-line.png"
            width="40%"
            height="197.85px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
