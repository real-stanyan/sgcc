import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  //   SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../src/components/ui/sheet";

const Header = () => {
  const path = useLocation().pathname.split("/")[1];
  const [link, setLink] = useState(
    path === "" ? "首页" : path === "team" ? "柔性团队" : "光荣榜"
  );

  console.log(path);

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] z-50">
      <div
        className={`
            bg-[#12a1a0] w-[180px] lg:w-[250px] h-full flex justify-center items-center
            rounded-br-[40px] absolute top-0 left-0 z-50 pr-4
            `}
      >
        <img src="/images/logo.webp" alt="logo" className="w-auto h-[50%]" />
      </div>
      {/* PC-Links */}
      <div
        className={`
            absolute left-0 w-full h-full z-40 pl-[300px] bg-white justify-around 
            items-center hidden lg:flex
            `}
      >
        {[
          "首页",
          "“赛马制”练兵比武",
          "柔性团队",
          "一线核心标杆班组",
          "光荣榜",
        ].map((text, i) => (
          <Link
            key={i}
            to={i === 2 ? "/team" : "/"}
            onClick={() => setLink(text)}
          >
            <h1
              className={`
                relative inline-block
              ${link === text ? "text-[#12a1a0]" : "text-black"}
                `}
            >
              {text}
              <span
                className={`
              absolute -bottom-1 left-0 w-full h-[3px] bg-[#12a1a0] translate-y-full
              ${link === text ? "block" : "hidden"}
              `}
              ></span>
            </h1>
          </Link>
        ))}
      </div>
      {/* PE-Links */}
      <div
        className={`
        absolute lg:hidden z-50 h-full top-0 right-2
        `}
      >
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-center items-center h-full">
              <img
                src="/images/header_menu_pe.webp"
                alt="header_menu_pe"
                className={`
                    w-auto h-[50%]
                `}
              />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <SheetHeader>
              <SheetTitle className="font-bold text-2xl text-center">
                - 导航栏 -
              </SheetTitle>
              {/* <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription> */}
            </SheetHeader>
            {[
              "首页",
              "“赛马制”练兵比武",
              "柔性团队",
              "一线核心标杆班组",
              "光荣榜",
            ].map((t, i) => (
              <Link
                key={i}
                to={i === 2 ? "/team" : "/"}
                onClick={() => setLink(t)}
                className={`
                    ${
                      link === t
                        ? "bg-[#12a1a0] text-white"
                        : "bg-white text-black"
                    } text-center py-4 rounded-md
                     font-semibold text-lg
                    `}
              >
                <h1>{t}</h1>
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
