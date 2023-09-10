'use server';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

import { getCollection } from './connect';

export type RegisterForm = {
  name: string;
  age: string;
  email: string;
  password: string;
};

const hashPassword = (password: string) => {
  const saltRounds = process.env.SALT!;
  const salt = bcrypt.genSaltSync(parseInt(saltRounds));
  const hashedPass = bcrypt.hashSync(password, salt);
  return hashedPass;
};

export const registerUser = async (form: RegisterForm) => {
  const { name, age, email, password: rawPassword } = form;
  const inputMissing =
    !name.length ||
    !age.length ||
    !email.length ||
    !rawPassword.length ||
    name.trim() === '' ||
    age.trim() === '' ||
    email.trim() === '' ||
    rawPassword.trim() === '';
  try {
    if (inputMissing) {
      throw new Error('Some inputs are missing.');
    }
    const collection = await getCollection('users');
    const alreadyRegistered = await collection.findOne({ email });
    if (alreadyRegistered) {
      throw new Error('Email ' + email + ' already registered.');
    }
    const password = hashPassword(rawPassword);
    const user = {
      name,
      age,
      email,
      password,
      history: [],
    };
    const insert = await collection!.insertOne({ ...user });
    if (insert) {
      //criar jwt e logar o kra socando o jwt no cache
    }
  } catch (error) {
    console.log(error);
  }
};
