import { Link } from "react-router-dom";
import { Newspaper, Database, ShieldQuestionMark } from "lucide-react";

type Item = {
  name: string;
  icon: React.ElementType; // 👈 关键点
  url: string;
};

const items: Item[] = [
  {
    name: "发布要闻",
    icon: Newspaper,
    url: "/addnewyaowen",
  },
  {
    name: "“赛马制”练兵比武 | 数据管理",
    icon: Database,
    url: "/biwulianbingedit",
  },
  {
    name: "开发中...",
    icon: ShieldQuestionMark,
    url: "#",
  },
  {
    name: "开发中...",
    icon: ShieldQuestionMark,
    url: "#",
  },
  {
    name: "开发中...",
    icon: ShieldQuestionMark,
    url: "#",
  },
  {
    name: "开发中...",
    icon: ShieldQuestionMark,
    url: "#",
  },
];

const Dashboard = () => {
  return (
    <div
      className={`
        w-[100vw] h-[100vh] bg-[#12a1a0] overflow-hidden flex justify-center items-center
    `}
    >
      <div
        className={`
        w-[80%] h-auto flex flex-col justify-center items-center gap-8
        `}
      >
        <img
          src="/images/logo.webp"
          alt="logo"
          className={`
            w-[150px] h-auto
            `}
        />
        <h1 className="text-white text-4xl font-bold">管理员操控面板</h1>
        <div
          className={`
            grid grid-cols-2 gap-4 w-full
            `}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.url}
                className={`
            flex justify-center items-center gap-4 border-2 border-white text-white
            px-4 py-2 rounded-md hover:bg-white hover:text-[#12a1a0] duration-200
            ease-in-out transition-colors cursor-pointer text-3xl h-[90px]
            `}
              >
                <Icon size={50} />
                <h1 className="whitespace-nowrap font-bold">{item.name}</h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
