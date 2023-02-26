export interface User {
  username: string;
  token: string;
  id: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayloadStructure {
  username: string;
  id: string;
}
