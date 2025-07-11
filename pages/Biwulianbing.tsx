import { useState } from "react";
import Header from "../components/common/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";
import { X } from "lucide-react";
import GuangRongBang from "../components/tables/BiwulianbingTables/GuangRongBang";
import BiwulianbingTable from "../components/tables/BiwulianbingTables/Biwulianbing";

const Boxes = [
  { name: "“赛马制”练兵比武", icon: "/icons/biwulianbing_icon_white.webp" },
  { name: "光荣榜", icon: "/icons/guangrongbang.webp" },
];

const Biwulianbing = () => {
  const [currentBox, setCurrentBox] = useState("“赛马制”练兵比武");
  const [window, setWindow] = useState({
    show: false,
    index: 0,
    project: "",
    content: "",
    header_office: "",
    duration: "",
    date: "",
    manager: "",
    responsibler: "",
    contact: "",
    progress: "",
  });

  const handleSetWindow = (item: any) => {
    setWindow({
      show: true,
      index: item.index,
      project: item.project,
      content: item.content,
      header_office: item.header_office,
      duration: item.duration,
      date: item.date,
      manager: item.manager,
      responsibler: item.responsibler,
      contact: item.contact,
      progress: item.progress,
    });
  };

  const handleClose = () => setWindow({ ...window, show: false });

  const returnTable = (name: string) => {
    switch (name) {
      case "“赛马制”练兵比武":
        return <BiwulianbingTable handleSetWindow={handleSetWindow} />;
      case "光荣榜":
        return <GuangRongBang />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`
        bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom
        bg-no-repeat relative
        `}
    >
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
            <h2 className="text-xl font-bold mb-4">{window.project}</h2>
            <ul className="space-y-2">
              <li>
                <strong>内容：</strong>
                {window.content}
              </li>
              <li>
                <strong>省公司主管部门：</strong>
                {window.header_office}
              </li>
              <li>
                <strong>练兵时间段：</strong>
                {window.duration}
              </li>
              <li>
                <strong>比武时间：</strong>
                {window.date}
              </li>
              <li>
                <strong>分管领导：</strong>
                {window.manager}
              </li>
              <li>
                <strong>项目负责人：</strong>
                {window.responsibler}
              </li>
              <li>
                <strong>联系人：</strong>
                {window.contact}
              </li>
              <li>
                <strong>比武进度（6月）：</strong>
                {window.progress}
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
      <div className="w-full px-12 py-14 flex flex-col justify-start items-start gap-[80px] pb-[50vh]">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>“赛马制”练兵比武</BreadcrumbPage>
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
        {/* Table */}
        <div className="w-full hidden lg:block">{returnTable(currentBox)}</div>
      </div>
    </div>
  );
};

export default Biwulianbing;
