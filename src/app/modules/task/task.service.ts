import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { ITask } from "./task.interface";
import { Task } from "./task.model";

const interIntoDb = async (payload: ITask): Promise<ITask> => {
  const isBooked = await Task.findOne({
    date: payload.date,
  });

  if (isBooked) {
    throw new ApiError(httpStatus.BAD_REQUEST, "already add to cart");
  }
  const result = await Task.create(payload);
  return result;
};

const getAllData = async (payload: ITask): Promise<ITask[]> => {
  const result = await Task.find({ email: payload.email });

  return result;
};

const deleteData = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

const updatedData = async (
  id: string,
  payload: ITask
): Promise<ITask | null> => {
  const result = await Task.findByIdAndUpdate(id, payload);
  return result;
};

export const TaskService = {
  interIntoDb,
  getAllData,
  deleteData,
  updatedData,
};
