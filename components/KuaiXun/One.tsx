import { useState } from "react";

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

const One = () => {
  const [currentFont, setCurrentFont] = useState("中");
  return (
    <div
      className={`
            border-t-6 border-[#12a1a0] w-[90%] md:w-[80%] lg:w-[70%] 
            mx-auto min-h-[100vh] relative
            `}
    >
      <h1
        className={`
          py-6 text-center text-[#12a1a0] text-xl md:text-2xl lg:text-4xl font-black
            `}
      >
        人资部、人资服务室：
        <br />
        发布自办班流程指南，全力推进夏训班实施
      </h1>
      <hr className="border-0 bg-gray-300 h-[3px] rounded w-[95%] mx-auto" />
      <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center mx-auto text-lg pt-2">
        <div>发布日期: 2025-06-25</div>
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
          6月24日，人资部、人资服务室发布自办班流程指南及工作导图，全力推进各部门有效实施夏训班。
        </h1>
        <h1 className="indent-8 py-2">
          夏训班是公司推进一线核心标杆班组建设、提升一线员工和青年员工实操技能的重要举措，将利用7月、8月封网期间生产任务相对较少的时间段，组织一线员工进行系统性、专业化的封闭实训，进一步打牢实操基础，提升员工“能干会管”能力。前期，人资部牵头逐一与各部门对接，梳理形成生产、营销等各专业31个“夏训班”清单，并全面明确课程表。
        </h1>
        <h1 className="indent-8 py-2">
          据悉，自办班指南主要依据最新上级公司教育培训办法，突出自办班的规范性和实效性，主要分办班前、实施中和结束后三个环节中的关注点，指导各专业部门按图指引、规范办班。同时，人资服务室将进一步强化服务意识，主动对接办班各专业部门，帮助做好各项配套工作，确保夏训班有序有效实施，并取得实效。
        </h1>
      </div>
    </div>
  );
};

export default One;
