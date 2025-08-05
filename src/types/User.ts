export type UserOrNull = User | null;

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone:string;
  address: string;
  gender: string;

}

export interface LoggedInUser extends Tokens {
  agentInfo: User;
}

export interface TokensWithId extends Tokens {
  id: number;
}
