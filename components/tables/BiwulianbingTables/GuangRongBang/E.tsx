import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../src/components/ui/breadcrumb";

const Rank = [{ rank: "个人第二名", name: ["金诚"] }];

const E = () => (
  <>
    <Breadcrumb className="p-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold tracking-wider text-lg">
            主管部门
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-lg tracking-normal">
            发展策划部
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div className="pt-10 w-[60%] mx-auto">
      <div className="grid grid-cols-1 gap-8 mb-[100px]">
        {Rank.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-8">
            <img src="/images/rongyu.webp" alt="rongyu" />
            <div className="bg-[#e21120] w-[200px] h-[100px] text-white flex flex-col items-center justify-center rounded">
              <h3 className="text-sm font-medium tracking-widest">
                {item.rank}
              </h3>
              <h1 className="text-2xl font-semibold">{item.name.join("、")}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default E;
