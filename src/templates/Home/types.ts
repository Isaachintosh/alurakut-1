export type Community = {
  id: string;
  title: string;
  imageUrl: string;
};

export type Follower = {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
};

export type Message = {
  id: string;
  message: string;
  creatorSlug: string;
};
