import { useState } from "react";

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

const Two = () => {
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
        【夏训班】变电运维中心：开展“无脚本”防汛专项演练
      </h1>
      <hr className="border-0 bg-gray-300 h-[3px] rounded w-[95%] mx-auto" />
      <div className="w-[80%] flex flex-col lg:flex-row justify-around items-center mx-auto text-lg pt-2">
        <div>发布日期: 2025-06-25</div>
        <div>访问次数: --</div>
        <div>作者: 姚磊</div>
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
          6月25日上午，变电运维中心模拟在220千伏广陵变外围积水的突发情况下，组织开展2025年防汛专项演习，以实战化演练强化应急响应机制。
        </h1>
        <div className="grid grid-cols-2 w-[80%] gap-2 py-[30px] mx-auto">
          <img src="/kuaixun/1.webp" alt="1" className="w-full h-full" />
          <img src="/kuaixun/2.webp" alt="2" className="w-full h-full" />
        </div>
        <h1 className="indent-8 py-2">
          本次演练，变电运维中心采用“无脚本”演习方式。上午9时，由中心负责人临时向各班组发起“220千伏广陵变因强降雨导致积水，请求支援”的汛情通报。根据防汛预案，维扬班、横沟班等6个运维班分别选派骨干力量，携带吸水膨胀袋、便携式水泵等防汛物资前往广陵变进行支援。
        </h1>
        <h1 className="indent-8 py-2">
          针对演习过程中各班组的响应情况和设备使用情况，中心还安排“讲解+实操”的现场培训教学。邀请专业团队介绍便携式排水泵、大功率排水泵车等防汛设备的操作要点和使用规范，确保运维人员能熟练掌握各类防汛设备的操作技能。
        </h1>
        <h1 className="indent-8 py-2">
          本次演习紧贴实战场景，从物资调配、应急响应到设备操作形成完整闭环，全面检验了变电运维中心防汛预案的科学性和可操作性。下一步，该中心将以此次演习为契机，持续完善应急管理体系，提升防汛减灾能力，为迎峰度夏期间电网安全运行筑牢坚实壁垒。
        </h1>
      </div>
    </div>
  );
};

export default Two;
