import { useContext } from "react";
import { SectionContext } from "../src/context/SectionContext";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../src/components/ui/accordion";
// 比武练兵
import BiwulianbingManagement from "./Biwulianbing/BiwulianbingManagement";
import BiwulianbingAddData from "./Biwulianbing/BiwulianbingAddData";
import BiwulianbingEditData from "./Biwulianbing/BiwulianbingEditData";
// 柔性团队
import RouxingtuanduiManagement from "./Rouxingtuandui/RouxingtuanduiManagement";
import RouxingtuanduiAddData from "./Rouxingtuandui/RouxingtuanduiAddData";
import RouxingtuanduiEditData from "./Rouxingtuandui/RouxingtuanduiEditData";

import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 20 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

const Dashboard: React.FC = () => {
  const [section, setSection] = useContext(SectionContext);

  return (
    <div className="flex w-full h-[100vh] overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-[20%] bg-[#12a1a0] h-full flex flex-col items-center border-white">
        <img
          src="/images/logo.webp"
          alt="logo"
          className="w-[50%] h-auto py-8"
        />
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {/* “赛马制”练兵比武 */}
          <AccordionItem value="biwulianbing">
            <AccordionTrigger className="text-white px-4 text-center">
              <h1 className="font-bold text-xl">“赛马制”练兵比武</h1>
            </AccordionTrigger>
            {/* “赛马制”练兵比武 | 数据管理 */}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "biwulianbing_DataManagement"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center  text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("biwulianbing_DataManagement")}
              >
                数据管理
              </div>
            </AccordionContent>
            {/* “赛马制”练兵比武 | 添加数据 */}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "biwulianbing_AddData"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center  text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("biwulianbing_AddData")}
              >
                添加数据
              </div>
            </AccordionContent>
            {/* “赛马制”练兵比武 | 编辑数据 */}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "biwulianbing_EditData"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center  text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("biwulianbing_EditData")}
              >
                编辑数据
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* 柔性团队 */}
          <AccordionItem value="rouxingtuandui">
            <AccordionTrigger className="text-white px-4 text-center">
              <h1 className="font-bold text-xl">柔性团队</h1>
            </AccordionTrigger>
            {/* 柔性团队 | 数据管理*/}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "rouxingtuandui_DataManagement"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center  text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("rouxingtuandui_DataManagement")}
              >
                数据管理
              </div>
            </AccordionContent>
            {/* 柔性团队 | 添加数据 */}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "rouxingtuandui_AddData"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center  text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("rouxingtuandui_AddData")}
              >
                添加数据
              </div>
            </AccordionContent>
            {/* 柔性团队 | 编辑数据 */}
            <AccordionContent className="flex flex-col gap-4 items-center">
              <div
                className={`
                  ${
                    section === "rouxingtuandui_EditData"
                      ? "bg-white text-[#12a1a0]"
                      : "text-white border-white/70 hover:border-white hover:bg-white hover:text-[#12a1a0]"
                  }
                  text-center text-xl cursor-pointer rounded-lg font-bold w-[70%] py-1 
                  border-2 
                  `}
                onClick={() => setSection("rouxingtuandui_EditData")}
              >
                编辑数据
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Main content */}
      <div className="w-[80%] overflow-auto relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          {/* 比武练兵 */}
          {section === "biwulianbing_DataManagement" && (
            <motion.div
              key="biwulianbing_DataManagement"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <BiwulianbingManagement />
            </motion.div>
          )}
          {section === "biwulianbing_AddData" && (
            <motion.div
              key="biwulianbing_AddData"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <BiwulianbingAddData />
            </motion.div>
          )}
          {section === "biwulianbing_EditData" && (
            <motion.div
              key="biwulianbing_EditData"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <BiwulianbingEditData />
            </motion.div>
          )}
          {/* 柔性团队 */}
          {section === "rouxingtuandui_DataManagement" && (
            <motion.div
              key="rouxingtuandui_DataManagement"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <RouxingtuanduiManagement />
            </motion.div>
          )}
          {section === "rouxingtuandui_AddData" && (
            <motion.div
              key="rouxingtuandui_AddData"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <RouxingtuanduiAddData />
            </motion.div>
          )}
          {section === "rouxingtuandui_EditData" && (
            <motion.div
              key="rouxingtuandui_EditData"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <RouxingtuanduiEditData />
            </motion.div>
          )}

          {section === null && (
            <motion.div
              key="placeholder"
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
            >
              <div className="text-gray-500 text-center mt-20">
                请选择左侧菜单以查看内容
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
