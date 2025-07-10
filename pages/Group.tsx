import { useState } from "react";
import Header from "../components/common/Header";
import Banzu from "../components/tables/GroupTables/BanZu";
import { X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";

const Group = () => {
  const [banzuWindow, setBanzuWindow] = useState({
    show: false,
    danwei: "",
    bumen: "",
    banzu_name: "",
    banzu_type: "",
    percent: "",
    bili: "",
    jiafenxiang: "",
  });

  const handleSetBanzuWindow = (item: any) => {
    setBanzuWindow({
      show: true,
      danwei: item.danwei || "",
      bumen: item.bumen || "",
      banzu_name: item.banzu_name || "",
      banzu_type: item.banzu_type || "",
      percent: item.percent || "",
      bili: item.bili || "",
      jiafenxiang: item.jiafenxiang || "",
    });
  };

  const handleClose = () => setBanzuWindow({ ...banzuWindow, show: false });

  return (
    <div className="pt-[80px] bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom bg-no-repeat">
      <Header />

      {/* banzuWindow */}
      {banzuWindow.show && (
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
            <h2 className="text-xl font-bold mb-4">班组信息</h2>
            <ul className="space-y-2">
              <li>
                <strong>单位：</strong>
                {banzuWindow.danwei}
              </li>
              <li>
                <strong>部门：</strong>
                {banzuWindow.bumen}
              </li>
              <li>
                <strong>班组名称：</strong>
                {banzuWindow.banzu_name}
              </li>
              <li>
                <strong>班组类型：</strong>
                {banzuWindow.banzu_type}
              </li>
              <li>
                <strong>业务类型覆盖率：</strong>
                {banzuWindow.percent}
              </li>
              <li>
                <strong>自主实施比例：</strong>
                {banzuWindow.bili}
              </li>
              <li>
                <strong>加分项：</strong>
                {banzuWindow.jiafenxiang}
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
              <BreadcrumbPage>一线核心标杆班组</BreadcrumbPage>
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

        <Banzu handleSetWindow={handleSetBanzuWindow} />
      </div>
    </div>
  );
};

export default Group;
