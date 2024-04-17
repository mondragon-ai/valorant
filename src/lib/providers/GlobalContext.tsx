"use client";
import {useEffect, useState} from "react";
import {initGlobalValues} from "../data/initial";
import {Context} from "../context/appSession";
import {getItem, saveItem} from "../context/sessions";
import {AppContextType, ContextType} from "@/types/shared";

export function ContextProvider({children}: {children: React.ReactNode}) {
  const [state, setState] = useState(initGlobalValues);

  useEffect(() => {
    const sessionState = (getItem("player") as AppContextType) || state;

    setState({
      ...sessionState,
    });
  }, []);

  const setGlobalState = (data: AppContextType) => {
    const sessionState = (getItem("player") as AppContextType) || state;

    setState({
      ...sessionState,
      ...data,
    });
    saveItem("player", {
      ...sessionState,
      ...data,
    });
  };

  const globalState = (getItem("player") as AppContextType) || state;

  return (
    <Context.Provider value={{globalState: globalState, setGlobalState}}>
      {children}
    </Context.Provider>
  );
}
