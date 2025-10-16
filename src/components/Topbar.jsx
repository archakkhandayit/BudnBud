import { useState } from "react";
import budnbedLogo from "../assets/budnbed-logo.svg";
import Avatar from "../assets/Avatar.png";
import Icon from "../assets/Icon.svg";
import arrowDown from "../assets/arrow-down-s-fill.png";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-[64px] pt-4 sm:pt-[30px] pb-4 sm:pb-[30px] bg-transparent relative">
      {/* --- Logo --- */}
      <img src={budnbedLogo} alt="budnbed" className="h-[32px] sm:h-[41px]" />

      {/* --- Desktop Menu --- */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center justify-around w-[195px] mr-7">
          <span className="text-[#1a2930] text-[16px] font-extrabold cursor-pointer hover:text-[#FF2E6D] transition">
            Home
          </span>
          <span className="text-[#1a2930] text-[16px] font-extrabold cursor-pointer hover:text-[#FF2E6D] transition">
            Dashboard
          </span>
        </div>

        <div className="flex items-center justify-between w-[116px]">
          <img src={Icon} alt="icon" className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center ml-3">
            <img src={arrowDown} alt="arrow-down" className="w-5 h-5 mr-2" />
            <img
              src={Avatar}
              alt="avatar"
              className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Button --- */}
      <button
        className="md:hidden flex flex-col justify-center items-center pt-[1.5px] w-10 h-10 rounded-md border border-gray-300 hover:bg-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`h-[2px] w-6 bg-[#1a2930] transition-all ${
            menuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <div
          className={`h-[2px] w-6 bg-[#1a2930] my-[6px] transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`h-[2px] w-6 bg-[#1a2930] transition-all ${
            menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* --- Mobile Dropdown Menu --- */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-50 md:hidden">
          <span className="text-[#1a2930] text-[16px] font-extrabold cursor-pointer hover:text-[#FF2E6D] transition">
            Home
          </span>
          <span className="text-[#1a2930] text-[16px] font-extrabold cursor-pointer hover:text-[#FF2E6D] transition">
            Dashboard
          </span>
          <div className="flex items-center justify-center space-x-3 mt-3">
            <img src={Icon} alt="icon" className="h-6 w-6" />
            <img
              src={Avatar}
              alt="avatar"
              className="h-[48px] w-[48px] rounded-full"
            />
            <img src={arrowDown} alt="arrow-down" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
