import React from "react";
import TeamData from "../../../data/team.json";

interface Item {
  id: number;
  manager: string;
  team_leader: string;
  area: string;
  team_sub_leader: string[];
  research_titles: string[];
  projects: string[];
  team_heros: string[];
  contact: { name: string; number: string };
  team_members: string[];
}

interface Props {
  handleSetWindow: (item: Item) => void;
}

const colWidths = ["7%", "9%", "9%", "11%", "11%", "15%", "19%", "13%", "9%"];

const RouXingTuanDui: React.FC<Props> = ({ handleSetWindow }) => (
  <div className="w-full h-auto border-t-4 border-[#12a1a0]">
    <table className="w-full table-fixed">
      <colgroup>
        {colWidths.map((w, i) => (
          <col key={i} style={{ width: w }} />
        ))}
      </colgroup>
      <thead className="sticky top-0 bg-gray-200 z-10">
        <tr className="h-[50px]">
          <th className="text-center">序号</th>
          <th className="text-center">挂钩领导</th>
          <th className="text-center">组长</th>
          <th className="text-center">专业领域</th>
          <th className="text-center">副组长</th>
          <th className="text-center">研究方向</th>
          <th className="text-center">在研项目</th>
          <th className="text-center">
            联系人及
            <br />
            联系方式
          </th>
          <th className="text-center">功能</th>
        </tr>
      </thead>
      <tbody>
        {TeamData.map((item, idx) => (
          <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
            <td className="text-center h-[80px] truncate">{item.id}</td>
            <td className="text-center h-[80px] truncate">{item.manager}</td>
            <td className="text-center h-[80px] truncate">
              {item.team_leader}
            </td>
            <td className="text-center h-[80px] truncate">{item.area}</td>
            <td className="text-left h-[80px] truncate">
              {item.team_sub_leader.join("、")}
            </td>
            <td className="text-left h-[80px] truncate p-2">
              {item.research_titles.join("、")}
            </td>
            <td className="text-left h-[80px] truncate p-2">
              {item.projects.join("、")}
            </td>
            <td className="text-center h-[80px] whitespace-pre-wrap truncate p-2">
              {item.contact.name}
              <br />
              {item.contact.number}
            </td>
            <td className="text-center h-[80px]">
              <button
                className="underline text-gray-600"
                onClick={() => handleSetWindow(item)}
              >
                查看
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RouXingTuanDui;
