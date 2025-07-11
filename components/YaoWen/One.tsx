import { useState } from "react";

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

const One = () => {
  const [currentFont, setCurrentFont] = useState("中");
  return (
    <div
      className={`
            border-t-6 border-[#12a1a0] w-[90%] md:w-[80%] lg:w-[70%] 
            mx-auto min-h-[170vh] relative
            `}
    >
      <h1
        className={`
          py-6 text-center text-[#12a1a0] text-xl md:text-2xl lg:text-4xl font-black
            `}
      >
        公司召开2025年柔性团队建设工作推进会
      </h1>
      <hr className="border-0 bg-gray-300 h-[3px] rounded w-[95%] mx-auto" />
      <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center mx-auto text-lg pt-2">
        <div>发布日期: 2025-06-20</div>
        <div>访问次数: --</div>
        <div>作者: 朱杰 严凌霄</div>
        <div>
          字号:[
          {Fonts.map((font, index) => (
            <span
              key={index}
              className={`
                    ${
                      currentFont === font.name
                        ? "text-[#12a1a0] font-bold"
                        : "text-black hover:underline"
                    }
                        cursor-pointer px-1
                    `}
              onClick={() => setCurrentFont(font.name)}
            >
              {font.name}
            </span>
          ))}
          ]
        </div>
      </div>

      <div
        className={`
                 pt-[30px] font-medium
                ${
                  currentFont === "大"
                    ? "text-xl leading-10"
                    : currentFont === "中"
                    ? "text-md leading-8"
                    : currentFont === "小"
                    ? "text-sm leading-6"
                    : ""
                }
            `}
      >
        <h1 className="indent-8 py-2">
          6月20日，公司召开2025年柔性团队建设工作推进会。党委书记张军出席会议并讲话，公司领导张同洲、杨波、王昊、纪炜出席会议。
        </h1>
        <div className="grid grid-cols-1 w-[40%] gap-2 py-[30px] mx-auto">
          <img src="/yaowen/1.webp" alt="1" className="w-full h-full" />
        </div>
        <h1 className="indent-8 py-2">
          张军强调，柔性团队建设是公司立足新发展阶段的战略部署，是推动公司和电网高质量发展的关键举措。一是要提高政治站位。深刻把握柔性团队建设的重大意义，打破传统组织壁垒，形成跨专业协同、全链条攻坚的创新格局；二是要聚焦系统思维。构建好“三位一体”的团队建设体系从“精准组建”、“规范运行”、“成果转化”三方面牢牢把握好柔性团队运行质效，做到全面铺开、深度发展；三是要强化责任担当。公司上下要树立一盘棋思想，以齐抓共管、协同发力的工作格局，做好团队建设全方位保障，打造富有凝聚力、战斗力的攻坚集体，为公司高质量发展提供强劲动力。
        </h1>
        <h1 className="indent-8 py-2">
          公司出台《柔性团队管理方案》以来，共组建柔性团队18个，覆盖生产、营销、发建等各个专业，实现县公司“一县一特色”。柔性团队施行“领导挂帅、组长负责、骨干支撑、青年参与”的管理模式，组长由技术精湛、经验丰富的专家人才担任，副组长由业务过硬、素质优良的专业骨干担任，公司三、四、五级专家全员入队、精准指导，2020年及以后入职员工全员参与、迅速成长。本次会议旨在统一思想、压实责任、加速推进，确保柔性团队建设取得实效。
        </h1>
        <h1 className="indent-8 py-2">
          会上，人资部、党建部、科数部、发展部、各柔性团队作汇报发言。
        </h1>
        <h1 className="indent-8 py-2">
          公司副总工兼营销部主任，相关部门负责人参加会议。
        </h1>
      </div>

      <div
        className={`pt-[30px] ${
          currentFont === "大"
            ? "text-xl "
            : currentFont === "中"
            ? "text-md "
            : currentFont === "小"
            ? "text-sm "
            : ""
        }`}
      >
        <h1>
          <strong>责编：</strong>蒋烨
        </h1>
        <h1>
          <strong>审核：</strong>顾舒
        </h1>
      </div>
    </div>
  );
};

export default One;
