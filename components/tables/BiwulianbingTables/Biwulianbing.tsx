import BiwulianbingData from "../../../data/biwulianbing.json";

const Biwulianbing = ({ handleSetWindow }: { handleSetWindow: any }) => (
  <div className="w-full max-h-[70vh] overflow-x-hidden overflow-y-scroll border-t-4 border-[#12a1a0]">
    <table className="w-full table-fixed">
      <colgroup>
        <col style={{ width: "8%" }} />
        <col style={{ width: "13%" }} />
        <col style={{ width: "11%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "11%" }} />
        <col style={{ width: "17%" }} />
      </colgroup>

      <thead>
        <tr className="sticky top-0 bg-gray-200 z-10 h-[50px]">
          <th className="text-center">序号</th>
          <th className="text-center">比武项目</th>
          <th className="text-center">牵头部门</th>
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
            <td className="text-center h-[80px]">{item.index}</td>
            <td className="text-center truncate h-[80px]">{item.project}</td>
            <td className="text-center h-[80px]">{item.header_office}</td>
            <td className="text-center h-[80px]">{item.manager}</td>
            <td className="text-center h-[80px]">{item.responsibler}</td>
            <td className="text-center h-[80px]">{item.contact}</td>
            <td className="text-left break-words whitespace-pre-wrap h-[80px]">
              <p className="line-clamp-2 cursor-pointer truncate">
                {item.progress}
              </p>
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

export default Biwulianbing;
