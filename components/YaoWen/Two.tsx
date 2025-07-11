import { useState } from "react";

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

const Two = () => {
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
        公司召开2025年“赛马制”练兵比武
        <br />
        暨劳动竞赛工作推进会
      </h1>
      <hr className="border-0 bg-gray-300 h-[3px] rounded w-[95%] mx-auto" />
      <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center mx-auto text-lg pt-2">
        <div>发布日期: 2025-06-25</div>
        <div>访问次数: --</div>
        <div>作者: 严凌霄 朱杰</div>
        <div>
          字号:[
          {Fonts.map((font, index) => (
            <span
              key={index}
              className={`
                    ${
                      currentFont === font.name
                        ? "text-[#12a1a0] font-bold underline"
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
          6月12日，公司召开2025年“赛马制”练兵比武暨劳动竞赛工作推进会，公司纪委书记万仞、总会计师、工会主席杨波出席会议并讲话。
        </h1>
        <h1 className="indent-8 py-2">
          万仞强调，要营造比学赶超氛围，围绕专业重点和培养需求，以赛促学、以赛促管；培养核心技术人才，压实牵头部门责任，做到下沉管理、务实推进，提升工作质效；做好全过程管控，建立定期督导机制，确保全程推进有序；强化激励措施，量化激励考核，做好典型树立、荣誉展示，营造良好氛围。
        </h1>
        <h1 className="indent-8 py-2">
          杨波强调，要提高思想认识，认清竞赛的重要意义，与工作紧密结合，发挥职工主力军作用；强化闭环管控，精准实施，定期关注全省排位，做出良好成绩；完善组织保障，注重劳模工匠培养，做好立体宣传，提高组织成效。
        </h1>
        <h1 className="indent-8 py-2">
          会上，发展部、财务部、人资部、党建部、安监部、设备部、配网部、营销部、科数部、建设部、调控中心、综服务中心作汇报发言。
        </h1>
        <h1 className="indent-8 py-2">
          公司相关部门负责人，各县公司分管负责人参加会议。
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

export default Two;
