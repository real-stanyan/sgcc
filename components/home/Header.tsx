import { useState } from "react";

const Header = () => {
  const [link, setLink] = useState("首页");

  return (
    <div className="relative">
      {/* Banner */}
      <div
        className={`
    w-full min-h-[70vh] bg-[url('/images/home_header_bg.webp')] 
    bg-cover bg-no-repeat bg-top z-0
    `}
      >
        <div
          className={`
        bg-[#12a1a0] w-[200px] h-[60px] rounded-br-2xl absolute top-0 left-0
        flex items-center
        `}
        >
          {/* logo */}
          <div className="h-[50%] !pl-[15%]">
            <img src="/images/logo.webp" alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div
        className={`
            w-[70%] bg-white !-mt-[50px] !mx-auto z-10
        `}
      >
        {/* links */}
        <div
          className={`
            flex justify-around items-center gap-2 px-5 py-2
            `}
        >
          <div
            className={`
            ${
              link === "首页"
                ? "bg-[#12a1a0] text-white"
                : "bg-[#cacaca] text-black"
            } 
            px-8 py-4 text-md flex-1 text-center whitespace-nowrap cursor-pointer
            `}
          >
            首页
          </div>
          <div
            className={`
            ${
              link === "练兵比武"
                ? "bg-[#12a1a0] text-white"
                : "bg-[#cacaca] text-black"
            } 
            px-8 py-4 text-md flex-1 text-center whitespace-nowrap cursor-pointer
            `}
          >
            “赛马制”练兵比武
          </div>
          <div
            className={`
            ${
              link === "柔性团队"
                ? "bg-[#12a1a0] text-white"
                : "bg-[#cacaca] text-black"
            } 
            px-8 py-4 text-md flex-1 text-center whitespace-nowrap cursor-pointer
            `}
          >
            柔性团队
          </div>
          <div
            className={`
            ${
              link === "一线核心标杆班组"
                ? "bg-[#12a1a0] text-white"
                : "bg-[#cacaca] text-black"
            } 
            px-8 py-4 text-md flex-1 text-center whitespace-nowrap cursor-pointer
            `}
          >
            一线核心标杆班组
          </div>
          <div
            className={`
            ${
              link === "光荣榜"
                ? "bg-[#12a1a0] text-white"
                : "bg-[#cacaca] text-black"
            } 
            px-8 py-4 text-md flex-1 text-center whitespace-nowrap cursor-pointer
            `}
          >
            光荣榜
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
