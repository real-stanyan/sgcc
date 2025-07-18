import { useState, useEffect, useContext } from "react";
import { BiwulianbingEditIDContext } from "../../src/context/BiwulianbingEditIDContext";
import { SectionContext } from "../../src/context/SectionContext";
import { Input } from "../../src/components/ui/input";
import { motion } from "framer-motion";
import { Pencil, Trash, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../src/components/ui/alert-dialog";

type Biwulianbing = {
  id: string;
  i: number;
  project: string;
  content: string;
  header_office: string;
  duration: string;
  date: string;
  manager: string;
  responsibler: string;
  contact: string;
  progress: string;
};

const BiwulianbingManagement = () => {
  const [, setSection] = useContext(SectionContext);
  const [, setDataID] = useContext(BiwulianbingEditIDContext);
  const [data, setData] = useState<Biwulianbing[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/returnAllBiwulianbing")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  const filteredData = data?.filter((item) => {
    const kw = keyword.toLowerCase();
    return Object.values(item).some(
      (val) => typeof val === "string" && val.toLowerCase().includes(kw)
    );
  });

  // 删除数据
  const handleDeleteDataByID = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/deleteBiwulianbingByID/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error(`删除失败：${res.status}`);
      setData((prev) => prev.filter((item) => item.id !== id));
      toast.success("删除成功!", {
        icon: "✅",
        duration: 5000,
        style: {
          background: "#004030",
          color: "#FFF9E5",
          borderColor: "#FFF9E5",
          borderWidth: 2,
          fontSize: "20px",
          padding: "12px 16px",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("删除失败!", {
        icon: "⚠️",
        duration: 5000,
        style: {
          background: "#DC3C22",
          color: "#FBF5DE",
          borderColor: "#FBF5DE",
          borderWidth: 2,
          fontSize: "20px",
          padding: "12px 16px",
        },
      });
    }
  };

  // 数据升序：将 i 与 i-1 交换
  const handleIncreaseOrderByI = async (i: number) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/increasebiwulianbingorderbyi/${i}`,
        { method: "POST" }
      );
      if (!res.ok) throw new Error(`排序失败：${res.status}`);

      setData((prev) =>
        prev
          .map((item) => {
            if (item.i === i) return { ...item, i: i - 1 };
            if (item.i === i - 1) return { ...item, i: i };
            return item;
          })
          .sort((a, b) => a.i - b.i)
      );

      toast.success("排序已更新");
    } catch (err) {
      console.error(err);
      toast.error("排序失败");
    }
  };

  // 数据降序：将 i 与 i+1 交换
  const handleDecreaseOrderByI = async (i: number) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/decreasebiwulianbingorderbyi/${i}`,
        { method: "POST" }
      );
      if (!res.ok) throw new Error(`排序失败：${res.status}`);

      setData((prev) =>
        prev
          .map((item) => {
            if (item.i === i) return { ...item, i: i + 1 };
            if (item.i === i + 1) return { ...item, i: i };
            return item;
          })
          .sort((a, b) => a.i - b.i)
      );

      toast.success("排序已更新");
    } catch (err) {
      console.error(err);
      toast.error("排序失败");
    }
  };

  return (
    <div
      className={`
      w-full min-h-[100vh] overflow-x-hidden bg-gray-50 relative
    `}
    >
      {/* header */}
      <div
        className={`
          flex justify-between items-center h-[100px] px-8
        `}
      >
        {/* header标题 */}
        <h1 className="font-semibold text-2xl">“赛马制”练兵比武 | 数据管理</h1>
        {/* header功能 */}
        <div
          className={`
          flex justify-center items-center space-x-2 h-full
          `}
        >
          <Input
            className={`border border-gray-400 h-[40px]`}
            placeholder="输入关键词..."
            onChange={(e) => setKeyword(e.target.value.trim())}
          />
          <div
            className={`
              whitespace-nowrap px-4 border h-[40px] bg-gray-900 flex cursor-pointer
              text-gray-300 rounded-md justify-center items-center group
            `}
            onClick={() => setSection("biwulianbing_AddData")}
          >
            <h1
              className={`
              font-light text-lg group-hover:font-bold transition-all duration-150
              ease-linear
              `}
            >
              添加数据
            </h1>
          </div>
        </div>
      </div>
      {/* 共找到 X 条数据 */}
      <div className="w-[95%] text-right pb-2 font-normal text-lg tracking-wide">
        共找到<strong>{filteredData.length}</strong>条数据
      </div>
      {/* 表格 */}
      <div
        className={`
        bg-gray-200 w-[95%] mx-auto rounded p-4 flex flex-col gap-2
        `}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex text-md bg-gray-300 rounded-md"
            >
              {/* 表格序号 */}
              <div
                className={`
                w-[10%] border-r-1 flex flex-col justify-center items-center gap-2
                `}
              >
                <ChevronUp
                  size={40}
                  className="hover:scale-130 duration-200 ease-in-out cursor-pointer transition-all"
                  onClick={() => handleIncreaseOrderByI(item.i)}
                />
                <h1 className="font-bold text-2xl">{item.i}</h1>
                <ChevronDown
                  size={40}
                  className="hover:scale-130 duration-200 ease-in-out cursor-pointer transition-all"
                  onClick={() => handleDecreaseOrderByI(item.i)}
                />
              </div>
              {/* 表格内容 */}
              <div className="flex flex-col gap-1 w-[75%] p-4">
                {/* ID */}
                <h1>
                  <strong>ID:</strong> {item.id}
                </h1>
                {/* 练兵比武项目 */}
                <h1>
                  <strong>练兵比武项目:</strong> {item.project}
                </h1>
                {/* 省公司主管部门 */}
                <h1>
                  <strong>省公司主管部门:</strong> {item.header_office}
                </h1>
                {/* 分管领导 */}
                <h1>
                  <strong>分管领导:</strong> {item.manager}
                </h1>
                {/* 项目负责人 */}
                <h1>
                  <strong>项目负责人:</strong> {item.responsibler}
                </h1>
                {/* 联系人 */}
                <h1>
                  <strong>联系人:</strong> {item.contact}
                </h1>
                {/* 练兵时间段 */}
                <h1>
                  <strong>练兵时间段:</strong> {item.duration}
                </h1>
                {/* 比武时间 */}
                <h1>
                  <strong>比武时间:</strong> {item.date}
                </h1>
                {/* 比武进度 */}
                <h1>
                  <strong>比武进度:</strong> {item.progress}
                </h1>
                {/* 内容 */}
                <h1>
                  <strong>内容:</strong> {item.content}
                </h1>
              </div>
              {/* 表格功能 */}
              <div className="flex flex-col w-[15%]">
                {/* 编辑数据 */}
                <div
                  className={`
                    flex-1 flex flex-col justify-center items-center gap-2 cursor-pointer
                    group border
                    `}
                  onClick={() => {
                    setDataID(item.id);
                    setSection("biwulianbing_EditData");
                  }}
                >
                  <Pencil size={25} />
                  <h1
                    className={`
                    font-normal text-lg group-hover:font-bold duration-200 transition-all
                    ease-in-out
                    `}
                  >
                    编辑数据
                  </h1>
                </div>
                {/* 删除数据 */}
                <AlertDialog>
                  <AlertDialogTrigger className="flex-1">
                    <div
                      className={`
                    w-full h-full flex flex-col justify-center items-center gap-2 
                    cursor-pointer group border
                    `}
                    >
                      <Trash size={25} />
                      <h1
                        className={`
                        font-normal text-lg group-hover:font-bold duration-200 
                        transition-all ease-in-out
                        `}
                      >
                        删除数据
                      </h1>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        确认要删除此条数据吗？
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        该行为不可逆，请谨慎操作。
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>取消</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-600"
                        onClick={() => handleDeleteDataByID(item.id)}
                      >
                        删除
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-black min-h-[300px] flex justify-center items-center">
            <h1 className="font-bold text-2xl">无数据</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiwulianbingManagement;
