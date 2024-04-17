import {AppContextType} from "@/types/shared";

export const initGlobalValues = {
  player: {
    id: "",
    email: "",
    name: "",
    first_name: "",
  },
  leaderboards: {
    actId: "22d10d66-4d2a-a340-6c54-408c7bd53807",
    players: [],
    totalPlayers: 15000,
    immortalStartingPage: 11,
    immortalStartingIndex: 501,
    topTierRRThreshold: 400,
    tierDetails: {
      "24": {
        rankedRatingThreshold: 0,
        startingPage: 201,
        startingIndex: 10045,
      },
      "25": {
        rankedRatingThreshold: 80,
        startingPage: 80,
        startingIndex: 3965,
      },
      "26": {
        rankedRatingThreshold: 200,
        startingPage: 11,
        startingIndex: 501,
      },
      "27": {
        rankedRatingThreshold: 400,
        startingPage: 1,
        startingIndex: 1,
      },
    },
    startIndex: 0,
    query: "",
    shard: "ap",
  },
} as AppContextType;
