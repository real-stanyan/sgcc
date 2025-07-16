import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";
import { Link, useSearchParams, useLocation, Outlet } from "react-router-dom";

const Boxes = [
  { name: "要闻", icon: "/icons/yaowen.webp", box: "yaowen" },
  { name: "快讯", icon: "/icons/kuaixun.webp", box: "kuaixun" },
];

const NewsLine = ({
  index,
  name,
  date,
  path,
}: {
  index: number;
  name: string;
  date: string;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className={`
      w-full flex justify-between items-center px-2 md:px-6 lg:px-8 py-2 bg-white rounded-md border-2 border-gray-400
      hover:scale-103 duration-200 ease-in-out transition-all
    `}
    >
      <div className="flex justify-center items-center gap-2">
        <div
          className={`
          bg-[#12a1a0] text-white min-w-[20px] min-h-[20px] lg:min-w-[30px] lg:min-h-[30px]
           flex justify-center items-center rounded-xl
        `}
        >
          <h1 className="text-sm md:text-md lg:text-xl font-bold">
            {index + 1}
          </h1>
        </div>
        <div className="font-semibold text-lg truncate">{name}</div>
      </div>

      <div
        className={`
          flex justify-end items-center gap-1 md:gap-4 lg:gap-8 w-[70%]
        `}
      >
        <div className="font-light text-lg truncate">{date}</div>
      </div>
    </Link>
  );
};

const YaoWenList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/ReturnAllYaoWen")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then(setData);
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <NewsLine
          key={i}
          index={i}
          name={item.title}
          date={item.release_date}
          path={`/yaowen/${item.id}`}
        />
      ))}
    </>
  );
};

const KuaiXunList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/ReturnAllKuaiXun")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then(setData);
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <NewsLine
          key={i}
          index={i}
          name={item.title}
          date={item.release_date}
          path={`/kuaixun/${item.id}`}
        />
      ))}
    </>
  );
};

const News = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const pathname = location.pathname;
  const param = searchParams.get("item");
  const [currentBox, setCurrentBox] = useState<string>(param as string);

  return (
    <div className="bg-[url('/images/table_bg.webp')] bg-cover bg-bottom bg-no-repeat min-h-[150vh]">
      <Header />
      <img
        src="/images/team_banner.webp"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full px-2 lg:px-12 py-14 flex flex-col items-start gap-[80px]">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {param === "kuaixun" || pathname?.includes("kuaixun")
                  ? "快讯"
                  : param === "yaowen" || pathname?.includes("yaowen")
                  ? "要闻"
                  : "--"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* box */}
        <div
          className={`
              w-full justify-center items-center gap-4 ${
                param ? "flex" : "hidden"
              }
            `}
        >
          {Boxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-1"
              onClick={() => {
                setCurrentBox(box.box);
              }}
            >
              <div
                className={`
                border
              ${
                currentBox === box.box
                  ? "bg-[#12a1a0] text-white border-white"
                  : "bg-white text-black border-black"
              }
                p-2 w-[200px] text-center cursor-pointer whitespace-nowrap
                flex justify-center items-center gap-1
              `}
                onClick={() => setCurrentBox(box.name)}
              >
                <img
                  src={box.icon}
                  alt="tuandui"
                  className={`
                w-[25px] h-auto ${currentBox === box.box ? "" : "invert"}
                `}
                />
                <h1>{box.name}</h1>
              </div>
              <div
                className={`
                w-0 h-0 border-l-[10px] border-l-transparent
                border-r-[10px] border-r-transparent
                border-t-[10px] border-t-[#12a1a0]
                ${
                  currentBox === box.box
                    ? "border-t-[#12a1a0]"
                    : "border-t-white"
                }
            `}
              ></div>
            </div>
          ))}
        </div>

        <div
          className={`
            ${param ? "block" : "hidden"}
            w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col gap-2
          `}
        >
          {currentBox === "kuaixun" ? (
            <KuaiXunList />
          ) : currentBox === "yaowen" ? (
            <YaoWenList />
          ) : null}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default News;
