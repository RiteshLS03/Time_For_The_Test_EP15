import React from "react";
import "./MAINRESSHIMMAR.css"

const MAINRESSHIMMAR = () => {
  return (
    <>
    <div className="shimmar container2 gap-2 sm:mx-2 mx-72 p-10 md:mx-4 lg:mx-20 xl:mx-20 2xl:mx-32">
      <div className="shimmar left_side ">
        <div className="shimmar title_of_res sm:w-10"></div>
        <div className="shimmar cuisines"></div>
        <div className="shimmar distance"></div>
      </div>
      <div className="shimmar right_side">
        <div className="shimmar img"></div>
      </div>
    </div>
    </>
  );
};

export default MAINRESSHIMMAR;
