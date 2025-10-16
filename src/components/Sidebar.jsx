// Sidebar SVG icon components
import DashboardImg from '../assets/dashboard-fill.svg'
import ReservedImg from '../assets/reserved-fill.png'
import CalendarImg from '../assets/calendar-fill.png'
import walletImg from '../assets/wallet-3-fill.png'
import messageImg from '../assets/message-3-fill.png'
import starSmileSvg from '../assets/star-smile-fill.svg'
import SettingsImg from '../assets/settings-3-fill.png'
import CustomerServiceImg from '../assets/customer-service-fill.png'
import logoutBoxImg from '../assets/logout-box-fill.png'

const Sidebar = () => (
  <div className="flex flex-col justify-between w-[302px] min-h-[825px] rounded-[32px] pb-[25px] mx-[32px] ml-[64px] my-[26px]">
    <div className="mb-[21px] bg-[#E6E9E9] w-[302px] h-[486px] rounded-[45px] p-6">
      <div>
        <div className="inline-block bg-[#FF9FBC] w-[128px] h-[25px] text-center my-auto rounded-full border-[1.5px] border-black px-[13px] py-[3px] text-xs font-bold text-[#071E22] mb-[17px]">
          Guest mode on
        </div>
        <div className="text-[38px] leading-[44px] font-black text-[#1a2930] tracking-wide mb-8 mt-1">
          HEY, JOHN
        </div>
      </div>
      <ul className="space-y-6">
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={DashboardImg} alt="" />
          Dashboard
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={ReservedImg} alt="" />
          Bookings
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={CalendarImg} alt="" />
          Calendar
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={walletImg} alt="" />
          Payment
        </li>
        <li
          className="flex items-center px-4 gap-[15px] bg-[#F8F9FA] py-[13px] rounded-[16px] text-[#071E22] font-extrabold"
          style={{ marginTop: "9px" }}
        >
          <img src={messageImg} alt="" />
          Messages
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold mt-[6px]">
          <img src={starSmileSvg} alt="" />
          Reviews
        </li>
      </ul>
    </div>


<div className="mb-[21px] bg-[#E6E9E9] w-[302px] h-[315px] rounded-[45px] p-6">
      <div>
        <div className="flex items-center bg-[#F8F9FA] rounded-full mb-[30px] p-[3px] w-[254px]">
        <button className="bg-[#FF2E6D] text-white font-bold rounded-full border-black border-[1px] px-[40px] py-[7px] text-[16px]">
          Guest
        </button>
        <button className="bg-transparent text-[#1a2930] font-bold rounded-full px-[40px] py-[7px] text-[16px] ml-[2px]">
          Host
        </button>
      </div>
      </div>
      <ul className="space-y-6">
        <li className="flex items-center gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={SettingsImg} alt="" />
          Settings
        </li>
        <li className="flex items-center gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={CustomerServiceImg} alt="" />
          Help
        </li>
        <li className="flex items-center gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={logoutBoxImg} alt="" />
          log out
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
