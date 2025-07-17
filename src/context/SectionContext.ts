// src/context/SectionContext.ts
import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

// 定义 Section 类型
export type Section =
  | "biwulianbing_DataManagement"
  | "rouxingtuandui_DataManagement"
  | "biwulianbing_AddData"
  | "rouxingtuandui_AddData"
  | "biwulianbing_EditData"
  | "rouxingtuandui_EditData"
  | null;

// Context 值：一个 [section, setSection] 的 tuple
export const SectionContext = createContext<
  [Section | null, Dispatch<SetStateAction<Section | null>>]
>([null, () => {}]);
