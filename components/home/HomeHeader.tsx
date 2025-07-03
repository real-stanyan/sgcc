import { useState } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Links = [
  { name: "首页", icon: "/icons/home_icon.webp", url: "/" },
  {
    name: "练兵比武",
    icon: "/icons/biwulianbing_icon.webp",
    url: "/biwulianbing",
  },
  { name: "柔性团队", icon: "/icons/team_icon.webp", url: "/team" },
  {
    name: "一线核心标杆班组",
    icon: "/icons/group_icon.webp",
    url: "/group",
  },
];

const HomeHeader = () => {
  // const [visitsCount, setVisitsCount] = useState();
  const [link, setLink] = useState("首页");

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
        w-full min-h-[35vh] bg-[url('/images/home_header_bg.webp')] 
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
      <div className="relative hidden lg:flex items-center px-[10%] h-[100px]">
        {/* 背景层 */}
        <div
          className="
      absolute inset-0
      bg-[url('/images/home_header_links_bg.webp')] bg-cover bg-bottom bg-no-repeat
      opacity-50
      z-0
    "
        />
        {/* 内容层 */}
        {Links.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={`
        relative z-10 flex-1 flex justify-center items-center gap-2 h-full font-semibold text-md
        ${
          link === item.name
            ? "bg-[#12a1a0] text-white"
            : "bg-transparent text-black hover:bg-[#12a1a0]/50 hover:text-white"
        }
        duration-200 transition-colors ease-in-out
      `}
            onClick={() => setLink(item.name)}
          >
            <img src={item.icon} className="w-[15%] h-auto" />
            <h1>{item.name}</h1>
          </Link>
        ))}
      </div>

      {/* links_PE  */}
      <div className="relative lg:hidden p-4">
        {/* 背景层 */}
        <div
          className="
      absolute inset-0
      bg-[url('/images/home_header_links_bg.webp')]
      bg-cover bg-bottom bg-no-repeat
      opacity-50
      z-0
    "
        />
        {/* 内容层 */}
        <div className="relative z-10 grid grid-cols-2 gap-2">
          {Links.map((item, index) => (
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
              <img src={item.icon} className="w-[8%] h-auto" />
              <h1 className="whitespace-nowrap">{item.name}</h1>
            </Link>
          ))}
        </div>
      </div>

      {/* White box with links & news */}
      <div
        className={`
      w-[90%] lg:w-full bg-white mt-[20px] mx-auto relative overflow-visible z-10
      rounded
        `}
      >
        {/* left/right & news lines */}
        <div className="relative flex flex-col lg:flex-row mt-[30px] px-2">
          {/* left_padding */}
          <div className="min-w-[10vw] hidden lg:flex items-end">
            <div className="min-w-full min-h-[120px] bg-white"></div>
          </div>
          {/* left */}
          <div className="flex-1">
            {/* 要闻 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center w-full lg:w-[90%]">
                <div className="w-[100px] h-[40px] bg-[#12a1a0] text-white text-xl font-black flex items-center justify-center">
                  要闻
                </div>
                <h1 className="flex justify-center items-center gap-1 text-gray-400 font-light text-sm">
                  查看详细
                  <MoveRight className="w-[20px]" />
                </h1>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-[20px] w-full lg:w-[90%]">
                {[1, 2].map((i) => (
                  <NewsLine key={i} index={i} title="标题示例" date="06-06" />
                ))}
              </div>
            </div>
            {/* 快讯 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center w-full lg:w-[90%]">
                <div className="w-[100px] h-[40px] bg-[#12a1a0] text-white text-xl font-black flex items-center justify-center">
                  快讯
                </div>
                <h1 className="flex justify-center items-center gap-1 text-gray-400 font-light text-sm">
                  查看详细
                  <MoveRight className="w-[20px]" />
                </h1>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-[80px] w-full lg:w-[90%]">
                {[1, 2].map((i) => (
                  <NewsLine key={i} index={i} title="标题示例" date="06-06" />
                ))}
              </div>
            </div>
            {/* full-width bottom bar */}
            <div className="z-10 w-full bg-[#12a1a0] text-white h-[120px] flex items-center">
              <div className="ml-[5%] flex flex-col">
                <h1 className="text-lg whitespace-nowrap">
                  锤炼核心技能 加强创新驱动 推进人才强企
                </h1>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-1 bg-gray-600 z-20"></div>
          {/* right_padding */}
          <div className="min-w-[10vw] hidden lg:flex items-end">
            <div className="min-w-full min-h-[120px] bg-[#12a1a0]"></div>
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
