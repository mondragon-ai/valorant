"use client";
import {createContext, useContext} from "react";
import {initGlobalValues} from "../data/initial";
import {AppContextType, ContextType} from "@/types/shared";

const contextDefaultValues: ContextType = {
  globalState: initGlobalValues,
  setGlobalState: (data: AppContextType) => {},
};

export const Context = createContext<ContextType>(contextDefaultValues);

export function useGlobalContext() {
  return useContext(Context);
}
