import {RankedLeaderboardResponse} from "./leaderboards";

export type AppContextType = {
  player: {
    id: string;
    email: string;
    name: string;
    first_name: string;
  };
  leaderboards: RankedLeaderboardResponse;
};

export type ContextType = {
  globalState: AppContextType;
  setGlobalState: (data: AppContextType) => void;
};
