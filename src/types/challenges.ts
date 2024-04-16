export type ChallengeType = {
  title: string;
  start_date: number;
  end_date: number;
  joined: boolean;
  started: boolean;
  eligable: boolean;
  total_players: number;
  image: string;
  current_place: number;
  avatars: string[];
};

export type ChallengeLeaderType = {
  player: string;
  tag: string;
  avatar: string;
  kills: number;
  deaths: number;
  rank: number;
};
