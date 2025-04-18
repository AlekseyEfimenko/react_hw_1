export interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number
}

export interface Friends {
  friends: Friend[];
}