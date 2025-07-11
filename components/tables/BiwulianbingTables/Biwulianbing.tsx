// import { useEffect } from "react";

// import BiwulianbingData from "../../../data/biwulianbing.json";

// const Biwulianbing = ({ handleSetWindow }: { handleSetWindow: any }) => {
//   return (
//     <div className="w-full table-fixed h-auto overflow-x-hidden border-t-4 border-[#12a1a0]">
//       <table className="w-full table-fixed">
//         <colgroup>
//           <col style={{ width: "8%" }} />
//           <col style={{ width: "13%" }} />
//           <col style={{ width: "11%" }} />
//           <col style={{ width: "10%" }} />
//           <col style={{ width: "10%" }} />
//           <col style={{ width: "10%" }} />
//           <col style={{ width: "11%" }} />
//           <col style={{ width: "17%" }} />
//         </colgroup>

//         <thead className="sticky top-0 bg-gray-200 z-10">
//           <tr className="sticky top-0 bg-gray-200 z-10 h-[50px]">
//             <th className="text-center">序号</th>
//             <th className="text-center">比武项目</th>
//             <th className="text-center">牵头部门</th>
//             <th className="text-center">挂钩领导</th>
//             <th className="text-center">责任人</th>
//             <th className="text-center">联系人</th>
//             <th className="text-center">进展情况</th>
//             <th className="text-center">功能</th>
//           </tr>
//         </thead>
//         <tbody>
//           {BiwulianbingData.map((item, idx) => (
//             <tr key={item.index} className={idx % 2 ? "bg-gray-200" : ""}>
//               <td className="text-center h-[80px]">{item.index}</td>
//               <td className="text-center truncate h-[80px]">{item.project}</td>
//               <td className="text-center h-[80px]">{item.header_office}</td>
//               <td className="text-center h-[80px]">{item.manager}</td>
//               <td className="text-center h-[80px]">{item.responsibler}</td>
//               <td className="text-center h-[80px]">{item.contact}</td>
//               <td className="text-left break-words whitespace-pre-wrap h-[80px]">
//                 <p className="line-clamp-2 cursor-pointer truncate">
//                   {item.progress}
//                 </p>
//               </td>
//               <td className="text-center h-[80px]">
//                 <button
//                   className="underline text-gray-600"
//                   onClick={() => handleSetWindow(item)}
//                 >
//                   查看
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Biwulianbing;
import React from "react";
import BiwulianbingData from "../../../data/biwulianbing.json";

interface Item {
  index: number;
  project: string;
  header_office: string;
  manager: string;
  responsibler: string;
  contact: string;
  progress: string;
}
interface Props {
  handleSetWindow: (item: Item) => void;
}

const colWidths = ["8%", "13%", "11%", "10%", "10%", "10%", "11%", "17%"];

const Biwulianbing: React.FC<Props> = ({ handleSetWindow }) => (
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
            "比武项目",
            "牵头部门",
            "挂钩领导",
            "责任人",
            "联系人",
            "进展情况",
            "详情",
          ].map((title, i) => (
            <th key={i} className="text-center">
              {title}
            </th>
          ))}
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

export default Biwulianbing;
