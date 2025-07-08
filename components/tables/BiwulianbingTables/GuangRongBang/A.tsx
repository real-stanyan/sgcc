import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../src/components/ui/breadcrumb";

const Rank = [
  {
    rank: "个人一等奖",
    name: "卢志祥",
  },
  {
    rank: "个人二等奖",
    name: "颜君凯",
  },
];

const BiWu = [
  {
    rank: "个人第1名",
    name: "卢志祥",
  },
  {
    rank: "个人第7名",
    name: "颜君凯",
  },
];

const A = () => {
  return (
    <>
      {/* Breadcrumb */}
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
              设备管理部
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-10 w-[60%] mx-auto">
        <div
          className={`
          bg-[url('/images/red_flag.webp')] bg-no-repeat
          text-center w-[400px] h-[100px] object-contain
          mx-auto
          `}
        >
          <h1 className="text-white text-2xl font-semibold pt-1">
            中电联技能竞赛
          </h1>
        </div>
        <div className="grid grid-cols-2 mb-[100px] gap-8">
          {Rank.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-8 "
            >
              <img src="/images/rongyu.webp" alt="rongyu" />
              <div
                className={`
                bg-[#e21120] w-[200px] h-[100px] text-white
                flex flex-col justify-center items-center rounded
                `}
              >
                <h3 className="text-sm tracking-widest font-medium">
                  {item.rank}
                </h3>
                <h1 className="font-semibold text-2xl">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`
          bg-[url('/images/red_flag.webp')] bg-no-repeat
          text-center w-[400px] h-[100px] object-contain
          mx-auto
          `}
        >
          <h1 className="text-white text-2xl font-semibold pt-1">省公司比武</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {BiWu.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-8 "
            >
              <img src="/images/rongyu.webp" alt="rongyu" />
              <div
                className={`
                bg-[#e21120] w-[200px] h-[100px] text-white
                flex flex-col justify-center items-center rounded
                `}
              >
                <h3 className="text-sm tracking-widest font-medium">
                  {item.rank}
                </h3>
                <h1 className="font-semibold text-2xl">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default A;
