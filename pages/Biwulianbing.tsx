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
import { Input } from "../src/components/ui/input";
import { X, Search } from "lucide-react";

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
      <div className="w-full px-12 py-14 flex flex-col justify-start items-start gap-[80px] pb-[50vh]">
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
          <div className="hidden lg:block">
            {/* 表头 */}
            <div className="overflow-hidden border-t-4 border-[#12a1a0]">
              <Table className="table-fixed w-full">
                <TableHeader className="bg-black/10">
                  <TableRow>
                    {[
                      ["序号", "w-[5%]"],
                      ["比武项目", "w-[10%]"],
                      ["内容", "w-[18%]"],
                      ["牵头部门", "w-[9%]"],
                      ["开展时间", "w-[8%]"],
                      ["比武时间", "w-[8%]"],
                      ["挂钩领导", "w-[8%]"],
                      ["责任人", "w-[8%]"],
                      ["联系人", "w-[8%]"],
                      ["进展情况", "w-[9%]"],
                      ["功能", "w-[9%]"],
                    ].map(([title, w]) => (
                      <TableHead
                        key={title}
                        className={`${w} text-center font-bold sticky top-0 bg-black/10 z-10`}
                      >
                        {title}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
              </Table>
            </div>

            {/* 可滚动表体 */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
              <Table className="table-fixed w-full">
                <TableBody>
                  {BiwulianbingData.map((item, index) => (
                    <TableRow
                      key={item.index}
                      className={`
                    ${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}
                    `}
                    >
                      <TableCell className="w-[5%] text-center">
                        {item.index}
                      </TableCell>
                      <TableCell className="w-[10%] text-center truncate">
                        {item.project}
                      </TableCell>
                      <TableCell className="w-[18%] text-left break-words whitespace-pre-wrap">
                        <p className="line-clamp-2 cursor-pointer">
                          {item.content}
                        </p>
                      </TableCell>
                      <TableCell className="w-[9%] text-center">
                        {item.header_office}
                      </TableCell>
                      <TableCell className="w-[8%] text-center">
                        {item.duration}
                      </TableCell>
                      <TableCell className="w-[8%] text-center">
                        {item.date}
                      </TableCell>
                      <TableCell className="w-[8%] text-center">
                        {item.manager}
                      </TableCell>
                      <TableCell className="w-[8%] text-center">
                        {item.responsibler}
                      </TableCell>
                      <TableCell className="w-[8%] text-center">
                        {item.contact}
                      </TableCell>
                      <TableCell className="w-[9%] text-left break-words whitespace-pre-wrap">
                        <p className="line-clamp-2 cursor-pointer">
                          {item.progress}
                        </p>
                      </TableCell>
                      <TableCell
                        className="w-[9%] text-center cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default Biwulianbing;
