import { Document } from "mongoose";
import { ITodo } from "./todo";

export interface IUsers extends Document {
  username: string;
  email: string;
  password: string;
 // todos: ITodo;
  
}

export interface JwtPayload{
    user: {
        id : any;
      }
} 