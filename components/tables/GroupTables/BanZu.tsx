import { useState } from "react";
import BanZuMingChengData from "../../../data/banzumingcheng.json";
import BanZuRenYuanData from "../../../data/banzurenyuan.json";

const BanZu = ({ handleSetWindow }: { handleSetWindow: any }) => {
  const [currentBanzu, setCurrentBanzu] = useState("");
  return (
    <>
      {/* BanZuMingChengData */}
      <div
        className={`
        ${currentBanzu ? "hidden" : "block"}
        w-full max-h-[70vh] overflow-x-hidden overflow-y-scroll border-t-4 border-[#12a1a0]
        `}
      >
        <table className="w-full table-fixed">
          <colgroup>
            <col style={{ width: "4%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr className="sticky top-0 bg-gray-200 z-10 h-[50px]">
              <th className="text-center">序号</th>
              <th className="text-center">单位</th>
              <th className="text-center">部门</th>
              <th className="text-center">班组名称</th>
              <th className="text-center">班组类型</th>
              <th className="text-center">业务类型覆盖率</th>
              <th className="text-center">自主实施比例</th>
              <th className="text-center">加分项</th>
              <th className="text-center">查看</th>
              <th className="text-center">功能</th>
            </tr>
          </thead>
          <tbody>
            {BanZuMingChengData.map((item, idx) => (
              <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
                <td className="text-center truncate h-[80px]">{item.id}</td>
                <td className="text-center truncate h-[80px]">{item.danwei}</td>
                <td className="text-center truncate h-[80px]">{item.bumen}</td>
                <td className="text-center truncate h-[80px]">
                  {item.banzu_name}
                </td>
                <td className="text-center truncate h-[80px]">
                  {item.banzu_type}
                </td>
                <td className="text-center truncate h-[80px]">
                  {item.percent}
                </td>
                <td className="text-center truncate h-[80px]">{item.bili}</td>
                <td className="text-center truncate h-[80px]">
                  {item.jiafenxiang}
                </td>
                <td className="text-center truncate whitespace-pre-wrap h-[80px] group">
                  <h1
                    className={`
                    underline text-gray-600 group-hover:font-black
                    font-semibold duration-100 ease-in-out transition-all
                    cursor-pointer
                    `}
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
      {/* BanZuRenYuanData */}
      <>
        <div
          className={`
                w-[40%] py-4 bg-[#12a1a0] mx-auto text-center text-white font-semibold text-2xl rounded
                cursor-pointer
            `}
          onClick={() => setCurrentBanzu("")}
        >
          <h1>返回班组名称</h1>
        </div>
        <div
          className={`
        ${currentBanzu ? "block" : "hidden"}
        w-full max-h-[70vh] overflow-x-hidden overflow-y-scroll border-t-4 border-[#12a1a0]
        `}
        >
          <table className="w-full table-fixed">
            <colgroup>
              <col style={{ width: "4%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "5%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "7%" }} />
              <col style={{ width: "6%" }} />
              <col style={{ width: "7%" }} />
              <col style={{ width: "7%" }} />
            </colgroup>
            <thead>
              <tr className="sticky top-0 bg-gray-200 z-10 h-[50px]">
                <th className="text-center">序号</th>
                <th className="text-center">单位</th>
                <th className="text-center">部门</th>
                <th className="text-center">班组名称</th>
                <th className="text-center">班组类型</th>
                <th className="text-center">姓名</th>
                <th className="text-center">性别</th>
                <th className="text-center">出生日期</th>
                <th className="text-center">岗位</th>
                <th className="text-center">参加工作时间</th>
                <th className="text-center">最高学历</th>
                <th className="text-center">职称</th>
                <th className="text-center">技能</th>
                <th className="text-center">岗位技能水平</th>
              </tr>
            </thead>
            <tbody>
              {BanZuRenYuanData.filter(
                (item) => item.banzu_name === currentBanzu
              ).map((item, idx) => (
                <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
                  <td className="text-center truncate h-[80px]">{item.id}</td>
                  <td className="text-center truncate h-[80px]">
                    {item.danwei}
                  </td>
                  <td className="text-center truncate h-[80px]">
                    {item.bumen}
                  </td>
                  <td className="text-center truncate h-[80px]">
                    {item.banzu_name}
                  </td>
                  <td className="text-center truncate h-[80px]">
                    {item.banzu_type}
                  </td>
                  <td className="text-center truncate h-[80px]">{item.name}</td>
                  <td className="text-center truncate h-[80px]">
                    {item.gender}
                  </td>
                  <td className="text-center truncate h-[80px]">{item.dob}</td>
                  <td className="text-center truncate whitespace-pre-wrap h-[80px] group">
                    {item.gangwei}
                  </td>
                  <td className="text-center h-[80px]">{item.start_date}</td>
                  <td className="text-center h-[80px]">{item.zuihao_xueli}</td>
                  <td className="text-center h-[80px]">{item.title}</td>
                  <td className="text-center h-[80px]">{item.skill}</td>
                  <td className="text-center h-[80px]">{item.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default BanZu;
