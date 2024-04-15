export type AppContextType = {
  player: {
    id: string;
    email: string;
    name: string;
    first_name: string;
  };
};

export type ContextType = {
  globalState: AppContextType;
  setGlobalState: (data: AppContextType) => void;
};
