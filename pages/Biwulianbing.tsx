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
import BiwulianbingData from "../data/biwulianbing.json";
import { X } from "lucide-react";

const Biwulianbing = () => {
  const [window, setWindow] = useState({
    show: false,
    index: 0,
    project: "",
    content: "",
    header_office: "",
    duration: "",
    date: "",
    manager: "",
    responsibler: "",
    contact: "",
    progress: "",
  });

  const handleSetWindow = (item: any) => {
    setWindow({
      show: true,
      index: item.index,
      project: item.project,
      content: item.content,
      header_office: item.header_office,
      duration: item.duration,
      date: item.date,
      manager: item.manager,
      responsibler: item.responsibler,
      contact: item.contact,
      progress: item.progress,
    });
  };

  const handleClose = () => setWindow({ ...window, show: false });

  return (
    <div
      className={`
        pt-[80px] bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom
        bg-no-repeat relative
        `}
    >
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
            <h2 className="text-xl font-bold mb-4">{window.project}</h2>
            <ul className="space-y-2">
              <li>
                <strong>内容：</strong>
                {window.content}
              </li>
              <li>
                <strong>牵头部门：</strong>
                {window.header_office}
              </li>
              <li>
                <strong>开展时间：</strong>
                {window.duration}
              </li>
              <li>
                <strong>比武时间：</strong>
                {window.date}
              </li>
              <li>
                <strong>挂钩领导：</strong>
                {window.manager}
              </li>
              <li>
                <strong>责任人：</strong>
                {window.responsibler}
              </li>
              <li>
                <strong>联系人：</strong>
                {window.contact}
              </li>
              <li>
                <strong>进展情况：</strong>
                {window.progress}
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
              <BreadcrumbPage>“赛马制”练兵比武</BreadcrumbPage>
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
        {/* Table */}
        <Table className="hidden lg:block table-fixed w-full">
          <TableHeader className="border-t-4 border-[#12a1a0] bg-black/10">
            <TableRow>
              <TableHead className="w-[5%] text-center font-bold">
                序号
              </TableHead>
              <TableHead className="w-[10%] text-center font-bold">
                比武项目
              </TableHead>
              <TableHead className="w-[20%] text-center font-bold">
                内容
              </TableHead>
              <TableHead className="w-[10%] text-center font-bold">
                牵头部门
              </TableHead>
              <TableHead className="w-[8%] text-center font-bold">
                开展时间
              </TableHead>
              <TableHead className="w-[8%] text-center font-bold">
                比武时间
              </TableHead>
              <TableHead className="w-[8%] text-center font-bold">
                挂钩领导
              </TableHead>
              <TableHead className="w-[8%] text-center font-bold">
                责任人
              </TableHead>
              <TableHead className="w-[8%] text-center font-bold">
                联系人
              </TableHead>
              <TableHead className="w-[15%] text-center font-bold">
                进展情况
              </TableHead>
              <TableHead className="w-[15%] text-center font-bold">
                功能
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {BiwulianbingData.map((item) => (
              <TableRow key={item.index}>
                {/* 序号 */}
                <TableCell className="w-[5%] text-center">
                  {item.index}
                </TableCell>
                {/* 比武项目 */}
                <TableCell className="w-[10%] text-center">
                  {item.project}
                </TableCell>
                {/* 内容 */}
                <TableCell className="w-[20%] text-left break-words whitespace-pre-wrap">
                  <p className="line-clamp-2 cursor-pointer">{item.content}</p>
                </TableCell>
                {/* 牵头部门 */}
                <TableCell className="w-[10%] text-center">
                  {item.header_office}
                </TableCell>
                {/* 开展时间 */}
                <TableCell className="w-[8%] text-center">
                  {item.duration}
                </TableCell>
                {/* 比武时间 */}
                <TableCell className="w-[8%] text-center">
                  {item.date}
                </TableCell>
                {/* 挂钩领导 */}
                <TableCell className="w-[8%] text-center">
                  {item.manager}
                </TableCell>
                {/* 责任人 */}
                <TableCell className="w-[8%] text-center">
                  {item.responsibler}
                </TableCell>
                {/* 联系人 */}
                <TableCell className="w-[8%] text-center">
                  {item.contact}
                </TableCell>
                {/* 进展情况 */}
                <TableCell className="w-[15%] text-left break-words whitespace-pre-wrap">
                  <p className="line-clamp-2 cursor-pointer">{item.progress}</p>
                </TableCell>
                {/* 功能 */}
                <TableCell
                  className="w-[15%] text-center cursor-pointer"
                  onClick={() => handleSetWindow(item)}
                >
                  <p className="text-gray-400 underline font-bold text-md">
                    查看详细
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Biwulianbing;
