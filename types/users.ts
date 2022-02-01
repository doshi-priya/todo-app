import { Document } from "mongoose";

export interface IUsers extends Document {
  name: string;
  email: string;
  password: string;
  
}

export interface JwtPayload{
    user: {
        id : any;
      }
} 