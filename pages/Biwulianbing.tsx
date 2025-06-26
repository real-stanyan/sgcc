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

const Biwulianbing = () => {
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {BiwulianbingData.map((item) => (
              <TableRow key={item.index}>
                <TableCell className="w-[5%] text-center">
                  {item.index}
                </TableCell>
                <TableCell className="w-[10%] text-center">
                  {item.project}
                </TableCell>
                <TableCell className="w-[20%] text-left break-words whitespace-pre-wrap">
                  {item.content}
                </TableCell>
                <TableCell className="w-[10%] text-center">
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
                <TableCell className="w-[15%] text-left break-words whitespace-pre-wrap">
                  {item.progress}
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
