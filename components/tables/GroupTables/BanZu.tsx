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

interface Props {
  handleSetWindow: (item: any) => void;
}

const colWidthsMingCheng = [
  "4%",
  "6%",
  "10%",
  "8%",
  "8%",
  "8%",
  "16%",
  "20%",
  "10%",
  "10%",
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

const BanZu: React.FC<Props> = ({ handleSetWindow }) => {
  const [currentBanzu, setCurrentBanzu] = useState<string>("");
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
                <BreadcrumbLink href="/group">一线核心标杆班组</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentBanzu}</BreadcrumbPage>
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
      {!currentBanzu && (
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
                  "查看",
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
                  <td className="text-center h-[80px]">{item.banzu_name}</td>
                  <td className="text-center h-[80px]">{item.banzu_type}</td>
                  <td className="text-center h-[80px]">{item.percent}</td>
                  <td className="text-left h-[80px] p-4">{item.bili}</td>
                  <td className="text-left h-[80px] p-4">{item.jiafenxiang}</td>
                  <td className="text-center h-[80px]">
                    <h1
                      className="underline text-gray-600 cursor-pointer"
                      onClick={() => setCurrentBanzu(item.banzu_name)}
                    >
                      查看
                    </h1>
                  </td>
                  <td className="text-center h-[80px]">
                    <button
                      className="underline text-gray-600"
                      onClick={() => handleSetWindow(item)}
                    >
                      查看详细
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 班组人员列表 */}
      {currentBanzu && (
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
                  <td className="text-center h-[80px] truncate">{item.id}</td>
                  <td className="text-center h-[80px] truncate">
                    {item.danwei}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.bumen}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.banzu_name}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.banzu_type}
                  </td>
                  <td className="text-center h-[80px] truncate">{item.name}</td>
                  <td className="text-center h-[80px] truncate">
                    {item.gender}
                  </td>
                  <td className="text-center h-[80px] truncate">{item.dob}</td>
                  <td className="text-center h-[80px] truncate">
                    {item.gangwei}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.start_date}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.zuihao_xueli}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.title}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.skill}
                  </td>
                  <td className="text-center h-[80px] truncate">
                    {item.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default BanZu;
