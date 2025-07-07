import { useState } from "react";
import TeamData from "../../../data/team.json";
import { Input } from "../../../src/components/ui/input";
import { Search } from "lucide-react";

const RouXingTuanDui = ({ handleSetWindow }: { handleSetWindow: any }) => {
  const [keyword, setKeyword] = useState("");
  const filtered = TeamData.filter((item) => {
    const haystack = [
      item.id,
      item.manager,
      item.team_leader,
      item.area,
      ...item.team_sub_leader,
      ...item.research_titles,
      ...item.projects,
      ...item.team_heros,
      item.contact.name,
      item.contact.number,
      ...item.team_members,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(keyword.trim().toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-end items-center w-full h-[50px] mb-[10px] relative">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-[30%] border border-gray-400"
          placeholder="搜索关键词"
        />
        <Search className="absolute right-3 top-[13px] w-[22px] h-[22px] text-gray-400" />
      </div>
      <table className="w-full table-fixed">
        <colgroup>
          <col style={{ width: "4%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "16%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "16%" }} />
          <col style={{ width: "6%" }} />
        </colgroup>
        <thead className="bg-gray-200 border-t-4 border-[#12a1a0]">
          <tr className="h-[50px]">
            <th className="text-center">序号</th>
            <th className="text-center">挂钩领导</th>
            <th className="text-center">组长</th>
            <th className="text-center">专业领域</th>
            <th className="text-center">副组长</th>
            <th className="text-center">研究方向</th>
            <th className="text-center">在研项目</th>
            <th className="text-center">团队骨干</th>
            <th className="text-center">
              联系人及
              <br />
              联系方式
            </th>
            <th className="text-center">团队成员</th>
            <th className="text-center">功能</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, idx) => (
            <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
              <td className="text-center truncate">{item.id}</td>
              <td className="text-center truncate">{item.manager}</td>
              <td className="text-center truncate">{item.team_leader}</td>
              <td className="text-center truncate">{item.area}</td>
              <td className="text-left truncate">
                {item.team_sub_leader.join("、")}
              </td>
              <td className="text-left truncate">
                {item.research_titles.join("、")}
              </td>
              <td className="text-left truncate">{item.projects.join("、")}</td>
              <td className="text-left truncate">
                {item.team_heros.join("、")}
              </td>
              <td className="text-center truncate whitespace-pre-wrap">
                {item.contact.name} <br /> {item.contact.number}
              </td>
              <td className="text-left line-clamp-2">
                {item.team_members.join("、")}
              </td>
              <td className="text-center">
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
};

export default RouXingTuanDui;
