const Biwulianbing = () => {
  return (
    <div
      className={`
    bg-[url('/images/biwulianbing_bg.webp')] bg-cover bg-no-repeat bg-center
    w-full py-[80px] 
    `}
    >
      {/* “赛马制”练兵比武 */}
      <div className="flex flex-col justify-center items-center gap-1 mb-[50px]">
        <h1 className="text-3xl font-black tracking-widest">
          “赛马制”练兵比武
        </h1>
        <div
          className={`
            w-[60px] h-[5px] bg-[#12a1a0] rounded-xl
            `}
        />
      </div>
      {/* 主体 */}
      <div
        className={`
          flex flex-col lg:flex-row w-[90%] lg:w-[80%] min-h-[400px] mx-auto overflow-hidden rounded
          `}
      >
        {/* left */}
        <div
          className={`
          w-full lg:w-[65%] relative bg-[#12a1a0] min-h-[400px]
          `}
        >
          {/* 内容浮窗 */}
          <div
            className={`
            absolute left-0 bottom-0 w-full min-h-[50px] bg-black/30  
            p-6
            `}
          >
            <div className="space-y-1">
              <h1 className="font-bold text-2xl text-white">
                应急救援技能练兵比武
              </h1>
              <h3 className="font-medium text-white/50 text-[15px]">
                考察应急人员“应急救援”能力, 主要包括...
              </h3>
              <hr className="font-medium text-white/50 text-[15px]" />
              <h4 className="font-medium text-white/50 text-[15px]">
                练兵时间: 3月 - 8月 比武时间: 3月 - 8月
              </h4>
            </div>
          </div>
        </div>
        {/* right */}
        <div
          className={`
          w-full lg:w-[35%] bg-white p-4
          `}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start">
              <h1 className="text-xl font-bold">练兵项目</h1>
              <h3 className="text-xs font-light">TRAINING COURSES</h3>
            </div>
            <div
              className={`
                flex justify-between items-center text-black/50 cursor-pointer
                hover:underline
                `}
            >
              <h1 className="text-xs">查看更多</h1>
              <img
                src="/images/more.webp"
                alt=""
                className="w-[20px] h-auto object-contain object-right"
              />
            </div>
          </div>
          {/* CourseWrapper */}
          <div
            className={`
            flex flex-col justify-start py-2 gap-2
            `}
          >
            <CourseWrapper
              title={"test"}
              duration={"3月 - 9月"}
              date={"12月"}
            />
            <CourseWrapper
              title={"test"}
              duration={"3月 - 9月"}
              date={"12月"}
            />
            <CourseWrapper
              title={"test"}
              duration={"3月 - 9月"}
              date={"12月"}
            />
            <CourseWrapper
              title={"test"}
              duration={"3月 - 9月"}
              date={"12月"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseWrapper = ({
  image,
  title,
  duration,
  date,
}: {
  image?: string;
  title: string;
  duration: string;
  date: string;
}) => {
  return (
    <div className={`flex`}>
      <div className="w-[40%] h-[90px]">
        {image ? (
          <img src={image} alt="" />
        ) : (
          <div className="bg-gray-500 min-w-[40%] min-h-[90px]"></div>
        )}
      </div>
      <div className="w-[60%] p-2">
        <h1>{title}</h1>
        <h3>比兵时间: {duration}</h3>
        <h3>比武时间: {date}</h3>
      </div>
    </div>
  );
};

export default Biwulianbing;
