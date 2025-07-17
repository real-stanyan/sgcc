import { useState, useRef, useContext } from "react";
import { SectionContext } from "../../src/context/SectionContext";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";
import { Label } from "../../src/components/ui/label";
import { Input } from "../../src/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Button } from "../../src/components/ui/button";

type Rouxingtuandui = {
  id: string;
  manager: string;
  team_leader: string;
  area: string;
  team_sub_leader: string[];
  research_titles: string[];
  projects: string[];
  team_heros: string[];
  team_members: string[];
  contact: { name: string; number: string };
  CreatedAt: string;
};

const RouxingtuanduiAddData = () => {
  const [, setSection] = useContext(SectionContext);
  const teamSubLeaderInputRef = useRef<HTMLInputElement>(null);
  const researchTitleInputRef = useRef<HTMLInputElement>(null);
  const projectsInputRef = useRef<HTMLInputElement>(null);
  const teamMembersInputRef = useRef<HTMLInputElement>(null);
  const teamHerosInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<Rouxingtuandui>({
    id: uuidv4(),
    manager: "",
    team_leader: "",
    area: "",
    team_sub_leader: [],
    research_titles: [],
    projects: [],
    team_heros: [],
    team_members: [],
    contact: { name: "", number: "" },
    CreatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
  });

  // 内容检查
  const submitPreCheck = () => {
    // 检查挂钩领导
    if (!form.manager) {
      toast.error("请输入挂钩领导!", {
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
      return false;
    }
    // 检查组长
    if (!form.team_leader) {
      toast.error("请输入组长!", {
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
      return false;
    }
    // 检查专业领域
    if (!form.area) {
      toast.error("请输入专业领域!", {
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
      return false;
    }
    // 检查联系人姓名
    if (!form.contact.name) {
      toast.error("请输入联系人姓名!", {
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
      return false;
    }
    // 检查联系人电话
    if (!form.contact.number) {
      toast.error("请输入联系人电话!", {
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
      return false;
    }
    // 检查副组长
    if (form.team_sub_leader.length === 0) {
      toast.error("请输入副组长!", {
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
      return false;
    }
    // 检查研究方向
    if (form.research_titles.length === 0) {
      toast.error("请输入研究方向!", {
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
      return false;
    }
    // 检查在研项目
    if (form.projects.length === 0) {
      toast.error("请输入在研项目!", {
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
      return false;
    }
    // 检查团队成员
    if (form.team_members.length === 0) {
      toast.error("请输入团队成员!", {
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
      return false;
    }
    // 检查团队骨干
    if (form.team_heros.length === 0) {
      toast.error("请输入团队骨干!", {
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
      return false;
    }
    return true;
  };

  // 发布数据
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitPreCheck()) return;

    try {
      const res = await fetch(
        "http://localhost:3000/api/addnewrouxingtuandui",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }

      // 清空表单
      setForm({
        id: uuidv4(),
        manager: "",
        team_leader: "",
        area: "",
        team_sub_leader: [],
        research_titles: [],
        projects: [],
        team_heros: [],
        team_members: [],
        contact: { name: "", number: "" },
        CreatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
      toast.success("发布成功!", {
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
      setSection("rouxingtuandui_DataManagement");
    } catch (err) {
      console.error("添加失败", err);
      toast.error("发布失败!", {
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
    <div
      className={`
    w-full h-[100vh] bg-gray-50
    `}
    >
      {/* 标题 */}
      <h1 className="font-semibold text-2xl text-center pt-8 pb-16">
        柔性团队 | 添加数据
      </h1>
      {/* 表格 */}
      <div
        className={`
            w-[90%] mx-auto grid grid-cols-2 gap-10 px-4
        `}
      >
        {/* 挂钩领导 */}
        <div className="grid gap-2">
          <Label htmlFor="manager" className="text-lg font-medium">
            挂钩领导
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
        {/* 组长 */}
        <div className="grid gap-2">
          <Label htmlFor="team_leader" className="text-lg font-medium">
            组长
          </Label>
          <Input
            id="team_leader"
            name="team_leader"
            value={form.team_leader}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                team_leader: e.target.value,
              }))
            }
          />
        </div>
        {/* 专业领域 */}
        <div className="grid gap-2">
          <Label htmlFor="area" className="text-lg font-medium">
            专业领域
          </Label>
          <Input
            id="area"
            name="area"
            value={form.area}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                area: e.target.value,
              }))
            }
          />
        </div>
        {/* 联系人姓名 */}
        <div className="grid gap-2">
          <Label htmlFor="contact_name" className="text-lg font-medium">
            联系人姓名
          </Label>
          <Input
            id="contact_name"
            name="contact_name"
            value={form.contact.name}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                contact: {
                  ...prev.contact,
                  name: e.target.value,
                },
              }))
            }
          />
        </div>
        {/* 联系人电话 */}
        <div className="grid gap-2">
          <Label htmlFor="contact_number" className="text-lg font-medium">
            联系人电话
          </Label>
          <Input
            id="contact_number"
            name="contact_number"
            value={form.contact.number}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                contact: {
                  ...prev.contact,
                  number: e.target.value,
                },
              }))
            }
          />
        </div>
        {/* 副组长 */}
        <div className="grid gap-2">
          <Label htmlFor="team_sub_leader" className="text-lg font-medium">
            副组长
          </Label>
          <Input
            id="team_sub_leader"
            name="team_sub_leader"
            ref={teamSubLeaderInputRef}
            placeholder="回车键添加副组长"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const val = (e.currentTarget as HTMLInputElement).value.trim();
                if (!val) return;
                setForm((prev) => ({
                  ...prev,
                  team_sub_leader: [...prev.team_sub_leader, val],
                }));
                (e.currentTarget as HTMLInputElement).value = "";
              }
            }}
          />
          {form.team_sub_leader.length > 0 ? (
            <div
              className={`
                flex flex-wrap justify-start items-center gap-1
            `}
            >
              {form.team_sub_leader.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                >
                  <h1>{item}</h1>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        team_sub_leader: prev.team_sub_leader.filter(
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
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamSubLeaderInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          ) : (
            <div
              className={`
                flex justify-center items-center w-full border border-dashed text-center py-3 text-md text-gray-800 rounded gap-2
              `}
            >
              <h1>无副组长</h1>
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamSubLeaderInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
        {/* 研究方向 */}
        <div className="grid gap-2">
          <Label htmlFor="research_titles" className="text-lg font-medium">
            研究方向
          </Label>
          <Input
            id="research_titles"
            name="research_titles"
            ref={researchTitleInputRef}
            placeholder="回车键添加研究方向"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const val = (e.currentTarget as HTMLInputElement).value.trim();
                if (!val) return;
                setForm((prev) => ({
                  ...prev,
                  research_titles: [...prev.research_titles, val],
                }));
                (e.currentTarget as HTMLInputElement).value = "";
              }
            }}
          />
          {form.research_titles.length > 0 ? (
            <div
              className={`
                flex flex-wrap justify-start items-center gap-1
            `}
            >
              {form.research_titles.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                >
                  <h1>{item}</h1>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        research_titles: prev.research_titles.filter(
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
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => researchTitleInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          ) : (
            <div
              className={`
                flex justify-center items-center w-full border border-dashed text-center py-3 text-md text-gray-800 rounded gap-2
              `}
            >
              <h1>无研究方向</h1>
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => researchTitleInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
        {/* 在研项目 */}
        <div className="grid gap-2">
          <Label htmlFor="projects" className="text-lg font-medium">
            在研项目
          </Label>
          <Input
            id="projects"
            name="projects"
            ref={projectsInputRef}
            placeholder="回车键添加在研项目"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const val = (e.currentTarget as HTMLInputElement).value.trim();
                if (!val) return;
                setForm((prev) => ({
                  ...prev,
                  projects: [...prev.projects, val],
                }));
                (e.currentTarget as HTMLInputElement).value = "";
              }
            }}
          />
          {form.projects.length > 0 ? (
            <div
              className={`
                flex flex-wrap justify-start items-center gap-1
            `}
            >
              {form.projects.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                >
                  <h1>{item}</h1>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        projects: prev.projects.filter(
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
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => projectsInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          ) : (
            <div
              className={`
                flex justify-center items-center w-full border border-dashed text-center py-3 text-md text-gray-800 rounded gap-2
              `}
            >
              <h1>无在研项目</h1>
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => projectsInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
        {/* 团队成员 */}
        <div className="grid gap-2">
          <Label htmlFor="team_members" className="text-lg font-medium">
            团队成员
          </Label>
          <Input
            id="team_members"
            name="team_members"
            ref={teamMembersInputRef}
            placeholder="回车键添加团队成员"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const val = (e.currentTarget as HTMLInputElement).value.trim();
                if (!val) return;
                setForm((prev) => ({
                  ...prev,
                  team_members: [...prev.team_members, val],
                }));
                (e.currentTarget as HTMLInputElement).value = "";
              }
            }}
          />
          {form.team_members.length > 0 ? (
            <div
              className={`
                flex flex-wrap justify-start items-center gap-1
            `}
            >
              {form.team_members.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                >
                  <h1>{item}</h1>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        team_members: prev.team_members.filter(
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
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamMembersInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          ) : (
            <div
              className={`
                flex justify-center items-center w-full border border-dashed text-center py-3 text-md text-gray-800 rounded gap-2
              `}
            >
              <h1>无团队成员</h1>
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamMembersInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
        {/* 团队骨干 */}
        <div className="grid gap-2">
          <Label htmlFor="team_heros" className="text-lg font-medium">
            团队骨干
          </Label>
          <Input
            id="team_heros"
            name="team_memteam_herosbers"
            ref={teamHerosInputRef}
            placeholder="回车键添加团队骨干"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const val = (e.currentTarget as HTMLInputElement).value.trim();
                if (!val) return;
                setForm((prev) => ({
                  ...prev,
                  team_heros: [...prev.team_heros, val],
                }));
                (e.currentTarget as HTMLInputElement).value = "";
              }
            }}
          />
          {form.team_heros.length > 0 ? (
            <div
              className={`
                flex flex-wrap justify-start items-center gap-1
            `}
            >
              {form.team_heros.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-500 text-gray-50 rounded-lg px-2 py-1 font-medium group cursor-pointer"
                >
                  <h1>{item}</h1>
                  <button
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        team_heros: prev.team_heros.filter(
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
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamHerosInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          ) : (
            <div
              className={`
                flex justify-center items-center w-full border border-dashed text-center py-3 text-md text-gray-800 rounded gap-2
              `}
            >
              <h1>无团队骨干</h1>
              <div
                className={`
                  p-1 border-2 rounded-[30px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer 
                  bg-gray-50 group hover:bg-black/60
                `}
                onClick={() => teamHerosInputRef.current?.focus()}
              >
                <Plus size={20} className="text-black group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[90%] flex justify-end items-center h-[200px] gap-2 ">
        <Button
          variant="outline"
          className="text-lg w-[100px]"
          onClick={() =>
            setForm({
              id: uuidv4(),
              manager: "",
              team_leader: "",
              area: "",
              team_sub_leader: [],
              research_titles: [],
              projects: [],
              team_heros: [],
              team_members: [],
              contact: { name: "", number: "" },
              CreatedAt: new Date()
                .toISOString()
                .slice(0, 19)
                .replace("T", " "),
            })
          }
        >
          清空
        </Button>
        <Button
          variant="default"
          className="text-lg w-[100px]"
          onClick={handleSubmit}
        >
          发布
        </Button>
      </div>
    </div>
  );
};

export default RouxingtuanduiAddData;
