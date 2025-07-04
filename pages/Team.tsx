import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../src/components/ui/table";
import Header from "../components/common/Header";
import TeamData from "../data/team.json";
import { Input } from "../src/components/ui/input";
import { X, Search } from "lucide-react";

const Team = () => {
  const [box, setBox] = useState("柔性团队");
  const [window, setWindow] = useState({
    show: false,
    id: 0,
    manager: "",
    team_leader: "",
    area: "",
    team_sub_leader: "",
    research_titles: [],
    projects: [],
    contactName: "",
    contactNumber: "",
    team_members: [],
  });

  const handleSetWindow = (item: any) => {
    setWindow({
      show: true,
      id: item.index,
      manager: item.manager || "",
      team_leader: item.team_leader || "",
      area: item.area || "",
      team_sub_leader: item.team_sub_leader || "",
      research_titles: item.research_titles || [],
      projects: item.projects || [],
      contactName: item.contact.name || "",
      contactNumber: item.contact.number || "",
      team_members: item.team_members || "",
    });
  };

  const handleClose = () => setWindow({ ...window, show: false });

  return (
    <div className="pt-[80px] bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom bg-no-repeat">
      <Header />
      {/* window */}
      {window.show && (
        <div
          className="fixed inset-0 bg-black/30 flex justify-center items-center z-40"
          onClick={handleClose}
        >
          <div
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">团队信息</h2>
            <ul className="space-y-2">
              <li>
                <strong>挂钩领导：</strong>
                {window.manager}
              </li>
              <li>
                <strong>团队负责人：</strong>
                {window.team_leader}
              </li>
              <li>
                <strong>区域：</strong>
                {window.area}
              </li>
              <li>
                <strong>副组长：</strong>
                {window.team_sub_leader}
              </li>
              <li>
                <strong>研究课题：</strong>
                {window.research_titles.join(", ")}
              </li>
              <li>
                <strong>项目：</strong>
                {window.projects.join(", ")}
              </li>
              <li>
                <strong>联系人姓名：</strong>
                {window.contactName}
              </li>
              <li>
                <strong>联系电话：</strong>
                {window.contactNumber}
              </li>
              <li>
                <strong>团队成员：</strong>
                {window.team_members.join("、")}
              </li>
            </ul>
          </div>
        </div>
      )}

      <img
        src="/images/team_banner.webp"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full px-12 py-14 flex flex-col items-start gap-[80px] pb-[50vh]">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>柔性团队</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* pe text */}
        <div
          className={`
          flex lg:hidden justify-center items-center w-full
          `}
        >
          <h1 className="font-semibold text-xl text-black/70">
            请用大屏查看表格
          </h1>
        </div>
        {/* box */}
        <div
          className={`
              w-full flex justify-center items-center gap-4
            `}
        >
          <div
            className={`
                border
              ${
                box === "柔性团队"
                  ? "bg-[#12a1a0] text-white border-white"
                  : "bg-white text-black border-black"
              }
                p-2 w-[200px] text-center cursor-pointer
              `}
            onClick={() => setBox("柔性团队")}
          >
            <h1>柔性团队</h1>
          </div>
          <div
            className={`
                border
              ${
                box === "成果积分"
                  ? "bg-[#12a1a0] text-white border-white"
                  : "bg-white text-black border-black"
              }
                p-2 w-[200px] text-center cursor-pointer
              `}
            onClick={() => setBox("成果积分")}
          >
            <h1>成果积分</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-end items-center w-full h-[50px] relative mb-[10px]">
            <Input
              className={`
            w-[30%] border border-gray-400
            `}
              placeholder="搜索关键词"
            />
            <Search className="absolute right-3 top-[13px] w-[22px] h-[22px] text-gray-400" />
          </div>
          {/* Table */}
          {box === "柔性团队" ? (
            <Table className="hidden lg:block table-fixed w-full">
              <TableHeader
                className={`
              border-t-4 border-[#12a1a0] bg-black/10
            `}
              >
                <TableRow>
                  <TableHead className="w-[5%] whitespace-nowrap text-center font-bold">
                    序号
                  </TableHead>
                  <TableHead className="w-[5%] whitespace-nowrap text-center font-bold">
                    挂钩领导
                  </TableHead>
                  <TableHead className="w-[5%] whitespace-nowrap text-center font-bold">
                    组长
                  </TableHead>
                  <TableHead className="w-[8%] whitespace-nowrap text-center font-bold">
                    专业领域
                  </TableHead>
                  <TableHead className="w-[10%] whitespace-nowrap text-center font-bold">
                    副组长
                  </TableHead>
                  <TableHead className="w-[15%] whitespace-nowrap text-center font-bold">
                    研究方向
                  </TableHead>
                  <TableHead className="w-[20%] whitespace-nowrap text-center font-bold">
                    在研项目 (课题)
                  </TableHead>
                  <TableHead className="w-[10%] whitespace-nowrap text-center font-bold">
                    团队骨干
                  </TableHead>
                  <TableHead className="w-[10%] whitespace-nowrap text-center font-bold">
                    联系人及
                    <br />
                    联系方式
                  </TableHead>
                  <TableHead className="w-[22%] whitespace-nowrap text-center font-bold">
                    团队成员
                  </TableHead>
                  <TableHead className="w-[15%] text-center font-bold">
                    功能
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TeamData.map((team) => (
                  <TableRow key={team.id}>
                    <TableCell className="w-[5%] whitespace-nowrap break-words text-center">
                      {team.id}
                    </TableCell>
                    <TableCell className="w-[5%] whitespace-normal break-words text-center">
                      {team.manager}
                    </TableCell>
                    <TableCell className="w-[5%] whitespace-normal break-words text-center">
                      {team.team_leader}
                    </TableCell>
                    <TableCell className="w-[8%] whitespace-normal break-words text-center">
                      <p className="line-clamp-2">{team.area}</p>
                    </TableCell>
                    <TableCell className="w-[10%] whitespace-normal break-words text-center">
                      <p className="line-clamp-2">
                        {team.team_sub_leader.join("、")}
                      </p>
                    </TableCell>
                    <TableCell className="w-[15%] whitespace-normal break-words text-left">
                      <p className="line-clamp-2">
                        {team.research_titles.map((item, i) => (
                          <div key={i}>
                            {i + 1}. {item}
                          </div>
                        ))}
                      </p>
                    </TableCell>
                    <TableCell className="w-[20%] whitespace-normal break-words text-left">
                      <p className="line-clamp-2">
                        {team.projects.map((item, i) => (
                          <div key={i}>
                            {i + 1}. {item}
                          </div>
                        ))}
                      </p>
                    </TableCell>
                    <TableCell className="w-[10%] whitespace-normal break-words text-center">
                      <p className="line-clamp-2">
                        {team.team_heros.join("、")}
                      </p>
                    </TableCell>
                    <TableCell className="w-[10%] whitespace-normal break-words text-center">
                      {team.contact.name}
                      <br />
                      {team.contact.number}
                    </TableCell>
                    <TableCell className="w-[22%] whitespace-normal break-words text-center">
                      <p className="line-clamp-2">
                        {team.team_members.join("、")}
                      </p>
                    </TableCell>
                    {/* 功能 */}
                    <TableCell
                      className="w-[15%] text-center cursor-pointer"
                      onClick={() => handleSetWindow(team)}
                    >
                      <p className="text-gray-400 underline font-bold text-md">
                        查看详细
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="min-w-full table-auto border-collapse border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2 py-1 text-center">评价维度</th>
                    <th className="border px-2 py-1 text-center">最高限值</th>
                    <th className="border px-2 py-1 text-center">评价分项</th>
                    <th className="border px-2 py-1 text-center">积分说明</th>
                    <th className="border px-2 py-1 text-center">积分标准</th>
                    <th className="border px-2 py-1 text-center">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 管理积分 */}
                  <tr>
                    <td className="border px-2 py-1" rowSpan={4}>
                      管理积分
                      <br />
                      <small>（先自评，专业管理部门核实、人资部确认）</small>
                    </td>
                    <td className="border px-2 py-1 text-center" rowSpan={4}>
                      40
                    </td>
                    <td className="border px-2 py-1">活跃度</td>
                    <td className="border px-2 py-1">运行状态</td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      优秀 10 良好 6 一般 3 较差 0
                    </td>
                    <td className="border px-2 py-1">
                      课题申报是否及时，动态淘汰机制是否执行到位，过程材料是否完备等
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">活动表现</td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      优秀 10 良好 6 一般 3 较差 0
                    </td>
                    <td className="border px-2 py-1">
                      各类团队活动、团队工作例会是否有序开展，团队成员参加公司相关活动的积极程度等
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">宣传推广</td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      优秀 10 良好 6 一般 3 较差 0
                    </td>
                    <td className="border px-2 py-1">
                      团队成果推广情况，相关宣传展示效果等
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">团队培养</td>
                    <td className="border px-2 py-1"></td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      优秀 10 良好 6 一般 3 较差 0
                    </td>
                    <td className="border px-2 py-1">
                      发挥“传、帮、带”作用、师徒传承作用效果等
                    </td>
                  </tr>
                  {/* 绩效贡献 */}
                  <tr>
                    <td className="border px-2 py-1">绩效贡献</td>
                    <td className="border px-2 py-1 text-center">40</td>
                    <td className="border px-2 py-1">绩效贡献</td>
                    <td className="border px-2 py-1">
                      经认定对公司绩效有突出贡献的业绩
                    </td>
                    <td className="border px-2 py-1 text-center">上限 40</td>
                    <td className="border px-2 py-1">
                      团队成果是否对公司绩效有突出贡献，每项1-10分（与奖项重复取高）
                    </td>
                  </tr>
                  {/* 个人成长 */}
                  <tr>
                    <td className="border px-2 py-1">个人成长</td>
                    <td className="border px-2 py-1 text-center">20</td>
                    <td className="border px-2 py-1">个人成长</td>
                    <td className="border px-2 py-1">
                      经认定有突出进步、获专业认可等情况的个人
                    </td>
                    <td className="border px-2 py-1 text-center">上限 20</td>
                    <td className="border px-2 py-1">
                      团队中是否有表现突出的个人，每人次1-5分
                    </td>
                  </tr>
                  {/* 成果积分 */}
                  <tr>
                    <td className="border px-2 py-1" rowSpan={4}>
                      成果积分
                      <br />
                      <small>附加分，上不封顶，按次计分</small>
                    </td>
                    <td className="border px-2 py-1 text-center" rowSpan={4}>
                      —
                    </td>
                    <td className="border px-2 py-1">科技类获奖</td>
                    <td className="border px-2 py-1">团队成果获得科技类奖项</td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      国家级及以上 100
                      <br />
                      省部级 50
                      <br />
                      市级 15
                    </td>
                    <td className="border px-2 py-1">
                      一等奖系数1，二等奖0.7，其他0.5
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">非科技类获奖</td>
                    <td className="border px-2 py-1">
                      团队成果获得非科技类奖项
                    </td>
                    <td className="border px-2 py-1 whitespace-pre-line">
                      国家级及以上 20
                      <br />
                      省部级 15
                      <br />
                      市级 5
                    </td>
                    <td className="border px-2 py-1">
                      一等奖系数1，二等奖0.7，其他0.5
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">发明专利</td>
                    <td className="border px-2 py-1">团队获得发明专利</td>
                    <td className="border px-2 py-1 text-center">每项 3</td>
                    <td className="border px-2 py-1">
                      专利第一发明人是团队成员且专利与团队研究方向相关
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">核心期刊论文</td>
                    <td className="border px-2 py-1">团队发表核心期刊论文</td>
                    <td className="border px-2 py-1 text-center">每篇 2</td>
                    <td className="border px-2 py-1">
                      论文第一作者是团队成员且论文与团队研究方向相关
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
