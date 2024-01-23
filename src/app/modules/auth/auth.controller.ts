import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

import httpStatus from 'http-status';
import { AuthService } from './auth.service';

const SignInUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signInUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user Login successfully',
    data: result.accessToken,
  });
});

export const AuthController = { SignInUser };
