import { ITodo } from "./../types/todo";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
    Owner: {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }

  },

  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema);