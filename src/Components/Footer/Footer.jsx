import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="flex sm:px-10 m-10 px-20 mx-full justify-around shadow-lg shadow-t-lg rounded-xl bg-gray-150">
      <h2 className="font-bold p-6"><a className="flex items-center gap-2" target="_blank" href="https://github.com/RiteshLS03">Made With {<AiOutlineHeart />} by Ritesh</a></h2>
    </div>
  );
}

export default Footer;
