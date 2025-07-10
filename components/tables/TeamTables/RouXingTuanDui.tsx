import TeamData from "../../../data/team.json";

const RouXingTuanDui = ({ handleSetWindow }: { handleSetWindow: any }) => {
  return (
    <div className="w-full max-h-[70vh] overflow-x-hidden overflow-y-scroll border-t-4 border-[#12a1a0]">
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
        <thead>
          <tr className="sticky top-0 bg-gray-200 z-10 h-[50px]">
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
          {TeamData.map((item, idx) => (
            <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
              <td className="text-center truncate h-[80px]">{item.id}</td>
              <td className="text-center truncate h-[80px]">{item.manager}</td>
              <td className="text-center truncate h-[80px]">
                {item.team_leader}
              </td>
              <td className="text-center truncate h-[80px]">{item.area}</td>
              <td className="text-left truncate h-[80px]">
                {item.team_sub_leader.join("、")}
              </td>
              <td className="text-left truncate h-[80px]">
                {item.research_titles.join("、")}
              </td>
              <td className="text-left truncate h-[80px]">
                {item.projects.join("、")}
              </td>
              <td className="text-left truncate h-[80px]">
                {item.team_heros.join("、")}
              </td>
              <td className="text-center truncate whitespace-pre-wrap h-[80px]">
                {item.contact.name} <br /> {item.contact.number}
              </td>
              <td className="text-left line-clamp-2 h-[80px]">
                {item.team_members.join("、")}
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
};

export default RouXingTuanDui;
