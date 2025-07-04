import { useState } from "react";
import Header from "../components/common/Header";
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
import GroupData from "../data/group.json";
import GroupDetailData from "../data/group_detail.json";
import { X, Search } from "lucide-react";
import { Input } from "../src/components/ui/input";

const Group = () => {
  const [box, setBox] = useState("标杆班组");
  const [window, setWindow] = useState({
    show: false,
    index: 0,
    company: "",
    property: "",
    type: "",
    level: "",
    department: "",
    group_name: "",
    group_type: "",
    comment: "",
  });
  const [window2, setWindow2] = useState({
    show: false,
    index: 0,
    unit: "",
    department: "",
    team_name: "",
    team_type: "",
    name: "",
    gender: "",
    birth_date: "",
    position: "",
    start_date: "",
    education: "",
    title: "",
    skill: "",
    skill_level: "",
  });

  const handleSetWindow = (item: any) => {
    setWindow({
      show: true,
      index: item.index,
      company: item.company || "",
      property: item.property || "",
      type: item.type || "",
      level: item.level || "",
      department: item.department || "",
      group_name: item.group_name || "",
      group_type: item.group_type || "",
      comment: item.comment || "",
    });
  };
  const handleSetWindow2 = (item: any) => {
    setWindow2({
      show: true,
      index: item.index,
      unit: item.unit || "",
      department: item.department || "",
      team_name: item.team_name || "",
      team_type: item.team_type || "",
      name: item.name || "",
      gender: item.gender || "",
      birth_date: item.birth_date || "",
      position: item.position || "",
      start_date: item.start_date || "",
      education: item.education || "",
      title: item.title || "",
      skill: item.skill || "",
      skill_level: item.skill_level || "",
    });
  };

  const handleClose = () => setWindow({ ...window, show: false });
  const handleClose2 = () => setWindow2({ ...window2, show: false });
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
            <h2 className="text-xl font-bold mb-4">{window.group_name}</h2>
            <ul className="space-y-2">
              <li>
                <strong>公司：</strong>
                {window.company}
              </li>
              <li>
                <strong>性质：</strong>
                {window.property}
              </li>
              <li>
                <strong>类型：</strong>
                {window.type}
              </li>
              <li>
                <strong>等级：</strong>
                {window.level}
              </li>
              <li>
                <strong>所属部门：</strong>
                {window.department}
              </li>
              <li>
                <strong>班组名称：</strong>
                {window.group_name}
              </li>
              <li>
                <strong>班组类型：</strong>
                {window.group_type}
              </li>
              <li>
                <strong>备注：</strong>
                {window.comment}
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* window2 */}
      {window2.show && (
        <div
          className="fixed inset-0 bg-black/30 flex justify-center items-center z-40"
          onClick={handleClose2}
        >
          <div
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose2}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">{window2.name}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>单位：</strong>
                {window2.unit}
              </li>
              <li>
                <strong>部门：</strong>
                {window2.department}
              </li>
              <li>
                <strong>班组名称：</strong>
                {window2.team_name}
              </li>
              <li>
                <strong>班组类型：</strong>
                {window2.team_type}
              </li>
              <li>
                <strong>姓名：</strong>
                {window2.name}
              </li>
              <li>
                <strong>性别：</strong>
                {window2.gender}
              </li>
              <li>
                <strong>出生日期：</strong>
                {window2.birth_date}
              </li>
              <li>
                <strong>岗位：</strong>
                {window2.position}
              </li>
              <li>
                <strong>参加工作时间：</strong>
                {window2.start_date}
              </li>
              <li>
                <strong>最高学历：</strong>
                {window2.education}
              </li>
              <li>
                <strong>职称：</strong>
                {window2.title}
              </li>
              <li>
                <strong>技能：</strong>
                {window2.skill}
              </li>
              <li>
                <strong>岗位技能水平：</strong>
                {window2.skill_level}
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
              <BreadcrumbPage>一线核心标杆班组</BreadcrumbPage>
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
              box === "标杆班组"
                ? "bg-[#12a1a0] text-white border-white"
                : "bg-white text-black border-black"
            }
              p-2 w-[200px] text-center cursor-pointer
            `}
            onClick={() => setBox("标杆班组")}
          >
            <h1>标杆班组</h1>
          </div>
          <div
            className={`
              border
            ${
              box === "标杆班组人员"
                ? "bg-[#12a1a0] text-white border-white"
                : "bg-white text-black border-black"
            }
              p-2 w-[200px] text-center cursor-pointer
            `}
            onClick={() => setBox("标杆班组人员")}
          >
            <h1>标杆班组人员</h1>
          </div>
        </div>
        {/* Table */}
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
          {box === "标杆班组" ? (
            <Table className="hidden lg:block table-fixed w-full">
              <TableHeader className="border-t-4 border-[#12a1a0] bg-black/10">
                <TableRow>
                  <TableHead className="w-[5%] text-center font-bold">
                    序号
                  </TableHead>
                  <TableHead className="w-[10%] text-center font-bold">
                    公司
                  </TableHead>
                  <TableHead className="w-[10%] text-center font-bold">
                    属性
                  </TableHead>
                  <TableHead className="w-[10%] text-center font-bold">
                    类型
                  </TableHead>
                  <TableHead className="w-[10%] text-center font-bold">
                    层级
                  </TableHead>
                  <TableHead className="w-[20%] text-center font-bold">
                    部门
                  </TableHead>
                  <TableHead className="w-[20%] text-center font-bold">
                    班组名称
                  </TableHead>
                  <TableHead className="w-[15%] text-center font-bold">
                    班组类型
                  </TableHead>
                  <TableHead className="w-[10%] text-center font-bold">
                    备注
                  </TableHead>
                  <TableHead className="w-[15%] text-center font-bold">
                    功能
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {GroupData.map((team) => (
                  <TableRow key={team.index}>
                    <TableCell className="text-center">{team.index}</TableCell>
                    <TableCell className="text-center">
                      {team.company}
                    </TableCell>
                    <TableCell className="text-center">
                      {team.property}
                    </TableCell>
                    <TableCell className="text-center">{team.type}</TableCell>
                    <TableCell className="text-center">{team.level}</TableCell>
                    <TableCell className="break-words">
                      {team.department}
                    </TableCell>
                    <TableCell className="break-words">
                      {team.group_name}
                    </TableCell>
                    <TableCell className="break-words">
                      {team.group_type}
                    </TableCell>
                    <TableCell className="text-center">
                      {team.comment}
                    </TableCell>
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
          ) : box === "标杆班组人员" ? (
            <Table className="hidden lg:block table-fixed w-full text-xs">
              <TableHeader className="border-t-4 border-[#12a1a0] bg-black/10">
                <TableRow>
                  <TableHead className="text-center font-bold px-1">
                    序号
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    单位
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    部门
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    班组名称
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    班组类型
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    姓名
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    性别
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    出生日期
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    岗位
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    参加工作时间
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    最高学历
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    职称
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    技能
                  </TableHead>
                  <TableHead className="text-center font-bold px-1">
                    岗位技能水平
                  </TableHead>
                  <TableHead className="w-[15%] text-center font-bold">
                    功能
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {GroupDetailData.map((p) => (
                  <TableRow key={p.index}>
                    <TableCell className="text-center px-1">
                      {p.index}
                    </TableCell>
                    <TableCell className="text-center px-1">{p.unit}</TableCell>
                    <TableCell className="px-1">{p.department}</TableCell>
                    <TableCell className="px-1">{p.team_name}</TableCell>
                    <TableCell className="px-1">{p.team_type}</TableCell>
                    <TableCell className="text-center px-1">{p.name}</TableCell>
                    <TableCell className="text-center px-1">
                      {p.gender}
                    </TableCell>
                    <TableCell className="text-center px-1">
                      {p.birth_date}
                    </TableCell>
                    <TableCell className="text-center px-1">
                      {p.position}
                    </TableCell>
                    <TableCell className="text-center px-1">
                      {p.start_date}
                    </TableCell>
                    <TableCell className="text-center px-1">
                      {p.education}
                    </TableCell>
                    <TableCell className="text-center px-1">
                      {p.title}
                    </TableCell>
                    <TableCell className="px-1">{p.skill}</TableCell>
                    <TableCell className="text-center px-1">
                      {p.skill_level}
                    </TableCell>
                    <TableCell
                      className="w-[15%] text-center cursor-pointer"
                      onClick={() => handleSetWindow2(p)}
                    >
                      <p className="text-gray-400 underline font-bold text-md">
                        查看详细
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Group;
