import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userItem = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser>('user', userItem);
