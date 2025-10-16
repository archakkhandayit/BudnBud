// Sidebar.jsx
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
  <div className="flex flex-col justify-between 
    w-full sm:w-[280px] md:w-[302px] 
    min-h-screen md:min-h-[825px] 
    rounded-[24px] md:rounded-[32px] 
    pb-6 md:pb-[25px] 
    mx-auto md:mx-[32px] lg:ml-[64px] my-[16px] 
    bg-transparent">

    {/* ---- Top Section ---- */}
    <div className="mb-6 bg-[#E6E9E9] 
      w-full h-auto md:h-[486px] 
      rounded-[30px] md:rounded-[45px] 
      p-4 md:p-6 shadow-md">
      
      <div>
        <div className="inline-block bg-[#FF9FBC] 
          w-fit px-4 py-[3px] text-center 
          rounded-full border-[1.5px] border-black 
          text-xs font-bold text-[#071E22] mb-4">
          Guest mode on
        </div>

        <div className="text-[24px] sm:text-[30px] md:text-[38px] 
          leading-[30px] md:leading-[44px] 
          font-black text-[#1a2930] tracking-wide mb-6 mt-1">
          HEY, JOHN
        </div>
      </div>

      <ul className="space-y-4 md:space-y-6">
        {[
          { img: DashboardImg, label: 'Dashboard' },
          { img: ReservedImg, label: 'Bookings' },
          { img: CalendarImg, label: 'Calendar' },
          { img: walletImg, label: 'Payment' },
        ].map(({ img, label }) => (
          <li key={label} className="flex items-center px-4 gap-3 sm:gap-[15px] text-[#59686B] text-[15px] sm:text-[17px] font-bold cursor-pointer hover:text-[#071E22] transition">
            <img src={img} alt={label} className="w-5 sm:w-6" />
            {label}
          </li>
        ))}

        <li className="flex items-center px-4 gap-3 sm:gap-[15px] bg-[#F8F9FA] py-[10px] sm:py-[13px] rounded-[12px] sm:rounded-[16px] text-[#071E22] font-extrabold mt-2 shadow-sm cursor-pointer">
          <img src={messageImg} alt="Messages" className="w-5 sm:w-6" />
          Messages
        </li>

        <li className="flex items-center px-4 gap-3 sm:gap-[15px] text-[#59686B] text-[15px] sm:text-[17px] font-bold cursor-pointer hover:text-[#071E22] transition">
          <img src={starSmileSvg} alt="Reviews" className="w-5 sm:w-6" />
          Reviews
        </li>
      </ul>
    </div>

    {/* ---- Bottom Section ---- */}
    <div className="bg-[#E6E9E9] w-full h-auto md:h-[315px] rounded-[30px] md:rounded-[45px] p-4 md:p-6 shadow-md">
      <div>
        <div className="flex items-center bg-[#F8F9FA] rounded-full mb-[25px] sm:mb-[30px] p-[3px] w-full sm:w-[254px] mx-auto">
          <button className="bg-[#FF2E6D] text-white font-bold rounded-full border-black border-[1px] flex-1 py-[7px] text-[14px] sm:text-[16px]">
            Guest
          </button>
          <button className="bg-transparent text-[#1a2930] font-bold rounded-full flex-1 py-[7px] text-[14px] sm:text-[16px] ml-[2px]">
            Host
          </button>
        </div>
      </div>

      <ul className="space-y-4 sm:space-y-6">
        {[
          { img: SettingsImg, label: 'Settings' },
          { img: CustomerServiceImg, label: 'Help' },
          { img: logoutBoxImg, label: 'Log out' },
        ].map(({ img, label }) => (
          <li key={label} className="flex items-center gap-3 sm:gap-[15px] text-[#59686B] text-[15px] sm:text-[17px] font-bold cursor-pointer hover:text-[#071E22] transition">
            <img src={img} alt={label} className="w-5 sm:w-6" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
