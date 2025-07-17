import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type RouxingtuanduiEditID = string;

export const RouxingtuanduiEditIDContext = createContext<
  [RouxingtuanduiEditID, Dispatch<SetStateAction<RouxingtuanduiEditID>>]
>(["", () => {}]);
