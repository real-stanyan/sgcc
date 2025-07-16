import { useState, useEffect } from "react";
import { Plus, Pencil, Trash } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../src/components/ui/dialog";
import { Button } from "../src/components/ui/button";
import { Label } from "../src/components/ui/label";
import { Input } from "../src/components/ui/input";
import { Textarea } from "../src/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select";
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
} from "../src/components/ui/alert-dialog";

type BiwulianbingItem = {
  id: string;
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

const NewsLine = ({ item }: { item: BiwulianbingItem }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<BiwulianbingItem>({
    id: "",
    project: "",
    content: "",
    header_office: "",
    duration: "",
    date: "",
    manager: "",
    responsibler: "",
    contact: "",
    progress: "",
  });

  const getDataByID = async (id: string): Promise<BiwulianbingItem> => {
    const res = await fetch(
      `http://localhost:3000/api/getbiwulianbingbyid/${id}`,
      { method: "GET" }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch item with id ${id}: ${res.status}`);
    }
    const item = (await res.json()) as BiwulianbingItem;
    setData(item); // ← 存入 state
    return item;
  };

  const handleDeleteByID = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/deletebiwulianbingbyid/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error();
      toast.success("删除成功!");
    } catch (err) {
      console.error(err);
      toast.error("删除失败!");
    }
  };

  const handleEditDataByID = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/editbiwulianbingbyid/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        toast.error("更新失败!");
        throw new Error(`更新失败：${res.status}`);
      }
      const updated = (await res.json()) as BiwulianbingItem;
      setData(updated); // 把最新数据存回 state
      setOpen(false);
      toast.success("更新成功!");
    } catch (err) {
      console.error(err);
      toast.error("更新失败!");
    }
  };

  return (
    <div className="flex border-white rounded-md border-2 overflow-hidden">
      <div
        className={`
        p-4 text-black w-[85%] bg-white 
    `}
      >
        <h1 className="font-semibold text-lg">
          ID:{item.id} | {item.project}
        </h1>
        <h2>
          <strong>省公司主管部门:</strong> {item.header_office}
        </h2>
        <h2>
          <strong>分管领导:</strong> {item.manager}
        </h2>
        <h2>
          <strong>项目负责人:</strong> {item.responsibler}
        </h2>
        <h2>
          <strong>联系人:</strong> {item.contact}
        </h2>
        <h2>
          <strong>比武进度:</strong> {item.progress}
        </h2>
        <h2>
          <strong>练兵时间段:</strong> {item.duration}
        </h2>
        <h2>
          <strong>练兵时间:</strong> {item.date}
        </h2>
        <h2>
          <strong>内容:</strong> {item.content}
        </h2>
      </div>
      <div className="flex-1 border-l-2 border-white flex flex-col">
        <div className="flex-1 border-l-2 border-white flex flex-col">
          {/* —— 编辑按钮 & Dialog —— */}
          <Dialog
            open={open}
            onOpenChange={(val) => {
              if (val) getDataByID(item.id);
              setOpen(val);
            }}
          >
            <DialogTrigger asChild>
              <div
                className="
          h-[50%] border-b-2 border-white
          flex flex-col justify-center items-center gap-2
          text-white font-bold cursor-pointer text-lg
          hover:bg-blue-400 transition-colors 
        "
              >
                <h1>修改</h1>
                <Pencil size={30} />
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>“赛马制”练兵比武 | 修改内容</DialogTitle>
                <DialogDescription>ID: {item.id}</DialogDescription>
              </DialogHeader>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await handleEditDataByID(item.id);
                  setOpen(false);
                }}
                className="grid gap-4"
              >
                {/* 练兵比武项目 */}
                <div className="grid gap-3">
                  <Label htmlFor="project">练兵比武项目</Label>
                  <Input
                    id="project"
                    value={data.project}
                    onChange={(e) =>
                      setData({ ...data, project: e.target.value })
                    }
                  />
                </div>
                {/* 省公司主管部门 */}
                <div className="grid gap-3">
                  <Label htmlFor="header_office">省公司主管部门</Label>
                  <Input
                    id="header_office"
                    value={data.header_office}
                    onChange={(e) =>
                      setData({ ...data, header_office: e.target.value })
                    }
                  />
                </div>
                {/* 分管领导 */}
                <div className="grid gap-3">
                  <Label htmlFor="manager">分管领导</Label>
                  <Input
                    id="manager"
                    value={data.manager}
                    onChange={(e) =>
                      setData({ ...data, manager: e.target.value })
                    }
                  />
                </div>
                {/* 项目负责人 */}
                <div className="grid gap-3">
                  <Label htmlFor="responsibler">项目负责人</Label>
                  <Input
                    id="responsibler"
                    value={data.responsibler}
                    onChange={(e) =>
                      setData({ ...data, responsibler: e.target.value })
                    }
                  />
                </div>
                {/* 联系人 */}
                <div className="grid gap-3">
                  <Label htmlFor="contact">联系人</Label>
                  <Input
                    id="contact"
                    value={data.contact}
                    onChange={(e) =>
                      setData({ ...data, contact: e.target.value })
                    }
                  />
                </div>
                {/* 比武进度 */}
                <div className="grid gap-3">
                  <Label htmlFor="progress">比武进度</Label>
                  <Input
                    id="progress"
                    value={data.progress}
                    onChange={(e) =>
                      setData({ ...data, progress: e.target.value })
                    }
                  />
                </div>
                {/* 练兵时间段 */}
                <div className="grid gap-3">
                  <Label htmlFor="duration">练兵时间段</Label>
                  <Input
                    id="duration"
                    value={data.duration}
                    onChange={(e) =>
                      setData({ ...data, duration: e.target.value })
                    }
                  />
                </div>
                {/* 比武时间 */}
                <div className="grid gap-3">
                  <Label htmlFor="date">比武时间</Label>
                  <Select
                    value={data.date}
                    onValueChange={(v) => setData({ ...data, date: v })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="选择月份" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}月`}>
                          {i + 1}月
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* 内容 */}
                <div className="grid gap-3">
                  <Label htmlFor="content">内容</Label>
                  <Textarea
                    id="content"
                    value={data.content}
                    onChange={(e) =>
                      setData({ ...data, content: e.target.value })
                    }
                  />
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    取消
                  </Button>
                  <Button type="submit">修改</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* —— 删除按钮 & AlertDialog —— */}
          <div className="h-[50%]">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div
                  className="
            h-full flex flex-col justify-center items-center gap-2
            text-white font-bold cursor-pointer text-lg
            hover:bg-red-400 transition-colors
          "
                >
                  <h1>删除</h1>
                  <Trash size={30} />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>确认删除该条记录？</AlertDialogTitle>
                  <AlertDialogDescription>
                    删除操作不可撤销，确认后该数据将被永久移除。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDeleteByID(item.id)}>
                    确认删除
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

const BiwulianbingEdit = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<BiwulianbingItem[]>([]);
  const [news, setNews] = useState<BiwulianbingItem>({
    id: uuidv4(),
    project: "",
    content: "",
    header_office: "",
    duration: "",
    date: "",
    manager: "",
    responsibler: "",
    contact: "",
    progress: "",
  });

  const handleChange =
    (field: keyof Omit<BiwulianbingItem, "id">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNews({ ...news, [field]: e.target.value });
    };

  useEffect(() => {
    fetch("http://localhost:3000/api/returnAllBiwulianbing")
      .then((res) => res.json())
      .then((arr: BiwulianbingItem[]) => setData(arr))
      .catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/addnewbiwulianbing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      });
      if (!res.ok) throw new Error();
      const saved = (await res.json()) as BiwulianbingItem;
      setData([saved, ...data]);
      setNews({
        id: uuidv4(),
        project: "",
        content: "",
        header_office: "",
        duration: "",
        date: "",
        manager: "",
        responsibler: "",
        contact: "",
        progress: "",
      });
      setOpen(false);
      toast.success("发布成功!");
    } catch (err) {
      console.error(err);
      toast.error("发布失败!");
    }
  };

  return (
    <div className="w-full bg-[#12a1a0] flex flex-col justify-center items-center">
      <div className="w-[50%] flex justify-between items-end">
        <h1 className="text-3xl font-bold mt-8 text-white text-center h-full">
          “赛马制”练兵比武 | 内容管理
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <form>
            <DialogTrigger asChild>
              <Button
                onClick={() => setOpen(true)}
                className={`
            flex justify-center items-center h-full border-2 px-4 py-2 rounded-md
            text-white font-bold cursor-pointer hover:bg-white hover:text-black
            duration-200 ease-in-out 
            `}
              >
                <h1>添加信息</h1>
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>“赛马制”练兵比武 | 添加新内容</DialogTitle>
                <DialogDescription>输入数据，添加新内容</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                {/* 练兵比武项目 */}
                <div className="grid gap-3">
                  <Label htmlFor="project">练兵比武项目</Label>
                  <Input
                    id="project"
                    name="project"
                    value={news.project}
                    onChange={handleChange("project")}
                  />
                </div>
                {/* 省公司主管部门 */}
                <div className="grid gap-3">
                  <Label htmlFor="header_office">省公司主管部门</Label>
                  <Input
                    id="header_office"
                    name="header_office"
                    value={news.header_office}
                    onChange={handleChange("header_office")}
                  />
                </div>
                {/* 分管领导 */}
                <div className="grid gap-3">
                  <Label htmlFor="manager">分管领导</Label>
                  <Input
                    id="manager"
                    name="manager"
                    value={news.manager}
                    onChange={handleChange("manager")}
                  />
                </div>
                {/* 项目负责人 */}
                <div className="grid gap-3">
                  <Label htmlFor="responsibler">项目负责人</Label>
                  <Input
                    id="responsibler"
                    name="responsibler"
                    value={news.responsibler}
                    onChange={handleChange("responsibler")}
                  />
                </div>
                {/* 联系人 */}
                <div className="grid gap-3">
                  <Label htmlFor="contact">联系人</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={news.contact}
                    onChange={handleChange("contact")}
                  />
                </div>
                {/* 比武进度 */}
                <div className="grid gap-3">
                  <Label htmlFor="progress">比武进度</Label>
                  <Input
                    id="progress"
                    name="progress"
                    value={news.progress}
                    onChange={handleChange("progress")}
                  />
                </div>
                {/* 练兵时间段 */}
                <div className="grid gap-3">
                  <Label htmlFor="duration">练兵时间段</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={news.duration}
                    onChange={handleChange("duration")}
                  />
                </div>
                {/* 比武时间 */}
                <div className="grid gap-3">
                  <Label htmlFor="date">比武时间</Label>
                  <Select
                    value={news.date}
                    onValueChange={(v) => setNews({ ...news, date: v })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="选择月份" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={`${i + 1}月`}>
                          {i + 1}月
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* 内容 */}
                <div className="grid gap-3">
                  <Label htmlFor="content">内容</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={news.content}
                    onChange={handleChange("content")}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">取消</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={handleSubmit}>发布</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div className="w-[90%] max-w-4xl rounded p-6 flex flex-col gap-4">
        {data.map((item) => (
          <NewsLine key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BiwulianbingEdit;
