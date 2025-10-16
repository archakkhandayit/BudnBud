import budnbedLogo from "../assets/budnbed-logo.svg";
import Avatar from "../assets/Avatar.png";
import Icon from "../assets/Icon.svg";
import arrowDown from "../assets/arrow-down-s-fill.png";

const Topbar = () => (
  <div className="w-full flex items-center justify-between px-[64px] pt-[37px] pb-[30px] bg-transparent">
    <img src={budnbedLogo} alt="budnbed" className="h-[41px]" />
    <div className="flex width-[363px]">
      <div className="flex items-center justify-around w-[195px]">
        <span className="text-[#1a2930] text-[16px] font-extrabold">Home</span>
        <span className="text-[#1a2930] text-[16px] font-extrabold">
          Dashboard
        </span>
      </div>
      <div className="flex justify-between w-[116px] ml-7">
        <span className="my-auto">
          <img src={Icon}></img>
        </span>
        <span className="flex">
          <span className="flex content-center w-6 h-6 my-auto ml-2">
            <img src={arrowDown} alt="arrow-down" />
          </span>
          <img
            src={Avatar}
            alt="avatar"
            className="h-[56px] w-[56px] rounded-full"
          />
        </span>
      </div>
    </div>
  </div>
);

export default Topbar;
