import { IUsers } from "../types/users";
import { model, Schema } from "mongoose";

const usersSchema: Schema = new Schema(
  {
    username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
     todos: [{
       type: Schema.Types.ObjectId,
       ref: "Todo"
     }]
    
  },
  { timestamps: true }
    );

export default model<IUsers>("Users", usersSchema);