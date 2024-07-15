export interface User {
  Name: string;
  Email: string;
  profile?:string
  Password: string;
  Role: string;
}

export interface RegisterResponse {
  Message: string;
}

export interface LoginReq {
  Email: string;
  Password: string;
}

export interface Payload {
  Sub: string;
  Id: number;
  Name: string;
  Role: string;
}

export interface LoginResponse {
  message: string;
  Role: string;
  payload: Payload;
}
