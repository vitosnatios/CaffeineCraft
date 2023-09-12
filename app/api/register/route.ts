const bcrypt = require('bcrypt');
import { getCollection } from '@/app/database/connect';
import { createJwt } from '@/app/database/user/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const hashPassword = (password: FormDataEntryValue | null) => {
  const saltRounds = process.env.SALT!;
  const salt = bcrypt.genSaltSync(parseInt(saltRounds));
  const hashedPass = bcrypt.hashSync(password, salt);
  return hashedPass;
};

export async function POST(request: Request) {
  try {
    const { form } = await request.json();
    const { name, age, email, password: rawPassword } = form;
    if (!name || !age || !email || !rawPassword) {
      throw new Error('Some inputs are missing.');
    }
    const inputMissing =
      !name.length ||
      !age.length ||
      !email.length ||
      !rawPassword.length ||
      String(name).trim() === '' ||
      String(age).trim() === '' ||
      String(email).trim() === '' ||
      String(rawPassword).trim() === '';

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
      const jwt = createJwt(String(insert.insertedId));
      cookies().set('jwt', jwt);
      return NextResponse.json({ success: true });
    }
    throw new Error('Failed creating new user.');
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

// export const dynamic = 'force-dynamic';
