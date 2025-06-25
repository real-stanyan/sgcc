import { useState } from "react";

const Header = () => {
  const [link, setLink] = useState("首页");

  return (
    <div className="relative overflow-visible pb-[100px]">
      {/* Banner */}
      <div
        className={`
    w-full min-h-[70vh] bg-[url('/images/home_header_bg.webp')] 
    bg-cover bg-no-repeat bg-top z-0
    `}
      >
        {/* content */}
        <div
          className={`
          absolute left-[12%] top-[15%] text-white text-4xl leading-[50px] lg:text-6xl 
          lg:leading-[80px] font-black
          `}
        >
          <h1>国网扬州供电公司</h1>
          <h1>人才培养看板</h1>
        </div>
        {/* logo */}
        <div
          className={`
        bg-[#12a1a0] w-[140px] md:w-[200px] h-[50px] md:h-[60px] rounded-br-2xl 
        absolute top-0 left-0 flex items-center
        `}
        >
          <div className="h-[50%] pl-[15%]">
            <img src="/images/logo.webp" alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
      {/* White box with links & news */}
      <div
        className={`
      w-[90%] md:w-[70%] bg-white -mt-[50px] mx-auto relative overflow-visible z-10
      rounded
        `}
      >
        {/* links_PC */}
        <div className="hidden lg:flex justify-around items-center gap-2 px-5 py-2">
          {["首页", "练兵比武", "柔性团队", "一线核心标杆班组", "光荣榜"].map(
            (item) => (
              <div
                key={item}
                className={`flex-1 text-center whitespace-nowrap cursor-pointer px-8 py-4 ${
                  link === item
                    ? "bg-[#12a1a0] text-white"
                    : "bg-[#cacaca] text-black"
                }`}
                onClick={() => setLink(item)}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* links_PE  */}
        <div className="lg:hidden grid grid-cols-2 gap-2 px-2 py-4">
          {["首页", "练兵比武", "柔性团队", "一线核心标杆班组", "光荣榜"].map(
            (item) => (
              <div
                key={item}
                className={`
        w-full text-center whitespace-nowrap cursor-pointer py-2 rounded-md
        ${link === item ? "bg-[#12a1a0] text-white" : "bg-[#cacaca] text-black"}
        ${item === "一线核心标杆班组" ? "col-span-2 order-last" : ""}
      `}
                onClick={() => setLink(item)}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* left/right & news lines */}
        <div className="flex flex-col lg:flex-row mt-[30px] px-2">
          {/* left */}
          <div className="flex-1">
            <div className="flex justify-between items-center w-full lg:w-[90%]">
              <div className="w-[100px] h-[40px] bg-[#12a1a0] text-white text-xl font-black flex items-center justify-center">
                要闻
              </div>
              <div className="flex gap-1">
                <button className="w-[35px] h-[35px] border flex items-center justify-center">
                  <img src="/images/left.webp" className="w-[25px] h-[25px]" />
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
              {[1, 2, 3, 4].map((i) => (
                <NewsLine key={i} index={i} title="标题示例" date="06-06" />
              ))}
              <div className="w-[30%] h-[40px] border text-gray-400 flex items-center justify-center text-xs cursor-pointer">
                查看详细...
              </div>
            </div>
            {/* full-width bottom bar */}
            <div className="w-full bg-[#12a1a0] text-white h-[120px] flex items-center z-20 relative">
              <div className="ml-[10%] flex flex-col">
                <h1 className="text-lg whitespace-nowrap">
                  全员赛马练兵 锤炼核心技能
                </h1>
                <h3 className="uppercase text-[8px] whitespace-nowrap">
                  FULL STAFF HORSE RACING AND TRAINING TO HONE CORE SKILLS
                </h3>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-1 bg-gray-600"></div>
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

export default Header;
