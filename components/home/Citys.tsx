import { useState, useEffect } from "react";
import "../style/carousel.css";

const Citys = () => {
  const slides: React.ReactNode[] = [
    // 南京公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full
        `}
      >
        南京公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 苏州公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        苏州公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 扬州公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        扬州公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 无锡公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        无锡公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 徐州公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        徐州公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 常州公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        常州公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 镇江公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        镇江公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
    // 江都公司
    <div className="flex flex-col-reverse lg:flex-raw w-full h-[400px] cursor-pointer">
      <div
        className={`
        w-full lg:w-[30%] bg-[#12a1a0] text-white flex justify-center items-center
        h-full`}
      >
        江都公司
      </div>
      <div className="w-full lg:w-[70%]">
        <img src="/images/city_bg.webp" alt="" />
      </div>
    </div>,
  ];
  const [current, setCurrent] = useState(0);
  const n = slides.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % n), 3000);
    return () => clearInterval(timer);
  }, [n]);

  const goTo = (i: number) => setCurrent((i + n) % n);

  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);
  const minSwipe = 50;
  const onTouchStart = (e: any) => setStartX(e.touches[0].clientX);
  const onTouchMove = (e: any) => setEndX(e.touches[0].clientX);
  const onTouchEnd = () => {
    if (startX !== null && endX !== null) {
      const d = startX - endX;
      if (d > minSwipe) goTo(current + 1);
      if (d < -minSwipe) goTo(current - 1);
    }
    setStartX(null);
    setEndX(null);
  };

  return (
    <div className="flex flex-col">
      {/* 一线核心标杆组 */}
      <div className="flex flex-col justify-center items-center gap-1 my-[60px]">
        <h1 className="text-3xl font-black tracking-widest">一线核心标杆组</h1>
        <div
          className={`
            w-[60px] h-[5px] bg-[#12a1a0] rounded-xl
            `}
        />
      </div>
      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="carousel-track h-[400px]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((node, i) => (
            <div className="carousel-slide h-[400px]" key={i}>
              {node}
            </div>
          ))}
        </div>
        <div className="pagination">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Citys;
