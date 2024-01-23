import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TaskService } from './task.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const menuItems = req.body;

  const result = await TaskService.interIntoDb(menuItems);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'task created successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email as string;
  if (!email) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Email is required',
    });
    return;
  }

  const result = await TaskService.getAllData({ email });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart fetched successfully',
    data: result,
  });
});

export const TaskController = {
  insertIntoDb,
  getAllData,
};
