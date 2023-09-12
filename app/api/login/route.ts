const bcrypt = require('bcrypt');
import { getCollection } from '@/app/database/connect';
import { createJwt } from '@/app/database/user/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const collection = await getCollection('users');
    const foundUser = await collection.findOne({ email });
    if (!foundUser) throw new Error('User not found.');
    bcrypt.compareSync(password, foundUser.password);
    const passwordMatch = bcrypt.compareSync(password, foundUser.password);
    if (!passwordMatch) throw new Error('Wrong password.');
    const jwt = createJwt(foundUser._id.toString());
    cookies().set('jwt', jwt);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

// export const dynamic = 'force-dynamic';
