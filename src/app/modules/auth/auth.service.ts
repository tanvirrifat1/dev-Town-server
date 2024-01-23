import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { User } from '../user/user.model';
import { ISignInData } from './auth.interface';

const signInUser = async (payload: ISignInData) => {
  const { email } = payload;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  }

  // Compare the provided password with the stored hashed password
  //   const isPasswordMatch = name === user.name;

  //   if (!isPasswordMatch) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'user does not matched');
  //   }

  const accessToken = jwtHelpers.createToken(
    { userEmail: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  return { accessToken };
};

export const AuthService = {
  signInUser,
};
