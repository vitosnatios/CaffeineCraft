'use server';
const bcrypt = require('bcrypt');
import { getCollection } from '../connect';
import { cookies } from 'next/headers';
import { createJwt } from './jwt';

export const logginUser = async (email: string, password: string) => {
  const collection = await getCollection('users');
  const foundUser = await collection.findOne({ email });
  if (!foundUser) return { message: 'User not found.' };
  bcrypt.compareSync(password, foundUser.password);
  const passwordMatch = bcrypt.compareSync(password, foundUser.password);
  if (!passwordMatch) return { message: 'Wrong password.' };
  const jwt = createJwt(foundUser._id.toString());
  cookies().set('jwt', jwt);
};
