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

const Group = () => {
  const [box, setBox] = useState("标杆班组");
  return (
    <div className="pt-[80px] bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom bg-no-repeat">
      <Header />
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {GroupData.map((team) => (
                <TableRow key={team.index}>
                  <TableCell className="text-center">{team.index}</TableCell>
                  <TableCell className="text-center">{team.company}</TableCell>
                  <TableCell className="text-center">{team.property}</TableCell>
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
                  <TableCell className="text-center">{team.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : box === "标杆班组人员" ? (
          <Table className="hidden lg:block table-fixed w-full">
            <TableHeader className="border-t-4 border-[#12a1a0] bg-black/10">
              <TableRow>
                <TableHead className="w-[4%] text-center font-bold">
                  序号
                </TableHead>
                <TableHead className="w-[8%] text-center font-bold">
                  单位
                </TableHead>
                <TableHead className="w-[12%] text-center font-bold">
                  部门
                </TableHead>
                <TableHead className="w-[12%] text-center font-bold">
                  班组名称
                </TableHead>
                <TableHead className="w-[10%] text-center font-bold">
                  班组类型
                </TableHead>
                <TableHead className="w-[6%] text-center font-bold">
                  姓名
                </TableHead>
                <TableHead className="w-[4%] text-center font-bold">
                  性别
                </TableHead>
                <TableHead className="w-[6%] text-center font-bold">
                  出生日期
                </TableHead>
                <TableHead className="w-[10%] text-center font-bold">
                  岗位
                </TableHead>
                <TableHead className="w-[8%] text-center font-bold">
                  参加工作时间
                </TableHead>
                <TableHead className="w-[4%] text-center font-bold">
                  最高学历
                </TableHead>
                <TableHead className="w-[6%] text-center font-bold">
                  职称
                </TableHead>
                <TableHead className="w-[6%] text-center font-bold">
                  技能
                </TableHead>
                <TableHead className="w-[4%] text-center font-bold">
                  岗位技能水平
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {GroupDetailData.map((p) => (
                <TableRow key={p.index}>
                  <TableCell className="w-[4%] text-center">
                    {p.index}
                  </TableCell>
                  <TableCell className="w-[8%] text-center">{p.unit}</TableCell>
                  <TableCell className="w-[12%] break-words">
                    {p.department}
                  </TableCell>
                  <TableCell className="w-[12%] break-words">
                    {p.team_name}
                  </TableCell>
                  <TableCell className="w-[10%] break-words">
                    {p.team_type}
                  </TableCell>
                  <TableCell className="w-[6%] text-center">{p.name}</TableCell>
                  <TableCell className="w-[4%] text-center">
                    {p.gender}
                  </TableCell>
                  <TableCell className="w-[6%] text-center">
                    {p.birth_date}
                  </TableCell>
                  <TableCell className="w-[10%] break-words">
                    {p.position}
                  </TableCell>
                  <TableCell className="w-[8%] text-center">
                    {p.start_date}
                  </TableCell>
                  <TableCell className="w-[4%] text-center">
                    {p.education}
                  </TableCell>
                  <TableCell className="w-[6%] text-center">
                    {p.title}
                  </TableCell>
                  <TableCell className="w-[6%] break-words">
                    {p.skill}
                  </TableCell>
                  <TableCell className="w-[4%] text-center">
                    {p.skill_level}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </div>
    </div>
  );
};

export default Group;
