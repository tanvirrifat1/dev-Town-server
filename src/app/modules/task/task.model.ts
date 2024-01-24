import { Schema, model } from "mongoose";
import { ITask } from "./task.interface";

const cartItem = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Task = model<ITask>("task", cartItem);
