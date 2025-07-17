import { useState, useEffect, useContext } from "react";
import { RouxingtuanduiEditIDContext } from "../../src/context/RouxingtuanduiEditIDContext";
import { SectionContext } from "../../src/context/SectionContext";
import { Input } from "../../src/components/ui/input";
import { Pencil, Trash } from "lucide-react";
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

type Rouxingtuandui = {
  id: string;
  manager: string;
  team_leader: string;
  area: string;
  team_sub_leader: string[];
  research_titles: string[];
  projects: string[];
  team_heros: string[];
  contact: { name: string; number: string };
  team_members: string[];
  CreatedAt: string;
};

const RouxingtuanduiManagement = () => {
  const [, setSection] = useContext(SectionContext);
  const [, setDataID] = useContext(RouxingtuanduiEditIDContext);
  const [data, setData] = useState<Rouxingtuandui[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/returnAllRouxingtuandui")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const filtered = data.filter((item) => {
    const kw = keyword.toLowerCase();
    return Object.values(item)
      .flatMap((v) =>
        typeof v === "string"
          ? [v]
          : Array.isArray(v)
          ? v
          : typeof v === "object"
          ? Object.values(v)
          : []
      )
      .some((str) => str.toLowerCase().includes(kw));
  });

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/deleteRouxingtuanduiByID/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error();
      setData((d) => d.filter((i) => i.id !== id));
      toast.success("删除成功!", { icon: "✅" });
    } catch {
      toast.error("删除失败!", { icon: "⚠️" });
    }
  };

  return (
    <div className="w-full min-h-[100vh] overflow-x-hidden bg-gray-50 relative">
      <div className="flex justify-between items-center h-[100px] px-8">
        <h1 className="font-semibold text-2xl">柔性团队 | 数据管理</h1>
        <div className="flex items-center space-x-2 h-full">
          <Input
            className="border border-gray-400 h-[40px]"
            placeholder="输入关键词..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div
            className="whitespace-nowrap px-4 border h-[40px] bg-gray-900 flex cursor-pointer text-gray-300 rounded-md justify-center items-center group"
            onClick={() => setSection("rouxingtuandui_AddData")}
          >
            <h1 className="font-light text-lg group-hover:font-bold transition-all duration-150 ease-linear">
              添加数据
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[95%] text-right pb-2 font-normal text-lg">
        共找到<strong>{filtered.length}</strong>条数据
      </div>
      <div className="bg-gray-200 w-[95%] mx-auto rounded p-4 flex flex-col gap-2">
        {filtered.length > 0 ? (
          filtered
            .sort(
              (a, b) =>
                new Date(a.CreatedAt).getTime() -
                new Date(b.CreatedAt).getTime()
            )
            .map((item) => (
              <div
                key={item.id}
                className="flex text-md bg-gray-300 rounded-md"
              >
                <div className="flex flex-col gap-1 w-[85%] p-4">
                  <h1>
                    <strong>ID:</strong> {item.id}
                  </h1>
                  <h1>
                    <strong>主管:</strong> {item.manager}
                  </h1>
                  <h1>
                    <strong>组长:</strong> {item.team_leader}
                  </h1>
                  <h1>
                    <strong>区域:</strong> {item.area}
                  </h1>
                  <h1>
                    <strong>副组长:</strong> {item.team_sub_leader.join("、")}
                  </h1>
                  <h1>
                    <strong>研究课题:</strong> {item.research_titles.join("、")}
                  </h1>
                  <h1>
                    <strong>项目:</strong> {item.projects.join("、")}
                  </h1>
                  <h1>
                    <strong>团队骨干:</strong> {item.team_heros.join("、")}
                  </h1>
                  <h1>
                    <strong>联系人:</strong> {item.contact.name} (
                    {item.contact.number})
                  </h1>
                  <h1>
                    <strong>成员:</strong> {item.team_members.join("、")}
                  </h1>
                </div>
                <div className="flex flex-col w-[15%]">
                  <div
                    className="flex-1 flex flex-col justify-center items-center gap-2 cursor-pointer group border"
                    onClick={() => {
                      setDataID(item.id);
                      setSection("rouxingtuandui_EditData");
                    }}
                  >
                    <Pencil size={25} />
                    <h1 className="font-normal text-lg group-hover:font-bold transition-all">
                      编辑数据
                    </h1>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger className="flex-1">
                      <div className="w-full h-full flex flex-col justify-center items-center gap-2 cursor-pointer group border">
                        <Trash size={25} />
                        <h1 className="font-normal text-lg group-hover:font-bold transition-all">
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
                          该操作不可逆。
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>取消</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600"
                          onClick={() => handleDelete(item.id)}
                        >
                          删除
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
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

export default RouxingtuanduiManagement;
