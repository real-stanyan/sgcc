import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";
import Header from "../components/common/Header";
import { X } from "lucide-react";
import RouXingTuanDui from "../components/tables/TeamTables/RouXingTuanDui";
import JiFen from "../components/tables/TeamTables/JiFen";
import GuangRongBang from "../components/tables/BiwulianbingTables/GuangRongBang";

const Boxes = [
  { name: "柔性团队", icon: "/icons/tuandui.webp" },
  { name: "量化积分评价", icon: "/icons/jifen.webp" },
];

const Team = () => {
  const [currentBox, setCurrentBox] = useState("柔性团队");
  const [window, setWindow] = useState({
    show: false,
    id: 0,
    manager: "",
    team_leader: "",
    area: "",
    team_sub_leader: [],
    research_titles: [],
    projects: [],
    contactName: "",
    contactNumber: "",
    team_members: [],
    team_heros: [],
  });

  const handleSetWindow = (item: any) => {
    setWindow({
      show: true,
      id: item.index,
      manager: item.manager || "",
      team_leader: item.team_leader || "",
      area: item.area || "",
      team_sub_leader: item.team_sub_leader || "",
      research_titles: item.research_titles || [],
      projects: item.projects || [],
      contactName: item.contact.name || "",
      contactNumber: item.contact.number || "",
      team_members: item.team_members || "",
      team_heros: item.team_heros || "",
    });
  };

  const handleClose = () => setWindow({ ...window, show: false });

  return (
    <div className="bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom bg-no-repeat">
      <Header />
      {/* window */}
      {window.show && (
        <div
          className="fixed inset-0 bg-black/30 flex justify-center items-center z-40"
          onClick={handleClose}
        >
          <div
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">团队信息</h2>
            <ul className="space-y-2">
              <li>
                <strong>挂钩领导：</strong>
                {window.manager}
              </li>
              <li>
                <strong>组长：</strong>
                {window.team_leader}
              </li>
              <li>
                <strong>专业领域：</strong>
                {window.area}
              </li>
              <li>
                <strong>副组长：</strong>
                {window.team_sub_leader.join(", ")}
              </li>
              <li>
                <strong>研究方向：</strong>
                {window.research_titles.join(", ")}
              </li>
              <li>
                <strong>在研项目：</strong>
                {window.projects.join(", ")}
              </li>
              <li>
                <strong>联系人姓名：</strong>
                {window.contactName}
              </li>
              <li>
                <strong>联系电话：</strong>
                {window.contactNumber}
              </li>
              <li>
                <strong>团队成员：</strong>
                {window.team_members.join("、")}
              </li>
              <li>
                <strong>团队骨干：</strong>
                {window.team_heros.join("、")}
              </li>
            </ul>
          </div>
        </div>
      )}

      <img
        src="/images/team_banner.webp"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full px-12 py-14 flex flex-col items-start gap-[80px] pb-[50vh]">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>柔性团队</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* pe text */}
        <div
          className={`
          flex lg:hidden justify-center items-center w-full
          `}
        >
          <h1 className="font-semibold text-xl text-black/70">
            请用大屏查看表格
          </h1>
        </div>
        {/* box */}
        <div
          className={`
              w-full hidden lg:flex justify-center items-center gap-4
            `}
        >
          {Boxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-1"
            >
              <div
                className={`
                border
              ${
                currentBox === box.name
                  ? "bg-[#12a1a0] text-white border-white"
                  : "bg-white text-black border-black"
              }
                p-2 w-[200px] text-center cursor-pointer whitespace-nowrap
                flex justify-center items-center gap-1
              `}
                onClick={() => setCurrentBox(box.name)}
              >
                <img
                  src={box.icon}
                  alt="tuandui"
                  className={`
                w-[25px] h-auto ${currentBox === box.name ? "" : "invert"}
                `}
                />
                <h1>{box.name}</h1>
              </div>
              <div
                className={`
                w-0 h-0 border-l-[10px] border-l-transparent
                border-r-[10px] border-r-transparent
                border-t-[10px] border-t-[#12a1a0]
                ${
                  currentBox === box.name
                    ? "border-t-[#12a1a0]"
                    : "border-t-white"
                }
            `}
              ></div>
            </div>
          ))}
        </div>

        <div className="w-full hidden lg:block">
          {currentBox === "柔性团队" ? (
            <RouXingTuanDui handleSetWindow={handleSetWindow} />
          ) : currentBox === "量化积分评价" ? (
            <JiFen />
          ) : (
            <GuangRongBang />
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
