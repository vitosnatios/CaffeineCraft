import { cookies } from 'next/headers';
import { getCollection } from '../connect';
import { ObjectId } from 'mongodb';

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

export const getUserByJwt = async () => {
  const nextCookies = cookies();
  const tokenFromCookie = nextCookies.get('jwt');
  if (!tokenFromCookie) return false;
  const decoded = await jwt.verify(
    JSON.parse(tokenFromCookie.value),
    jwtSecret
  );
  if (!decoded) return false;
  const { id: userId } = decoded.data;
  const usersCollection = await getCollection('users');
  const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
  delete user.password;
  delete user._id;
  return user;
};
