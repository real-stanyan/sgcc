import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type BiwulianbingEditID = string;

export const BiwulianbingEditIDContext = createContext<
  [BiwulianbingEditID, Dispatch<SetStateAction<BiwulianbingEditID>>]
>(["", () => {}]);
