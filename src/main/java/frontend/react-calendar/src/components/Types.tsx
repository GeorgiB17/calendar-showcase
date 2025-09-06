export type User = {
  id?: number;
  name: string;
  username: string;
  email: string;
  profilePic?: string;
};

export type Event = {
  creatorID: number;
  participants: number[];
  id?: number;
  title: string;
  description: string;
  time: string;
  duration: string;
  location: string;
};
