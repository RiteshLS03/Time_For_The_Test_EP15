import React, { useState, useContext } from "react";
import { logo, vector } from "../../Images/index"; /* Images for UI */
import { Link } from "react-router-dom";
import { Body } from "../Index";
// import "./Header.css"; //removed because of tailwind css
import useOnline from "../../utils/useOnline";
import Instamart from "../Instamart";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import UserContext from "../../utils/UserContext";
import { AiOutlineShoppingCart , AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("true");
  const online = useOnline();

  const { user } = useContext(UserContext);
  console.log(user);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <ul className="flex py-2 gap-4 text-[#3D4152] font-bold sm:text-sm md:text-sm:px-2:mx-2">
        <li className="flex items-center md:text-sm:px-2:mx-2 md:p-2  hover:text-[#fc8019]">
          <Link className="flex items-center mx-1" to="/"><AiOutlineHome className="mx-2" size={25}/>Home</Link>
        </li>
        <li className="flex items-center md:text-sm:px-2:mx-4 md:p-2  hover:text-[#fc8019]">Food</li>
        <li className="flex items-center md:text-sm:px-2:mx-4 md:p-2  hover:text-[#fc8019]">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="flex items-center md:text-sm:px-2:mx-4 md:p-2  hover:text-[#fc8019]">
          <Link to="/Instamart">Instamart</Link>
        </li>
        <li className="flex items-center cursor-pointer">
          <Link className="px-2 " to={"/cart"}>
            <p className="flex" style={{color:(cartItems.length > 0) && "#60b246" } } >
              <AiOutlineShoppingCart size={25}  /> {(cartItems.length === 0) ? null : cartItems.length}
            </p>
          </Link>
        </li>
        <li
          className="flex items-center md:text-sm md:p-2 "
          style={{ margin: "0 0.5rem" }}
        >
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>
              <h6 className="text-xs">{user.name}</h6>Logout
            </button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </li>
        <li className="flex items-center md:p-2">
          <h6>{online ? "🟢" : "🔴"}</h6>
        </li>
      </ul>
    </>
  );
};

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      {/* LOGO */}
      <div className="flex sm:px-10 px-20 mx-full justify-between shadow-lg rounded-xl bg-gray-150 ">
        <div>
          <img className="w-20" src={logo} alt="logo"></img>
        </div>
        {/* NAVBAR */}
        <div className="sm:hidden flex items-center">
          <Menu />
        </div>
        <div className="yumies_navbar-menu flex items-center md:hidden lg:hidden xl:hidden 2xl:hidden relative ">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="flex  items-center ">
              <Menu />
            </div>
          )}
        </div>
        {/* <p className="sm:p-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="relative flex-col ">
              <div className=" flex justify-end items-center flex-col text-end absolute">
                <Menu />
              </div>
            </div>
          )}
        </p> */}
      </div>
    </>
  );
}

export default Header;
