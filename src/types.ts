export interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number
}

export interface Friends {
  friends: Friend[];
}

export interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface Transactions {
  transactions: Transaction[];
}