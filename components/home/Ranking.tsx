// Ranking.tsx
import { useState, useEffect } from "react";
import "../style/swiper13.css";

const Slide = ({
  index,
  image,
  news,
}: {
  index: number;
  image?: string;
  news: string[];
}) => (
  <div className="flex h-[300px]" key={index}>
    <div className="flex-1">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <div className="min-h-[300px] bg-gray-400" />
      )}
    </div>
    <div className="flex-1 bg-[#12a1a0] overflow-hidden">
      <div className="px-8 py-12 flex flex-col items-start gap-2">
        {news.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="w-[30px] h-[30px] bg-white text-[#12a1a0] flex justify-center items-center font-black">
              {idx + 1}
            </span>
            <h1 className="text-xl text-white whitespace-nowrap">{item}</h1>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Ranking() {
  const slides: React.ReactNode[] = [
    <Slide index={0} news={["新闻1", "新闻2"]} />,
    <Slide index={1} news={["新闻3", "新闻4"]} />,
    <Slide index={2} news={["新闻5", "新闻6"]} />,
    <Slide index={3} news={["新闻7", "新闻8"]} />,
    <Slide index={4} news={["新闻9", "新闻10"]} />,
    <Slide index={5} news={["新闻11", "新闻12"]} />,
    <Slide index={6} news={["新闻13", "新闻14"]} />,
  ];

  const [current, setCurrent] = useState(0);
  const n = slides.length;
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % n), 3000);
    return () => clearInterval(t);
  }, [n]);

  const prev = (current - 1 + n) % n;
  const next = (current + 1) % n;

  return (
    <div className="flex flex-col">
      {/* 标题 */}
      <div className="flex flex-col items-center my-[60px] gap-1">
        <h1 className="text-3xl font-black tracking-widest">光荣榜</h1>
        <div className="w-[60px] h-[5px] bg-[#12a1a0] rounded-xl" />
      </div>

      <div className="relative flex items-center w-full">
        {/* 左箭头 */}
        <button
          className="absolute left-2 z-10 p-2"
          onClick={() => setCurrent(prev)}
        >
          <img src="/images/left.webp" className="w-6 h-6" />
        </button>

        {/* 三屏静态布局 */}
        <div className="carousel flex w-full">
          <div className="slide side">{slides[prev]}</div>
          <div className="slide main">{slides[current]}</div>
          <div className="slide side">{slides[next]}</div>
        </div>

        {/* 右箭头 */}
        <button
          className="absolute right-2 z-10 p-2"
          onClick={() => setCurrent(next)}
        >
          <img
            src="/images/left.webp"
            className="w-6 h-6 transform scale-x-[-1]"
          />
        </button>
      </div>

      <div className="w-full h-auto mt-[60px]">
        <img src="/images/home_ranking_footer.webp" alt="" />
      </div>
    </div>
  );
}
