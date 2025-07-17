import { useState, useContext, useEffect } from "react";
import { RouxingtuanduiEditIDContext } from "../../src/context/RouxingtuanduiEditIDContext";
import { SectionContext } from "../../src/context/SectionContext";
import { Label } from "../../src/components/ui/label";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

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

const RouxingtuanduiEditData = () => {
  const [, setSection] = useContext(SectionContext);
  const [dataID, setDataID] = useContext(RouxingtuanduiEditIDContext);
  const [form, setForm] = useState<Rouxingtuandui>({
    id: "",
    manager: "",
    team_leader: "",
    area: "",
    team_sub_leader: [],
    research_titles: [],
    projects: [],
    team_heros: [],
    contact: { name: "", number: "" },
    team_members: [],
    CreatedAt: "",
  });

  useEffect(() => {
    if (!dataID) return;
    fetch(`http://localhost:3000/api/getrouxingtuanduibyid/${dataID}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json() as Promise<Rouxingtuandui>;
      })
      .then((data) => setForm(data))
      .catch((err) => console.error("Fetch failed", err));
  }, [dataID]);

  const handleEditDataByID = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/editrouxingtuanduibyid/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const updated: Rouxingtuandui = await res.json();
      setForm(updated);
      toast.success("编辑成功!", { icon: "✅" });
      setSection("rouxingtuandui_DataManagement");
    } catch (err) {
      console.error("编辑失败", err);
      toast.error("编辑失败!", { icon: "⚠️" });
    }
  };

  const renderTagInput = (
    label: string,
    field: keyof Rouxingtuandui,
    placeholder: string
  ) => (
    <div className="grid gap-2">
      <Label htmlFor={field} className="text-lg font-medium">
        {label}
      </Label>
      <Input
        id={field}
        name={field}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          const val = (e.currentTarget as HTMLInputElement).value.trim();
          if (!val) return;
          setForm((prev) => ({
            ...prev,
            [field]: [...(prev[field] as string[]), val],
          }));
          (e.currentTarget as HTMLInputElement).value = "";
        }}
      />
      {(form[field] as string[]).length > 0 && (
        <div className="flex flex-wrap gap-1">
          {(form[field] as string[]).map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 group cursor-pointer"
            >
              <h1>{item}</h1>
              <button
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    [field]: (prev[field] as string[]).filter(
                      (_, i) => i !== idx
                    ),
                  }))
                }
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return form.id && dataID ? (
    <div className="w-full h-[100vh] bg-gray-50">
      <div className="text-center pt-8 pb-16">
        <h1 className="font-semibold text-2xl">柔性团队 | 编辑数据</h1>
        <h3 className="text-gray-500">ID: {form.id}</h3>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-10 px-4">
        <div className="grid gap-2">
          <Label htmlFor="manager" className="text-lg font-medium">
            主管
          </Label>
          <Input
            id="manager"
            name="manager"
            value={form.manager}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, manager: e.target.value }))
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="team_leader" className="text-lg font-medium">
            组长
          </Label>
          <Input
            id="team_leader"
            name="team_leader"
            value={form.team_leader}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, team_leader: e.target.value }))
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="area" className="text-lg font-medium">
            区域
          </Label>
          <Input
            id="area"
            name="area"
            value={form.area}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, area: e.target.value }))
            }
          />
        </div>
        {renderTagInput("副组长", "team_sub_leader", "回车键添加副组长")}
        {renderTagInput("研究课题", "research_titles", "回车键添加研究课题")}
        {renderTagInput("项目", "projects", "回车键添加项目")}
        {renderTagInput("团队骨干", "team_heros", "回车键添加团队骨干")}
        <div className="grid gap-2">
          <Label htmlFor="contact_name" className="text-lg font-medium">
            联系人姓名
          </Label>
          <Input
            id="contact_name"
            value={form.contact.name}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                contact: { ...prev.contact, name: e.target.value },
              }))
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact_number" className="text-lg font-medium">
            联系人电话
          </Label>
          <Input
            id="contact_number"
            value={form.contact.number}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                contact: { ...prev.contact, number: e.target.value },
              }))
            }
          />
        </div>
        {renderTagInput("成员", "team_members", "回车键添加成员")}
      </div>
      <div className="w-[90%] flex justify-end items-center h-[200px] gap-2">
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
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-2xl">请前往数据管理选择要编辑的数据</h1>
      <h1 className="font-light text-xl">-- 或者 --</h1>
      <div className="flex items-center gap-2 w-[400px]">
        <Input placeholder="请输入数据ID" className="w-[300px]" />
        <Button className="flex-1">编辑</Button>
      </div>
    </div>
  );
};

export default RouxingtuanduiEditData;
