import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { House, UsersRound, Handshake, Trophy } from "lucide-react";

const HomeHeader = () => {
  const [visitsCount, setVisitsCount] = useState();
  const [link, setLink] = useState("首页");
  const navigate = useNavigate();

  return (
    <div className="relative overflow-visible pb-[100px]">
      <div
        className={`
            bg-[#12a1a0] w-[180px] lg:w-[250px] h-[80px] flex justify-center items-center
            rounded-br-[40px] absolute top-0 left-0 z-50 pr-4
            `}
      >
        <img src="/images/logo.webp" alt="logo" className="w-auto h-[50%]" />
      </div>
      {/* Banner */}
      <div
        className={`
        w-full min-h-[40vh] bg-[url('/images/home_header_bg.webp')] 
        bg-cover bg-no-repeat bg-top z-0 relative
    `}
      >
        {/* content */}
        <div
          className={`
          absolute left-[12%] top-[35%] text-white text-4xl leading-[50px] lg:text-5xl 
          lg:leading-[80px] font-black
          `}
        >
          <h1>国网扬州供电公司人才培养看板</h1>
        </div>
        {/* visits */}
        {/* <div
          className={`
          absolute right-0 bottom-0 text-white text-4xl p-6
          `}
        >
          <h1>访问量</h1>
        </div> */}
      </div>
      {/* links_PC */}
      <div
        className={`
            hidden lg:flex justify-around items-center px-[10%] h-[100px]
            bg-[url('/images/home_header_links_bg.webp')] object-bottom bg-no-repeat object-cover
            `}
      >
        {[
          { name: "首页", icon: House, url: "/" },
          { name: "练兵比武", icon: Trophy, url: "/biwulianbing" },
          { name: "柔性团队", icon: Handshake, url: "/team" },
          { name: "一线核心标杆班组", icon: UsersRound, url: "/group" },
          // { name: "光荣榜", icon: House, url: "/ranking" },
        ].map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={`
              flex-1 flex justify-center items-center gap-2 h-full font-semibold text-md
              ${
                link === item.name
                  ? "bg-[#12a1a0] text-white"
                  : "bg-transparent text-black hover:bg-[#12a1a0]/50 hover:text-white"
              }
              duration-200 transition-colors ease-in-out
              `}
            onClick={() => setLink(item.name)}
          >
            <item.icon />
            <h1>{item.name}</h1>
          </Link>
        ))}
      </div>

      {/* links_PE  */}
      <div
        className={`
        lg:hidden grid grid-cols-2 gap-2 p-4 bg-[url('/images/home_header_links_bg.webp')]
        object-bottom object-cover bg-no-repeat
        `}
      >
        {[
          { name: "首页", icon: House, url: "/" },
          { name: "练兵比武", icon: Trophy, url: "/biwulianbing" },
          { name: "柔性团队", icon: Handshake, url: "/team" },
          { name: "一线核心标杆班组", icon: UsersRound, url: "/group" },
          // { name: "光荣榜", icon: House, url: "/ranking" },
        ].map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={`
                flex justify-center items-center gap-2 border border-black/50
                h-[50px] rounded
                ${
                  link === item.name
                    ? "bg-[#12a1a0] text-white"
                    : "bg-transparent text-black hover:bg-[#12a1a0]/50 hover:text-white"
                }
              duration-200 transition-colors ease-in-out
              `}
            onClick={() => setLink(item.name)}
          >
            <item.icon />
            <h1 className="whitespace-nowrap">{item.name}</h1>
          </Link>
        ))}
      </div>
      {/* White box with links & news */}
      <div
        className={`
      w-[90%] md:w-[70%] bg-white mt-[20px] mx-auto relative overflow-visible z-10
      rounded
        `}
      >
        {/* left/right & news lines */}
        <div className="relative flex flex-col lg:flex-row mt-[30px] px-2">
          {/* left */}
          <div className="flex-1">
            {/* 要闻 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center w-full lg:w-[90%]">
                <div className="w-[100px] h-[40px] bg-[#12a1a0] text-white text-xl font-black flex items-center justify-center">
                  要闻
                </div>
                <div className="flex gap-1">
                  <button className="w-[35px] h-[35px] border flex items-center justify-center">
                    <img
                      src="/images/left.webp"
                      className="w-[25px] h-[25px]"
                    />
                  </button>
                  <button className="w-[35px] h-[35px] border flex items-center justify-center">
                    <img
                      src="/images/left.webp"
                      className="w-[25px] h-[25px] transform scale-x-[-1]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-[20px] w-full lg:w-[90%]">
                {[1, 2].map((i) => (
                  <NewsLine key={i} index={i} title="标题示例" date="06-06" />
                ))}
                <div className="w-[30%] h-[40px] border text-gray-400 flex items-center justify-center text-xs cursor-pointer">
                  查看详细...
                </div>
              </div>
            </div>
            {/* 快讯 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center w-full lg:w-[90%]">
                <div className="w-[100px] h-[40px] bg-[#12a1a0] text-white text-xl font-black flex items-center justify-center">
                  快讯
                </div>
                <div className="flex gap-1">
                  <button className="w-[35px] h-[35px] border flex items-center justify-center">
                    <img
                      src="/images/left.webp"
                      className="w-[25px] h-[25px]"
                    />
                  </button>
                  <button className="w-[35px] h-[35px] border flex items-center justify-center">
                    <img
                      src="/images/left.webp"
                      className="w-[25px] h-[25px] transform scale-x-[-1]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-[80px] w-full lg:w-[90%]">
                {[1, 2].map((i) => (
                  <NewsLine key={i} index={i} title="标题示例" date="06-06" />
                ))}
                <div className="w-[30%] h-[40px] border text-gray-400 flex items-center justify-center text-xs cursor-pointer">
                  查看详细...
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-1 bg-gray-600 z-20"></div>
          {/* full-width bottom bar */}
          <div className="z-10 absolute  left-0 bottom-0 w-[100vw] bg-[#12a1a0] text-white h-[120px] flex items-center">
            <div className="ml-[5%] flex flex-col">
              <h1 className="text-lg whitespace-nowrap">
                全员赛马练兵 锤炼核心技能
              </h1>
              <h3 className="uppercase text-[8px] whitespace-nowrap">
                FULL STAFF HORSE RACING AND TRAINING TO HONE CORE SKILLS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsLine = ({
  index,
  title,
  date,
}: {
  index: number;
  title: string;
  date: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="w-[20px] h-[20px] bg-[#12a1a0] text-white flex items-center justify-center">
      {index}
    </div>
    <div className="flex-1">{title}</div>
    <div>{date}</div>
  </div>
);

export default HomeHeader;
