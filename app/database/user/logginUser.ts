'use server';
const bcrypt = require('bcrypt');
import { getCollection } from '../connect';
import { cookies } from 'next/headers';
import { createJwt } from './jwt';

export const logginUser = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  const collection = await getCollection('users');
  const foundUser = await collection.findOne({ email });
  if (!foundUser) throw new Error('User not found.');
  bcrypt.compareSync(password, foundUser.password);
  const passwordMatch = bcrypt.compareSync(password, foundUser.password);
  if (!passwordMatch) throw new Error('Wrong password.');
  const jwt = createJwt(foundUser._id.toString());
  cookies().set('jwt', jwt);
};
