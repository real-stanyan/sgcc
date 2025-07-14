import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../src/components/ui/breadcrumb";

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

interface KuaixunItem {
  id: string;
  title: string;
  release_date: string;
  visit_count: number;
  author: string[];
  content: string[];
  images: string[];
  zebian?: string;
  shenhe?: string;
}

const Kuaixun: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<KuaixunItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentFont, setCurrentFont] = useState("中");
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`http://localhost:3000/api/KuaiXun/${id}`)
      .then((res) => res.json())
      .then((data: KuaixunItem) => setItem(data))
      .catch(() => setItem(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>加载中…</p>;
  if (!item) return <p>未找到要闻</p>;

  return (
    <div className="bg-[url('/images/table_bg.webp')] bg-contain bg-bottom bg-no-repeat min-h-[150vh]">
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
                {pathname?.includes("kuaixun")
                  ? "快讯"
                  : pathname?.includes("Kuaixun")
                  ? "要闻"
                  : "--"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] min-h-[170vh]">
          <h1 className="py-6 text-center text-[#12a1a0] font-black text-xl md:text-2xl lg:text-4xl">
            {item.title}
          </h1>
          <hr className="mx-auto w-[95%] h-[3px] bg-gray-300 rounded border-0" />
          <div className="flex flex-col lg:flex-row justify-around items-center w-[80%] mx-auto text-lg pt-2">
            <div>发布日期: {item.release_date}</div>
            <div>访问次数: {item.visit_count}</div>
            <div>作者: {item.author.join(" ")}</div>
            <div>
              字号: [
              {Fonts.map((f) => (
                <span
                  key={f.name}
                  className={`cursor-pointer px-1 ${
                    currentFont === f.name
                      ? "text-[#12a1a0] font-bold"
                      : "text-black hover:underline"
                  }`}
                  onClick={() => setCurrentFont(f.name)}
                >
                  {f.name}
                </span>
              ))}
              ]
            </div>
          </div>

          <div
            className={`pt-[30px] font-medium ${
              currentFont === "大"
                ? "text-xl leading-10"
                : currentFont === "中"
                ? "text-md leading-8"
                : "text-sm leading-6"
            }`}
          >
            {item.content.map((p, idx) => {
              if (idx === 1 && item.images.length > 0) {
                return (
                  <div key={idx}>
                    <p className="indent-8 py-2">{p}</p>
                    <div
                      className={`grid grid-cols-${item.images.length} w-[80%] gap-2 py-[30px] mx-auto`}
                    >
                      {item.images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`img-${i}`}
                          className="w-full h-full"
                        />
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <p key={idx} className="indent-8 py-2">
                  {p}
                </p>
              );
            })}
          </div>

          <div
            className={`pt-[30px] ${
              currentFont === "大"
                ? "text-xl"
                : currentFont === "中"
                ? "text-md"
                : "text-sm"
            }`}
          >
            <p>
              <strong>责编：</strong>
              {item.zebian || "—"}
            </p>
            <p>
              <strong>审核：</strong>
              {item.shenhe || "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kuaixun;
