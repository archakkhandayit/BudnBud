import React, { useState } from "react";

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import HambergerBig from "./assets/Ellipsis.png";

import logo from './assets/logo.png'

import ArchiveFill from './assets/archive-fill.png'
import errorWarning from './assets/error-warning-fill.png'
import deleteButton from './assets/delete-bin-3-fill.png'

import ActionIconMicrophone from "./assets/Action Icon Microphone.png";
import ActionIconPlus from "./assets/Action Icon Plus.png";
import ActionIconAttachment from "./assets/Action Icon Attachment.png";

// Small utility icons MessageContent compoenets
const AttachmentIcon = () => (
  <span className="text-[#a5afb8] text-[19px]">&#128206;</span>
);
const AudioIcon = () => (
  <span className="text-[#a5afb8] text-[19px]">&#128264;</span>
);
const MoreIcon = () => (
  <svg className="text-amber-200" width="26" height="26" fill="none">
    <rcle cx="5" cy="13" r="2" fill="#a5afbfb8" />
    <rcle cx="13" cy="13" r="2" fill="#a5afb8" />
    <rcle cx="21" cy="13" r="2" fill="#a5afb8" />
  </svg>
);

// Topbar

const MessageTabs = ({ active, onChange }) => {
  const tabs = ["All", "Read", "Unread", "Archived"];
  return (
    <div className="mb-[17px] flex gap-[10px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`${
            active === tab ? "bg-[#FF9FBC]" : "bg-[#F8F9FA]"
          } text-[17px] font-bold py-[10px] px-[20px] rounded-full border-[1.5px] border-[#071E22]`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const MessageListItem = () => (
  <div className="flex py-[22px] bg-[#F8F9FA] w-[340px] h-[715px] rounded-[35px] pt-8 mb-7">
    <div className="flex h-17 w-full py-2 px-5">
      <div className="flex items-center w-full">
        <div
          className="flex items-center justify-center bg-[#ff5582] text-white text-[22px] h-[48px] w-[50px] rounded-full font-black mr-[12px]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="w-64">
          <div className="flex justify-between w-full">
            <div
              className="text-[#1a2930] font-bold text-[14px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              BudnBed
            </div>
            <div className="text-[#a5afb8] text-[13px] font-bold">23:45</div>
          </div>
          <div
            className="text-[#a5afb8] text-[12px] mt-1"
            style={{ lineHeight: "21px" }}
          >
            Hello, How are you doing de...
          </div>
        </div>
        {/* <div className="flex-1" /> */}
      </div>
    </div>
  </div>
);

const MessageContent = ({ dropdownOpen, setDropdownOpen }) => (
  <div className="bg-[#F8F9FA] rounded-[20px] shadow px-[34px] py-[30px]  flex flex-col gap-3 w-[650px] h-[710px] relative">
    {/* bubbub logo and userid */}
    <div className="flex items-center justify-between mb-3 border-b-2 border-[#B2B9BA]">
      <div className="flex items-center pb-3">
        <span
          className="flex items-center justify-center bg-[#ff5582] text-white text-[24px] h-[42px] w-[42px] rounded-full font-black mr-[18px]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <img src={logo} alt="logo" />
        </span>
        <span className="text-[#1a2930] text-[16.5px] font-bold ">
          BudnBed
        </span>
      </div>
      <div className="relative">
        <button
          className="p-2 rounded hover:bg-[#f2f2f2]"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {/* <MoreIcon /> */}
          <img src={HambergerBig} alt="HambergerBig" />
        </button>
        {dropdownOpen && (
          <div className="absolute top-8 right-0 mt-2 w-[144px] bg-white rounded-[20px] shadow-lg text-[17px] font-bold text-[#1a2930] py-3 z-50">
            <div className="flex content-center px-7 py-2 hover:bg-[#f3f3f3] rounded-lg cursor-pointer">
              <img src={ArchiveFill} alt="ArchiveFill" className="h-4 w-4 my-auto mr-2"/>
              <div>
              Archive
              </div>
            </div>
            <div className="flex content-center px-7 py-2 hover:bg-[#f3f3f3] rounded-lg cursor-pointer">
              <img src={errorWarning} alt="ArchiveFill" className="h-4 w-4 my-auto mr-2" />
              <div>
              Block
              </div>
            </div>
            <div className="flex content-center px-7 py-2 hover:bg-[#f3f3f3] rounded-lg cursor-pointer text-[#A83030]">
              <img src={deleteButton} alt="ArchiveFill" className="h-4 w-4 my-auto mr-2"/>
              <div>
              Delete
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* messages */}
    <div className=" h-full">
      <div className="rounded-[15px] py-[13px] mb-4 w-fit ">
        <div className="rounded-4 text-[#1a2930] bg-[#FFFFFF] text-[15.5px] font-bold mb-1">
          Hello, How are you doing dear?
        </div>
        <div className="text-[#a5afb8] text-[12.5px] font-medium">01.02.25, 08:30 pm</div>
      </div>
      <div className="mt-16 mb-9 flex items-center ">
        <span className="bg-[#FFFFFF] rounded-full w-[42px] h-[30px] flex items-center justify-center">
          <svg height="14" width="25">
            <text x="5" y="12" fontSize="25" fill="#a5afb8">
              ...
            </text>
          </svg>
        </span>
      </div>
    </div>

    {/* message send container */}
    <div className="flex gap-5">
      <button>

      <img src={ActionIconPlus} alt="ActionIconPlus" className="h-6 w-8 my-auto"/>
      </button>
      <button>

      <img src={ActionIconAttachment} alt="ActionIconAttachment" className="h-6 w-8 my-auto"/>
      </button>

      <div className="flex items-center w-full bg-white rounded-[22px] border border-[#8D9899] py-[9px] px-4">
        <input
          className="flex-1 bg-transparent text-[#1a2930] text-[16px] font-medium outline-none px-2"
          placeholder="Type your message here..."
        />
      </div>
      <button>
        <img src={ActionIconMicrophone} alt="ActionIconMicrophone" className="h-6 w-8 my-auto"/>
      </button>
    </div>
  </div>
);

function DashboardMessages() {
  const [tab, setTab] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div
      className="bg-[#F8F9FA] min-h-screen w-full"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Topbar />
      <div className="flex flex-row">
        <Sidebar />

        <div className=" flex flex-col items-start w-[1060px] h-[825px] mt-[26px] p-6 rounded-4xl bg-[#fff]">
          {/* Wide layout for the messages and chat area */}
          <MessageTabs active={tab} onChange={setTab} />
          <div className="flex flex-row gap-[22px]">
            <div>
              <MessageListItem />
            </div>
            <div className="flex-1 ">
              <MessageContent
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMessages;
