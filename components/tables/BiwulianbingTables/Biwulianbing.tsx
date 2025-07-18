import { useState, useEffect } from "react";

interface BiwulianbingItem {
  id: string;
  i: number;
  project: string;
  content: string;
  header_office: string;
  duration: string;
  date: string;
  manager: string;
  responsibler: string;
  contact: string;
  progress: string;
}

interface Props {
  handleSetWindow: (item: BiwulianbingItem) => void;
}

const colWidths = ["8%", "13%", "11%", "10%", "10%", "10%", "11%", "17%"];

const Biwulianbing: React.FC<Props> = ({ handleSetWindow }) => {
  const [data, setData] = useState<BiwulianbingItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/returnAllBiwulianbing")
      .then((res) => res.json())
      .then((arr: BiwulianbingItem[]) => setData(arr))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full h-auto border-t-4 border-[#12a1a0]">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          {colWidths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
        <thead className="sticky top-0 bg-gray-200 z-10">
          <tr className="h-[50px]">
            {[
              "序号",
              "练兵比武项目",
              "省公司主管部门",
              "分管领导",
              "项目负责人",
              "联系人",
              "比武进度",
              "详情",
            ].map((title, i) => (
              <th key={i} className="text-center">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={item.id} className={idx % 2 ? "bg-gray-200" : ""}>
              <td className="text-center h-[80px]">{item.i}</td>
              <td className="text-center truncate h-[80px]">{item.project}</td>
              <td className="text-center h-[80px]">{item.header_office}</td>
              <td className="text-center h-[80px]">{item.manager}</td>
              <td className="text-center h-[80px]">{item.responsibler}</td>
              <td className="text-center h-[80px]">{item.contact}</td>
              <td className="text-left h-[80px] px-2 truncate">
                {item.progress}
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

export default Biwulianbing;
