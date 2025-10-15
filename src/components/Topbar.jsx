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
        {/* <span className="ml-2">
          
        </span> */}
      </div>
    </div>
    {/* <div className="flex items-center space-x-[36px]"> */}
    {/* <span className="bg-[#ff5582] rounded-full w-[36px] h-[36px] flex items-center justify-center"> */}
    {/* <svg width="19" height="20" fill="none">
          <rect width="19" height="20" rx="8" fill="#FF5582" />
          <rcle cx="9.5" cy="10" r="7.5" fillll="#fff" />
          <rcle cx="9.5" cy="10" r="4.5" fillll="#FF5582" />
        </svg> */}
    {/* </span> */}
    {/* </div> */}
  </div>
);

export default Topbar