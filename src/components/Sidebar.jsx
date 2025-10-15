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

const DashboardIcon = () => (
  <svg width="20" height="20" fill="none">
    <rect width="20" height="20" rx="4" fill="#A5AFB8" />
    <rect x="4" y="8" width="12" height="8" rx="1" fill="#D6DBDF" />
    <rect x="7" y="4" width="6" height="6" rx="1" fill="#D6DBDF" />
  </svg>
);
const BookingsIcon = () => (
  <svg width="20" height="20" fill="none">
    <rect width="20" height="20" rx="4" fill="#A5AFB8" />
    <rect x="4" y="8" width="12" height="8" rx="1" fill="#D6DBDF" />
    <rect x="7" y="4" width="6" height="6" rx="1" fill="#D6DBDF" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="20" height="20" fill="none">
    <rect width="20" height="20" rx="4" fill="#A5AFB8" />
    <rcle cx="10" cy="10" r="6" fill="#D6DBDF" />
  </svg>
);
const PaymentIcon = () => (
  <svg width="20" height="20" fill="none">
    <rect width="20" height="20" rx="4" fill="#A5AFB8" />
    <rect x="5" y="8" width="10" height="4" rx="1" fill="#D6DBDF" />
  </svg>
);
const MessagesIcon = () => (
  <svg width="18" height="17" fill="none">
    <rect width="18" height="17" rx="4" fill="#FF5582" />
    <path d="M3 7h12v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7z" fill="#fff" />
    <path d="M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#fff" />
  </svg>
);
const ReviewsIcon = () => (
  <svg width="18" height="18" fill="none">
    <rcle cx="9" cy="9" r="8" fill="#FF558582" />
    <path
      d="M6 11l2 2l4-4"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const SettingsIcon = () => (
  <svg width="20" height="20" fill="none">
    <rcle cx="10" cy="10" r="8" fill="#A5AFAFB8" />
    <rect x="7" y="7" width="6" height="6" rx="1" fill="#fff" />
  </svg>
);
const HelpIcon = () => (
  <svg width="20" height="20" fill="none">
    <rcle cx="10" cy="10" r="8" fill="#A5AFAFB8" />
    <path
      d="M10 8a2 2 0 1 1 0 4v2"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const LogoutIcon = () => (
  <svg width="20" height="20" fill="none">
    <rect width="20" height="20" rx="4" fill="#A5AFB8" />
    <path d="M8 7h4v6H8z" fill="#fff" />
  </svg>
);

const Sidebar = () => (
  <div className="flex flex-col justify-between w-[302px] min-h-[825px] rounded-[32px] pb-[25px] mx-[32px] ml-[64px] my-[26px]">
    {/* upper sidebar */}
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
          {/* <BookingsIcon /> */}
          Bookings
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={CalendarImg} alt="" />
          {/* <CalendarIcon /> */}
          Calendar
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={walletImg} alt="" />
          {/* <PaymentIcon /> */}
          Payment
        </li>
        <li
          className="flex items-center px-4 gap-[15px] bg-[#F8F9FA] py-[13px] rounded-[16px] text-[#071E22] font-extrabold"
          style={{ marginTop: "9px" }}
        >
          <img src={messageImg} alt="" />
          {/* <MessagesIcon /> */}
          Messages
        </li>
        <li className="flex items-center px-4 gap-[15px] text-[#59686B] text-[17px] font-bold mt-[6px]">
          <img src={starSmileSvg} alt="" />
          {/* <ReviewsIcon /> */}
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
          {/* <SettingsIcon /> */}
          Settings
        </li>
        <li className="flex items-center gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={CustomerServiceImg} alt="" />
          {/* <HelpIcon /> */}
          Help
        </li>
        <li className="flex items-center gap-[15px] text-[#59686B] text-[17px] font-bold">
          <img src={logoutBoxImg} alt="" />
          {/* <LogoutIcon /> */}
          log out
        </li>
      </ul>
    </div>



    {/* lower sidebar
    <div>
      <div className="flex items-center bg-[#e6ecee] rounded-full mb-[7px] px-2 py-2 w-[190px]">
        <button className="bg-[#ff5582] text-white font-bold rounded-full px-[28px] py-[7px] text-[16px] mr-[6px]">
          Guest
        </button>
        <button className="bg-white text-[#1a2930] font-bold rounded-full px-[20px] py-[7px] text-[16px] ml-[2px]">
          Host
        </button>
      </div>
      <ul className="space-y-5 pt-1">
        <li className="flex items-center gap-[17px] text-[#a5afb8] text-[17px] font-bold">
          <SettingsIcon />
          Settings
        </li>
        <li className="flex items-center gap-[17px] text-[#a5afb8] text-[17px] font-bold">
          <HelpIcon />
          Help
        </li>
        <li className="flex items-center gap-[17px] text-[#a5afb8] text-[17px] font-bold">
          <LogoutIcon />
          log out
        </li>
      </ul>
    </div> */}
  </div>
);

export default Sidebar;
