import BiwulianbingData from "../../../data/biwulianbing.json";

const Biwulianbing = ({ handleSetWindow }: { handleSetWindow: any }) => (
  <div>
    <table className="w-full table-fixed">
      <colgroup>
        <col style={{ width: "5%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "18%" }} />
        <col style={{ width: "9%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "9%" }} />
        <col style={{ width: "9%" }} />
      </colgroup>
      <thead className="bg-gray-200 border-t-4 border-[#12a1a0]">
        <tr className="h-[50px]">
          <th className="text-center">序号</th>
          <th className="text-center">比武项目</th>
          <th className="text-center">内容</th>
          <th className="text-center">牵头部门</th>
          <th className="text-center">开展时间</th>
          <th className="text-center">比武时间</th>
          <th className="text-center">挂钩领导</th>
          <th className="text-center">责任人</th>
          <th className="text-center">联系人</th>
          <th className="text-center">进展情况</th>
          <th className="text-center">功能</th>
        </tr>
      </thead>
      <tbody>
        {BiwulianbingData.map((item, idx) => (
          <tr key={item.index} className={idx % 2 ? "bg-gray-200" : ""}>
            <td className="text-center">{item.index}</td>
            <td className="text-center truncate">{item.project}</td>
            <td className="text-left break-words whitespace-pre-wrap">
              <p className="line-clamp-2 cursor-pointer">{item.content}</p>
            </td>
            <td className="text-center">{item.header_office}</td>
            <td className="text-center">{item.duration}</td>
            <td className="text-center">{item.date}</td>
            <td className="text-center">{item.manager}</td>
            <td className="text-center">{item.responsibler}</td>
            <td className="text-center">{item.contact}</td>
            <td className="text-left break-words whitespace-pre-wrap">
              <p className="line-clamp-2 cursor-pointer">{item.progress}</p>
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

export default Biwulianbing;
