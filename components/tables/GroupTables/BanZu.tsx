import React, { useState } from "react";
import BanZuMingChengData from "../../../data/banzumingcheng.json";
import BanZuRenYuanData from "../../../data/banzurenyuan.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../src/components/ui/breadcrumb";
import Diya from "./Diya";
import Biandianerci from "./Biandianerci";
import Biandianxueshi from "./Biandianxueshi";
import Shuzihua from "./Shuzihua";
import Dianlanyunjian from "./Dianlanyunjian";
import Shudianyunjian from "./Shudianyunjian";
import Peidianyunjian from "./Peidianyunjian";
import Tongxing from "./Tongxing";
import { LinkIcon } from "lucide-react";

const colWidthsMingCheng = [
  "4%",
  "8%",
  "13%",
  "16%",
  "8%",
  "8%",
  "16%",
  "20%",
  "7%",
];
const colWidthsRenYuan = [
  "4%",
  "8%",
  "8%",
  "8%",
  "8%",
  "8%",
  "5%",
  "8%",
  "8%",
  "8%",
  "7%",
  "6%",
  "7%",
  "7%",
];

const BanZu: React.FC = () => {
  const [currentBanzu, setCurrentBanzu] = useState<string>("");
  const [currentPingjia, setCurrentPingjia] = useState<string>("");
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {currentBanzu ? (
            <>
              <BreadcrumbItem>
                <h1
                  className="cursor-pointer"
                  onClick={() => {
                    setCurrentBanzu("");
                    setCurrentPingjia("");
                  }}
                >
                  一线核心标杆班组
                </h1>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentBanzu}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : currentPingjia ? (
            <>
              <BreadcrumbItem>
                <h1
                  className="cursor-pointer"
                  onClick={() => {
                    setCurrentBanzu("");
                    setCurrentPingjia("");
                  }}
                >
                  一线核心标杆班组
                </h1>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPingjia}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>一线核心标杆班组</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      {/* 班组名称列表 */}
      {!currentBanzu && !currentPingjia && (
        <div className="w-full h-auto border-t-4 border-[#12a1a0]">
          <table className="w-full table-fixed">
            <colgroup>
              {colWidthsMingCheng.map((w, i) => (
                <col key={i} style={{ width: w }} />
              ))}
            </colgroup>
            <thead className="sticky top-0 bg-gray-200 z-10">
              <tr className="h-[50px]">
                {[
                  "序号",
                  "单位",
                  "部门",
                  "班组名称",
                  "班组类型",
                  "业务类型覆盖率",
                  "自主实施比例",
                  "加分项",
                  "功能",
                ].map((t, i) => (
                  <th key={i} className="text-center">
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BanZuMingChengData.map((item, idx) => (
                <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
                  <td className="text-center h-[80px]">{item.id}</td>
                  <td className="text-center h-[80px]">{item.danwei}</td>
                  <td className="text-center h-[80px]">{item.bumen}</td>
                  <td
                    className="text-center h-[80px] group cursor-pointer"
                    onClick={() => setCurrentBanzu(item.banzu_name)}
                  >
                    <p
                      className={`
                      flex justify-center items-center gap-2 whitespace-nowrap
                      group-hover:underline
                      `}
                    >
                      {item.banzu_name}
                      <LinkIcon />
                    </p>
                  </td>
                  <td className="text-center h-[80px]">{item.banzu_type}</td>
                  <td className="text-center h-[80px]">{item.percent}</td>
                  <td className="text-left h-[80px] p-4">{item.bili}</td>
                  <td className="text-left h-[80px] p-4">{item.jiafenxiang}</td>
                  <td className="text-center h-[80px]">
                    <button
                      className="underline text-gray-600"
                      onClick={() => setCurrentPingjia(item.banzu_type)}
                    >
                      评价标准
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 班组人员列表 */}
      {currentBanzu && !currentPingjia && (
        <div className="w-full h-auto border-t-4 border-[#12a1a0]">
          <table className="w-full table-fixed">
            <colgroup>
              {colWidthsRenYuan.map((w, i) => (
                <col key={i} style={{ width: w }} />
              ))}
            </colgroup>
            <thead className="sticky top-0 bg-gray-200 z-10">
              <tr className="h-[50px]">
                {[
                  "序号",
                  "单位",
                  "部门",
                  "班组名称",
                  "班组类型",
                  "姓名",
                  "性别",
                  "出生日期",
                  "岗位",
                  "参加工作时间",
                  "最高学历",
                  "职称",
                  "技能",
                  "岗位技能水平",
                ].map((t, i) => (
                  <th key={i} className="text-center">
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BanZuRenYuanData.filter(
                (item) => item.banzu_name === currentBanzu
              ).map((item, idx) => (
                <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
                  <td className="text-center h-[80px] ">{idx + 1}</td>
                  <td className="text-center h-[80px] ">{item.danwei}</td>
                  <td className="text-center h-[80px] ">{item.bumen}</td>
                  <td className="text-center h-[80px] ">{item.banzu_name}</td>
                  <td className="text-center h-[80px] ">{item.banzu_type}</td>
                  <td className="text-center h-[80px] ">{item.name}</td>
                  <td className="text-center h-[80px] ">{item.gender}</td>
                  <td className="text-center h-[80px] ">{item.dob}</td>
                  <td className="text-center h-[80px] ">{item.gangwei}</td>
                  <td className="text-center h-[80px] ">{item.start_date}</td>
                  <td className="text-center h-[80px]">{item.zuihao_xueli}</td>
                  <td className="text-center h-[80px]">{item.title}</td>
                  <td className="text-center h-[80px]">{item.skill}</td>
                  <td className="text-center h-[80px]">{item.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 评价标准 */}

      {!currentBanzu && currentPingjia && currentPingjia === "低压综合服务" ? (
        <Diya />
      ) : currentPingjia === "变电二次检修" ? (
        <Biandianerci />
      ) : currentPingjia === "变电修试" ? (
        <Biandianxueshi />
      ) : currentPingjia.includes("数字化") ? (
        <Shuzihua />
      ) : currentPingjia === "电缆运检" ? (
        <Dianlanyunjian />
      ) : currentPingjia === "输电运检" ? (
        <Shudianyunjian />
      ) : currentPingjia.includes("通信") ? (
        <Tongxing />
      ) : currentPingjia === "配电运检" ? (
        <Peidianyunjian />
      ) : (
        ""
      )}
    </>
  );
};

export default BanZu;
