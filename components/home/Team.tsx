import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState("输变电");

  return (
    <div className="flex flex-col">
      {/* 柔性团队 */}
      <div className="flex flex-col justify-center items-center gap-1 my-[60px]">
        <h1 className="text-3xl font-black tracking-widest">柔性团队</h1>
        <div
          className={`
            w-[60px] h-[5px] bg-[#12a1a0] rounded-xl
            `}
        />
      </div>
      {/* 主体 */}
      <div
        className={`
        bg-[url('/images/team_bg.webp')] bg-cover bg-no-repeat bg-center
        w-full py-[80px] 
    `}
      >
        <div
          className={`
          grid grid-cols-2 lg:grid-cols-3 gap-2 w-[80%] mx-auto
          `}
        >
          <div
            className={`
            ${team === "输变电" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("输变电")}
          >
            输变电
          </div>
          <div
            className={`
            ${team === "配用电" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("配用电")}
          >
            配用电
          </div>
          <div
            className={`
            ${team === "调控运行" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("调控运行")}
          >
            调控运行
          </div>
          <div
            className={`
            ${team === "数字化" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("数字化")}
          >
            数字化
          </div>
          <div
            className={`
            ${team === "新型电力系统" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("新型电力系统")}
          >
            新型电力系统
          </div>
          <div
            className={`
            ${team === "综合" ? "bg-[#12a1a0]/60" : "bg-gray-400/60"}
            flex justify-center items-center text-white w-full h-[200px]
            text-3xl font-bold cursor-pointer hover:bg-[#12a1a0]/30 duration-100 
            transition-colors ease-in-out
            `}
            onClick={() => setTeam("综合")}
          >
            综合
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
