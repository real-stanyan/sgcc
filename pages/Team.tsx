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

const Team = () => (
  <div className="pt-[80px]">
    <Header />
    <img
      src="/images/team_banner.webp"
      alt=""
      className="w-full h-full object-cover"
    />
    <div className="w-full px-12 py-14 flex flex-col items-start gap-[80px]">
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
      {/* Table */}
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
                {team.area}
              </TableCell>
              <TableCell className="w-[10%] whitespace-normal break-words text-center">
                {team.team_sub_leader.join("、")}
              </TableCell>
              <TableCell className="w-[15%] whitespace-normal break-words text-left">
                {team.research_titles.map((item, i) => (
                  <div key={i}>
                    {i + 1}. {item}
                  </div>
                ))}
              </TableCell>
              <TableCell className="w-[20%] whitespace-normal break-words text-left">
                {team.projects.map((item, i) => (
                  <div key={i}>
                    {i + 1}. {item}
                  </div>
                ))}
              </TableCell>
              <TableCell className="w-[10%] whitespace-normal break-words text-center">
                {team.team_heros.join("、")}
              </TableCell>
              <TableCell className="w-[10%] whitespace-normal break-words text-center">
                {team.contact.name}
                <br />
                {team.contact.number}
              </TableCell>
              <TableCell className="w-[22%] whitespace-normal break-words text-center">
                {team.team_members.join("、")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default Team;
