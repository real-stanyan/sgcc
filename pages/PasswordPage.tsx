import { useState } from "react";
import { Input } from "../src/components/ui/input";
import { toast } from "sonner";

export default function PasswordPage() {
  const [pwd, setPwd] = useState("");

  const handleSubmit = () => {
    if (pwd === "123456") {
      sessionStorage.setItem("auth_ok", "123456");
      toast.success("登陆成果!");
      window.location.href = "/dashboard";
    } else {
      toast.error("密码错误!");
    }
  };

  return (
    <div
      className={`
        w-[100vw] h-[100vh] flex justify-center items-center bg-[#12a1a0]
        `}
    >
      <div
        className={`
            w-[400px] h-auto flex flex-col justify-center items-center gap-8
        `}
      >
        <img src="/images/logo.webp" alt="logo" className="w-[200px]" />
        <Input
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          className={`
            border border-white text-white placeholder:text-white/60 text-center
            w-[400px] h-[50px] text-3xl outline-none focus:outline-none
            `}
          placeholder="请输入密码..."
        />
        <div
          onClick={handleSubmit}
          className={`
            border-2 px-4 py-2 rounded-md w-[150px] text-center text-white
            hover:bg-white hover:text-black duration-200 transition-colors
            ease-in-out cursor-pointer text-xl font-semibold
          `}
        >
          进入
        </div>
      </div>
    </div>
  );
}
