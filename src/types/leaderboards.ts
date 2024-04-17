export type RankedLeaderboardResponse = {
  actId: string;
  players: RankedLeaderboardPlayers[];
  totalPlayers: number;
  immortalStartingPage: number;
  immortalStartingIndex: number;
  topTierRRThreshold: number;
  tierDetails: {[key: string]: TierDetail};
  startIndex: number;
  query: string;
  shard: string;
};

export type RankedLeaderboardPlayers = {
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
  competitiveTier: number;
};

type TierDetail = {
  rankedRatingThreshold: number;
  startingPage: number;
  startingIndex: number;
};
