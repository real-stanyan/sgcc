import { useState, useContext, useEffect } from "react";
import { BiwulianbingEditIDContext } from "../../src/context/BiwulianbingEditIDContext";
import { SectionContext } from "../../src/context/SectionContext";
import { Label } from "../../src/components/ui/label";
import { Input } from "../../src/components/ui/input";
import { Textarea } from "../../src/components/ui/textarea";
import { toast } from "sonner";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src/components/ui/select";
import { Button } from "../../src/components/ui/button";

type Biwulianbing = {
  id: string;
  project: string;
  content: string;
  header_office: string;
  duration: string;
  date: string;
  manager: string;
  responsibler: string;
  contact: string[];
  progress: string;
  CreatedAt: string;
};

const BiwulianbingEditData = () => {
  const [, setSection] = useContext(SectionContext);
  const [dataID, setDataID] = useContext(BiwulianbingEditIDContext);
  const [form, setForm] = useState<Biwulianbing>({
    id: "",
    project: "",
    content: "",
    header_office: "",
    duration: "",
    date: "",
    manager: "",
    responsibler: "",
    contact: [],
    progress: "",
    CreatedAt: "",
  });

  useEffect(() => {
    if (!dataID) return;
    fetch(`http://localhost:3000/api/getBiwulianbingByID/${dataID}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json() as Promise<Biwulianbing>;
      })
      .then((data) => setForm(data))
      .catch((err) => console.error("Fetch failed", err));
  }, [dataID]);

  const handleEditDataByID = async (id: string) => {
    console.log(form);
    try {
      const res = await fetch(
        `http://localhost:3000/api/editbiwulianbingbyid/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);

      const updated: Biwulianbing = await res.json();

      // 更新本地列表
      setForm(updated);
      toast.success("编辑成功!", {
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
      setSection("biwulianbing_DataManagement");
    } catch (err) {
      console.error("编辑失败", err);
      toast.error("编辑失败!", {
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

  return (
    <>
      {form.id && dataID ? (
        <div
          className={`
          w-full h-[100vh] bg-gray-50
        `}
        >
          {/* 标题 */}
          <div className="text-center pt-8 pb-16">
            <h1 className="font-semibold text-2xl">
              “赛马制”练兵比武 | 编辑数据
            </h1>
            <h3 className="text-gray-500">ID: {form.id}</h3>
          </div>

          {/* 表格 */}
          <div
            className={`
            w-[90%] mx-auto grid grid-cols-2 gap-10 px-4
        `}
          >
            {/* 比武练兵项目 */}
            <div className="grid gap-2">
              <Label htmlFor="project" className="text-lg font-medium">
                比武练兵项目
              </Label>
              <Input
                id="project"
                name="project"
                value={form.project}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    project: e.target.value,
                  }))
                }
              />
            </div>
            {/* 省公司主管部门 */}
            <div className="grid gap-2">
              <Label htmlFor="header_office" className="text-lg font-medium">
                省公司主管部门
              </Label>
              <Input
                id="header_office"
                name="header_office"
                value={form.header_office}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    header_office: e.target.value,
                  }))
                }
              />
            </div>
            {/* 分管领导 */}
            <div className="grid gap-2">
              <Label htmlFor="manager" className="text-lg font-medium">
                分管领导
              </Label>
              <Input
                id="manager"
                name="manager"
                value={form.manager}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    manager: e.target.value,
                  }))
                }
              />
            </div>
            {/* 项目负责人 */}
            <div className="grid gap-2">
              <Label htmlFor="responsibler" className="text-lg font-medium">
                项目负责人
              </Label>
              <Input
                id="responsibler"
                name="responsibler"
                value={form.responsibler}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    responsibler: e.target.value,
                  }))
                }
              />
            </div>
            {/* 练兵时间段 */}
            <div className="grid gap-2">
              <Label htmlFor="duration" className="text-lg font-medium">
                练兵时间段
              </Label>
              <Input
                id="duration"
                name="duration"
                value={form.duration}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    duration: e.target.value,
                  }))
                }
              />
            </div>
            {/* 比武时间 */}
            <div className="grid gap-2">
              <Label htmlFor="date" className="text-lg font-medium">
                比武时间
              </Label>
              <Select
                value={form.date}
                onValueChange={(value: string) =>
                  setForm((prev) => ({
                    ...prev,
                    date: value,
                  }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择月份" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map(
                    (m) => (
                      <SelectItem key={m} value={`${m}月`}>
                        {m}月
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            {/* 联系人 */}
            <div className="grid gap-2">
              <Label htmlFor="contact" className="text-lg font-medium">
                联系人
              </Label>
              <Input
                id="contact"
                name="contact"
                placeholder="回车键添加联系人"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const val = (
                      e.currentTarget as HTMLInputElement
                    ).value.trim();
                    if (!val) return;
                    setForm((prev) => ({
                      ...prev,
                      contact: [...prev.contact, val],
                    }));
                    (e.currentTarget as HTMLInputElement).value = "";
                  }
                }}
              />
              {form.contact.length > 0 && (
                <div
                  className={`
                flex flex-wrap justify-start items-start gap-1
            `}
                >
                  {form.contact.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                    >
                      <h1>{item}</h1>
                      <button
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            contact: prev.contact.filter(
                              (_, idx) => idx !== index
                            ),
                          }))
                        }
                        className={`
                        absolute -top-1 -right-1 bg-red-500 text-white rounded-full
                         w-5 h-5 flex items-center justify-center text-xs opacity-0
                        group-hover:opacity-100 transition-opacity
                        `}
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* 内容 */}
            <div className="grid gap-2">
              <Label htmlFor="content" className="text-lg font-medium">
                内容
              </Label>
              <Textarea
                id="content"
                name="content"
                value={form.content}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
              />
            </div>
            {/* 比武进度 */}
            <div className="grid gap-2">
              <Label htmlFor="progress" className="text-lg font-medium">
                比武进度
              </Label>
              <Textarea
                id="progress"
                name="progress"
                value={form.progress}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    progress: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="w-[90%] flex justify-end items-center h-[200px] gap-2 ">
            <Button
              variant="outline"
              className="text-lg w-[100px]"
              onClick={() => setDataID("")}
            >
              取消
            </Button>
            <Button
              variant="default"
              className="text-lg w-[100px]"
              onClick={() => handleEditDataByID(form.id)}
            >
              完成编辑
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`
          w-full min-h-[100vh] flex flex-col justify-center items-center gap-4
        `}
        >
          <h1 className="font-bold text-2xl">请前往数据管理选择要编辑的数据</h1>
          <h1 className="font-light text-xl">-- 或者 --</h1>
          <div className="flex items-center gap-2 w-[400px]">
            <Input placeholder="请输入数据ID" className="w-[300px]" />
            <Button className="flex-1">编辑</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default BiwulianbingEditData;
