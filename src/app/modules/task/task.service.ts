import { ITask } from './task.interface';
import { Task } from './task.model';

const interIntoDb = async (payload: ITask): Promise<ITask> => {
  //   const res = await Task.findOne({
  //     title: payload.title,
  //   });
  //   if (res) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'already add to cart');
  //   }
  const result = await Task.create(payload);
  return result;
};

const getAllData = async (payload: ITask): Promise<ITask[]> => {
  const result = await Task.find({ email: payload.email });

  return result;
};

// const getSingleData = async (id: string): Promise<ICart | null> => {
//   const result = await Cart.findById(id);
//   return result;
// };

const deleteData = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

// const updatedData = async (
//   id: string,
//   payload: ICart
// ): Promise<ICart | null> => {
//   const result = await Cart.findByIdAndUpdate(id, payload);
//   return result;
// };

// const updated = async (id: string, payload: ICart): Promise<ICart | null> => {
//   const result = await Cart.findByIdAndUpdate(id, payload);
//   return result;
// };

export const TaskService = {
  interIntoDb,
  getAllData,
  deleteData,
};
