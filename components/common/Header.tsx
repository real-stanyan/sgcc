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

const Links = [
  { name: "首页", icon: "/icons/home_icon.webp", url: "/" },
  {
    name: "“赛马制”练兵比武",
    icon: "/icons/biwulianbing_icon.webp",
    url: "/biwulianbing",
  },
  { name: "柔性团队", icon: "/icons/team_icon.webp", url: "/team" },
  {
    name: "一线核心标杆班组",
    icon: "/icons/group_icon.webp",
    url: "/group",
  },
];

const Header = () => {
  const path = useLocation().pathname.split("/")[1];
  const [selectedLink, setSelectedLink] = useState(
    path === ""
      ? "首页"
      : path === "biwulianbing"
      ? "“赛马制”练兵比武"
      : path === "team"
      ? "柔性团队"
      : path === "group"
      ? "一线核心标杆班组"
      : ""
  );

  console.log(path);

  return (
    <div
      className={`
       w-full h-[80px] z-50 relative
      `}
    >
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
      relative left-0 w-full h-full z-40 pl-[300px] hidden lg:flex
      bg-white
      `}
      >
        {/* links layer at full opacity */}
        <div className="relative z-10 flex w-full h-full justify-around items-center">
          {Links.map((link, i) => (
            <Link
              key={i}
              to={link.url}
              onClick={() => setSelectedLink(link.name)}
              className={`
                   flex-1 text-center h-full flex justify-center
                  items-center gap-2 ${
                    selectedLink === link.name
                      ? "bg-[#12a1a0] text-white"
                      : "text-black hover:bg-[#12a1a0]/70"
                  }
                      duration-200 transition-colors ease-in-out
                `}
            >
              <img
                src={link.icon}
                className={`
              w-[9%] h-auto ${selectedLink === link.name ? "invert" : ""}
              `}
              />
              <h1
                className={`
              relative inline-block
            `}
              >
                {link.name}
              </h1>
            </Link>
          ))}
        </div>
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
            {Links.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                onClick={() => setSelectedLink(link.name)}
                className={`
                  ${
                    selectedLink === link.name
                      ? "bg-[#12a1a0] text-white"
                      : "bg-white text-black"
                  } text-center py-4 rounded-md gap-2
                   font-semibold text-lg flex justify-center items-center
                  `}
              >
                <img
                  src={link.icon}
                  className={`
              w-[7%] h-auto ${selectedLink === link.name ? "invert" : ""}
              `}
                />
                <h1>{link.name}</h1>
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
