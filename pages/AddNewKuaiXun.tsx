import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../src/components/ui/input";
import { Textarea } from "../src/components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type Kuaixun = {
  id: string;
  title: string;
  release_date: string;
  visit_count: number;
  author: string[];
  content: string[];
  images: string[];
  zebian?: string;
  shenhe?: string;
};

const Fonts = [{ name: "大" }, { name: "中" }, { name: "小" }];

const AddNewKuaiXun = () => {
  const navigate = useNavigate();
  const [currentFont, setCurrentFont] = useState("小");
  const [Kuaixun, setKuaixun] = useState<Kuaixun>({
    id: uuidv4(),
    title: "",
    release_date: new Date().toISOString().split("T")[0],
    visit_count: 0,
    author: [],
    content: [],
    images: [],
    zebian: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const readers = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((base64Images) => {
      setKuaixun((prev) => ({
        ...prev,
        images: [...prev.images, ...base64Images],
      }));
    });
  };

  const handlePublish = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/addNewKuaiXun`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Kuaixun),
      });
      if (!res.ok) throw new Error();
      toast.success("发布成功");
      // 清空表单，重置 state
      setKuaixun({
        id: uuidv4(),
        title: "",
        release_date: new Date().toISOString().split("T")[0],
        visit_count: 0,
        author: [],
        content: [],
        images: [],
        zebian: "",
        shenhe: "",
      });
      navigate("/");
    } catch {
      toast.error("发布失败");
    }
  };

  return (
    <div
      className={`
      w-[100vw] h-[100vh]  tracking-wide text-2xl
      flex justify-center items-center overflow-hidden
    `}
    >
      {/* upload */}
      <div
        className={`
          w-[50%] h-full flex flex-col justify-center items-center gap-4 bg-[#12a1a0]
          px-10  text-white
          `}
      >
        <h1 className="font-black text-3xl">发布新快讯</h1>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="title">标题</label>
          <Input
            id="title"
            onChange={(e) =>
              setKuaixun((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="content">内容</label>
          <Textarea
            id="content"
            onChange={(e) =>
              setKuaixun((prev) => ({
                ...prev,
                content: e.target.value
                  .split("\n")
                  .filter((p) => p.trim() !== ""),
              }))
            }
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="images">图片</label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="border p-1 rounded-md"
          />
        </div>
        <div className="w-full flex justify-around items-center gap-2">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="author">作者</label>
            <Input
              id="author"
              onChange={(e) =>
                setKuaixun((prev) => ({
                  ...prev,
                  author: e.target.value.trim().split(/\s+/), // 按空格（一个或多个）分割
                }))
              }
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="zebian">责编</label>
            <Input
              id="zebian"
              onChange={(e) =>
                setKuaixun((prev) => ({ ...prev, zebian: e.target.value }))
              }
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="shenhe">审核</label>
            <Input
              id="shenhe"
              onChange={(e) =>
                setKuaixun((prev) => ({ ...prev, shenhe: e.target.value }))
              }
            />
          </div>
        </div>
        <div
          className={`
          border border-white p-2 w-[50%] text-center rounded-md text-2xl font-semibold
          hover:bg-white hover:text-black duration-200 ease-in-out transition-colors mt-4
          cursor-pointer
          `}
          onClick={handlePublish}
        >
          发布
        </div>
      </div>
      {/* preview */}
      <div
        className={`
        w-[50%] h-full overflow-y-scroll
        `}
      >
        <div
          className={`
            border-t-6 border-[#12a1a0] w-[90%]
            mx-auto relative mt-2
            `}
        >
          <h1
            className={`
          py-6 text-center text-[#12a1a0] text-xl md:text-2xl lg:text-4xl font-black
            `}
          >
            {Kuaixun.title ? Kuaixun.title : "请输入标题"}
          </h1>
          <hr className="border-0 bg-gray-300 h-[3px] rounded w-[95%] mx-auto" />
          <div className="w-full flex flex-col justify-around items-center mx-auto text-lg pt-2">
            <div>
              发布日期:{" "}
              {Kuaixun.release_date ? Kuaixun.release_date : "请输入发布日期"}
            </div>
            <div>访问次数: 0</div>
            <div>
              作者: {Kuaixun.author.length > 0 ? Kuaixun.author : "请输入作者"}
            </div>
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
            {Kuaixun.content.length > 0 ? (
              Kuaixun.content.map((item, index) => {
                if (index === 1 && Kuaixun.images.length > 1) {
                  return (
                    <div key={index}>
                      <h1 className="indent-8 py-2">{item}</h1>
                      <div
                        className={`
                        grid grid-cols-${Kuaixun.images.length}
                        w-[80%] gap-2 py-[30px] mx-auto
                      `}
                      >
                        {Kuaixun.images.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`image-${i}`}
                            className="w-full h-full"
                          />
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <h1 key={index} className="indent-8 py-2">
                    {item}
                  </h1>
                );
              })
            ) : (
              <p>请输入内容</p>
            )}
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
              <strong>责编：</strong>
              {Kuaixun.zebian ? Kuaixun.zebian : "请输入责编"}
            </h1>
            <h1>
              <strong>审核：</strong>
              {Kuaixun.shenhe ? Kuaixun.shenhe : "请输入审核"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewKuaiXun;
