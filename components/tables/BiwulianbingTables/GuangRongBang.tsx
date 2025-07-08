import { useState } from "react";
import A from "./GuangRongBang/A";
import B from "./GuangRongBang/B";
import C from "./GuangRongBang/C";
import D from "./GuangRongBang/D";
import E from "./GuangRongBang/E";
import F from "./GuangRongBang/F";
import G from "./GuangRongBang/G";
import H from "./GuangRongBang/H";
import I from "./GuangRongBang/I";
import J from "./GuangRongBang/J";
import K from "./GuangRongBang/K";
import L from "./GuangRongBang/L";
import M from "./GuangRongBang/M";
import N from "./GuangRongBang/N";
import O from "./GuangRongBang/O";
import P from "./GuangRongBang/P";
import Q from "./GuangRongBang/Q";
import R from "./GuangRongBang/R";
import S from "./GuangRongBang/S";
import T from "./GuangRongBang/T";

const Projects = [
  { name: "输变电可靠性管理技能练兵比武", component: <A /> },
  { name: "新员工“赛马制”练兵比武", component: <B /> },
  { name: "变电运行值班员技能竞赛", component: <C /> },
  { name: "财务专业电价、资金业务技能练兵比武", component: <D /> },
  { name: "“网上电网”业务技能练兵比武", component: <E /> },
  { name: "绿色现代数智供应链知识练兵比武", component: <F /> },
  { name: "数字化审计知识练兵比武", component: <G /> },
  { name: "后勤领域消防安全技能练兵比武", component: <H /> },
  { name: "金牌培训师教学技能练兵比武", component: <I /> },
  { name: "装表接电技能练兵比武", component: <J /> },
  { name: "反窃电技能练兵比武", component: <K /> },
  { name: "设备运检全业务核心班组技能练兵比武", component: <L /> },
  { name: "技术标准技能练兵比武", component: <M /> },
  { name: "电网调度自动化厂站调试检修技能练兵比武", component: <N /> },
  { name: "电力交易技能练兵比武", component: <O /> },
  { name: "应急救援技能练兵比武", component: <P /> },
  { name: "配网不停电作业技能练兵比武", component: <Q /> },
  { name: "配网施工检修及自动化技能比武", component: <R /> },
  { name: "技经专业技能练兵比武", component: <S /> },
  { name: "企业中台规模化应用技能练兵比武", component: <T /> },
];

const GuangRongBang = () => {
  const [currentProject, setCurrentProject] =
    useState("输变电可靠性管理技能练兵比武");

  const returnComponents = (name: string) => {
    switch (name) {
      case "输变电可靠性管理技能练兵比武":
        return <A />;
      case "新员工“赛马制”练兵比武":
        return <B />;
      case "变电运行值班员技能竞赛":
        return <C />;
      case "财务专业电价、资金业务技能练兵比武":
        return <D />;
      case "“网上电网”业务技能练兵比武":
        return <E />;
      case "绿色现代数智供应链知识练兵比武":
        return <F />;
      case "数字化审计知识练兵比武":
        return <G />;
      case "后勤领域消防安全技能练兵比武":
        return <H />;
      case "金牌培训师教学技能练兵比武":
        return <I />;
      case "装表接电技能练兵比武":
        return <J />;
      case "反窃电技能练兵比武":
        return <K />;
      case "设备运检全业务核心班组技能练兵比武":
        return <L />;
      case "技术标准技能练兵比武":
        return <M />;
      case "电网调度自动化厂站调试检修技能练兵比武":
        return <N />;
      case "电力交易技能练兵比武":
        return <O />;
      case "应急救援技能练兵比武":
        return <P />;
      case "配网不停电作业技能练兵比武":
        return <Q />;
      case "配网施工检修及自动化技能比武":
        return <R />;
      case "技经专业技能练兵比武":
        return <S />;
      case "企业中台规模化应用技能练兵比武":
        return <T />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-2">
      {/* 比武练兵项目 */}
      <div className="w-[25%] border bg-gray-100">
        <div
          className={`
            tracking-widest text-center text-[#12a1a0] font-bold text-xl
             py-2
            `}
        >
          <h1>比武练兵项目</h1>
        </div>
        <div className="w-[95%] flex flex-col items-center justify-center gap-1 mx-auto pb-2">
          {Projects.map((project, index) => (
            <div
              key={index}
              className={`
                w-full transition-colors duration-75 ease-linear cursor-pointer
              ${
                currentProject === project.name
                  ? "bg-[#12a1a0] text-white font-semibold"
                  : "bg-[#afdad7] hover:bg-[#12a1a0]/50"
              }
            `}
              onClick={() => setCurrentProject(project.name)}
            >
              <h1 className="text-center p-1">{project.name}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* 排行榜 */}
      <div className="w-[75%] border-t-6 border-[#12a1a0]">
        {returnComponents(currentProject)}
      </div>
    </div>
  );
};

export default GuangRongBang;
